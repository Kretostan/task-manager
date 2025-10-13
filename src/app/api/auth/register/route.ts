import {NextRequest, NextResponse} from "next/server";
import {connectDB} from "@/lib/database";
import {RegisterRequestBody} from "@/types/backend";
import {User} from "@/models/user";

export const POST = async (req: NextRequest) => {
  try {
    const { name, email, password, confirmPassword, agreeTerms }: RegisterRequestBody = await req.json();
    await connectDB();

    const isUser = await User.findOne({ email: email });
    if (isUser) {
      return NextResponse.json({ success: false, error: "User with this email already exists" }, { status: 400 });
    } else if (password !== confirmPassword) {
      return NextResponse.json({ success: false, error: "Passwords do not match" }, { status: 400 });
    } else if (!agreeTerms || !email) {
      return NextResponse.json({ success: false, error: "Some fields are missing" }, { status: 400 });
    }

    await new User({ name, email, password, provider: "local", tasks: [], stats: { total: 0, completed: 0, inProgress: 0, rate: 0 } }).save();
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.log("Error while registering user: ", error);
    return NextResponse.json({ error: "Error while registering user" }, { status: 500 });
  }
};

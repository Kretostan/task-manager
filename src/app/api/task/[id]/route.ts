import {NextRequest, NextResponse} from "next/server";
import {Task} from "@/models/task";
import {connectDB} from "@/lib/database";
import {User} from "@/models/user";

export const POST = async (req: NextRequest, context: { params: Promise<{ id: string }> }) => {
  try {
    await connectDB();
    const { id } = await context.params;

    const user = await User.findOne({ tasks: { $in: id } });
    if (!user) return NextResponse.json({ error: "No user found" });
    user.stats.completed++;
    user.stats.inProgress--;
    user.stats.rate = user.stats.completed * 100 / user.stats.total;
    user.save();
    await Task.findByIdAndDelete(id);

    return NextResponse.json({ success: true, message: "Task completed" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
};

export const DELETE = async (req: NextRequest, context: { params: Promise<{ id: string }> }) => {
  try {
    await connectDB();
    const { id } = await context.params;
    await Task.findByIdAndDelete(id).exec();
    return NextResponse.json({ success: true, message: 'Task deleted!' });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};

// export const UPDATE = async (req: NextRequest, { params }: IParams) => {
//   const { id } = params;
//
//   return ;
// }

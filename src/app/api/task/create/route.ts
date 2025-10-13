import {NextRequest, NextResponse} from "next/server";
import {User} from "@/models/user";
import {Task} from "@/models/task";
import {connectDB} from "@/lib/database";

export const POST = async (req: NextRequest) => {
  try {
    await connectDB();
    const { title, description, priority, dueDate, dueTime, email } = await req.json();

    if (!title || !description) return NextResponse.json({ error: "Fill out title and description" }, { status: 400 });

    const user = await User.findOne({ email });
    if (!user) return NextResponse.json({ error: "No user found" });

    const task = new Task({title, description, priority, dueTime, dueDate, user: user._id });
    await task.save();
    user.tasks.push(task._id);
    if (!user.stats) {
      user.stats = { total: 1, completed: 0, inProgress: 1, rate: 0}
    } else {
      let progressRate = 0;
      if (user.stats.total !== 0) progressRate = user.stats.completed * 100 / user.stats.total;
      user.stats = {...user.stats, total: (user.stats.total || 0) + 1, inProgress: (user.stats.inProgress || 0) + 1, rate: progressRate };
    }
    await user.save();

    return NextResponse.json({ success: true, error: "Task created successfully" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
};

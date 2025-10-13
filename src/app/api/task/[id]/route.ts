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
    user.stats.rate = (user.stats.completed * 100 / user.stats.total).toFixed(0);
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
    const user = await User.findOne({ tasks: { $in: id } });

    user.stats.total--;
    user.stats.inProgress--;
    if (user.stats.total !== 0) {
      user.stats.rate = user.stats.completed * 100 / user.stats.total;
    } else {
      user.stats.rate = 0;
    }
    await user.save();

    await Task.findByIdAndDelete(id).exec();
    return NextResponse.json({ success: true, message: 'Task deleted!' });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};

export const PATCH = async (req: NextRequest, context: { params: Promise<{ id: string }>}) => {
  try {
    const { title, description, dueDate, dueTime, priority } = await req.json();
    const { id } = await context.params;
    await connectDB();

    const user = await User.findOne({ tasks: { $in: id } }).exec();
    if (!user) return NextResponse.json({ error: "No user found" });
    await Task.findByIdAndUpdate(id, { title, description, dueDate, dueTime, priority }).exec();

    return NextResponse.json({ success: true, message: "Task updated" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
};

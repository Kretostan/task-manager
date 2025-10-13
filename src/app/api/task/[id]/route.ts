import {NextRequest, NextResponse} from "next/server";
import {Task} from "@/models/task";

export const DELETE = async (req: NextRequest, context: { params: Promise<{ id: string }> }) => {
  try {
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

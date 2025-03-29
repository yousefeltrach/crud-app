

import { NextResponse } from "next/server";
import connectMongodb from "../../libs/mongodb";
import Topic from "../../models/topic";




// export async function POST(request) {
//   const { title, description } =await request.json();
//   await connectMongodb();
//   await Topic.create({title, description});
//   return NextResponse.json({message:"Topic Created"},{status:201})
// }

export async function POST(request) {
  try {
    const { title, description } = await request.json();

    // Validate input
    if (!title || !description) {
      return NextResponse.json({ error: "Title and description are required" }, { status: 400 });
    }

    await connectMongodb();
    await Topic.create({ title, description });

    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
  }
}
import {NextResponse} from "next/server";
import { addPost, getPosts } from "../../../../lib/data";
export const GET = async (req: Request , res: Response) => {
  try {
    const posts = getPosts();
    return NextResponse.json({message: "Posts fetched successfully", posts}, {status: 200});

  } catch (err) {
    return NextResponse.json({message: "Error fetching posts", err}.err , {status: 500});
  }
};

export const POST = async (req: Request) => {
    const {title, desc} = await req.json();
    try {
        const post = { title, desc, date: new Date().toISOString(), id: Date.now().toString()};
        addPost(post);
        return NextResponse.json({message: "Post created successfully", post}, {status: 201});
    } catch (err) {
        return NextResponse.json({message: "Error creating post", err}.err , {status: 500});
    }
    

}
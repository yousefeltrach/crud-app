import { NextResponse } from "next/server";
import { deletePost, updatePost } from "../../../../../lib/data";

export const GET = async (req: Request ) => {
    try{
        const id = req.url.split("blogs/")[1];
        console.log(id);

    const post = getById(id);

    if (!post){
        return NextResponse.json({message: "Post not found"}, {status: 404});
    }
    return NextResponse.json({message: "Post fetched successfully", post}, {status: 200});
    } catch (err) {
        return NextResponse.json({message: "Error fetching post", err}.err , {status: 500});
    }
   
  };

  export const PUT = async (req: Request ) => {
    try{
        const {title, des} = await req.json();
        const id = req.url.split("blogs/")[1];
        updatePost(id, title, des);
        return NextResponse.json({message: "Post updated successfully"}, {status: 200});

    }catch (err) {
        return NextResponse.json({message: "Error updating post", err}, {status: 500});
    }
  };

  export const DELETE = async (req: Request ) => {
    try{
       
        const id = req.url.split("blogs/")[1];
        deletePost(id);
        return NextResponse.json({message: "ok"}, {status: 200});

    }catch (err) {
        return NextResponse.json({message: "Error", err}, {status: 500});
    }
  };
  
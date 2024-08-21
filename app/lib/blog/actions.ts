"use server"
import { string, z } from "zod";
import { blogPosts } from "@/app/ui/blog/post";
import { post } from "./definitions";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


// type state = {
//     error?.{
//         postTitle?.string[]
//     }
// }

const formSchema = z.object({
    date: z.string(),
    postTitle: z.string(),
    postContent: z.string()
})
const postItem = formSchema.omit({date:true})

export async function PostItem(formData:FormData) {


   const postTitle = formData.get("postTitle");
   const postContent = formData.get("postContent");
    const date = new Date().getTime();

   if(postTitle && postContent ) {
       const aPost = {postTitle : postTitle.toString(), postContent:postContent.toString(), date: date.toString()}
       blogPosts.push(aPost);
   }
   else {
    console.error("post title or content is missing")
   }
   revalidatePath("/blog");
   redirect("/blog");

}
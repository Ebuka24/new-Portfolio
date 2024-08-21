import {post} from "@/app/lib/blog/definitions";


interface blogpost{
    date:string;
    postTitle:string ;
    postContent:string
}

export const blogPosts: blogpost[] = [];

// export function blogPosts(): blogpost[] {
//    return(
//     []
//    )
// }

export default function Post() {
    
    return (
        <>
        {
            blogPosts?.map((blogpost)=> (
                <div className="py-2" key={blogpost.date}>
                    <h2 className="text-2xl text-green-400">{blogpost.postTitle}</h2>
                    <p> {blogpost.postContent}</p>
                </div>
            ))
        }  
          
        </>
    )
}


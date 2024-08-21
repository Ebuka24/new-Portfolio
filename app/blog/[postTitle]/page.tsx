


import Breadcrumbs from "@/app/ui/blog/Breadcrumbs";
import { blogPosts } from "@/app/ui/blog/post";
import { notFound } from "next/navigation";

export default function page() {


         //const blogpost = blogPosts(postTitle);
   const title =  blogPosts.map((blogpost)=> (blogpost.postTitle));
   const content = blogPosts.map((blogpost) => (blogpost.postContent));

   if(!title) {
    return notFound();
   }

    
  return (
    <div className="mx-16">
        
        <Breadcrumbs 
          breadcrumbs={[
                {label:"Home", href:"/blog"},

                {
                    label:`${title}`, 
                    href: `/blog/${title}`,
                    active:true,
              },
            ]}
        />

          {
              blogPosts?.map((blogpost) => (
                  <div className="py-2" key={blogpost.date}>
                      <h2 className="text-2xl text-green-400">{blogpost.postTitle}</h2>
                      <p> {blogpost.postContent}</p>
                  </div>
              ))
          }  
        
    </div>
  )
}

// const postTitle = blogPosts.map((blogPost) => (
//     blogPost.postTitle
// ))
import Post from "../ui/blog/post"

export default function page() {
  return (
    
    
          <section className="px-36" title="blog homePage">
            <div className="mb-6"> 
                <h1 className="text-4xl">Home</h1>
                <p className="leading-loose"> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                  pariatur?"</p>
            </div>
            <div className="my-4"> 
             <Post />
               
            </div>
           
          </section>
        
       
   
  )
}


import { PostItem } from "@/app/lib/blog/actions";

export function Form() {
  return (
    <div className=''>
        <form  className='px-32 py-6 justify-self-center mx-2 w-2/3 ' action={PostItem}> 

            
            <h2 className='text-4xl'> Compose </h2>
            <label className='block'>Title</label>
              <input id="postTitle" name="postTitle" className=" rounded-md px-2 py-2" type='text' size={103}/>

            <label className='block'>Post</label>
              <textarea id="postContent" name="postContent" className=" rounded-md px-2 " typeof='text' rows={5} cols={106}/>

            <button type="submit" className='bg-blue-600 p-3 px-6 rounded-md text-white'>Publish</button>
        </form>
    </div>
  )
}


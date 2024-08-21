import Link from "next/link";

function Header() {
  return (
    <div>

        <nav className="flex w-full h-fit bg-gray-300 py-9 my-6 border-b-4"> 
              <h1 className=" text-2xl text-gray-600 ml-36"> Daily journal </h1>
            <ul className="flex place-self-end  ml-72 "> 
              <Link href={"/blog"} className="hover:font-semibold"> <li className="text-gray-600 mx-12 text-xl ml-36"> Home</li> </Link>
              <Link href={"/blog/about%20us"} className="hover:font-semibold"> <li className="text-gray-600 mx-12 text-xl"> About us </li>  </Link>  
              <Link href={"/blog/contact"} className="hover:font-semibold"> <li className="text-gray-600 mx-12 text-xl"> Contact </li> </Link> 
            </ul>
        </nav>
    </div>
  )
}

export default Header;
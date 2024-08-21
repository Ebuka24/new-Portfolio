
"use client"
import React from "react";
import { Emojis } from "../../ui/emojipedia/emoji";

function Card() {
  return (
    <> 
    {Emojis.map((emoji)=> (

      <div key={emoji.id} className="bg-white my-4 mx-6 p-9 w-1/3">
        <dt>
          <span className="block text-center text-2xl"> {emoji.emoji}      </span>
          <span className="block text-center text-2xl text-green-500"> {emoji.name} </span>
        </dt>

        <dd className="text-sm"> {emoji.meaning} </dd>
      </div>
    ))}
      
    
    </>
             


          
  )
}

export default Card;
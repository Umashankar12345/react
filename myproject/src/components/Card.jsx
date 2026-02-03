import React from 'react'

function card({username}) {
    console.log(username);
  return (
      <>
      <div class="flex flex-col items-center gap-6  p - 7 rounded- 2xl">
        <div>
            <img class="size-52 shadow-2xl rounded-3xl" src="./image.png" alt="" />
        </div>
        </div>     
        
      </>   
  )
}

export default card

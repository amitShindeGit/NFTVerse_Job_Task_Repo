import React from "react";

const Card = ({img, text, started}) => {
  return (
    <>
    <div class="max-w-sm h-42 rounded overflow-hidden m-4">
      <div class="relative group hover:brightness-90 ">
        <img
          class="w-full max-h-36  "
          src={img}
          alt="Sunset in the mountains"
        />
        <h3 class={`absolute text-2xl text-white rounded-3xl ${started > 5 ?" bg-blue-500 ": "bg-green-500"} px-3 text-[.8rem] font-[700] top-2 left-2 hidden group-hover:block `}>{started > 5? "Started": "Completed"}</h3>
        <div class="absolute top-2 right-3 hidden group-hover:flex">
        <a href='#'><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-2 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg></a>
        <a href='#'><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-2 text-zinc-900" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd" />
        </svg></a>
        <a href='#'><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-2 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg></a>
        </div>
      </div>

      <div class="px-6 py-2 bg-white ">
        <p class="text-gray-700 text-base h-16">
          {text}
        </p>
      </div>
    </div>
    </>
  );
};

export default Card;

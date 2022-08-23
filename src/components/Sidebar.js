import React, { useState } from "react";
import { ListItem } from "../UI/ListItem";
import mount1 from '../Assets/images/mount1.jpg'
import mount2 from '../Assets/images/mount2.jpg'
import tech from '../Assets/images/tech.jpg'
import run from '../Assets/images/run.jpg'
import profile from '../Assets/images/profile.jpg'
import ContactIcons from "../UI/ContactIcons";

export const Sidebar = ({isOpen, menuHandler}) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSubPersnlMenuOpen, setIsSubPersnlMenuOpen] = useState(false);


  const SubMenuOpenHandler = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  }

  const setPersnlMenuOpenHandler = () => {
    setIsSubPersnlMenuOpen(!isSubPersnlMenuOpen);
  }

  return (

      <div class={` ${isOpen ? "w-72" : "w-20"} overflow-hidden fixed top-0 py-4 m-2 h-full  bg-gray-50 rounded duration-300 font-[400]`}>
        <div class=" after:content-[''] after:absolute after:w-full after:border-b-4 after:-bottom-4 relative">
          <a href="#" class={`${isOpen && "px-4"} flex items-center mb-5 `}>
            {isOpen && (
             
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 transition duration-75 dark:text-gray-900 group-hover:text-gray-900 " viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd" />
                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
            </svg>
            )}
            {isOpen && (
              <span class="self-center flex-1 text-[1.2rem]  whitespace-nowrap text-gray-800 ">
                SmartUp
              </span>
            )}
            <span class="inline-flex  px-2 ml-3 text-sm font-medium text-gray-800  rounded-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class={`${!isOpen && "rotate-90"} duration-500 h-6 w-6`}
                viewBox="0 0 20 20"
                fill="currentColor"
                onClick={menuHandler}
              >
                  <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd" />

              </svg>
            </span>
          </a>
        </div>
        <ul class="space-y-2">
        <div class=" after:content-[''] after:absolute after:w-full after:border-b-2 after:-bottom-2 relative">
        <ListItem
            isOpen={isOpen}
            isProfile={true}
            hasNotification={false}
            text={"Profile"}
            img={<img
                src={profile}
                class={`${isOpen ? "h-5 w-5" : "h-8 w-8"} rounded-3xl duration-300`}
                alt="Image"
              />}

          />
          </div>
          <ListItem
            isOpen={isOpen}
            hasNotification={true}
            text={"Discover"}
            svg={
                <svg xmlns="http://www.w3.org/2000/svg" class={`${isOpen ? "h-5 w-5" : "h-8 w-8"} text-gray-500 transition duration-300 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
            }
          />
          <ListItem
            isOpen={isOpen}
            hasNotification={false}
            text={"Smartup"}
            svg={
                <svg xmlns="http://www.w3.org/2000/svg" class={`${isOpen ? "h-5 w-5" : "h-8 w-8"} text-gray-500 transition duration-300 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            }
          />

        <ListItem
            isOpen={isOpen}
            hasNotification={false}
            text={"Main Community"}
            img={<img
                src={mount1}
                class={`${isOpen ? "h-5 w-5" : "h-8 w-8"} rounded-3xl duration-300`}
                alt="Image"
              />}

          />

        <ListItem
            isOpen={isOpen}
            hasNotification={false}
            text={"Run Community"}
            img={<img
                src={run}
                class={`${isOpen ? "h-5 w-5" : "h-8 w-8"} rounded-3xl duration-300`}
                alt="Image"
              />}

          />

        <ListItem
            isOpen={isOpen}
            hasNotification={false}
            text={"Tech Community"}
            img={<img
                src={tech}
                class={`${isOpen ? "h-5 w-5" : "h-8 w-8"} rounded-3xl duration-300`}
                alt="Image"
              />}

          />

        <ListItem
            isOpen={isOpen}
            hasNotification={false}
            text={"Lead Community"}
            img={<img
                src={mount2}
                class={`${isOpen ? "h-5 w-5" : "h-8 w-8"} rounded-3xl duration-300`}
                alt="Image"
              />}

          />
<div class=" after:content-[''] after:absolute after:w-full after:border-b-2 after:-bottom-2 relative">
        <ListItem
            isOpen={isOpen}
            hasNotification={false}
            text={"Personal"}
            svg={
                <svg xmlns="http://www.w3.org/2000/svg" class={`${isOpen ? "h-5 w-5" : "h-8 w-8"} text-gray-500 transition duration-300 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white duration-300`}  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            }
            hasOptions={true}
            SubMenuOpenHandler={SubMenuOpenHandler}
            isSubMenuOpen={isSubMenuOpen}
          />
          </div>

        <ListItem
            isOpen={isOpen}
            hasNotification={false}
            text={"About Smartup"}
            svg={
                <svg xmlns="http://www.w3.org/2000/svg" class={`${isOpen ? "h-5 w-5" : "h-8 w-8"} text-gray-500 transition duration-300 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white duration-300`}  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            }
            hasOptions={true}
            setPersnlMenuOpenHandler={setPersnlMenuOpenHandler}
            isSubPersnlMenuOpen={isSubPersnlMenuOpen}
          />

         {isOpen && <ContactIcons />}
         <div class="text-center text-[.8rem] pt-2" >
         &#169; 2022 {isOpen && "Smartup pvt." }
         </div>
        </ul>
      </div>
  );
};

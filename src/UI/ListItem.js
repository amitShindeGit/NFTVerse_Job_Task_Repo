import React from "react";

export const ListItem = ({
  isOpen,
  hasNotification,
  text,
  svg,
  img,
  hasOptions,
  isSubMenuOpen,
  SubMenuOpenHandler,
  isSubPersnlMenuOpen,
  setPersnlMenuOpenHandler,
  isProfile
}) => {
  return (
    <>
      <li
        class={` px-3`}
        onClick={
          (SubMenuOpenHandler && SubMenuOpenHandler) ||
          (setPersnlMenuOpenHandler && setPersnlMenuOpenHandler)
        }
      >
        <a
          href="#"
          class="hover:before:content-[''] hover:before:absolute hover:before:bg-gray-900 hover:before:w-0.5 hover:before:-left-3 hover:before:top-0 hover:before:bottom-0 relative flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-gray-800 hover:hover:bg-sky-50 "
        >
          {svg && svg}
          {img && img}

          {isOpen && (
            <>
              <span class="flex-1 ml-3 whitespace-nowrap">{text}</span>
              {hasNotification && (
                <span class="inline-flex justify-center items-center px-3 ml-3 text-sm font-medium text-white text-[.8rem] bg-gray-200 rounded-full dark:bg-blue-600 ">
                  24 {/*can be dynamic*/}
                </span>
              )}
              {isProfile && (
                <div class="flex space-x-2">
                <p class="text-[.8rem]">12</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 p-2 rounded-3xl bg-orange-500 text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                </div>
              )}
            </>
          )}
        </a>
      </li>
      {hasOptions && isSubMenuOpen && isOpen && (
        <div class="ml-12 px-2 text-sm">
          <ul class="space-y-2 cursor-pointer">
            <li class="flex justify-between">
              <p>In Progress</p>
              <span class=" mr-4 text-sm font-medium text-gray-800 ">180</span>
            </li>
            <li class="flex justify-between">
              Completed
              <span class="mr-4 text-sm font-medium text-gray-800 ">48</span>
            </li>
            <li class="flex justify-between">
              Read Later
              <span class="mr-4 text-sm font-medium text-gray-800 ">24</span>
            </li>
          </ul>
        </div>
      )}

      {hasOptions && isSubPersnlMenuOpen && isOpen && (
        <div class="ml-12 px-2 text-sm">
          <ul class="space-y-2 cursor-pointer">
            <li class="flex justify-between">
              <p>Send Feedbak</p>
            </li>
            <li class="flex justify-between">Terms of use</li>
            <li class="flex justify-between">Privacy Policy</li>
          </ul>
        </div>
      )}
    </>
  );
};

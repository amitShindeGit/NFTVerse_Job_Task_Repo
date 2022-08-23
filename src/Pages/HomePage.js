import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { Sidebar } from "../components/Sidebar";
import FeedServices from "../Services/feeds-services";

export const HomePage = () => {
  const [isOpen, setIsopen] = useState(true);
  const [feeds, setFeeds] = useState([]);

  const menuHandler = () => {
    setIsopen(!isOpen);
  };


  useEffect(() => {
    FeedServices.fethFeeds()
      .then((res) => setFeeds(res.data.content))
      .catch((err) => console.log("Can't display feeds", err))
  },[]
  );



  return (
    <div class="flex">
      <Sidebar menuHandler={menuHandler} isOpen={isOpen} />
      <div class={`max-w-fit grid grid-cols-3 gap-2 px-4 ${isOpen ? "ml-72" : "ml-36"} duration-300 `}>
        {feeds && feeds.map((feed) => {
            let started = Math.floor(Math.random() * 10);
            return <Card started={started} img={feed.coverImageUrl} text={feed.title} key={feed.postId} />
        })}
      </div>
    </div>
  );
};

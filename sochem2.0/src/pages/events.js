import React from "react";
import Navbar from "@/components/navbar";
import SearchBar from "@/components/searchBar";
import EventsCard from "@/components/eventsCard";
import eventImg from "../../data/eventImg.json"; 

const events = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="bg-[#040D21] w-full">
        <p className="font-medium flex text-[#F7FAFF] justify-center text-2xl sm:text-3xl lg:text-5xl">
          <span className="mt-10">
            A Collection of <span className="text-[#2A6BFF]">Nostalgic</span>
            Events!
          </span>
        </p>
      </div>

      <SearchBar />

      <div className="flex flex-col items-center p-4 gap-8">
        {eventImg.eventImg.map((i) => (
          <EventsCard
            key={i.id}
            title={i.name}
            images={i.images}
            description={i.description} 
          />
        ))}
      </div>
    </div>
  );
};

export default events;

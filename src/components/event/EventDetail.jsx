import React from "react";

const EventDetail = ({ evt }) => {
  return (
    <div>
        <div>
            <img className="h-[75vh] w-full" src={evt.image} alt="" />
        </div>
        <div className="mt-4 space-y-4">
            <h2 className="text-3xl font-bold">{evt.title}</h2>
            <p>{evt.description}</p>
        </div>
    </div>
  );
};

export default EventDetail;

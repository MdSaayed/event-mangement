import React from "react";

const EventDetail = ({ evt }) => {
  return (
    <div>
      <div>
        <div>
          <img className="h-[40vh] md:h-[45vh] lg:h-[75vh] w-full" src={evt.image} alt="" />
        </div>
        <div className="grid grid-cols-1 md:lg:grid-cols-4 lg:grid-cols-4 gap-0 md:gap-0 lg:gap-4  px-2 lg:px-0">
          <div className="col-span-3">
            <div className="mt-4 space-y-4">
              <h2 className="text-3xl font-bold">{evt.title}</h2>
              <p>{evt.description}</p>
            </div>
            <div className="my-10">
              <h2 className="text-2xl font-bold mb-4">Event Details</h2>
              <table className="w-full border-collapse border">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-2">START</th>
                    <th className="border p-2">END</th>
                    <th className="border p-2">COST</th>
                    <th className="border p-2">CATEGORY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="border p-2">{evt.start}</td>
                    <td className="border p-2">{evt.end}</td>
                    <td className="border p-2">{evt.cost}</td>
                    <td className="border p-2">{evt.category}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="border mt-8 p-4">
            <div className="space-y-2">
              <h2 className="text-[1rem]"><span className="font-bold uppercase">Performers:</span> {evt?.performers}</h2>
              <h2 className="text-[1rem]"><span className="font-bold uppercase">Agenda:</span> {evt?.agenda}</h2>
              <p className="text-[1rem]"><span className="font-bold uppercase">Duration:</span> {evt?.duration}</p>
              <p className="text-[1rem]"><span className="font-bold uppercase">Special features:</span> {evt?.specialfeatures}</p>
            </div>
            <div className="mt-4">
              <h2 className="text-[1rem] uppercase font-bold my-2">Contact Info:</h2>
              <table className="w-full border-collapse border">
                <tr className="bg-gray-100">
                  <td className="border p-2 w-1/4"><span className="font-bold">Organization name</span></td>
                  <td className="border p-2">{evt?.contactinfo?.organizationname}</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border p-2 w-1/4"><span className="font-bold">Phone</span></td>
                  <td className="border p-2">{evt?.contactinfo?.phone}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;

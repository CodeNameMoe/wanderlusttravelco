import React from "react";

function Rooms() {
  return (
    <div className="max-w-[1400px] h-[500px] bg-green-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold">Not Your Average Hotel Room</h3>
        <p className="pt-4">
          We believe that your accommodation should be just as adventurous as
          the rest of your trip. Whether you're looking for a romantic getaway
          or an adventure with friends and family, we have something to suit
          every taste and budget. So come and see what we have to offer, and
          experience a vacation that's truly out of the ordinary!
        </p>
      </div>
      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img
          className="object-cover w-full h-full"
          src="https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full"
          src="https://images.pexels.com/photos/3018035/pexels-photo-3018035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
        <img
          className="object-cover w-full h-full"
          src="https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
    </div>
  );
}

export default Rooms;

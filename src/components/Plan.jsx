import React from "react";

function Plan() {
  return (
    <div className="max-w-[1400px] n-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* left */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="destination"
        />
        <img
          className="row-span-2  object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/1534057/pexels-photo-1534057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="destination"
        />
        <img
          className=" row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/4254553/pexels-photo-4254553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="destination"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/1457812/pexels-photo-1457812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="destination"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="destination"
        />
      </div>
      {/* right */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">
          Plan Your Next Adventure
        </h3>
        <p className="text-2xl py-6">
          Embark on a new adventure, plan your next break now and push yourself
          out of your comfort zone with exciting destinations and activities
          that will thrill your senses.
        </p>
        <p className="pb-6">
          At WanderlustTravelCo, we offer a wide range of adventure travel
          packages that will take you to some of the most exciting and
          off-the-beaten-path destinations around the world.
        </p>
        <button className="border-black mr-4 hover:shadow-xl mb-4 w-[15rem]">
          Learn More
        </button>
        <button className="bg-black text-white border-black hover:shadow-xl w-[15rem]">
          Book Your Trip
        </button>
      </div>
    </div>
  );
}

export default Plan;

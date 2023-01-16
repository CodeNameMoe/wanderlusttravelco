import { React, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Slider() {
  const slides = [
    {
      url: "https://images.pexels.com/photos/6401668/pexels-photo-6401668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Rustic",
    },
    {
      url: "https://images.pexels.com/photos/858496/pexels-photo-858496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Sushi",
    },
    {
      url: "https://images.pexels.com/photos/65171/pexels-photo-65171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "chilli",
    },
    {
      url: "https://images.pexels.com/photos/12688929/pexels-photo-12688929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "lamb",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  function previousSlide() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function nextSlide() {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      {/* left arrow */}
      <div className="absolute top-[50%] -translate-x-0 traslate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft size={30} onClick={previousSlide} />
      </div>
      {/* right arrow */}
      <div className="absolute top-[50%] -translate-x-0 traslate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white  cursor-pointer">
        <BsChevronCompactRight size={30} onClick={nextSlide} />
      </div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            className="text-2xl cursor-pointer"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;

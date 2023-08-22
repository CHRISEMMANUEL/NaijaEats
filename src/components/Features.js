import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";
const Features = () => {
  const sliders = [
    {
      url: "https://i.ibb.co/vhDRk7w/Amala.jpg",
    },
    {
      url: "https://i.ibb.co/kyh6Qph/eba.jpg",
    },
    {
      url: "https://i.ibb.co/r0YdnFC/Fufu.jpg",
    },
    {
      url: "https://i.ibb.co/sHvjG3b/eguci.jpg",
    },

    // https://i.ibb.co/zHnkHdV/fufu1.jpg

    // https://i.ibb.co/Gnx4yxh/semo2.jpg
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlider = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlider = () => {
    const isLastSlide = currentIndex === sliders.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const moveToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="max-w-[1520px] h-[500px] w-full py-4 px-4 relative group">
      <div
        className=" w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-green-700 text-white cursor-pointer">
        <IoIosArrowBack onClick={prevSlider} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-green-700 text-white cursor-pointer">
        <IoIosArrowForward onClick={nextSlider} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {sliders.map((sliderItems, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => moveToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

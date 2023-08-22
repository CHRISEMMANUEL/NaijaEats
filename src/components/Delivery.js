import React from "react";

const Delivery = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h2 className="text-green-500 font-bold text-2xl text-center">
        Quick Delivery
      </h2>
      <div className="w-[1230px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[550px] mx-auto my-4"
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
          alt={""}
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold"> Get The App</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Limitless and convenience on-demand
          </h1>
          <p>
            {" "}
            "Streamlined Food Ordering at Your Fingertips: Discover the Ease and
            Variety with Our App! Satisfy your cravings effortlessly using our
            user-friendly food ordering app. Navigate through a wide array of
            delectable options with ease, placing your order in just a few taps.
            Embrace the simplicity of a clutter-free interface designed to make
            your food ordering experience concise and delightful. Download now
            to relish a limitless selection of culinary delights, all in the
            palm of your hand."
          </p>
          <button className="bg-black text-[#00ddfa] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;

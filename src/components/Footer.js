import React from "react";
import {
  FaInstagram,
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]">
      <div className="py-16 px-4 grid lg:grid-cols-2 gap-8 text-gray-300">
        <div>
          <h1 className="w-full text-3xl font-bold text-green-500">
            NaijaEats
          </h1>
          <p>
            "Naija Eats: Your Gateway to Nigerian Cuisine! Experience the
            vibrant flavors of Nigeria through Naija Eats, the ultimate food
            ordering app. Discover a world of delicious Nigerian dishes, from
            jollof rice to suya, all conveniently available at your fingertips.
            With our app, ordering your favorite Naija meals becomes a breeze –
            just a few clicks and you're on your way to a flavorful feast.
            Embrace the taste of Nigeria with Naija Eats!"
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaGithubSquare size={30} />
            <FaTwitterSquare size={30} />
            <FaInstagram size={30} />

            <FaFacebookSquare size={30} />
          </div>
        </div>
        <div className="lg:cols-span-2 flex justify-between mt-6 ">
          <div>
            <h6 className="font-medieum text-green-400">Location</h6>
            <ul>
              <li className="py-2 text-sm">Abuja</li>
              <li className="py-2 text-sm">Warri</li>
              <li className="py-2 text-sm">Lagos</li>
              <li className="py-2 text-sm">Ghana</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medieum text-green-400">Location</h6>
            <ul>
              <li className="py-2 text-sm">Abuja</li>
              <li className="py-2 text-sm">Warri</li>
              <li className="py-2 text-sm">Lagos</li>
              <li className="py-2 text-sm">Ghana</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medieum text-green-400">Location</h6>
            <ul>
              <li className="py-2 text-sm">Abuja</li>
              <li className="py-2 text-sm">Warri</li>
              <li className="py-2 text-sm">Lagos</li>
              <li className="py-2 text-sm">Ghana</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medieum text-green-400">Location</h6>
            <ul>
              <li className="py-2 text-sm">Abuja</li>
              <li className="py-2 text-sm">Warri</li>
              <li className="py-2 text-sm">Lagos</li>
              <li className="py-2 text-sm">Ghana</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

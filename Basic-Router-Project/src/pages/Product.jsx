import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 shadow">
      <h1 className="text-xl text-black font-semibold">
        This is my New Product
      </h1>

      <div className="flex gap-6">
        <Link
          to="/product/men"
          className="text-lg text-gray-700 hover:text-blue-600 transition"
        >
          Men
        </Link>

        <Link
          to="/product/women"
          className="text-lg text-gray-700 hover:text-blue-600 transition"
        >
          Women
        </Link>
        <Link
          to="/product/kids"
          className="text-lg text-gray-700 hover:text-blue-600 transition"
        >
          Kids
        </Link>
      </div>
      <Outlet/>
    </div>
  );
};

export default Product;

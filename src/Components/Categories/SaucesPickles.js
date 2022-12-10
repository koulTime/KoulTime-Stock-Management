import React from "react";
import CategorieItems from "./CategorieItems";

const content = [
  {
    title: "Ketchup",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FDfdJBnSP%2FLife-Tomato-Ketchup-330-Gm.jpg&w=256&q=75",
    count: "",
  },
  {
    title: "Soya Sauce",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FSx5JJKPk%2FLife-Soya-Sauce-Light-210ml.jpg&w=256&q=75",
    count: "",
  },
  {
    title: "Apple Cider Vinegar",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FFFc45V39%2FHeinz-Apple-Cider-Vinegar-473ml-US.jpg&w=256&q=75",
    count: "",
  },
  {
    title: "Garlic Pickle",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FnhnZ19sn%2FAhmed-Garlic-Pickle-400g.jpg&w=256&q=75",
    count: "",
  },
];
const SaucesPickles = () => {
  return (
    <>
      <CategorieItems content={content} />
    </>
  );
};

export default SaucesPickles;

import React from "react";
import CategorieItems from "./CategorieItems";

const content = [
  {
    title: "Robinsons Pink Lemonade",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FJ4R7f5nc%2FRobinsons-Pink-Lemonade-Juice-Drink-10-fl-oz.jpg&w=256&q=75",
    count: "5",
  },
  {
    title: "BING Energy Drink",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FrprfCW57%2FBING-Beverage-Made-with-Blackberry-Juice-12-fl-oz.jpg&w=256&q=75",
    count: "40",
  },
  {
    title: "Monster Energy Drink",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FRCRXRvnC%2FMonster-Energy-Rehab-Orangeade-15-5-fl-oz.jpg&w=256&q=75",
    count: "80",
  },
  {
    title: "Hood Orange Juice",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FWzwNDh9k%2FHood-Orange-Juice-14-fl-oz.jpg&w=256&q=75",
    count: "60",
  },
  {
    title: "Alhambra Purified Water",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FP5QXCNqH%2FAlhambra-Purified-Water-1-Lt.jpg&w=256&q=75",
    count: "90",
  },
];
const Drinks = () => {
  return (
    <>
      <CategorieItems content={content} />
    </>
  );
};

export default Drinks;

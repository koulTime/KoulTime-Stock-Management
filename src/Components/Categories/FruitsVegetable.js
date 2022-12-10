import React from "react";
import CategorieItems from "./CategorieItems";

const content = [
  {
    title: "Green Leaf Lettuce",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FZRynchJY%2FGreen-Leaf-Lettuce-each.jpg&w=256&q=75",
    count: "",
  },
  {
    title: "Rainbow Chard",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FZ5yQ47YB%2FRainbow-Chard-Package-per-lb.jpg&w=256&q=75",
    count: "",
  },
  {
    title: "Lettuce",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FGhRtkNVr%2FLettuce-1lb.jpg&w=256&q=75",
    count: "",
  },
  {
    title: "Parsley",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FwvzZWXpt%2FParsley-each.jpgg&w=256&q=75",
    count: "",
  },
  {
    title: "Organic Broccoli",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F3w03MCVn%2FOrganic-Broccoli-10oz.jpg&w=256&q=75",
    count: "",
  },
  {
    title: "Organic Pinkerton Avocado",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FDZdkFCgd%2FOrganic-Pinkerton-Avocado-each.jpg&w=256&q=75",
    count: "",
  },
  {
    title: "Organic Cherry Tomato",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQCJX48wD%2FOrange-Cherry-Tomato-5qt.jpg&w=256&q=75",
    count: "",
  },
  {
    title: "Baby Carrot",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FSNmQX9Yx%2FOrganic-Baby-Carrot-1oz.jpg&w=256&q=75",
    count: "",
  },
  {
    title: "Potatoes",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F0jnsGtK2%2FOld-Oak-Farm-Small-Potatoes-each.jpg&w=256&q=75",
    count: "",
  },
];
const FruitsVegetable = () => {
  return (
    <>
      <CategorieItems content={content} />
    </>
  );
};

export default FruitsVegetable;

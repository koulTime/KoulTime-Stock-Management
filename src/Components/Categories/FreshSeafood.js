import React from "react";
import CategorieItems from "./CategorieItems";

const content = [
  {
    title: "Wild King Salmon Steak",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F63Mm1Pw8%2FFresh-Wild-King-Salmon-Steak-1lb.jpg&w=256&q=75",
    count: "",
  },
  {
    title: "Peeled Deveined Shrimp",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FRhVzWfCH%2FCooked-Peeled-Deveined-Shrimp-2lb.jpg&w=256&q=75",
    count: "",
  },
  {
    title: "Canada Salmon",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F5tqG80Rq%2FFresh-Whole-Canada-Salmon-25-5-oz.jpg&w=256&q=75",
    count: "",
  },
  {
    title: "Chilean Sea Bass",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FxTjmhVRK%2FAhi-Tuna-Steaks-per-lb.jpg&w=256&q=75",
    count: "",
  },
];
const FreshSeafood = () => {
  return (
    <>
      <CategorieItems content={content} />
    </>
  );
};

export default FreshSeafood;

import React from "react";
import CategorieItems from "./CategorieItems";

const content = [
  {
    title: "ACI Pure Salt",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F8sBDTg2%2FACI-Pure-Salt-Jar-750gm.jpg&w=256&q=75",
    count: "10",
  },
  {
    title: "Fresh Flour",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FBVHFnLG%2FFresh-Atta-2-Kg.jpg&w=256&q=75",
    count: "10",
  },
  {
    title: "Fresh Soyabean Oil",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F0nzYNB8%2FFresh-Soyabean-Oil-5-Ltr.jpg&w=256&q=75",
    count: "5",
  },
  {
    title: "Fresh Chinigura Rice",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FWzWdTsx%2FFresh-Chinigura-Rice-1kg.jpg&w=256&q=75",
    count: "5",
  },
  {
    title: "Garlic Loose",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FD5tBhsz%2FGarlic-Roshun-Deshi-Loose-P-1-Kg.jpg&w=256&q=75",
    count: "1kg",
  },
];
const CookingEssentials = () => {
  return (
    <>
      <CategorieItems content={content} />
    </>
  );
};

export default CookingEssentials;

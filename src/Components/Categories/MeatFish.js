import React from "react";
import CategorieItems from "./CategorieItems";

const content = [
  {
    title: "Wild King Salmon Steak",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F63Mm1Pw8%2FFresh-Wild-King-Salmon-Steak-1lb.jpg&w=256&q=75",
    count: "",
  },
  {
    title: "Beef Stew",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FPx68pWzG%2FNiman-Ranch-Angus-Beef-Stew-Meat-per-lb.jpg&w=256&q=75",
    count: "",
  },
  {
    title: "Ground Turkey",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FLX418CPB%2FGround-Turkey-per-lb.jpg&w=256&q=75",
    count: "",
  },
  {
    title: "Duck Meat",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FzGWWtR5W%2FDuck-Hash-Meat-Regular-Kg.jpg&w=256&q=75",
    count: "",
  },
  {
    title: "Boneless Beef",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F28gh7xpr%2FBoneless-Beef-Chuck-Roast-per-lb.jpg&w=256&q=75",
    count: "",
  },
  {
    title: "Bone In Chuck",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FSRsCDTNN%2FBone-In-Chuck-Roast-each.jpg&w=256&q=75",
    count: "",
  },
];

const MeatFish = () => {
  return (
    <>
      <CategorieItems content={content} />
    </>
  );
};

export default MeatFish;

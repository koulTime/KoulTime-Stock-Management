import React from "react";
import "./foodcont.css";
import PaymentSect from "./PaymentSect";
import CategorieBox from "./CategorieBox";

export const categories = [
  {
    title: "Meat & Fish",
    link: "/meat_fish",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fy0zXYj5%2Fcarp-fish.png&w=48&q=75",
    sub_categories: ["Meat", "Fish"],
  },
  {
    title: "Fruits & Vegetable",
    link: "/fruits_vegetable",

    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FRZ275n3f%2Fcabbage.png&w=48&q=75",
    sub_categories: ["Dry Fruits", "Fresh Fruits", "Fresh Vegetable"],
  },
  {
    title: "Fresh Seafood",
    link: "/fresh_seafood",

    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FpfscwF4%2Fshrimp.png&w=48&q=75",
    sub_categories: ["Fresh Seafood"],
  },
  {
    title: "Cooking Essentials",
    link: "/cooking_essentials",

    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FhBv30Rt%2Ffrying-pan.png&w=48&q=75",
    sub_categories: ["Oil", "Rice", "Pasta", "flour"],
  },
  {
    title: "Drinks",
    link: "/drinks",

    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FDz8LKDX%2Fsoft-drink.png&w=48&q=75",
    sub_categories: ["Water", "Juice", "Coke"],
  },
  {
    title: "Sauces & Pickles",
    link: "/sauces_pickles",

    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fmk09xvk4%2Fchili-sauce.png&w=48&q=75",
    sub_categories: ["Sauces", "Pickles & Condiments"],
  },

  {
    title: "Desert",
    link: "/desert",

    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F0jVF5Cmc%2Fcookie.png&w=48&q=75",
    sub_categories: ["Cakes", "Biscuits"],
  },
  {
    title: "Cleaning Tools",
    link: "/cleaning_tools",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FrdY6zL0%2Fcleaner.png&w=48&q=75",
    sub_categories: ["Cleaner", "Air Fresher"],
  },
];

function Categories() {
  return (
    <>
      <div className="foodcontainer">
        <div className="left-side">
          <div className="cards">
            <div className="all">
              <div className="varieties">
                <h1>Featured Categories</h1>
              </div>
            </div>

            <main>
              {categories.map((category) => (
                <CategorieBox category={category} key={category} />
              ))}
            </main>
          </div>
        </div>
        <div className="right-side">
          <PaymentSect />
        </div>
      </div>
    </>
  );
}

export default Categories;

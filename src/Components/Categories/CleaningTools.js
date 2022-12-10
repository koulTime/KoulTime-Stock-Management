import React from "react";
import { Link } from "react-router-dom";
import FoodBox from "../FoodBox";
import PaymentSect from "../PaymentSect";
import TopSect from "../TopSect";
import { categories } from "../Categories";
import CategorieItems from "./CategorieItems";

const content = [
  {
    title: "FooGlade Automatic Sprayd",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FdV4WHDcs%2FGlade-Clear-Springs-Sense-Spray-Motion-Sensor-Automatic-Spray-1ct.jpg&w=256&q=75",
    count: "2",
  },
  {
    title: "Sophresh",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FkgjcJb0f%2FSo-Phresh-Bio-enzymatic-Dog-Stain-Odor-Remover-2-23lb.jpg&w=256&q=75",
    count: "20",
  },
  {
    title: "Rejuvenate Floor Cleaner",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FDZGdPY8M%2FRejuvenate-Floor-Cleaner-Multi-Surface-34-oz.jpg&w=256&q=75",
    count: "20",
  },
  {
    title: "Mr Clean Cleaner",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FHsg3BH04%2FMr-Clean-Multi-Purpose-Cleaner-with-Febreze-Freshness-New-Zealand-Springs-Scent-40oz.jpg&w=256&q=75",
    count: "2",
  },
  {
    title: "Clean It Cleaner",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FcJ2BYN43%2FEveryday-Living-All-Purpose-Cleaner-with-Bleach-32-oz.jpg&w=256&q=75",
    count: "20",
  },
  {
    title: "Artik Mandarine Cleaner",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FBZDMTtFn%2FDrano-Build-Up-Remover-32-oz.jpg&w=256&q=75",
    count: "20",
  },
  {
    title: "Drano Build Up Remover",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FBZDMTtFn%2FDrano-Build-Up-Remover-32-oz.jpg&w=256&q=75",
    count: "20",
  },
  {
    title: "Window Squeegee",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FJnXrRfRF%2FContinental-Complete-Window-Squeegee-12-in.jpg&w=256&q=75",
    count: "20",
  },
  {
    title: "Scubbing Pad Brush",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FXvpNzZm4%2FChar-Bron-Dual-SS-Scubbing-Pad-Brush-1ct.jpg&w=256&q=75",
    count: "20",
  },
  {
    title: "Scrub Brush",
    img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FfyjM9Ytj%2FButler-Gum-Scrub-Brush-each.jpg&w=256&q=75",
    count: "20",
  },
];
const CleaningTools = () => {
  return (
    <>
      <CategorieItems content={content} />
    </>
  );
};

export default CleaningTools;

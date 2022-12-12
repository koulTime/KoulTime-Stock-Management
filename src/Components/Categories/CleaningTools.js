import React, { useEffect, useState } from "react";
import CategorieItems from "./CategorieItems";
import ItemsService from "../../api/ItemsService";

const CleaningTools = () => {
  const [items, setItems] = useState([]);

  const category = "Cleaning Tools";
  const category_items = [];

  const images = [
    {
      title: "FooGlade Automatic Sprayd",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FdV4WHDcs%2FGlade-Clear-Springs-Sense-Spray-Motion-Sensor-Automatic-Spray-1ct.jpg&w=256&q=75",
    },
    {
      title: "Sophresh",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FkgjcJb0f%2FSo-Phresh-Bio-enzymatic-Dog-Stain-Odor-Remover-2-23lb.jpg&w=256&q=75",
    },
    {
      title: "Rejuvenate Floor Cleaner",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FDZGdPY8M%2FRejuvenate-Floor-Cleaner-Multi-Surface-34-oz.jpg&w=256&q=75",
    },
    {
      title: "Mr Clean Cleaner",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FHsg3BH04%2FMr-Clean-Multi-Purpose-Cleaner-with-Febreze-Freshness-New-Zealand-Springs-Scent-40oz.jpg&w=256&q=75",
    },
    {
      title: "Clean It Cleaner",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FcJ2BYN43%2FEveryday-Living-All-Purpose-Cleaner-with-Bleach-32-oz.jpg&w=256&q=75",
    },
    {
      title: "Artik Mandarine Cleaner",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FBZDMTtFn%2FDrano-Build-Up-Remover-32-oz.jpg&w=256&q=75",
    },
    {
      title: "Drano Build Up Remover",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FBZDMTtFn%2FDrano-Build-Up-Remover-32-oz.jpg&w=256&q=75",
    },
    {
      title: "Window Squeegee",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FJnXrRfRF%2FContinental-Complete-Window-Squeegee-12-in.jpg&w=256&q=75",
    },
    {
      title: "Scubbing Pad Brush",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FXvpNzZm4%2FChar-Bron-Dual-SS-Scubbing-Pad-Brush-1ct.jpg&w=256&q=75",
    },
    {
      title: "Scrub Brush",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FfyjM9Ytj%2FButler-Gum-Scrub-Brush-each.jpg&w=256&q=75",
    },
  ];

  const handleChange = () => {
    ItemsService.getitems()
      .then((response) => {
        let data = response.data;
        data.forEach((element, index) => {
          if (element.category === category) {
            let image = images.find((e) => e.title === element.name);
            category_items.push({
              title: element.name,
              img: image.img,
              count: element.quantity,
            });
          }
        });
        setItems(category_items);
        console.log(category_items);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    handleChange();
  }, []);
  return (
    <>
      <CategorieItems content={items} />
    </>
  );
};

export default CleaningTools;

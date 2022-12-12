import React, { useEffect, useState } from "react";
import ItemsService from "../../api/ItemsService";

import CategorieItems from "./CategorieItems";

const FreshSeafood = () => {
  const [items, setItems] = useState([]);

  const category = "Fresh Seafood";
  const category_items = [];
  const images = [
    {
      title: "Wild King Salmon Steak",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F63Mm1Pw8%2FFresh-Wild-King-Salmon-Steak-1lb.jpg&w=256&q=75",
    },
    {
      title: "Peeled Deveined Shrimp",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FRhVzWfCH%2FCooked-Peeled-Deveined-Shrimp-2lb.jpg&w=256&q=75",
    },
    {
      title: "Canada Salmon",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F5tqG80Rq%2FFresh-Whole-Canada-Salmon-25-5-oz.jpg&w=256&q=75",
    },
    {
      title: "Chilean Sea Bass",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FxTjmhVRK%2FAhi-Tuna-Steaks-per-lb.jpg&w=256&q=75",
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

export default FreshSeafood;

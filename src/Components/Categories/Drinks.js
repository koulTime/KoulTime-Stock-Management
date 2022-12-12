import React, { useEffect, useState } from "react";
import ItemsService from "../../api/ItemsService";

import CategorieItems from "./CategorieItems";

const Drinks = () => {
  const [items, setItems] = useState([]);

  const category = "Drinks";
  const category_items = [];
  const images = [
    {
      title: "Robinsons Pink Lemonade",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FJ4R7f5nc%2FRobinsons-Pink-Lemonade-Juice-Drink-10-fl-oz.jpg&w=256&q=75",
    },
    {
      title: "BING Energy Drink",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FrprfCW57%2FBING-Beverage-Made-with-Blackberry-Juice-12-fl-oz.jpg&w=256&q=75",
    },
    {
      title: "Monster Energy Drink",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FRCRXRvnC%2FMonster-Energy-Rehab-Orangeade-15-5-fl-oz.jpg&w=256&q=75",
    },
    {
      title: "Hood Orange Juice",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FWzwNDh9k%2FHood-Orange-Juice-14-fl-oz.jpg&w=256&q=75",
    },
    {
      title: "Alhambra Purified Water",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FP5QXCNqH%2FAlhambra-Purified-Water-1-Lt.jpg&w=256&q=75",
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

export default Drinks;

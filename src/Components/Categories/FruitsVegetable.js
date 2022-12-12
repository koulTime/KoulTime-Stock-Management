import React, { useEffect, useState } from "react";
import ItemsService from "../../api/ItemsService";

import CategorieItems from "./CategorieItems";

const FruitsVegetable = () => {
  const [items, setItems] = useState([]);

  const category = "Fruits & Vegetable";
  const category_items = [];
  const images = [
    {
      title: "Green Leaf Lettuce",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FZRynchJY%2FGreen-Leaf-Lettuce-each.jpg&w=256&q=75",
    },
    {
      title: "Rainbow Chard",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FZ5yQ47YB%2FRainbow-Chard-Package-per-lb.jpg&w=256&q=75",
    },
    {
      title: "Lettuce",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FGhRtkNVr%2FLettuce-1lb.jpg&w=256&q=75",
    },
    {
      title: "Parsley",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FwvzZWXpt%2FParsley-each.jpgg&w=256&q=75",
    },
    {
      title: "Organic Broccoli",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F3w03MCVn%2FOrganic-Broccoli-10oz.jpg&w=256&q=75",
    },
    {
      title: "Organic Pinkerton Avocado",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FDZdkFCgd%2FOrganic-Pinkerton-Avocado-each.jpg&w=256&q=75",
    },
    {
      title: "Organic Cherry Tomato",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQCJX48wD%2FOrange-Cherry-Tomato-5qt.jpg&w=256&q=75",
    },
    {
      title: "Baby Carrot",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FSNmQX9Yx%2FOrganic-Baby-Carrot-1oz.jpg&w=256&q=75",
    },
    {
      title: "Potatoes",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F0jnsGtK2%2FOld-Oak-Farm-Small-Potatoes-each.jpg&w=256&q=75",
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

export default FruitsVegetable;

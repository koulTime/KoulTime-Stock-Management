import React, { useEffect, useState } from "react";
import ItemsService from "../../api/ItemsService";

import CategorieItems from "./CategorieItems";

const SaucesPickles = () => {
  const [items, setItems] = useState([]);

  const category = "Sauces & Pickles";
  const category_items = [];
  const images = [
    {
      title: "Ketchup",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FDfdJBnSP%2FLife-Tomato-Ketchup-330-Gm.jpg&w=256&q=75",
    },
    {
      title: "Soya Sauce",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FSx5JJKPk%2FLife-Soya-Sauce-Light-210ml.jpg&w=256&q=75",
    },
    {
      title: "Apple Cider Vinegar",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FFFc45V39%2FHeinz-Apple-Cider-Vinegar-473ml-US.jpg&w=256&q=75",
    },
    {
      title: "Garlic Pickle",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FnhnZ19sn%2FAhmed-Garlic-Pickle-400g.jpg&w=256&q=75",
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

export default SaucesPickles;

import React, { useEffect, useState } from "react";
import ItemsService from "../../api/ItemsService";
import CategorieItems from "./CategorieItems";

const CookingEssentials = () => {
  const [items, setItems] = useState([]);

  const category = "Cooking Essentials";
  const category_items = [];
  const images = [
    {
      title: "ACI Pure Salt",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F8sBDTg2%2FACI-Pure-Salt-Jar-750gm.jpg&w=256&q=75",
    },
    {
      title: "Fresh Flour",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FBVHFnLG%2FFresh-Atta-2-Kg.jpg&w=256&q=75",
    },
    {
      title: "Fresh Soyabean Oil",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F0nzYNB8%2FFresh-Soyabean-Oil-5-Ltr.jpg&w=256&q=75",
    },
    {
      title: "Fresh Chinigura Rice",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FWzWdTsx%2FFresh-Chinigura-Rice-1kg.jpg&w=256&q=75",
    },
    {
      title: "Garlic Loose",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FD5tBhsz%2FGarlic-Roshun-Deshi-Loose-P-1-Kg.jpg&w=256&q=75",
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

export default CookingEssentials;

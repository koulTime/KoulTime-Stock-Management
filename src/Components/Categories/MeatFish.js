import React, { useEffect, useState } from "react";
import ItemsService from "../../api/ItemsService";

import CategorieItems from "./CategorieItems";

const MeatFish = () => {
  const [items, setItems] = useState([]);

  const category = "Meat & Fish";
  const category_items = [];
  const images = [
    {
      title: "Thon",
      img: "https://cuisinealouest.com/wp-content/uploads/2022/07/recette-steak-thon.jpg",
    },
    {
      title: "Wild King Salmon Steak",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F63Mm1Pw8%2FFresh-Wild-King-Salmon-Steak-1lb.jpg&w=256&q=75",
    },
    {
      title: "Beef Stew",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FPx68pWzG%2FNiman-Ranch-Angus-Beef-Stew-Meat-per-lb.jpg&w=256&q=75",
    },
    {
      title: "Ground Turkey",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FLX418CPB%2FGround-Turkey-per-lb.jpg&w=256&q=75",
    },
    {
      title: "Duck Meat",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FzGWWtR5W%2FDuck-Hash-Meat-Regular-Kg.jpg&w=256&q=75",
    },
    {
      title: "Boneless Beef",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F28gh7xpr%2FBoneless-Beef-Chuck-Roast-per-lb.jpg&w=256&q=75",
    },
    {
      title: "Bone In Chuck",
      img: "https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FSRsCDTNN%2FBone-In-Chuck-Roast-each.jpg&w=256&q=75",
    },
  ];

  const handleChange = () => {
    ItemsService.getitems()
      .then((response) => {
        let data = response.data;

        data.forEach((element, index) => {
          if (element.category === category) {
            let image = images.find((e) => e.title === element.name);
            console.log(image);
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

export default MeatFish;

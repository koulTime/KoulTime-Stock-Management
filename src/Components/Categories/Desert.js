import React, { useEffect, useState } from "react";
import ItemsService from "../../api/ItemsService";

import CategorieItems from "./CategorieItems";

const Desert = () => {
  const [items, setItems] = useState([]);

  const category = "Desert";
  const category_items = [];
  const images = [
    {
      title: "Cheese Cake",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fupdated_main_images%2F0211-vanilla-cheesecake-cherry-topping-x.jpg%3Fitok%3Dp2H6vW0H",
    },
    {
      title: "Ice Cream",
      img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-friedicecream-072-1587757338.jpg",
    },
    {
      title: "Chocolate Pudding",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyV3gAZzLJt4MXpgoaKD3lyCNeygzFrqTALg&usqp=CAU",
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

export default Desert;

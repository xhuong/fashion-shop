import { useEffect } from "react";
import { useState } from "react";
import "./index.scss";

const ChooseColor = () => {
  const initColors = [
    {
      name: "orange",
      value: "orange",
      active: true,
    },
    {
      name: "yellow",
      value: "yellow",
      active: false,
    },
    {
      name: "light_gray",
      value: "light gray",
      active: false,
    },
    {
      name: "light_green",
      value: "light green",
      active: false,
    },
    {
      name: "violet",
      value: "violet",
      active: false,
    },
    {
      name: "dark_blue",
      value: "dark blue",
      active: false,
    },
    {
      name: "white",
      value: "white",
      active: false,
    },
    {
      name: "black",
      value: "black",
      active: false,
    },
    {
      name: "brown",
      value: "brown",
      active: false,
    },
    {
      name: "light_yellow",
      value: "light yellow",
      active: false,
    },
    {
      name: "light_pink",
      value: "light pink",
      active: false,
    },
  ];

  const [colors, setColors] = useState(initColors);

  const handleChangeActiveColor = (index) => {
    const newArray = [...initColors];
    newArray.forEach((color, indexArray, oldArray) => {
      if (color.active === false && indexArray === index) {
        oldArray.forEach((color, oldIndexArray) => {
          color.active = false;
          if (oldIndexArray === index) {
            color.active = true;
          }
        });
      }
    });
    setColors(newArray);
  };

  return (
    <div className="choose_color">
      <ul className="choose_color_list">
        {colors.map((color, index) => {
          return (
            <li
              key={index}
              onClick={() => handleChangeActiveColor(index)}
              className={`choose_color_item ${color.name} ${
                color.active ? "active" : ""
              }`}
            >
              <span></span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ChooseColor;

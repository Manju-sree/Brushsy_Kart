import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Foundation-brushes",
    categoryImage: "/assets/images/category_images/foundation_brushes.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Eyeliner-brushes",
    categoryImage: "/assets/images/category_images/eye_liner.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Concealer-brushes",
    categoryImage:"/assets/images/category_images/concea_brushes.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Blush-brushes",
    categoryImage: "/assets/images/category_images/blush_brush.jpg",
  },
];

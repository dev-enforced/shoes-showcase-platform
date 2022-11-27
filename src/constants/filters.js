import { v4 as uuid } from "uuid";
const costFilters = [
  {
    uid: uuid(),
    labelDetails: "Rs. 1500-4000",
  },
  {
    uid: uuid(),
    labelDetails: "Rs. 4001-7000",
  },
  {
    uid: uuid(),
    labelDetails: "Rs. 7000+",
  },
];

const typeFilters = [
  {
    uid: uuid(),
    labelDetails: "Sneakers",
  },
  {
    uid: uuid(),
    labelDetails: "Shoes",
  },
];

const colorFilters = [
  {
    uid: uuid(),
    colorName: "blue",
    colorDetails: "#7e22ce",
  },
  {
    uid: uuid(),
    colorName: "black",
    colorDetails: "#000000",
  },
  {
    uid: uuid(),
    colorName: "cream",
    colorDetails: "#fed7aa",
  },
  {
    uid: uuid(),
    colorName: "white",
    colorDetails: "#e2e8f0",
  },
];

export { costFilters, typeFilters, colorFilters };

import { v4 as uuid } from "uuid";
import { actionConstants } from "./actionConstants";

const { HIGH_TO_LOW, LOW_TO_HIGH } = actionConstants;
const costFilters = [
  {
    uid: uuid(),
    labelDetails: "Rs. 1500-4000",
    min_price: 1500,
    max_price: 4000,
  },
  {
    uid: uuid(),
    labelDetails: "Rs. 4001-7000",
    min_price: 4001,
    max_price: 7000,
  },
  {
    uid: uuid(),
    labelDetails: "Rs. 7000+",
    min_price: 7001,
    max_price: Infinity,
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

const priceSorters = [
  {
    uid: uuid(),
    sortingMethod: "Price - Low To High",
    sortingPayload: LOW_TO_HIGH,
  },
  {
    uid: uuid(),
    sortingMethod: "Price - High To Low",
    sortingPayload: HIGH_TO_LOW,
  },
];

export { costFilters, typeFilters, colorFilters, priceSorters };

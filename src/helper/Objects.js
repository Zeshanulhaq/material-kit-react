import { getUniqueId } from "./helper";

export const loginObj = {
  email: "",
  password: "",
};

//BOQ INIT OBJECT
export const boqInitObj = {
  serialNo: { type: "number", isDisable: true, value: 1 },
  type: { type: "text", isDisable: false, value: "" },
  description: { type: "textarea", isDisable: false, value: "" },
  unit: { type: "text", isDisable: false, value: "" },
  product_code: { type: "object", isDisable: false, value: null },
  remarks: { type: "text", isDisable: false, value: "" },
  price: { type: "number", isDisable: false, value: "" },
  quantity: { type: "number", isDisable: false, value: "" },
  totalPrice: { type: "number", isDisable: true, value: "" },
};

export const initMarginObj = {
  item: null,
  overHead: null,
  profit: null,
  rebate: null,
};

export const itemOptions = [
  {
    label: "BOM Cost",
    value: "material_cost",
  },
  {
    label: "WMS (Time) Cost",
    value: "time_cost",
  },
  {
    label: "Hardware Cost",
    value: "hardware_cost",
  },
  {
    label: "Provisions",
    value: "provisions",
  },
];

export const ohOptions = [
  {
    label: "Good",
    value: 15,
  },
  {
    label: "High",
    value: 25,
  },
  {
    label: "Low",
    value: 10,
  },
  {
    label: "Risky",
    value: 40,
  },
];

export const profitOptions = [
  {
    label: "Standard",
    value: 15,
  },
  {
    label: "High",
    value: 35,
  },
  {
    label: "Low",
    value: 10,
  },
  {
    label: "Market",
    value: 7,
  },
  {
    label: "Break Even",
    value: 0,
  },
];

export const rebateOptions = [
  {
    label: "Standard",
    value: 5,
  },
  {
    label: "High",
    value: 10,
  },
  {
    label: "Low",
    value: 3,
  },
];

//MARKUP LIST
export const markupList = {
  material_cost:{
    item: "BOM Cost",
    cost: 0,
    oh: 0,
    profit: 0,
    rebate: 0,
    totalMargin: 0,
    price: 0,
  },
  time_cost: {
    item: "WMS (Time) Cost",
    cost: 0,
    oh: 0,
    profit: 0,
    rebate: 0,
    totalMargin: 0,
    price: 0,
  },
  hardware_cost: {
    item: "Hardware Cost",
    cost: 0,
    oh: 0,
    profit: 0,
    rebate: 0,
    totalMargin: 0,
    price: 0,
  },
  provisions: {
    item: "Provisions",
    cost: 0,
    oh: 0,
    profit: 0,
    rebate: 0,
    totalMargin: 0,
    price: 0,
  },
};

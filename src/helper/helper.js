export const getMarkUp = (value, total) => {
  let percent = (value / 100) * total;
  return percent + total;
};

//GENERATE RANDOM ID
export const getUniqueId = () => {
  return Math.random().toString(36).slice(2);
};

export const getSelectOptions = (array, value, label) => {
  return array?.map((item) => getSelectOptionsObject(item, value, label)) || [];
};

export const getSelectOptionsObject = (object, value, label) => {
  return { ...object, value: object[value] || "", label: object[label] || "" };
};

// COST CALCULATE FOR BOT
export const costCalculate = (rate, time) => {
  let totalMin = parseInt(time) / 60;
  return (rate * totalMin).toFixed(3);
};
// ROUND TO TWO DECIMAL PLACES
export const getRoundedValue = (value) => {
  return Math.round(Number(value) * 100) / 100;
};

// GET RESOURCE UNIT
export const getResourceUnit = (unit, label) => {
  return unit?.value ? (label ? unit?.label : unit?.value) : unit || "n/a";
};

// GETTING PRODUCTDESCTION ONLY FOR PRODUCTS
export const getPlainDescription = (description) => {
  return `${description?.heading?.value}. ${Object.values(description)
    ?.filter((item) => !item?.isHeading)
    ?.map((item) => `${item?.label} + ${item?.value}`)
    ?.join(" ")}`;
};

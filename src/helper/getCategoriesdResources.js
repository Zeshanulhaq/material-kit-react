export const getCategoriesdResources = (
  options,
  groupValue,
  categoryValue
) => {
  return options?.filter(
        (item) =>
          item?.resources_category?.group_id === groupValue &&
          item?.resources_category?._id === categoryValue
      ) ||
     [];
   
};

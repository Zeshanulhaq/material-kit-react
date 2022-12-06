import { toast } from "react-toastify";

export const errorHandler = (err) => {
  let errors = [];
  const customError = err?.response?.data?.message;
  const serverError = err?.response?.data?.error?.message;
  const errorArr = err?.response?.data;
  if (customError) errors = [customError];
  else if (serverError) errors = [serverError];
  else if (errorArr) {
    Object.values(errorArr)?.map((item) => {
      if (item instanceof Array && item.length > 0) {
        item?.map((errorItem) => {
          errors = [...errors, errorItem];
        });
      }
    });
  } else errors = ["Oops! Something went wrong."];

  // DISPLAYING ALL ERRORS
  errors?.map((eItem) => {
    toast.error(eItem);
  });

  return errors?.length > 0 ? errors[0] : "";
};

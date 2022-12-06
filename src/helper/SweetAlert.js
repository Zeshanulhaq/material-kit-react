import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
export const handleConfirmCancel = (
  action,
  deleteField,
  handleInvoice = null
) => {
  return MySwal.fire({
    title: "Are you sure?",
    text: `You want to  ${action ? action : "delete"}`,
    icon: "warning",
    showCancelButton: true,
    cancelButtonText: "Cancel",
    confirmButtonText: "Yes!",
    customClass: {
      confirmButton: "btn btn-primary",
      cancelButton: "btn btn-danger ml-1",
    },
    buttonsStyling: false,
  }).then(function (result) {
    if (result.value) {
      deleteField();
    } else if (result.dismiss === MySwal.DismissReason.cancel) {
      MySwal.fire({
        title: "Cancelled",
        icon: "error",
        customClass: {
          confirmButton: "btn btn-primary",
        },
      });
    }
  });
};

import React, { Fragment, useState, useContext } from "react";
import { Download, Edit, Edit2, Trash2 } from "react-feather";
import { useHistory } from "react-router-dom";
import { SC } from "./ServerCall";
import { handleConfirmCancel } from "./SweetAlert";
import { connect, useDispatch } from "react-redux";
import UncontrolledTooltip from "reactstrap/lib/UncontrolledTooltip";
import { handleDeleteOP } from "redux/actions/layout";
import { errorHandler } from "./ErrorHandler";
import { getBOQPDF } from "./endPoints";
import { toast } from "react-toastify";
const ActionDropDown = (props) => {
  let {
    _id,
    endPoint,
    deleteOp,
    editOp,
    path,
    isDownload,
    downloadText,
    downloadLink,
  } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const [downloadingItem, setDownloading] = useState("");

  const deleteField = async () => {
    dispatch(handleDeleteOP(_id));
    try {
      const response = await SC.deleteCall(endPoint + "/" + _id);
      const responseMessage = response?.data?.message || "";
      toast.success(responseMessage);
    } catch (error) {
      errorHandler(error);
    }
  };
  const handleDownload = async () => {
    setDownloading(_id);
    try {
      await SC.downloadCall({
        url: downloadLink,
        fileName: "boq",
        fileExtension: ".pdf",
      });
      setDownloading("");

      // const responseMessage = response?.data?.message || "";
    } catch (error) {
      setDownloading("");
      errorHandler(error);
    }
  };
  return (
    <Fragment>
      {isDownload && (
        <Fragment>
          <Download
            style={{ pointerEvents: downloadingItem === _id ? "none" : "all" }}
            className="cursor-pointer font-weight-bolder mr-50"
            id="downlaod"
            size={20}
            onClick={handleDownload}
          />
          <UncontrolledTooltip placement="bottom" target="downlaod">
            {downloadingItem === _id
              ? "Downloading..."
              : downloadText || "Download"}
          </UncontrolledTooltip>
        </Fragment>
      )}

      {editOp && (
        <>
          <Edit2
            size={20}
            id="edit"
            onClick={() => history.push(`${path}${_id}`)}
            className="cursor-pointer font-weight-bolder mr-50"
          />
          <UncontrolledTooltip placement="bottom" target="edit">
            Edit
          </UncontrolledTooltip>
        </>
      )}

      {deleteOp && (
        <>
          <Trash2
            className="cursor-pointer font-weight-bolder "
            id="delete"
            onClick={() => handleConfirmCancel("delete", deleteField)}
            size={20}
          />
          <UncontrolledTooltip placement="bottom" target="delete">
            Delete
          </UncontrolledTooltip>
        </>
      )}
    </Fragment>
  );
};

export default ActionDropDown;

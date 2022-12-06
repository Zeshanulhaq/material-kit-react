/* eslint-disable no-extend-native */
import axios from "axios";
import { authHeader } from "./AuthHeader";

const baseUrl = process.env.REACT_APP_BASE_URL;
export const SC = {
  getCall,
  postCall,
  putCall,
  deleteCall,
  postCallWithoutAuth,
  getCallWithId,
  postAttachment,
  downloadCall,
};

function getCall(endpoint, params) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
    params,
  };
  return axios
    .get(baseUrl + endpoint, requestOptions)
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      return Promise.reject(error);
    });
}
function postCall(url, data) {
  Date.prototype.toJSON = function () {
    // return moment(this).format()
  };
  const requestOptions = {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify(data),
    // onUploadProgress: function (progressEvent) {
    //   // var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total )
    //   if (callbackProgressUpload) callbackProgressUpload(progressEvent)
    // },
  };

  return axios
    .post(baseUrl + url, data, requestOptions)
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      return Promise.reject(error);
    });
}
function postAttachment({ url, data, callbackProgressUpload = null, source }) {
  Date.prototype.toJSON = function () {
    // return moment(this).format()
  };
  const requestOptions = {
    method: "POST",
    headers: authHeader(),
    body: data,
    onUploadProgress: function (progressEvent) {
      var percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      if (callbackProgressUpload) callbackProgressUpload(percentCompleted);
    },
  };
  if (source) {
    requestOptions.cancelToken = source.token;
  }
  return axios
    .post(baseUrl + url, data, requestOptions)
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      return Promise.reject(error);
    });
}
function putCall(url, data) {
  const requestOptions = {
    method: "PUT",
    headers: authHeader(),
    body: JSON.stringify(data),
  };
  return axios
    .put(baseUrl + url, data, requestOptions)
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      return Promise.reject(error);
    });
}
function deleteCall(url) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(),
  };
  return axios
    .delete(baseUrl + url, requestOptions)
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      return Promise.reject(error);
    });
}

function postCallWithoutAuth({ url, data }) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  return axios
    .post(baseUrl + url, data, requestOptions)
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      return Promise.reject(error);
    });
}
//get data with id
function getCallWithId({ url, id }) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return axios
    .get(baseUrl + url + "/" + id, requestOptions)
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      return Promise.reject(error);
    });
}

function downloadCall({ url, fileName, fileExtension, params }) {
  console.log("downloadLInk", url);
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
    responseType: "blob", // important,
    params,
  };
  // console.log("params:>", params);
  return axios
    .get(baseUrl + url, requestOptions)
    .then((response) => {
      let file = response.data;
      const link = document.createElement("a");

      if (!params?.isDownload) {
        let url = window.URL.createObjectURL(file);
        let tab = window.open();
        tab.location.href = url;
      } else {
        let url = window.URL.createObjectURL(new Blob([file]));
        link.href = url;
        link.setAttribute("download", fileName + fileExtension); //or any other extension
        document.body.appendChild(link);
        link.click();
      }
      return response;
    })
    .catch(function (error) {
      return Promise.reject(error);
    });
}

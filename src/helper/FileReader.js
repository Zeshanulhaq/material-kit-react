import * as XLSX from "xlsx";

export const handleUpload = (e) => {
  if (e) {
  e.preventDefault();
  var files = e.target.files,
    f = files[0];
  return new Promise((resolve) => {
    var reader = new FileReader();
    reader.onload = function (e) {
      var data = e.target.result;
      let readedData = XLSX.read(data, { type: "binary" });
      const wsname = readedData.SheetNames[0];
      const ws = readedData.Sheets[wsname];

      /* Convert array to json*/
      const dataParse = XLSX.utils.sheet_to_json(ws);
      resolve(dataParse);
    };
    reader.readAsBinaryString(f);
  });
}
};

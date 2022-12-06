import { Link } from "react-router-dom";
import ActionDropDown from "./Action";
import countryList from "react-select-country-list";

import {
  deleteCategory,
  deleteClient,
  deleteGroup,
  deletepart,
  deleteProduct,
  deleteProject,
  deleteResource,
  deleteSupplier,
  deleteUser,
  getBOQPDF,
} from "./endPoints";
import {
  getPlainDescription,
  getResourceUnit,
  getRoundedValue,
} from "./helper";
import { Badge } from "reactstrap";
import ProductListingDescription from "views/components/products/ProductListingDescription";

export const userColumn = [
  {
    name: "Name",
    sortable: true,
    minWidth: "300px",
    sortField: "name",
    selector: (row) => row.name,
  },
  {
    name: "Email",
    sortable: true,
    minWidth: "172px",
    sortField: "email",
    selector: (row) => row?.email,
  },

  {
    name: "Actions",
    minWidth: "100px",
    right: "true",
    selector: (row) => (
      <div className="column-action">
        <ActionDropDown
          deleteOp={false}
          editOp={true}
          path={"/user/update/"}
          endPoint={deleteUser}
          _id={row?._id}
        />
      </div>
    ),
  },
];

export const groupsColumn = [
  {
    name: "Name",
    sortable: true,
    minWidth: "300px",
    sortField: "fullName",
    selector: (row) => row?.name,
  },

  {
    name: "Actions",
    minWidth: "100px",
    right: true,
    selector: (row) => (
      <div className="column-action">
        <ActionDropDown
          deleteOp={false}
          editOp={true}
          path={"/group/update/"}
          endPoint={deleteGroup}
          _id={row?._id}
        />
      </div>
    ),
  },
];

export const categoryColumn = [
  {
    name: "Name",
    sortable: true,
    minWidth: "300px",
    sortField: "name",
    selector: (row) => row?.name,
  },
  {
    name: "Group",
    sortable: true,
    minWidth: "300px",
    sortField: "group",
    selector: (row) => row?.group?.name,
  },
  {
    name: "Actions",
    minWidth: "100px",
    right: "true",
    selector: (row) => (
      <div className="column-action">
        <ActionDropDown
          deleteOp={false}
          editOp={true}
          path={"/category/update/"}
          endPoint={deleteCategory}
          _id={row?._id}
        />
      </div>
    ),
  },
];

export const supplierColumn = [
  {
    name: "Name",
    sortable: true,
    minWidth: "300px",
    sortField: "fullName",
    selector: (row) => row?.name,
  },
  {
    name: "Email",
    sortable: true,
    minWidth: "300px",
    sortField: "fullName",
    selector: (row) => row?.email,
  },
  {
    name: "Phone",
    sortable: true,
    minWidth: "300px",
    sortField: "phone",
    selector: (row) => row?.phone,
  },
  {
    name: "Country",
    sortable: true,
    minWidth: "300px",
    sortField: "country",
    // selector: (row) => row?.country,
    selector: (row) =>
      countryList()
        ?.getData()
        ?.find((item) => item.value === row.country)?.label,
  },
  {
    name: "Group",
    sortable: true,
    minWidth: "300px",
    sortField: "group",
    selector: (row) => row?.group,
    selector: (row) => (
      <div className="d-flex justify-content-left align-items-center">
        <div className="d-flex flex-wrap">
          {row?.groups?.map((item, index) => (
            <Badge key={index} color="primary" className="ml-1 mb-1">
              {item?.name}
            </Badge>
          ))}
        </div>
      </div>
    ),
  },

  {
    name: "Actions",
    minWidth: "100px",
    selector: (row) => (
      <div className="column-action">
        <ActionDropDown
          deleteOp={true}
          editOp={true}
          path={"/supplier/update/"}
          endPoint={deleteSupplier}
          _id={row?._id}
        />
      </div>
    ),
  },
];
export const partsColumn = [
  {
    name: "ID",
    sortable: true,
    minWidth: "300px",
    sortField: "ID",
    selector: (row) => row?.id,
  },
  {
    name: "Part",
    sortable: true,
    minWidth: "300px",
    sortField: "part",
    selector: (row) => row?.part,
  },
  {
    name: "Sets",
    sortable: true,
    minWidth: "300px",
    sortField: "sets",
    selector: (row) => row?.sets,
  },
  {
    name: "Assembly",
    sortable: true,
    minWidth: "300px",
    sortField: "assembly",
    selector: (row) => row?.assembly,
    selector: (row) => (
      <div className="d-flex justify-content-left align-items-center">
        <span>{row?.assembly}</span>
      </div>
    ),
  },
  {
    name: "Paint",
    sortable: true,
    minWidth: "300px",
    sortField: "paint",
    selector: (row) => row?.paint,
  },
  {
    name: "Sides",
    sortable: true,
    minWidth: "300px",
    sortField: "sides",
    selector: (row) => row?.sides,
  },
  {
    name: "Treatment",
    sortable: true,
    minWidth: "300px",
    sortField: "treatment",
    selector: (row) => row?.treatment,
  },

  {
    name: "Actions",
    minWidth: "100px",
    selector: (row) => (
      <div className="column-action">
        <ActionDropDown
          deleteOp={false}
          editOp={true}
          path={"/parts/update/"}
          endPoint={deletepart}
          _id={row?._id}
        />
      </div>
    ),
  },
];
export const AssemblyPropertiesCoumns = [
  {
    name: "ID",
    sortable: true,
    minWidth: "100px",
    selector: (row) => row?.id,
  },
  {
    name: "Part",
    sortable: true,
    minWidth: "200px",
    selector: (row) => row?.part,
  },
  {
    name: "Sets",
    sortable: true,
    minWidth: "100px",
    selector: (row) => row?.sets,
  },
  {
    name: "Assembly",
    sortable: true,
    minWidth: "100px",
    selector: (row) => row?.assembly,
  },
  {
    name: "Paint Sides",
    sortable: true,
    minWidth: "100px",
    sortField: "paint",
    selector: (row) => row?.paint,
  },
  {
    name: "Treatment Sides",
    sortable: true,
    minWidth: "100px",
    sortField: "treatment",
    selector: (row) => row?.treatment,
  },
];
export const ClientsColumn = [
  {
    name: "Name",
    sortable: true,
    minWidth: "300px",
    sortField: "Name",
    selector: (row) => row?.name,
  },
  {
    name: "Contact Person",
    sortable: true,
    minWidth: "300px",
    sortField: "contact",
    selector: (row) => row?.contact,
  },
  {
    name: "Email",
    sortable: true,
    minWidth: "300px",
    sortField: "email",
    selector: (row) => row?.email,
  },
  {
    name: "Phone",
    sortable: true,
    minWidth: "300px",
    sortField: "phone",
    selector: (row) => row?.phone,
  },
  {
    name: "Address",
    sortable: true,
    minWidth: "300px",
    sortField: "address",
    selector: (row) => row?.address,
  },

  {
    name: "Actions",
    minWidth: "100px",
    selector: (row) => (
      <div className="column-action">
        <ActionDropDown
          deleteOp={true}
          editOp={true}
          path={"/clients/update/"}
          endPoint={deleteClient}
          _id={row?._id}
        />
      </div>
    ),
  },
];

export const productsColumn = [
  {
    name: "Name",
    minWidth: "300px",
    selector: (row) => row?.name,
  },
  {
    name: "Prefix",
    minWidth: "300px",
    selector: (row) => row?.prefix,
  },
  {
    name: "Project Type Ref",
    minWidth: "300px",
    selector: (row) => row?.project_type_ref,
  },
  {
    name: "Provisions",
    minWidth: "300px",
    selector: (row) => row?.provisions,
  },
  {
    name: "Total Cost",
    minWidth: "300px",
    selector: (row) => getRoundedValue(row?.total_cost),
  },
  {
    name: "Retail Price",
    minWidth: "300px",
    selector: (row) => getRoundedValue(row?.retail_price),
  },
  {
    name: "Raw Material",
    minWidth: "300px",
    selector: (row) => getRoundedValue(row?.raw_material),
  },
  {
    name: "Hardware",
    minWidth: "300px",
    selector: (row) => getRoundedValue(row?.hardware),
  },
  {
    name: "Time Cost",
    minWidth: "300px",
    selector: (row) => getRoundedValue(row?.time_cost),
  },
  {
    name: "Hours",
    minWidth: "300px",
    selector: (row) => getRoundedValue(row?.hours),
  },
  {
    name: "Material",
    minWidth: "300px",
    selector: (row) => getRoundedValue(row?.material),
  },
  {
    name: "Leaf Width",
    minWidth: "300px",
    selector: (row) => getRoundedValue(row?.leaf_width),
  },
  {
    name: "Leaf Height",
    minWidth: "300px",
    selector: (row) => getRoundedValue(row?.leaf_height),
  },
  {
    name: "Leaf Thickness",
    minWidth: "300px",
    selector: (row) => getRoundedValue(row?.leaf_thickness),
  },
  {
    name: "Substrate Thickness",
    minWidth: "300px",
    selector: (row) => getRoundedValue(row?.substrate_thickness),
  },
  {
    name: "Veneer",
    minWidth: "300px",
    selector: (row) => getRoundedValue(row?.veneer),
  },
  {
    name: "Core Width",
    minWidth: "300px",
    selector: (row) => getRoundedValue(row?.core_width),
  },
  {
    name: "Core Thickness",
    minWidth: "300px",
    selector: (row) => getRoundedValue(row?.core_thickness),
  },
  {
    name: "Core Height",
    minWidth: "300px",
    selector: (row) => getRoundedValue(row?.core_height),
  },
  {
    name: "Overall Waste",
    minWidth: "300px",
    selector: (row) => getRoundedValue(row?.overall_waste) + "%",
  },
  {
    name: "Description",
    minWidth: "300px",
    selector: (row) => <ProductListingDescription data={row?.description} />,
  },
  {
    name: "Actions",
    minWidth: "100px",
    selector: (row) => (
      <div className="column-action">
        <ActionDropDown
          deleteOp={false}
          editOp={true}
          path={"/products/update/"}
          endPoint={deleteProduct}
          _id={row?._id}
        />
      </div>
    ),
  },
];

export const resourcesColumn = [
  // {
  //   name: "SN",
  //   sortable: true,
  //   minWidth: "300px",
  //   sortField: "SN",
  //   selector: (row) => row?.SN,
  // },
  {
    name: "Name",
    sortable: true,
    minWidth: "300px",
    sortField: "fullName",
    selector: (row) => row?.name,
  },
  {
    name: "Group",
    sortable: true,
    minWidth: "300px",
    sortField: "group",
    selector: (row) => row?.group?.name,
  },
  {
    name: "Category",
    sortable: true,
    minWidth: "300px",
    sortField: "category",
    selector: (row) => row?.resources_category?.name,
  },
  {
    name: "Number",
    sortable: true,
    minWidth: "300px",
    sortField: "number",
    selector: (row) => row?.num,
  },

  {
    name: "Company Code",
    sortable: true,
    minWidth: "300px",
    sortField: "company_code",
    selector: (row) => row?.company_code,
  },
  {
    name: "Length",
    sortable: true,
    minWidth: "300px",
    sortField: "length",
    selector: (row) => row?.length,
  },
  {
    name: "Width",
    sortable: true,
    minWidth: "300px",
    sortField: "width",
    selector: (row) => row?.width,
  },
  {
    name: "Thickness",
    sortable: true,
    minWidth: "300px",
    sortField: "thickness",
    selector: (row) => row?.thickness,
  },
  {
    name: "Default QTY",
    sortable: true,
    minWidth: "300px",
    sortField: "defaultqty",
    selector: (row) => row?.default_quantity,
  },
  {
    name: "Unit",
    sortable: true,
    minWidth: "300px",
    sortField: "unit",
    selector: (row) => row?.unit,
  },
  {
    name: "Rate",
    sortable: true,
    minWidth: "300px",
    sortField: "rate",
    selector: (row) => row?.rate,
  },
  {
    name: "Cost/CBM",
    sortable: true,
    minWidth: "300px",
    sortField: "costcbm",
    selector: (row) => row?.cost_cbm,
  },
  {
    name: "Cost/SQM",
    sortable: true,
    minWidth: "300px",
    sortField: "costsqm",
    selector: (row) => row?.cost_sqm,
  },
  {
    name: "Cost/LM",
    sortable: true,
    minWidth: "300px",
    sortField: "costlm",
    selector: (row) => row?.cost_lm,
  },
  {
    name: "Retail",
    sortable: true,
    minWidth: "300px",
    sortField: "retail price",
    selector: (row) => row?.retail_price,
  },
  {
    name: "Manufacturing Min",
    sortable: true,
    minWidth: "300px",
    sortField: "manufacturingmin",
    selector: (row) => row?.manufacturing_min,
  },
  {
    name: "Painting Min",
    sortable: true,
    minWidth: "300px",
    sortField: "paintingmin",
    selector: (row) => row?.painting_min,
  },
  {
    name: "Installation Min",
    sortable: true,
    minWidth: "300px",
    sortField: "installationmin",
    selector: (row) => row?.installation_min,
  },
  {
    name: "Quality",
    sortable: true,
    minWidth: "300px",
    sortField: "quality",
    selector: (row) => row?.quality,
  },
  {
    name: "Fire",
    sortable: true,
    minWidth: "300px",
    sortField: "fire properties",
    selector: (row) => row?.fire_properties,
  },
  {
    name: "Environment",
    sortable: true,
    minWidth: "300px",
    sortField: "environment",
    selector: (row) => row?.environment_properties,
  },
  {
    name: "Other Properties",
    sortable: true,
    minWidth: "300px",
    sortField: "otherproperties",
    selector: (row) => row?.other_properties,
  },
  {
    name: "Wastage",
    sortable: true,
    minWidth: "300px",
    sortField: "wastage",
    selector: (row) => row?.Wastage,
  },
  {
    name: "Supplier",
    sortable: true,
    minWidth: "300px",
    sortField: "supplier",
    selector: (row) => row?.supplier?.name,
  },
  {
    name: "Supplier Email",
    sortable: true,
    minWidth: "300px",
    sortField: "supplieremail",
    selector: (row) => row?.supplier?.email,
  },
  {
    name: "Supplier Country",
    sortable: true,
    minWidth: "300px",
    sortField: "supplier_country",
    selector: (row) => row?.supplier?.country,
  },
  {
    name: "Date",
    sortable: true,
    minWidth: "300px",
    sortField: "date",
    selector: (row) => row?.date,
  },
  {
    name: "Notes",
    sortable: true,
    minWidth: "300px",
    sortField: "notes",
    selector: (row) => row?.Notes,
  },

  {
    name: "Actions",
    minWidth: "100px",
    selector: (row) => (
      <div className="column-action">
        <ActionDropDown
          deleteOp={false}
          editOp={true}
          path={"/resources/update/"}
          endPoint={deleteResource}
          _id={row?._id}
        />
      </div>
    ),
  },
];

//BOM COLUMNS
export const BOMColumns = [
  {
    name: "Material",
    sortable: true,
    minWidth: "300px",
    sortField: "email",
    selector: (row) => row?.name,
  },
  {
    name: "Unit",
    sortable: true,
    minWidth: "300px",
    sortField: "unit",
    selector: (row) =>
      !row?.isBold ? getResourceUnit(row?.unit, true) : row?.unit,
  },
  {
    name: "Rate",
    sortable: true,
    minWidth: "300px",
    sortField: "rate",
    selector: (row) => row?.rate,
  },
  {
    name: "Qty",
    sortable: true,
    minWidth: "300px",
    sortField: "address",
    selector: (row) => row?.quantity,
  },
  {
    name: "Cost",
    sortable: true,
    minWidth: "300px",
    sortField: "address",
    selector: (row) => row?.cost,
  },
];

//BOT COLUMNS
export const BOTColumns = [
  {
    name: "Task",
    sortable: true,
    minWidth: "300px",
    sortField: "task",
    selector: (row) => row?.task,
  },
  {
    name: "Time",
    sortable: true,
    minWidth: "300px",
    sortField: "time",
    selector: (row) => row?.time + "/60",
  },
  {
    name: "Rate",
    sortable: true,
    minWidth: "300px",
    sortField: "rate",
    selector: (row) => row?.rate?.value,
  },
  {
    name: "Sequence",
    sortable: true,
    minWidth: "300px",
    sortField: "Sequence",
    selector: (row, index) => (!row?.isBold ? index + 1 : ""),
  },
  {
    name: "Inclusive",
    sortable: true,
    minWidth: "300px",
    sortField: "Inclusive",
    selector: (row) => row?.value,
  },
  {
    name: "Cost",
    sortable: true,
    minWidth: "300px",
    sortField: "address",
    selector: (row) => row?.cost,
  },
];

//BOF COLUMNS
export const BOFColumns = [
  {
    name: " Feature",
    sortable: true,
    minWidth: "300px",
    sortField: " Feature",
    selector: (row) => row?.feature,
  },
  {
    name: " Description",
    sortable: true,
    minWidth: "300px",
    sortField: " Description",
    selector: (row) => row?.name,
  },
  {
    name: "Length/set",
    sortable: true,
    minWidth: "300px",
    sortField: "Length/set",
    selector: (row) => row?.["length"],
  },
  {
    name: "Manufacturing",
    sortable: true,
    minWidth: "300px",
    sortField: "Manufacturing",
    selector: (row) => `${row?.manufacturing_min || 0}/60`,
  },
  {
    name: "Painting",
    sortable: true,
    minWidth: "300px",
    sortField: "Painting",
    selector: (row) => `${row?.painting_min || 0}/60`,
  },
  {
    name: "Installation",
    sortable: true,
    minWidth: "300px",
    sortField: "Installation",
    selector: (row) => `${row?.installation_min || 0}/60`,
  },
];

//BOH COLUMNS
export const BOHColumns = [
  {
    name: "Hardware",
    sortable: true,
    minWidth: "300px",
    sortField: "Hardware",
    selector: (row) => row?.hardware,
  },
  {
    name: "Ironomongery",
    sortable: true,
    minWidth: "300px",
    sortField: "Ironomongery",
    selector: (row) => row?.name,
  },
  {
    name: "Unit",
    sortable: true,
    minWidth: "300px",
    sortField: "Unit",
    selector: (row) =>
      !row?.isBold ? getResourceUnit(row?.unit, true) : row?.unit,
  },
  {
    name: "Rate",
    sortable: true,
    minWidth: "300px",
    sortField: "rate",
    selector: (row) => (!row?.isBold ? row?.rate || 0 : row?.rate),
  },
  {
    name: "QTY",
    sortable: true,
    minWidth: "300px",
    sortField: "QTY",
    selector: (row) => row?.quantity,
  },

  {
    name: "Cost",
    sortable: true,
    minWidth: "300px",
    sortField: "address",
    selector: (row) => row?.cost,
  },
  {
    name: "Manufacturing Time",
    sortable: true,
    minWidth: "300px",
    sortField: "Add_Manufacturing_Time",
    selector: (row) => row?.manufacturing_min || 0,
  },
  {
    name: "Installation Time",
    sortable: true,
    minWidth: "300px",
    sortField: "Add_Installation_Time",
    selector: (row) => row?.installation_min || 0,
  },
];

//PROJECT COLUMNS
export const projectColumns = [
  {
    name: "Name",
    sortable: true,
    minWidth: "300px",
    sortField: "fullName",
    selector: (row) => row?.name,
  },
  {
    name: "Cost",
    sortable: true,
    // minWidth: "300px",
    sortField: "fullName",
    selector: (row) => row?.boq?.total?.cost,
  },
  {
    name: "Price",
    sortable: true,
    // minWidth: "300px",
    sortField: "fullName",
    selector: (row) => row?.boq?.total?.price,
  },
  {
    name: "BOQs",
    sortable: true,
    // minWidth: "300px",
    center: true,
    sortField: "fullName",
    selector: (row) => {
      const isBOQ = row?.boq ? true : false;
      const to = `/boq/${row._id}${(isBOQ && "/" + row?.boq?._id) || ""}`;
      const text = isBOQ ? "Show BOQ" : "Create BOQ";

      return <Link to={to}>{text}</Link>;
    },
  },
  {
    name: "Actions",
    minWidth: "100px",
    right: "true",
    selector: (row) => (
      <div className="column-action d-flex">
        <ActionDropDown
          deleteOp={false}
          editOp={true}
          endPoint={deleteProject}
          path={"/projects/update/"}
          _id={row?._id}
          isDownload={row?.boq ? true : false}
          downloadLink={`${getBOQPDF}/${row?.boq?._id}`}
          downloadText={"Download BOQ"}
        />
      </div>
    ),
  },
];

//BOQ
export const boqColumns = {
  serialNo: { name: "SN" },
  type: { name: "Type" },
  description: { name: "Item Description" },
  unit: { name: "Unit" },
  productId: { name: "Product Code" },
  remarks: { name: "Remarks" },
  price: { name: "Price" },
  quantity: { name: "Quantity" },
  totalPrice: { name: "Total Price" },
};

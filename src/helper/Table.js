// ** React Imports
import { debounce } from "lodash";
import { Search } from "react-feather";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { useEffect, useState, Fragment } from "react";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  Dropdown,
  CardBody,
  Table,
  Alert,
} from "reactstrap";
import CustomSelector from "./components/customSelect";
import { getSelectOptions } from "./helper";

const CustomTable = ({
  data,
  column,
  loading,
  title,
  getData = null,
  filter = false,
  pagination = true,
  dropDownOptions = [],
  dropdownFilter = false,
  isMulti = false,
}) => {
  // ** STATES
  const perPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [groups, setGroups] = useState([]);

  //GET REDUX STATE WHEN DELETE ACTIVE
  let deleteId = useSelector((state) => state.layout.deleteActive);
  useEffect(() => {
    if (pagination) handleFilters();
  }, [deleteId, perPage, currentPage]);

  // ** CUSTOM PAGINATION
  const CustomPagination = () => (
    <ReactPaginate
      initialPage={currentPage - 1}
      previousLabel=""
      nextLabel=""
      breakLabel="..."
      disableInitialCallback={true}
      forcePage={currentPage - 1}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={data?.pageCount || null}
      onPageChange={handlePageChange}
      activeClassName="active"
      pageClassName="page-item"
      breakClassName="page-item"
      nextLinkClassName="page-link"
      pageLinkClassName="page-link"
      breakLinkClassName="page-link"
      previousLinkClassName="page-link"
      nextClassName="page-item next"
      previousClassName="page-item prev"
      containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1"
    />
  );

  //HANDLE SEARCH DATA CALL
  const handleSmartSearch = debounce((value) => {
    setSearchKeyword(value);
    handleFilters({ keyword: value, isKeyword: true });
  }, 1000);

  //ON CHANGE PAGE
  const handlePageChange = (page) => {
    setCurrentPage(page.selected + 1);
  };

  const handleGroupsFilter = (key, value) => {
    let ids = value?.map((item) => item?.value);
    setGroups(ids);
    handleFilters({ groups: ids });
  };
  const handleFilters = (props) => {
    let keyword = props?.isKeyword ? props?.keyword : searchKeyword;
    let group_ids = props?.groups || groups;
    getData(perPage, currentPage, keyword, group_ids);
  };

  let tableData = data?.data || [];
  return (
    <Fragment>
      {loading && (
        <Alert className="p-1 mt-2 " color="warning">
          Please wait, getting data...
        </Alert>
      )}
      <Card className="overflow-hidden mt-2 ">
        <CardHeader>
          <CardTitle tag="h3" className="flex-grow-1 mb-1">
            {title}
          </CardTitle>
          {dropdownFilter && (
            <CardTitle style={{ minWidth: "300px" }} className="mr-1 mb-1">
              <CustomSelector
                onlySelector={true}
                isDisabled={loading}
                labelSM="6"
                FieldSM="6"
                placeholder={"Select group"}
                options={getSelectOptions(dropDownOptions?.data, "_id", "name")}
                name={title?.toLowerCase()}
                onChange={handleGroupsFilter}
                isMulti={true}
                isClearable={true}
              />
            </CardTitle>
          )}
          {filter && (
            <CardTitle className="mb-1">
              <InputGroup className="search-input">
                <Input
                  disabled={loading}
                  ncols={["col-md-12"]}
                  placeholder={"Search"}
                  onChange={(e) => handleSmartSearch(e.target.value)}
                />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <Search size={14} />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </CardTitle>
          )}
        </CardHeader>
        <CardBody className="overflow-auto p-0 ">
          <Table className="table table-bordered" striped={true}>
            <thead>
              <tr>
                {column?.map((item, index) => {
                  const thProps = {
                    style: {
                      minWidth: item?.minWidth || "auto",
                    },
                  };
                  return (
                    <th key={index} {...thProps}>
                      {item?.name}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {tableData?.map((item, index) => {
                let TDTag = item?.isBold ? "th" : "td";
                return (
                  <tr key={index}>
                    {column?.map((cItem, cIndex) => {
                      return (
                        <TDTag
                          key={cIndex}
                          className={`${
                            item?.isBold && cIndex > 0 ? "text-right" : ""
                          }`}
                        >
                          {cItem.selector(item, index)}
                        </TDTag>
                      );
                    })}
                  </tr>
                );
              })}
              {tableData?.length === 0 && !loading && (
                <tr>
                  <td colSpan={column?.length}>
                    <h6 className="text-center py-5">No Records Available!</h6>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </CardBody>
      </Card>
      <CustomPagination />
    </Fragment>
  );
};

export default CustomTable;

import { TextInput } from "flowbite-react";
import SearchField from "../../components/searchField/SearchField";
import SideBar2 from "../../components/sideBar/SideBar2";
import SelectField from "../../components/dropDown/SelectField";
import DropZone from "../../components/dropZone/DropZone";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { NormalTable } from "../../components/tables/NormalTable";
import { useState } from "react";

function DocumentPage() {
  const handleViewButtonClick = () => {
    alert("handleViewButtonClick");
  };
  const handleDeleteButtonClick = () => {
    alert("handleDeleteButtonClick");
  };

  const actionButtons = [
    {
      icon: <RemoveRedEyeIcon style={{ marginLeft: -25, marginRight: -25 }} />,
      tooltip: "View",
      action: handleViewButtonClick,
    },

    {
      icon: <DeleteIcon style={{ marginLeft: -25, marginRight: -25 }} />,
      tooltip: "Delete",
      action: handleDeleteButtonClick,
    },
  ];
  const [columnHeaders, setColumnHeaders] = useState<any>([
    "Document Type",
    "Extention",
    "Size",
    "Name",
    "Status",
    "Action",
    "",
  ]);

  const [tableData, settableData] = useState<any>([
    {
      DocumentType: "DT",
      Extention: "EX",
      Size: "10",
      Name: "A",
      Status: (
        <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-100 text-green-800">
          Active
        </span>
      ),
      Action: (
        <div className="cursor-pointer">
          <RemoveRedEyeIcon style={{}} />
        </div>
      ),

      Action2: (
        <div className="cursor-pointer">
          <DeleteIcon style={{}} />
        </div>
      ),
    },
    {
      DocumentType: "DT2",
      Extention: "EX2",
      Size: "102",
      Name: "A2",
      Status: (
        <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-100 text-green-800">
          Active
        </span>
      ),
      Action: (
        <div className="cursor-pointer">
          <RemoveRedEyeIcon style={{}} />
        </div>
      ),

      Action2: (
        <div className="cursor-pointer">
          <DeleteIcon style={{}} />
        </div>
      ),
    },
    {
      DocumentType: "DT3",
      Extention: "EX3",
      Size: "103",
      Name: "A3",
      Status: (
        <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-100 text-green-800">
          Active
        </span>
      ),
      Action: (
        <div className="cursor-pointer">
          <RemoveRedEyeIcon style={{}} />
        </div>
      ),

      Action2: (
        <div className="cursor-pointer">
          <DeleteIcon style={{}} />
        </div>
      ),
    },
    {
      DocumentType: "DT4",
      Extention: "EX4",
      Size: "104",
      Name: "A4",
      Status: (
        <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-100 text-green-800">
          Active
        </span>
      ),
      Action: (
        <div className="cursor-pointer">
          <RemoveRedEyeIcon style={{}} />
        </div>
      ),

      Action2: (
        <div className="cursor-pointer">
          <DeleteIcon style={{}} />
        </div>
      ),
    },
  ]);

  return (
    <>
      <SideBar2 />
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-10 dark:border-gray-700">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="bg-white rounded-lg h-[746px] lg:col-span-3 shadow-md ">
              <div className="flex items-center justify-center gap-[100px] grow ">
                <span className="cursor-pointer mt-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 hover:text-blue-900">
                  All Documents
                </span>
                <span className="cursor-pointer mt-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 hover:text-blue-900">
                  Recent Documents
                </span>
                <span className="cursor-pointer mt-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 hover:text-blue-900">
                  New Documents
                </span>
                <span className="cursor-pointer mt-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 hover:text-blue-900">
                  Files
                </span>
              </div>
              <div className="flex gap-[20px] items-center justify-center  mt-10  ">
                {/* search field */}
                <input
                  type="text"
                  className="hidden  min-[511px]:block py-2 px-3 border-[1px] rounded bg-transparent border-gray-400 focus:outline-0 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  placeholder="Search "
                />
                {/* search field */}
                <SelectField title={"Document Categories"} />
                <SelectField title={"Document Name"} />
                <SelectField title={"Document Type"} />
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold text-white transition-all bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                  Search
                </button>
              </div>
              <div className="mx-10 mt-10">
                <DropZone />
              </div>
              <div className="mx-10 mt-10">
                <NormalTable
                  columnHeaders={columnHeaders}
                  tableData={tableData}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-12">
        <div className="col-span-12 bg-colo-blue">1</div>
      </div> */}
    </>
  );
}
export default DocumentPage;

import propic from "../../images/propic.jpg";
import logo from "../../images/logo.png";
import wordlogo from "../../images/word.png";
import excellogo from "../../images/excel.png";
import txt from "../../images/txt.png";
import pp from "../../images/powerpoint.png";
import pdf from "../../images/pdf.png";
import chart from "../../images/chart.png";
import folder from "../../images/folder.png";
import files from "../../images/files.png";
import icloud from "../../images/icloud.png";
import StorageCard from "../../components/storageCards/StorageCard";
import InternalStorageCard from "../../components/storageCards/InternalStorageCard";
import ExternalCards from "../../components/storageCards/ExternalCards";
import SideBar2 from "../../components/sideBar/SideBar2";
const Storage = [
  {
    imageUrl: require("../../images/icloud.png"),
    text: "Cloud",
  },
  {
    imageUrl: require("../../images/google.png"),
    text: "Google Drive",
  },
  {
    imageUrl: require("../../images/cloud.png"),
    text: "Mega Drive",
  },
  {
    imageUrl: require("../../images/wd.png"),
    text: "Media fire",
  },
];

function Dashboard() {
  const numberOfCards = 2;
  const numberOfCards2 = 4;
  const numberOfCards3 = 2;
  return (
    <>
      <SideBar2 />
      {/* <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="p-4 sm:ml-64">
        {/* <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14"> */}
        <div className="p-4 dark:border-gray-700 mt-14">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="bg-white rounded-lg h-[510px] lg:col-span-2 shadow-md ">
              <h2 className="mt-2 ml-2 font-normal text-left text-md dark:text-white">
                Document Type
              </h2>
              <div className="flex ">
                <div className="p-4 m-2 transition-transform transform rounded-lg cursor-pointer hover:scale-105 grow bg-gradient-to-r from-blue-100 via-white-200 to-blue-100">
                  <img src={wordlogo} className="w-10 mx-auto " alt="" />
                </div>
                <div className="p-4 m-2 transition-transform transform rounded-lg cursor-pointer hover:scale-105 grow bg-gradient-to-r from-blue-100 via-white-200 to-blue-100">
                  <img src={excellogo} className="w-10 mx-auto " alt="" />
                </div>
                <div className="p-4 m-2 transition-transform transform rounded-lg cursor-pointer hover:scale-105 grow bg-gradient-to-r from-blue-100 via-white-200 to-blue-100">
                  <img src={pp} className="w-10 mx-auto " alt="" />
                </div>
                <div className="p-4 m-2 transition-transform transform rounded-lg cursor-pointer hover:scale-105 grow bg-gradient-to-r from-blue-100 via-white-200 to-blue-100">
                  <img src={pdf} className="w-10 mx-auto " alt="" />
                </div>
                <div className="p-4 m-2 transition-transform transform rounded-lg cursor-pointer hover:scale-105 grow bg-gradient-to-r from-blue-100 via-white-200 to-blue-100">
                  <img src={txt} className="w-10 mx-auto " alt="" />
                </div>
              </div>

              {/* StorageCards */}

              {/* <div className="p-4 m-2 rounded-lg grow bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100">
                  <StorageCard />
                </div> */}
              <h2 className="mt-5 mb-3 ml-2 font-normal text-left text-md dark:text-white">
                External Storage
              </h2>
              <div className="flex flex-row">
                {/* {Array.from({ length: numberOfCards3 }).map((i, index) => ( */}
                <div className="flex grid grid-cols-12 w-[100%]">
                  {Storage.map((i, index) => (
                    <div className="col-span-6">
                      <ExternalCards imageUrl={i.imageUrl} text={i.text} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="h-[500px] bg-opacity-50 bg-white shadow-md rounded-lg">
              <h2 className="mt-2 mb-2 ml-2 font-normal text-left text-md dark:text-white">
                Internal Storage
              </h2>
              <InternalStorageCard
                imageUrl={chart}
                text={"457GB used from 500GB"}
              />
              <h2 className="mt-5 ml-2 font-normal text-left text-md dark:text-white">
                Recent Folders
              </h2>
              {Array.from({ length: numberOfCards }).map((_, index) => (
                <div className="flex flex-row items-start ">
                  <div className="w-[100px]">
                    <ul>
                      <li>
                        <div className="p-2 ">
                          <StorageCard
                            imageUrl={folder}
                            text={"- Document delatis"}
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
              <h2 className="mt-5 ml-2 font-normal text-left text-md dark:text-white">
                Recent Files
              </h2>
              {Array.from({ length: numberOfCards2 }).map((_, index) => (
                <div className="flex flex-row items-start ">
                  <div className="w-[100px]">
                    <ul>
                      <li>
                        <div className="p-2 pt-2">
                          <StorageCard
                            imageUrl={files}
                            text={"- File delatis"}
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;

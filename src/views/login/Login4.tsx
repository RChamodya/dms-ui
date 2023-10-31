import React from "react";
import Cover_Image2 from "../../images/background.jpeg";
import TextInput from "../../components/InputFields/TextInput";

function Login4() {
  return (
    <>
      <div className="flex flex-row justify-center items-center text-2xl bg-gradient-to-br from-[#352070] to-[#6348a5] h-screen">
        <div className=" w-[500px] h-[500px] ">
          {" "}
          <img
            className="object-cover w-full h-full rounded-s-lg"
            src={Cover_Image2}
            alt=""
          />
        </div>
        <div className=" w-[500px] h-[500px] ">
          <form className=" h-[500px] w-full mx-auto bg-[#f8efef] p-2 px-8 rounded-r-lg">
            <div className=" mx-auto mt-[60px] relative w-[400px] py-1  h-900px] border-2  flex justify-center items-center border-[#884EA0] rounded-md ">
              <div className="w-[300px]">
                <h2 className="mt-2 text-2xl font-semibold text-center dark:text-white">
                  LOGIN
                </h2>
                <h6 className="pb-5 text-sm text-center dark:text-white">
                  Please login with your account
                </h6>
                <div className="flex flex-col py-2 text-gray-400">
                  <TextInput title={"User Name"} inputType={"text"} />
                </div>
                <div className="flex flex-col py-2 text-gray-400">
                  <TextInput title={"Password"} inputType={"password"} />
                </div>
                <button className="w-full py-2 my-5 text-[18px] font-normal text-white bg-[#884EA0] rounded-lg shadow-lg shadow-[#884EA0]/50 hover:[#884EA0]/40 ">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login4;

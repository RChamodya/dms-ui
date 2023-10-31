import React from "react";
import Cover_Image from "../../images/coverimg.jpg";
import Cover_Image2 from "../../images/background.jpeg";
import TextInput from "../../components/InputFields/TextInput";

function Login3() {
  return (
    <div className="grid w-full h-screen grid-cols-1 sm:grid-cols-2 ">
      {/* <div className="hidden sm:block"> */}
      <div className="w-[150px] h-[250px]">
        <img className="object-cover w-full h-full" src={Cover_Image2} alt="" />
      </div>
      <div className="flex flex-col justify-center bg-gray-800">
        <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
          <h2 className="text-4xl font-bold text-center dark:text-white ">
            SIGN IN
          </h2>
          <div className="flex flex-col py-2 text-gray-400">
            <TextInput title={"User Name"} inputType={"text"} />
          </div>
          <div className="flex flex-col py-2 text-gray-400">
            <TextInput title={"Password"} inputType={"password"} />
          </div>
          <button className="w-full py-2 my-5 font-semibold text-white bg-teal-500 rounded-lg shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 ">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login3;

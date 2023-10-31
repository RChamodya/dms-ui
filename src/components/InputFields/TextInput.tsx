import React from "react";
interface TextInputProps {
  title: string;
  inputType: "text" | "password" | "email" | "number" | "date" | "url" | "tel";
  label?: string;
  placeholder?: string;
}
function TextInput({ title, inputType, label, placeholder }: TextInputProps) {
  return (
    <>
      <div className="w-full">
        <h3 className="mb-1 text-lg font-normal text-left">{title}</h3>
        {label && <label className="block mb-1 text-sm">{label}</label>}
        <input
          type={inputType}
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
export default TextInput;

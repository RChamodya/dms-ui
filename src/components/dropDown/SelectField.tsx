import React from "react";

interface SelectProp {
  title: string;
}
function SelectField({ title }: SelectProp) {
  return (
    <>
      <select className="block gap-4 px-4 py-3 text-sm border-gray-200 rounded-md pr-9 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
        <option selected>{title}</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </>
  );
}

export default SelectField;

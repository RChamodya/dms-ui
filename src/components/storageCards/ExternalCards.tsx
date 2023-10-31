import React from "react";
interface CardProps {
  imageUrl: string;
  text: string;
}

function ExternalCards({ imageUrl, text }: CardProps) {
  return (
    <div className="p-3 m-2 transition-transform transform rounded-lg cursor-pointer hover:scale-105 grow bg-gradient-to-r from-blue-100 via-white-200 to-blue-100">
      <img
        src={imageUrl}
        alt="Card Image"
        className="w-[70px] h-[70px] rounded-md"
      />
      <div className="ml-2">{text}</div>
      <div className="flex w-full h-4 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className="flex flex-col justify-center overflow-hidden text-xs text-center text-white bg-blue-500"
          role="progressbar"
          style={{ width: " 57%" }}
          aria-valuenow={57}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          57%
        </div>
      </div>
    </div>
  );
}

export default ExternalCards;

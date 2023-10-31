import React from "react";
interface CardProps {
  imageUrl: string;
  text: string;
}

function InternalStorageCard({ imageUrl, text }: CardProps) {
  return (
    <div className="flex p-2 ml-2 bg-gradient-to-r from-blue-100 via-white-200 to-blue-100 rounded-md shadow-md h-18 transform hover:scale-105 transition-transform cursor-pointer w-[300px]">
      <img src={imageUrl} alt="Card Image" className="w-10 h-10 rounded-md" />
      <div className="ml-2">{text}</div>
    </div>
  );
}

export default InternalStorageCard;

interface CardProps {
  imageUrl: string;
  text: string;
}

function StorageCard({ imageUrl, text }: CardProps) {
  return (
    // <div className="transition-transform transform cursor-pointer hover:scale-105">
    // <div className="flex bg-gradient-to-r from-blue-100 via-white-200 to-blue-100 pt-1 pl-2 rounded-md shadow-md h-18 transform hover:scale-105 transition-transform cursor-pointer w-[300px]">
    <div className="flex bg-gradient-to-r from-white-100 via-white-200 to-white-100 bg-opacity-50 pt-1 pl-2 rounded-md  h-18 transform hover:scale-105 hover:shadow-md transition-transform cursor-pointer w-[300px]">
      <img src={imageUrl} alt="Card Image" className="w-8 h-8 rounded-md" />
      <div className="ml-2">{text}</div>
    </div>
  );
}

export default StorageCard;

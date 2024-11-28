import React from "react";
import Image from "next/image";

interface CardProps {
  id: number;
  image: string;
  name: string;
  status: string;
  location: string;
}

const Card: React.FC<CardProps> = ({ id, image, name, status, location }) => {
  return (
    <div
      key={id}
      className="border border-gray-300 rounded-lg p-4 shadow-md flex flex-col items-center"
    >
      <Image
        src={image}
        alt={name}
        width={250}
        height={250}
        className="rounded-lg w-full"
      />
      <h2 className="text-xl font-semibold mt-4">{name}</h2>
      <p className="text-sm text-gray-600">
        <strong>Status:</strong> {status}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Location:</strong> {location}
      </p>
    </div>
  );
};

export default Card;

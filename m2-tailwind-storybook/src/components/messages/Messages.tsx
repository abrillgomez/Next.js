import { MessageType } from "@/types/message.types";
import Link from "next/link";
import Image from "next/image";

type MessageProps = {
  message: MessageType;
};

const Message = ({ message }: MessageProps) => {
  return (
    <div className="flex">
      <div className="rounded-full p-5 bg-gray-300 w-16 text-center mb-4">
        <span className="font-semibold text-sm">AS</span>
      </div>
      <div className="flex flex-col ml-4 mt-2">
        <div className="flex">
          <h3>{message.name}</h3>
          <div className="text-md ml-4 text-gray-600 cursor-pointer">
            @<Link href={`/users/${message.username}`}>{message.username}</Link>
          </div>
        </div>
        <p>{message.message}</p>
        <div>
          <Image
            className="rouded-full"
            src="https://heymondo.es/blog/wp-content/uploads/2022/08/Turquoise-Bay-una-de-las-mejores-playas-de-Australia.jpg.webp"
            alt="Foto de una playa"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Message;

//next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/my-avatar.png"}
        width={1279}
        height={1536}
        alt=""
        className="translate-z-0 w-[80%] h-full ml-20"
      />
    </div>
  );
};

export default Avatar;

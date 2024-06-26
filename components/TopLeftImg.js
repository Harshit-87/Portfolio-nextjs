import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge  w=[200px] xl:w-[400px] opacity-50 z-0">
      <Image src="/top-left-img.png" alt="" width={400} height={400} />
    </div>
  );
};

export default TopLeftImg;

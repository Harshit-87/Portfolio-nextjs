/* eslint-disable react/jsx-key */
// icons
import { BsArrowRight } from "react-icons/bs";
import {
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3,
  FaGithub,
  FaLink,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiPostman,
  SiInsomnia,
  SiFirebase,
} from "react-icons/si";

// data
const workSlider = {
  slides: [
    {
      images: [
        {
          path: "/Project1.png",
          title: "StudyNotion - An Ed - Tech Platform",
          description:
            "A fully functional ed-tech platform that enables users to create, consume, and rate educational content.",
          tech: [
            <FaReact />,
            <FaNode />,
            <SiExpress />,
            <SiMongodb />,
            <SiTailwindcss />,
            <SiPostman />,
            <SiJavascript />,
          ],
          links: [
            [<FaGithub />, "https://github.com/Harshit-87/mern-edtech"],
            [<FaLink />, "https://mern-edtech.vercel.app/"],
          ],
        },
      ],
    },
    {
      images: [
        {
          path: "/Project2.png",
          title: "FeelHome - An Estate Platform",
          description:
            "An Estate Platform that allows users to sell, buy, and rent properties across the country.",
          tech: [
            <FaReact />,
            <FaNode />,
            <SiExpress />,
            <SiMongodb />,
            <SiTailwindcss />,
            <SiInsomnia />,
            <SiFirebase />,
          ],
          links: [
            [<FaGithub />, "https://github.com/Harshit-87/mern-estate"],
            [<FaLink />, "https://mern-estate-3vsd.onrender.com/"],
          ],
        },
      ],
    },
    {
      images: [
        {
          path: "/Project3.png",
          title: "Sociopedia - A Social Media Platform",
          description:
            "Led end-to-end development of a social media app, integrating real-time features and fostening community engagement",
          tech: [
            <FaReact />,
            <FaNode />,
            <SiExpress />,
            <SiMongodb />,
            <SiTailwindcss />,
          ],
          links: [
            [<FaGithub />, "https://github.com/Harshit-87/mern-socialmedia"],
            [<FaLink />, "https://mern-socialmedia-gamma.vercel.app/"],
          ],
        },
      ],
    },
    {
      images: [
        {
          path: "/Project4.png",
          title: "WeatherWise+ - A Weather App",
          description:
            "A dynamic weather application to provide users with real-time weather information.",
          tech: [<FaHtml5 />, <FaCss3 />, <SiJavascript />],
          links: [
            [<FaGithub />, "https://github.com/Harshit-87/Weather-App-Project"],
            [<FaLink />, "https://weather-app-project-mauve.vercel.app/"],
          ],
        },
      ],
    },
  ],
};

// const workSlider = [
//   {
//     path: "/Project1.png",
//     title: "StudyNotion - An Ed - Tech Platform",
//     description:
//       "A fully functional ed-tech platform that enables users to create, consume, and rate educational content.",
//     tech: [
//       <FaReact />,
//       <FaNode />,
//       <SiExpress />,
//       <SiMongodb />,
//       <SiTailwindcss />,
//       <SiPostman />,
//       <SiJavascript />,
//     ],
//     links: [
//       [<FaGithub />, "https://github.com/Harshit-87/mern-edtech"],
//       [<FaLink />, "https://mern-edtech.vercel.app/"],
//     ],
//   },
//   {
//     path: "/Project2.png",
//     title: "FeelHome - An Estate Platform",
//     description:
//       "An Estate Platform that allows users to sell, buy, and rent properties across the country.",
//     tech: [
//       <FaReact />,
//       <FaNode />,
//       <SiExpress />,
//       <SiMongodb />,
//       <SiTailwindcss />,
//       <SiInsomnia />,
//       <SiFirebase />,
//     ],
//     links: [
//       [<FaGithub />, "https://github.com/Harshit-87/mern-estate"],
//       [<FaLink />, "https://mern-estate-3vsd.onrender.com/"],
//     ],
//   },
//   {
//     path: "/Project3.png",
//     title: "Sociopedia - A Social Media Platform",
//     description:
//       "Led end-to-end development of a social media app, integrating real-time features and fostening community engagement",
//     tech: [
//       <FaReact />,
//       <FaNode />,
//       <SiExpress />,
//       <SiMongodb />,
//       <SiTailwindcss />,
//     ],
//     links: [
//       [<FaGithub />, "https://github.com/Harshit-87/mern-socialmedia"],
//       [<FaLink />, "https://mern-socialmedia-gamma.vercel.app/"],
//     ],
//   },
//   {
//     path: "/Project4.png",
//     title: "WeatherWise+ - A Weather App",
//     description:
//       "A dynamic weather application to provide users with real-time weather information.",
//     tech: [<FaHtml5 />, <FaCss3 />, <SiJavascript />],
//     links: [
//       [<FaGithub />, "https://github.com/Harshit-87/Weather-App-Project"],
//       [<FaLink />, "https://weather-app-project-mauve.vercel.app/"],
//     ],
//   },
// ];

//next image
import Image from "next/image";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

//import required modules
import { Pagination } from "swiper";
import { Autoplay } from "swiper";
import { FreeMode } from "swiper";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={([Pagination], [Autoplay])}
      className="h-full "
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="w-full flex gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div key={index}>
                    <div className="relative rounded-lg overflow-hidden flex flex-col justify-center items-center group">
                      <div className="flex items-center justify-center relative overflow-hidden group">
                        {/* image */}
                        <Image
                          src={image.path}
                          width={1000}
                          height={300}
                          alt=""
                        />
                        {/* overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-[#870ff8] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                        {/* title */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            {/* title part 1 */}
                            <div className="delay-100">
                              <Link
                                className="hover:text-accent transition-all duration-300"
                                target="_blank"
                                href={image.links[1][1]}
                              >
                                LIVE
                              </Link>
                            </div>
                            {/* title part 2 */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              <Link
                                className="hover:text-accent transition-all duration-300"
                                target="_blank"
                                href={image.links[1][1]}
                              >
                                PROJECT
                              </Link>
                            </div>
                            {/* icons */}
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <Link
                                className="hover:text-accent transition-all duration-300 text-2xl"
                                target="_blank"
                                href={image.links[1][1]}
                              >
                                <BsArrowRight />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4  flex flex-col gap-2">
                        {/* title div */}
                        <div className="text-white/60 text-xl flex justify-center">
                          {image.title}
                        </div>
                        {/* description */}
                        <div className="text-white/60 ">
                          {image.description}
                        </div>
                        {/* tech used*/}
                        <div className="flex gap-x-2">
                          <div className="text-white/60">Tech Used - </div>
                          <div className="flex gap-x-2 text-2xl">
                            {image.tech}
                          </div>
                        </div>
                        {/* links */}
                        <div className="flex gap-x-2">
                          <div className="text-white/60">Links - </div>
                          <div className="flex gap-x-2 text-2xl">
                            {image.links.map((link, itemIndex) => {
                              return (
                                <div key={itemIndex} className=" text-white">
                                  <Link
                                    className="hover:text-accent transition-all duration-300"
                                    target="_blank"
                                    href={link[1]}
                                  >
                                    {link[0]}
                                  </Link>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;

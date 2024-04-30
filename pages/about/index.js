/* eslint-disable react/jsx-key */
import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaJava,
  FaNode,
  FaDocker,
  FaCloudDownloadAlt,
  FaGit,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiInsomnia,
  SiPrisma,
  SiZod,
  SiTailwindcss,
  SiBootstrap,
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodingninjas,
  SiCodeforces,
  SiCodechef,
  SiHackerrank,
} from "react-icons/si";
import { TbBrandCpp, TbSql } from "react-icons/tb";
import { RiGithubFill } from "react-icons/ri";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Programming Languages",
        icons: [
          <TbBrandCpp />,
          <FaJava />,
          <FaJs />,
          <SiTypescript />,
          <FaHtml5 />,
          <FaCss3 />,
          <TbSql />,
        ],
      },
      {
        title: "CSS Libraries",
        icons: [<SiTailwindcss />, <SiBootstrap />],
      },
      {
        title: "Web Frameworks",
        icons: [
          <FaReact />,
          <SiNextdotjs />,
          <FaNode />,
          <SiExpress />,
          <SiPrisma />,
          <SiZod />,
        ],
      },
      {
        title: "Databases",
        icons: [<SiMysql />, <SiMongodb />],
      },
      {
        title: "Tools",
        icons: [<FaDocker />, <SiPostman />, <SiInsomnia />, <FaGit />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Web Development Hackathon - Winner",
        stage: "2022",
      },
      {
        title: "CodeChanakya Hackathon by CSI - Winner",
        stage: "2021",
      },
    ],
  },
  {
    title: "Coding Profiles",
    info: [
      {
        title: "Links",
        links: [
          [<RiGithubFill />, "https://github.com/Harshit-87"],
          [<SiLeetcode />, "https://leetcode.com/u/Harshit___Srivastava/"],
          [
            <SiGeeksforgeeks />,
            "https://auth.geeksforgeeks.org/user/harshitsrivastava25012002",
          ],
          [
            <SiCodingninjas />,
            "https://www.naukri.com/code360/profile/f73b1d28-2dae-4e5d-9702-254b55820811",
          ],
          // [<SiCodeforces />, ""],
          // [<SiCodechef />, ""],
          // [<SiHackerrank />, ""],
        ],
      },
      {
        title: "Download Resume",
        resume: [<FaCloudDownloadAlt />],
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "B.Tech (CSE) - United College of Engineering & Research, India",
        stage: "2023",
      },
      {
        title: "Intermediate - Bishop Johnson School & College, India",
        stage: "2019",
      },
      {
        title: "High School - Bishop Johnson School & College, India",
        stage: "2017",
      },
    ],
  },
];

//components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//counter
import CountUp from "react-countup";
import Link from "next/link";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute h-full -left-[24%] bottom-0"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center z-10">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="xl:h2 text-2xl font-bold"
          >
            Crafting the <span className="text-accent">Future.</span> One Line
            of Code at a Time
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 hidden xl:flex"
          >
            Hi, I&apos;m Harshit Srivastava, an enthusiastic Software Developer
            armed with a Bachelor&apos;s degree in Computer Science and
            Engineering. Fueled by a passion for innovation and a knack for
            problem-solving, Here are my skills and additional details. Hava a
            look!
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              {/* <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of Experience
                </div>
              </div> */}
              {/* clients */}
              {/* <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied Clients
                </div>
              </div> */}
              {/* projects */}
              {/* <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={650} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div> */}
              {/* awards */}
              {/* <div className="relative flex-1 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning Awards
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`} //z-indexxxxxxxxxxxxxx
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60 "
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div key={itemIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex gap-x-4 z-10">
                    {/* Links */}
                    {item.links?.map((link, itemIndex) => {
                      return (
                        <div key={itemIndex} className="text-2xl text-white">
                          <Link
                            href={link[1]}
                            className="hover:text-accent transition-all duration-300"
                            target="_blank"
                          >
                            {link[0]}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex gap-x-4">
                    {/* Links */}
                    {item.resume?.map((link, itemIndex) => {
                      return (
                        <div key={itemIndex} className="text-2xl text-white">
                          <button
                            className="hover:text-accent transition-all duration-300"
                            onClick={(e) => {
                              e.preventDefault();
                              window.open("/Harshit_Srivastava.pdf", "_blank");
                            }}
                          >
                            {link}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

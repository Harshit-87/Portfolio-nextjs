// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxArrowTopRight,
} from "react-icons/rx";

// import next image
import Image from "next/image";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper";

// data
const serviceData = [
  {
    logo: "/Razorpay_logo.svg",
    company: "Razorpay",
    icon: <RxCrop />,
    title: "Solutions Engineer",
    duration: "April 2026 - Present",
    bullets: [
      "Developed the Payments Flow Playground supporting multiple Payment Gateway products, accelerating merchant integration testing and troubleshooting.",
      "Troubleshot and maintained Java and Node.js production services, resolving critical payment workflow issues for enterprise merchants.",
      "Built internal tools and collaborated with Product and Engineering teams to improve debugging efficiency and reduce issue resolution time using Java, Python, JavaScript, TypeScript, React.js, Next.js, Android, REST APIs, and SQL."
    ],
    skills: ["Java", "Node.js", "React.js", "Next.js", "TypeScript", "SQL"]
  },
  {
    logo: "/Razorpay_logo.svg",
    company: "Razorpay",
    icon: <RxPencil2 />,
    title: "Associate Solutions Engineer",
    duration: "June 2024 - April 2026",
    bullets: [
      "Debugged production issues for enterprise merchants integrating Razorpay Payment Gateway APIs by analyzing backend services, API failures, payment issues, and production incidents using logs and API traces.",
      "Collaborated with Engineering teams and enterprise merchants during onboarding, API integration, and production go-live, leveraging Java, JavaScript, TypeScript, Node.js, and REST APIs to deliver reliable payment solutions."
    ],
    skills: ["Java", "JavaScript", "TypeScript", "Node.js", "REST APIs"]
  },
  {
    logo: "/appfoster-logo.png",
    company: "Appfoster Innovations",
    icon: <RxDesktop />,
    title: "Associate Software Engineer Intern",
    duration: "March 2024 - June 2024",
    bullets: [
      "Built scalable full-stack web applications using React.js, Next.js, Node.js, MongoDB and MySQL.",
      "Developed reusable frontend components, integrated REST APIs and delivered production-ready features in collaboration with senior developers."
    ],
    skills: ["React.js", "Next.js", "Node.js", "MongoDB", "MySQL"]
  }
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination, Autoplay]}
      className="h-[400px] sm:h-[430px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-[360px] sm:h-[390px] rounded-xl p-5 flex flex-col justify-between group cursor-pointer hover:bg-[rgba(89,65,169,0.22)] border border-white/5 hover:border-accent/30 transition-all duration-300 select-none">
              <div className="flex flex-col gap-y-3 overflow-hidden">
                {/* Logo and Icon header */}
                <div className="flex items-center justify-between">
                  <div className="relative w-[110px] h-[32px] flex items-center">
                    <Image
                      src={item.logo}
                      alt={item.company}
                      fill
                      className="object-contain object-left brightness-0 invert opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <div className="text-3xl text-accent/80 group-hover:text-accent group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                </div>

                {/* Title, Company & Duration */}
                <div>
                  <h3 className="text-[15px] sm:text-base font-semibold text-white group-hover:text-accent transition-colors duration-300 leading-snug">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap justify-between items-center text-[11px] sm:text-xs text-white/40 mt-1 font-light gap-x-2">
                    <span>{item.company}</span>
                    <span className="text-white/30">{item.duration}</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-1.5 text-[11px] sm:text-xs text-white/60 font-light overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent pr-1">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-x-2 leading-relaxed">
                      <span className="text-accent mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Tags & Action button */}
              <div className="flex items-end justify-between border-t border-white/5 pt-3 mt-2">
                <div className="flex flex-wrap gap-1 max-w-[85%]">
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-white/5 border border-white/5 text-[9px] text-white/50 px-1.5 py-0.5 rounded group-hover:bg-accent/10 group-hover:border-accent/20 group-hover:text-accent/90 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="text-2xl text-white/50 group-hover:text-accent transition-all duration-300">
                  <RxArrowTopRight className="group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;

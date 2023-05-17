import { Alert } from "antd";
import React, { FC } from "react";
import Marquee from "react-fast-marquee";

const Footer:FC = () => (
  <div 
  className=" w-full pt-10 "
  >
  <Alert
  className="h-20 "

    banner
    message={
      <Marquee pauseOnHover gradient={false}>
        <span 
        className="text-2xl"
        >Your ads could be here !!! :)</span>
        <span 
        className="ml-16 text-2xl"
        >2023 year</span>
        <span 
        className="ml-16 text-2xl"
        >
          Hebron IT academy
        </span>
        <span 
        className="ml-16 text-2xl"
        >
          Kryvbass</span>
        <span 
        className="ml-16 text-2xl"
        >
          Why always want sleep?
        </span>
        <span 
        className="ml-16 text-2xl"
        >
          Штани за 40 гривень
        </span>
      </Marquee>
    }
  />
  </div>
);
export default Footer;

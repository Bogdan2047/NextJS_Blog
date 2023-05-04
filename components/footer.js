import { Alert } from "antd";
import React from "react";
import Marquee from "react-fast-marquee";
const Footer = () => (
  <Alert
    style={{ height: "80px", width: "100%" }}
    banner
    message={
      <Marquee pauseOnHover gradient={false}>
        <span style={{ fontSize: "25px" }}>Your ads could be here !!! :)</span>
        <span style={{ marginLeft: "60px", fontSize: "25px" }}>2023 year</span>
        <span style={{ marginLeft: "60px", fontSize: "25px" }}>
          Hebron IT academy
        </span>
        <span style={{ marginLeft: "60px", fontSize: "25px" }}>Kryvbass</span>
        <span style={{ marginLeft: "60px", fontSize: "25px" }}>
          Why always want sleep?
        </span>
        <span style={{ marginLeft: "60px", fontSize: "25px" }}>
          Штани за 40 гривень
        </span>
      </Marquee>
    }
  />
);
export default Footer;

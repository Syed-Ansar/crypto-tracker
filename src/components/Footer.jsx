import { Space, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
    <div className="footer">
      <Typography.Title
        level={5}
        style={{ color: "white", textAlign: "center" }}
      >
        {/*Crypto Galaxy &copy; 2022 | All Rights Reserved*/}
        Made By{" "}
        <a
          style={{ color: "white" }}
          href="https://www.linkedin.com/in/syed--ansar/"
        >
          Syed Ansar
        </a>{" "}
        | Github:{" "}
        <a
          style={{ color: "white" }}
          href="https://github.com/Syed-Ansar/crypto-tracker"
        >
          {" "}
          Crypto Tracker App{" "}
        </a>
      </Typography.Title>
      <Space>
        <Link to="/">Home</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/news">News</Link>
      </Space>
    </div>
  );
};

export default Footer;

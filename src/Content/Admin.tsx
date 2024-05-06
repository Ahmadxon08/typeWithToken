import React, { useEffect, useState } from "react";

import "./Admin.scss";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import { GoHomeFill } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";
// import defineConfig from './../../vite.config';

const { Header, Sider, Content } = Layout;

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const json = localStorage.getItem("access_token");
  console.log(json);

  if (json) {
    const access_token = JSON.parse(json);
    if (access_token) {
      const token = access_token.token;
      console.log(token);
    }
  }

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    if (!json) {
      navigate("/login");
    }
    console.log(json);
  }, [json, navigate]);

  return (
    <Layout>
      <Sider
        className="headerSider"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="demo-logo-vertical" />
        <Menu
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/"]}
          onClick={(e) => navigate(e.key)}
          items={[
            {
              key: "/",
              icon: <GoHomeFill color="white" size={36} />,
              label: "Home",
            },
            {
              key: "/service",
              icon: <RiCustomerService2Line color="white" size={36} />,
              label: "Service",
            },
            {
              key: "3",
              icon: <IoPersonOutline color="white" size={36} />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="headerContainer"
          style={{ padding: 0, background: colorBgContainer }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div className="profile">
            <Profile />
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Admin;

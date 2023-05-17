import {
  ContainerOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import Link from "next/link";
import { FC, useState } from "react";
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem(<Link href="/login">Sing In</Link>, "1", <PieChartOutlined />),
  getItem(<Link href="/">Main</Link>, "2", <DesktopOutlined />),
  getItem(<Link href="/posts">Posts</Link>, "3", <ContainerOutlined />),
  getItem("For find job", "sub1", <MailOutlined />, [
    getItem(<Link href="https://djinni.co/">Djinni</Link>, "5"),
    getItem(<Link href="https://www.linkedin.com/">LinkedIn</Link>, "6"),
    getItem(<Link href="https://jobs.dou.ua">Dou</Link>, "7"),
    getItem(<Link href="">About</Link>, "8"),
  ]),
];


const Header:FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      style={{
        width: "300px",
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};
export default Header;

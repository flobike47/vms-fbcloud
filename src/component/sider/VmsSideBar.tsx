import {Menu, MenuProps, theme} from "antd";
import Sider from "antd/es/layout/Sider";
import {useState} from "react";
import {
  CarOutlined,
  DesktopOutlined,
  FileOutlined, HomeOutlined,
  PieChartOutlined, SettingOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {NavLink} from "react-router";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<NavLink  to={"/"} >Home</NavLink> , '1', <HomeOutlined />),
  getItem(<NavLink  to={"/vehicles"} >Vehicles</NavLink> , '2', <CarOutlined />),
  getItem( <NavLink  to={"/customers"} >Customers</NavLink>, '12', <UserOutlined />),
  getItem("Settings", '9', <SettingOutlined />, [
    getItem(<NavLink  to={"/settings/personal"} >Personal</NavLink>, '3'),
    getItem(<NavLink  to={"/settings/organisation"} >Organisation</NavLink>, '4'),
  ]),
];

export const VmsSideBar = ()=> {
  const [collapsed, setCollapsed] = useState(false);
  const {token: {colorBgContainer, borderRadiusLG}} = theme.useToken();

  return <Sider style={{background: colorBgContainer}} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
    <div className="demo-logo-vertical" />
    <Menu defaultSelectedKeys={['1']} mode="inline" items={items} />
  </Sider>;
}
import {VmsSideBar} from "./component/sider/VmsSideBar.js";
import {Outlet} from "react-router";
import {ConfigProvider, Layout, theme} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import VmsBreadcrumb from "./component/VmsBreadcrumb";
import {VmsHeader} from "./component/heeader/VmsHeader";
import {defaultTheme} from "./config/ANTdefaultTheme";

const App = () => {
    const {token: {colorBgContainer, borderRadiusLG}} = theme.useToken();

    return (
        <>
            <ConfigProvider
                theme= {defaultTheme}
            >
                <Layout style={{minHeight: '100vh', width: '100vw'}}>
                    <VmsSideBar/>
                    <Layout>
                        <VmsHeader/>
                        <Content style={{margin: '0 15px'}}>
                            <VmsBreadcrumb/>
                            <Content style={{
                                padding: 24,
                                minHeight: 360,
                                borderRadius: borderRadiusLG,
                                background: colorBgContainer,
                                width: '100%',
                            }}>
                                <Outlet/>
                            </Content>
                        </Content>
                    </Layout>
                </Layout>
            </ConfigProvider>
        </>
    );
};

export default App;
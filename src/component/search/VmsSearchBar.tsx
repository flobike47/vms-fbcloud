import Search from "antd/es/input/Search";
import {Layout, theme} from "antd";
import {VmsSearchIcon} from "../icon/VmsSearchIcon";

const VmsSearchBar = () => {
    const {token: {colorBgContainer, borderRadiusLG, boxShadow, marginLG, paddingLG}} = theme.useToken();

    return (
        <Layout
            style={{
                padding: paddingLG,
                background: colorBgContainer,
                boxShadow: boxShadow,
                borderRadius: borderRadiusLG,
                marginBottom: marginLG,
            }}
        >
            <Search
                placeholder="Rechercher..."
                allowClear
                enterButton
                size="large"
                prefix={<VmsSearchIcon />}
                style={{
                    borderRadius: borderRadiusLG,
                }}
            />
        </Layout>
    );
};

export {VmsSearchBar}
import {VmsSearchBar} from "../search/VmsSearchBar";
import {Layout, theme} from "antd";

const VmsHeader = () => {
    const {token: {colorBgContainer, paddingLG}} = theme.useToken();

    return (
        <Layout.Header
            style={{
                background: colorBgContainer,
                padding: `0 ${paddingLG}px`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <VmsSearchBar />
        </Layout.Header>
    );
}

export {VmsHeader}
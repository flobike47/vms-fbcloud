import {theme, ThemeConfig} from "antd";

const defaultTheme: ThemeConfig = {
    algorithm: theme.defaultAlgorithm,
    token: {
        colorPrimary: '#1890ff',
        colorSuccess: '#52c41a',
        colorWarning: '#faad14',
        colorError: '#ff4d4f',
        colorInfo: '#1890ff',
        colorTextBase: '#262626',

        colorBgBase: '#ffffff',
        colorBgContainer: '#fafafa',
        colorBgElevated: '#ffffff',
        colorBorder: '#d9d9d9',
        colorBorderBg: '#f5f5f5',

        margin: 16,
        marginXS: 8,
        marginSM: 12,
        marginLG: 24,
        marginXL: 32,

        // Padding
        padding: 16,
        paddingLG: 24,
        paddingSM: 12,
        paddingXS: 8,

        borderRadius: 6,
        borderRadiusLG: 8,
        borderRadiusSM: 4,
        borderRadiusXS: 2,

        fontSize: 14,
        fontSizeHeading1: 38,
        fontSizeHeading2: 30,
        fontSizeHeading3: 24,
        fontSizeHeading4: 20,
        fontSizeHeading5: 16,

        lineHeight: 1.5715,
        lineHeightHeading1: 1.2,
        lineHeightHeading2: 1.35,

        boxShadow: '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
        boxShadowSecondary: '0 6px 16px 0 rgba(0, 0, 0, 0.08)',

        fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
        fontFamilyCode: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace`,
    },
    components: {
        Layout: {
            headerBg: '#001529',
            headerHeight: 64,
            headerPadding: '0 24px',
            headerColor: '#ffffff',
            footerBg: '#f5f5f5',
            footerPadding: '24px 50px',
            siderBg: '#f0f2f5',
            bodyBg: '#ffffff',
        },
        Menu: {
            colorItemBg: 'transparent',
            colorItemBgHover: '#e6f7ff',
            colorItemBgSelected: '#e6f7ff',
            colorItemBgSelectedHorizontal: '#e6f7ff',
            colorItemText: '#262626',
            colorItemTextHover: '#1890ff',
            colorItemTextSelected: '#1890ff',
            colorItemTextSelectedHorizontal: '#1890ff',
            colorSubItemBg: '#fafafa',
            borderRadiusLG: 6,
            paddingContentHorizontal: 12,
        },
        Input: {
            paddingBlock: 10,
            paddingInline: 12,
            borderRadius: 6,
            controlHeight: 40,
            fontSize: 14,
            fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
        },
        Button: {
            controlHeight: 40,
            borderRadius: 6,
            fontWeight: 500,
        },
        Breadcrumb: {
            itemColor: '#8c8c8c',
            linkColor: '#1890ff',
            linkHoverColor: '#40a9ff',
            separatorColor: '#8c8c8c',
        },
        Card: {
            borderRadiusLG: 8,
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
            paddingLG: 24,
            padding: 16,
        },
        Select: {
            controlHeight: 40,
            borderRadius: 6,
        },
        DatePicker: {
            controlHeight: 40,
            borderRadius: 6,
        },
    },
};

export {defaultTheme};
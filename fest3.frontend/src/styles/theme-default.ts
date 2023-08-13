import { ThemeConfig, theme as themeAnt } from "antd";

const theme: ThemeConfig = {
    algorithm: themeAnt.defaultAlgorithm,
    token: {
        colorPrimary: '#1890ff',
        colorTextSecondary: '#fadb14',
        colorText: '#333',
        colorBgLayout: '#fff',
        colorBgContainer: '#fff',
        borderRadius: 8,
    },
    components: {
        Layout: {
            colorBgHeader: '#fff',
        },
        Tabs: {
            colorText: '#8d8d8d',
            inkBarColor: '#000',
            itemHoverColor: '#000',
            itemSelectedColor: '#000',
        }
    }
};

export default theme;
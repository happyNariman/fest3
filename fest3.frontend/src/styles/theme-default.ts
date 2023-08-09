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
        }
    }
};

export default theme;
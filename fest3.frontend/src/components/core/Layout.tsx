import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Col, ConfigProvider, Layout as LayoutAnt, Modal, Row, Space, theme } from 'antd';
import themeDefault from '@styles/theme-default';
import Login from "@features/login/Login";
import logo from '@assets/logo.svg';

const { Header, Footer, Content } = LayoutAnt;

const Layout = () => {
  const locationObj = useLocation();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <ConfigProvider theme={themeDefault}>
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <LayoutAnt>
          {
            locationObj.pathname === '/' ? null :
              <Header style={{ height: '96px' }}>
                <Row align={'middle'} style={{ height: '100%' }}>
                  <Col span={8}>
                    <Link to="/">
                      <img src={logo} alt="logo" style={{ width: '80px', height: '26px', verticalAlign: 'middle' }} />
                    </Link>
                  </Col>
                  <Col span={8} offset={8} style={{ textAlign: 'right' }}>
                    <span className='button' onClick={() => setIsLoginModalOpen(!isLoginModalOpen)}>
                      Sign Up
                    </span>
                  </Col>
                </Row>
                <Modal
                  open={isLoginModalOpen}
                  onCancel={() => setIsLoginModalOpen(false)}
                  footer={[]}>
                  <Login />
                </Modal>
              </Header>
          }
          <Content>
            <Outlet />
          </Content>
          <Footer></Footer>
        </LayoutAnt>
      </Space>
    </ConfigProvider>
  );
};

export default Layout;

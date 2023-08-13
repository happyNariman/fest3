import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Col, ConfigProvider, Layout as LayoutAnt, Modal, Row, Space, theme } from 'antd';
import themeDefault from '@styles/theme-default';
import Login from "@features/login/Login";
import { Logo } from "./logo/Logo";

const { Header, Footer, Content } = LayoutAnt;

export function Layout() {
  const locationObj = useLocation();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <ConfigProvider theme={themeDefault}>
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <LayoutAnt>
          {
            locationObj.pathname === '/' ? null :
              <Header style={{ height: '96px', padding: '0 40px' }}>
                <Row align='middle' justify='space-between' style={{ height: '100%' }}>
                  <Col>
                    <Link to="/">
                      <Logo style={{ width: '80px', height: '26px', verticalAlign: 'middle' }} />
                    </Link>
                  </Col>
                  <Col style={{ textAlign: 'right' }}>
                    <span className='button' onClick={() => setIsLoginModalOpen(!isLoginModalOpen)}>
                      Sign Up
                    </span>
                  </Col>
                </Row>
                <Modal
                  open={isLoginModalOpen}
                  onCancel={() => setIsLoginModalOpen(false)}
                  footer={[]}
                  zIndex={9}
                >
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

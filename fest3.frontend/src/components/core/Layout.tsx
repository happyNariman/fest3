import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Avatar, Col, ConfigProvider, Layout as LayoutAnt, Modal, Row, Space, theme } from 'antd';
import themeDefault from '@styles/theme-default';
import Login from "@features/login/Login";
import { Logo } from "./logo/Logo";
import { UserOutlined } from "@ant-design/icons";
import avatar from '@assets/avatar-1.svg';

const { Header, Footer, Content } = LayoutAnt;

export function Layout() {
  const locationObj = useLocation();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);

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
                    {isAuthorized ?
                      <span style={{ cursor: 'pointer' }}>
                        <Avatar style={{ backgroundColor: '#000', boxShadow: '3px 3px 0px 0px #F5F300' }} icon={<img src={avatar} />} />
                        <span style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 0 10px' }}>Profile</span>
                      </span> :
                      <span className='button' onClick={() => setIsLoginModalOpen(!isLoginModalOpen)}>
                        Sign Up
                      </span>
                    }

                  </Col>
                </Row>
                <Modal
                  open={isLoginModalOpen}
                  onCancel={() => setIsLoginModalOpen(false)}
                  footer={[]}
                  zIndex={9}
                >
                  <Login authorizationCompleted={() => { setIsLoginModalOpen(false); setIsAuthorized(true); }} />
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

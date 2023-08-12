import { Card, Col, Row } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import "./Intro.scss";
import logoWorldId from '@assets/logo-world-id.svg';
import logoOptimism from '@assets/logo-optimism.png';
import digitalWallet from '@assets/digital-wallet.png';
import { Logo } from '@components/core';

const cardBodyStyle: React.CSSProperties = {
  padding: '40px',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px'
};

export default function Intro() {
  return (
    <Row className='intro-page' justify='center'>
      <Col xxl={16} xl={16} lg={22} md={22} sm={22} xs={22}>
        <div className="intro-page__logo">
          <Logo />
        </div>

        <Row justify='space-between'>
          <Col md={7} sm={22} xs={22}>
            <Card className='intro-page__card' bodyStyle={cardBodyStyle}>
              <img src={logoWorldId} height='88px' width='88px' />
              <div>
                <h2>World ID bonus</h2>
                Sign in with World ID and get:
                <ul>
                  <li>+3 Reputation Points</li>
                  <li>Exclusive merch</li>
                  <li>Events discounts</li>
                </ul>
              </div>
            </Card>
          </Col>
          <Col md={7} sm={22} xs={22}>
            <Card className='intro-page__card' bodyStyle={cardBodyStyle}>
              <img src={logoOptimism} height='85px' width='85px' />

              <div>
                <h2>Pay with Crypto</h2>
                Use your favorite wallet to pay for your favorite Web3 events
              </div>
            </Card>
          </Col>
          <Col md={7} sm={22} xs={22}>
            <Card className='intro-page__card' bodyStyle={cardBodyStyle}>
              <img src={digitalWallet} height='89px' width='89px' />
              <div>
                <h2>Powered by NFTs</h2>
                Scale your reputation and use your NFTs to access exclusive benefits.
              </div>
            </Card>
          </Col>
        </Row>

        <div style={{ textAlign: 'center', marginTop: '70px' }}>
          <Link to="/events">
            <span className='button'>
              Browse events
              <RightCircleOutlined style={{ fontSize: '24px', verticalAlign: 'middle', margin: '-2px 0 0 40px' }} />
            </span>
          </Link>
        </div>

      </Col>
    </Row>
  );
};

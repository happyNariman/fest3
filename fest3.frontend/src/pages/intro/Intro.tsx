import { Card, Col, Row } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import "./Intro.scss";
import logo from '@assets/logo.svg';
import circleBlack from '@assets/circle-black.svg';
import circleGrey from '@assets/circle-grey.svg';

const cardStyle: React.CSSProperties = {
  background: '#F4F4F4',
  borderRadius: '16px',
  height: '100%',
  width: '100%',
  fontWeight: 700
};

export default function Intro() {
  return (
    <Row>
      <Col span={16} offset={4}>
        <div className="logo-wrapper">
          <img className="logo" src={logo} alt="logo" />
          <p>Explain in short sentence what is this project about</p>
        </div>

        <Row justify="space-evenly">
          <Col span={7}>
            <Card style={cardStyle}>
              <p>
                <img src={circleBlack} />
              </p>
              <h2>World ID bonus</h2>
              <div>
                Sign in with World ID and get:
                <ul>
                  <li>+3 Reputation Points</li>
                  <li>Exclusive merch</li>
                  <li>Events discounts</li>
                </ul>
              </div>
            </Card>
          </Col>
          <Col span={7}>
            <Card style={cardStyle}>
              <p>
                <img src={circleGrey} />
              </p>
              <h2>Pay with Crypto</h2>
              <div>Use your favorite wallet to pay for your favorite Web3 events</div>
            </Card>
          </Col>
          <Col span={7}>
            <Card style={cardStyle}>
              <p>
                <img src={circleGrey} />
              </p>
              <h2>Powered by NFTs</h2>
              <div>Scale your reputation and use your NFTs to access exclusive benefits.</div>
            </Card>
          </Col>
        </Row>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
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

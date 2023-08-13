import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Space } from 'antd';
import { CalendarOutlined, EnvironmentFilled, GlobalOutlined, LeftCircleOutlined } from '@ant-design/icons';

import './Event.scss';
import imgDot from '@assets/dot.svg';
import img1 from '@assets/dummyimages/event-card-1-big.png';




export default function Event() {
   
        return (
        <Row className='event' justify='center'>
            <Col xxl={10} xl={10} lg={12} md={22} sm={22} xs={22}>
                <div>
                    <Link to='/events'>
                        <span className='button button--small button--grey'>
                            <LeftCircleOutlined style={{ fontSize: '24px', verticalAlign: 'middle', margin: '-2px 10px 0px 0px' }} />
                            Discover events
                        </span>
                    </Link>
                </div>
                <div className='event__image'>
                    <img src={img1} />
                </div>
                <div className="event__info">
                    <div>
                        <div className='event__title'>Crypto 101</div>
                        <div>Organized by <strong>{'<Organizer name>'}</strong></div>
                    </div>
                    <div>
                        <Space direction="vertical">
                            <Space align="center" wrap={true}>
                                <EnvironmentFilled style={{ fontSize: '24px' }} />
                                <span>{'<City>'}</span>
                                <img src={imgDot} />
                                <span>{'<Country>'}</span>
                            </Space>
                            <Space>
                                <CalendarOutlined style={{ fontSize: '24px' }} />
                                <span>April 14, 2024 · 4pm - April 21, 2024 · 8pm WITA</span>
                            </Space>
                            <Space>
                                <GlobalOutlined style={{ fontSize: '24px' }} />
                                <a href="http://www.crypto101.com" target='blank'>www.crypto101.com</a>
                            </Space>
                        </Space>
                    </div>
                    <div>
                        The Web 3 Crypto Conference is a global event focusing on blockchain, DeFi, and NFTs. Bringing together industry leaders and enthusiasts, it will showcase the latest trends and technologies in the decentralized web. Attendees can participate in workshops, network with peers, and learn from experts. Key topics include current innovations and future potentials in the web 3 ecosystem. This conference is essential for those looking to stay at the forefront of the crypto revolution.
                    </div>
                    <div>
                        The Web 3 Crypto Conference is a global event focusing on blockchain, DeFi, and NFTs. Bringing together industry leaders and enthusiasts, it will showcase the latest trends and technologies in the decentralized web. Attendees can participate in workshops, network with peers, and learn from experts. Key topics include current innovations and future potentials in the web 3 ecosystem. This conference is essential for those looking to stay at the forefront of the crypto revolution.
                    </div>
                    <div className='Book'><button>Book</button></div>
                </div>
            </Col>
        </Row>
    )
}
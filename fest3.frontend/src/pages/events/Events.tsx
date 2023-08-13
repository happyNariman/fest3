import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AutoComplete, Button, Col, Input, Row } from 'antd';
import { DownCircleFilled, EnvironmentFilled, SearchOutlined } from '@ant-design/icons';
const { Search } = Input;

import './Events.scss';
import imgDot from '@assets/dot.svg';
import img1 from '@assets/dummyimages/event-card-1.png';
import img2 from '@assets/dummyimages/event-card-2.png';
import img3 from '@assets/dummyimages/event-card-3.png';

const events = [
    {
        title: 'Crypto 101',
        img: img1,
        location: {
            city: 'Lisbon',
            country: 'Portugal'
        },
        date: 'April 14, 2024 · 4pm - April 21, 2024 · 8pm WITA',
        badges: ['free'],
        isFeatured: true,
    },
    {
        title: 'Crypto Q&A|Presentations on Geopolitics, Macroeconomics and Cryptocurrency',
        img: img2,
        location: {
            isOnline: true
        },
        date: 'April 14, 2024 · 4pm - April 21, 2024 · 8pm WITA',
        badges: ['free'],
        isFeatured: true,
    },
    {
        title: 'CryptoW3',
        img: img3,
        location: {
            city: 'London',
            country: 'UK'
        },
        date: 'April 10, 2023',
        badges: ['200$'],
        isFeatured: false,
    }
];

export default function Events() {
    const [searchLoading, setSearchLoading] = useState<boolean>(false);
    const onSearch = (value: string, event?: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>) =>
        console.log('onSearch', value, event);
    const locations = [{ value: 'Denpasar' }, { value: 'Phuket' }];

    return (
        <Row className='events' justify='center'>
            <Col xxl={10} xl={10} lg={12} md={22} sm={22} xs={22}>
                <div className='location'>
                    Discover events in
                    <AutoComplete
                        className='location-picker'
                        popupClassName='location-picker__popup'
                        options={locations}
                        defaultValue={locations[0]}
                        bordered={false}
                    >
                        <Input
                            className='location-picker__input'
                            suffix={<DownCircleFilled style={{ pointerEvents: 'none' }} />}
                            bordered={false}
                        />
                    </AutoComplete>
                </div>

                <div className='search'>
                    <Search
                        className='search__input'
                        placeholder='Search events'
                        onSearch={onSearch}
                        bordered={false}
                        inputPrefixCls='search__dom-input'
                        enterButton={
                            <Button prefixCls='search__button' disabled={searchLoading} icon={<SearchOutlined />} />
                        }
                    />
                </div>

                <div className='event-list'>
                    {
                        events.map((event, index) => (
                            <Link to='/event' className={`event-list__card ${event.isFeatured ? 'event-list__card--featured' : ''}`}>

                                <div className='event-list__card-image'>
                                    <img src={event.img} />
                                </div>
                                <div className='event-list__card-info-wrapper'>
                                    <div className='event-list__card-info'>
                                        <div className='event-list__card-info-title'>
                                            {event.title}
                                        </div>
                                        <div className='event-list__card-info-date'>
                                            {event.date}
                                        </div>
                                        <div className='event-list__card-info-location'>
                                            <EnvironmentFilled style={{ fontSize: '24px' }} />
                                            {event.location.isOnline ?
                                                (<span>ONLINE</span>) :
                                                (<>
                                                    <span>{event.location.city}</span>
                                                    <img src={imgDot} />
                                                    <span>{event.location.country}</span>
                                                </>)
                                            }

                                        </div>
                                    </div>
                                    <div className='event-list__card-info-badges'>
                                        {
                                            event.badges?.map((badge, index) => (
                                                <span className='event-list__card-info-badge'>{badge}</span>))
                                        }
                                    </div>
                                </div>
                            </Link>))
                    }

                </div>
            </Col>
        </Row>
    )
}

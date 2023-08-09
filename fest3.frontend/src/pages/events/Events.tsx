import React from 'react'
import './Events.scss'
import { Col, Input, Row } from 'antd'
const { Search } = Input

export default function Events() {

    const onSearch = (value: string) => console.log(value);

    return (
        <Row>
            <Col span={12} offset={6}>
                <div className='search-wrap'>
                    <div className='discover'>
                        <h1>Discover events in</h1>
                    </div>
                    <div className='search'>
                        <Search placeholder="input search text" onSearch={onSearch} style={{}} />
                    </div>
                </div>
            </Col>
        </Row>
    )
}

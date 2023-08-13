import { CloseOutlined } from '@ant-design/icons';
import './MyProfilePage.scss';
import { Link } from 'react-router-dom';
import { Tabs, TabsProps } from 'antd';
import MyAccount from './my-account/MyAccount';
import MyEvents from './my-events/MyEvents';

const tabs: TabsProps['items'] = [
    {
        key: '1',
        label: 'My account',
        children: <MyAccount />,
    },
    {
        key: '2',
        label: 'My events',
        children: <MyEvents />,
    }
];

export default function MyProfilePage() {
    return (
        <div className='my-profile-page'>
            <div className='my-profile-page__body'>
                <div className='my-profile-page__title'>
                    <span>My profile</span>
                    <Link to='/events' style={{ color: 'black' }}>
                        <CloseOutlined />
                    </Link>
                </div>

                <div className='my-profile-page__body'>
                    <Tabs defaultActiveKey="1" items={tabs} size='large' tabBarStyle={{ fontWeight: 700 }} />
                </div>
            </div>
        </div>
    )
}

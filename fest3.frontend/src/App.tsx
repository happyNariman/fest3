import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Col, Row } from 'antd';

import './styles/app.scss';
import Layout from '@components/core/Layout';
import Intro from '@pages/intro/Intro';
import Events from '@pages/events/Events';
import Event from '@pages/event/Event';
import Login from '@features/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Intro />} />
          <Route path="intro" element={<Intro />} />
          <Route path="events" element={<Events />} />
          <Route path="event" element={<Event />} />
          <Route path="login" element={<Row justify='center'><Col span={8}><Login /></Col></Row>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App

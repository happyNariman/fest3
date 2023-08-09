import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './styles/app.scss'
import Layout from '@components/core/Layout'
import Intro from '@pages/intro/Intro'
import Events from '@pages/events/Events'
import Login from '@features/login/Login'
import { Col, Row } from 'antd'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Intro />} />
          <Route path="intro" element={<Intro />} />
          <Route path="events" element={<Events />} />
          <Route path="login" element={<Row><Col span={8} offset={8}><Login /></Col></Row>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App

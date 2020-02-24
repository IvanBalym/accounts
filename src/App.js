import React from 'react';
import './styles/App.css';
import AccountsList from './components/AccountsList';
import { Row, Col } from 'antd';
import "antd/dist/antd.css";

function App() {
    return (
        <div className="App">
            <Row type="flex">
                <Col lg={12} md={24}>
                    <AccountsList />
                </Col>
                <Col lg={12} md={24}></Col>
            </Row>
            
        </div>
    );
}

export default App;

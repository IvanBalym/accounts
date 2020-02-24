import React from 'react';
import { Input, Row, Col, Button, Icon  } from 'antd';

function AccountListHeader(props) {
    const { Search } = Input;
    return (
        <Row type="flex" justify="space-between">
            <Col span={14}>
                <Search
                    placeholder="Filter by name or number"
                    onSearch={value => props.setFilter(value)}
                    enterButton
                />
            </Col>
            <Col>
                <Button type='link' block onClick={()=>props.setisAddNewAccountOpen(true)}>
                    <Icon type="plus" />New Account
                </Button>
            </Col>
        </Row>
    );
  }
  
  export default AccountListHeader;
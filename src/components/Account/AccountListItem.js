import React from 'react';
import { List, Row, Col, Button, Icon } from 'antd';

function AccountListItem(props) {
    const data = props.data;
    return (
        <List.Item className="list-item">
            <Row className={'row'} type="flex" justify="space-between">
                <Col className={'col-list'} span={20}>
                    <span className="account-number">{data.accountNumber}</span>
                    <span> - {data.financialAccountCategory} - {data.currentVatPercentage}% ({data.vatCategoryCode}) - {data.name}</span>
                </Col>
                <Col className={'col-list'} >
                    <Button type='link' block onClick={()=>props.setIsEdit(false)}>
                        <Icon type="form" />Edit
                    </Button>
                </Col>
            </Row>
            <Row className={'row'} type="flex" justify="space-between">
                <Col className={'col-list'} span={20}>
                    {data.comment}
                </Col>
            </Row>
        </List.Item>
    );
  }
  
  export default AccountListItem;
  
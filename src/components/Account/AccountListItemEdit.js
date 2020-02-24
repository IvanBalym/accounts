import React, {useState} from 'react';
import { Form, Button, List, Row, Col, Icon } from 'antd';
import AccountForm from './AccountForm';

const AccountListItemEdit = Form.create({name: 'account_edit_form'})(AccountEditForm);

function AccountEditForm(props) {

    const [preloadedData, setPreloadedData] = useState({
        accountNumber: props.data ? props.data.accountNumber : '',
        externalTaxCode: props.data ? props.data.externalTaxCode : '',
        externalRevenueClass: props.data ? props.data.externalRevenueClass : '',
        name: props.data ? props.data.name : '',
        comment: props.data ? props.data.comment : '',
        currentVatPercentage: props.data ? props.data.currentVatPercentage : '',
        vatCategoryCode: props.data ? props.data.vatCategoryCode : '',
        financialAccountCategory: props.data ? props.data.financialAccountCategory : '',
        companyId: props.data ? props.data.companyId : '',
        id: props.data ? props.data.id : '',
        createdBySystemUserFullName: props.data ? props.data.createdBySystemUserFullName : '',
        lastModifiedBySystemUserFullName: props.data ? props.data.lastModifiedBySystemUserFullName : '',
        createdDate: props.data ? props.data.createdDate : '',
        lastModifiedDate: props.data ? props.data.lastModifiedDate : '',
        lastModifiedBySystemUser: props.data ? props.data.lastModifiedBySystemUser : '',
        createdBySystemUser: props.data ? props.data.createdBySystemUser : '',
        version: props.data ? props.data.version : '',
    })

    const handleSubmit = event => {
        event.preventDefault();
    //     props.form.setFieldsValue(props.preloadedData)
    //     const formData = props.form.getFieldsValue();
    //     data.content = [...data.content.filter(item => item.accountNumber !== formData.accountNumber), formData];
    };

    return (
        <List.Item className="list-form">
            <Form className={'form'} onSubmit={(e)=>handleSubmit(e)}>
                <Row className="row">
                    <Col>
                        <AccountForm {...props} preloadedData={preloadedData} />
                    </Col>
                </Row>
                <Row className="row" type="flex" justify="space-between">
                    <Col>
                        <Button><Icon type="delete" /></Button>
                    </Col>
                    <Col>
                        <Row gutter={16}>
                            <Col span={12} >
                                <Button onClick={()=>props.setIsEdit(true)}>Cancel</Button>
                            </Col>
                            <Col span={12} >
                                <Button type="primary" htmlType="submit">Save</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </List.Item>
    );
  }
  
  export default AccountListItemEdit;
  
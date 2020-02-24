import React,{useState} from 'react';
import { Form, Button, List, Row, Col } from 'antd';
import AccountForm from './AccountForm';

const AccountAddNew = Form.create({ name: 'account_create_form'})(AccountCreateForm);

function AccountCreateForm(props) {

    const [preloadedData, setPreloadedData] = useState({
        accountNumber: '',
        externalTaxCode: '',
        externalRevenueClass: '',
        name: '',
        comment: '',
        currentVatPercentage: '',
        vatCategoryCode: '',
        financialAccountCategory: '',
        companyId:  '',
        id: '',
        createdBySystemUserFullName: '',
        lastModifiedBySystemUserFullName: '',
        createdDate: '',
        lastModifiedDate: '',
        lastModifiedBySystemUser: '',
        createdBySystemUser: '',
        version: '',
    })

    const handleSubmit = event => {
        event.preventDefault();
        // props.form.setFieldsValue(props.preloadedData);
        // const formData = props.form.getFieldsValue();
        // data.push(formData);
    };

    return (
        <List.Item className={`list-form ${props.isOpen ? '' : 'hidden'}`}>
            <Form className={'form'} onSubmit={(e)=>handleSubmit(e)}>
                <Row className="row">
                    <Col>
                        <AccountForm {...props} preloadedData={preloadedData} />
                    </Col>
                </Row>
                <Row className="row" type="flex" justify="end" gutter={10}>
                    <Col>
                        <Button onClick={()=>props.setIsOpen(false)}>Cancel</Button>
                    </Col>
                    <Col>
                        <Button type="primary" htmlType="submit">Save</Button>
                    </Col>
                </Row>
            </Form>
        </List.Item>
    );
  }
  
  export default AccountAddNew;
  
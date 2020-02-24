import React from 'react';
import { Form, Input, Radio, Icon, Row, Col } from 'antd';


function AccountForm(props) {
    const { getFieldDecorator } = props.form;
    const { TextArea } = Input;

    const handleChange = (e) => {
        const fieldName = e.target.getAttribute('name');
        const value = e.target.value
        props.setPreloadedData({...props.preloadedData, [`${fieldName}`]: value});
    };

    return (
        <div>
            <Form.Item>
                {getFieldDecorator('accountNumber')(
                    <Row className={'row'} type="flex" >
                        <Col className={'col'} span={6}>
                            Account number
                        </Col>
                        <Col className={'col'} span={18}>
                            <Input
                                name="accountNumber"
                                placeholder="Account number"
                                value={props.preloadedData.accountNumber}
                                onChange={(e)=>{handleChange(e)}}
                            />
                        </Col>
                    </Row>
                )}
            </Form.Item>

            <Form.Item>
                {getFieldDecorator('financialAccountCategory')(
                    <Row className={'row'} type="flex" >
                        <Col className={'col'} span={6}>
                            Category
                        </Col>
                        <Col className={'col'} span={18}>
                            <Radio.Group
                                name="financialAccountCategory"
                                defaultValue="sales"
                                buttonStyle="solid"
                                value={props.preloadedData.financialAccountCategory}
                                onChange={(e)=>{handleChange(e)}}
                            >
                                <Radio.Button value="sales">Sales</Radio.Button>
                                <Radio.Button value="purchases">Purchases</Radio.Button>
                            </Radio.Group>
                        </Col>
                    </Row>
                )}
            </Form.Item>

            <Form.Item>
                {getFieldDecorator('currentVatPercentage')(
                    <Row className={'row'} type="flex" >
                        <Col className={'col'} span={6}>
                            Vat percentage
                        </Col>
                        <Col className={'col'} span={18}>
                            <Input
                                name="currentVatPercentage"
                                addonAfter={<Icon type="setting" />}
                                placeholder="Vat percentage"
                                value={props.preloadedData.currentVatPercentage}
                                onChange={(e)=>{handleChange(e)}}
                            />
                        </Col>
                    </Row>
                )}
            </Form.Item>

            <Form.Item>
                {getFieldDecorator('vatCategoryCode')(
                    <Row className={'row'} type="flex" >
                        <Col className={'col'} span={6}>
                            Vat category code
                        </Col>
                        <Col className={'col'} span={18}>
                            <Input
                                name="vatCategoryCode"
                                placeholder="Vat category code"
                                value={props.preloadedData.vatCategoryCode}
                                onChange={(e)=>{handleChange(e)}}
                            />
                        </Col>
                    </Row>
                )}
            </Form.Item>

            <Form.Item>
                {getFieldDecorator('name')(
                    <Row className={'row'} type="flex" >
                        <Col className={'col'} span={6}>
                            Account name
                        </Col>
                        <Col className={'col'} span={18}>
                            <Input
                                name="name"
                                placeholder="Account name"
                                value={props.preloadedData.name}
                                onChange={(e)=>{handleChange(e)}}
                            />
                        </Col>
                    </Row>
                )}
            </Form.Item>

            <Form.Item>
                {getFieldDecorator('externalRevenueClass')(
                    <Row className={'row'} type="flex" >
                        <Col className={'col'} span={6}>
                            External revenue class
                        </Col>
                        <Col className={'col'} span={18}>
                            <Input
                                name="externalRevenueClass"
                                placeholder="External revenue class"
                                value={props.preloadedData.externalRevenueClass}
                                onChange={(e)=>{handleChange(e)}}
                            />
                        </Col>
                    </Row>
                )}
            </Form.Item>

            <Form.Item>
                {getFieldDecorator('externalTaxCode')(
                    <Row className={'row'} type="flex" >
                        <Col className={'col'} span={6}>
                            External tax code
                        </Col>
                        <Col className={'col'} span={18}>
                            <Input
                                name="externalTaxCode"
                                placeholder="External tax code"
                                value={props.preloadedData.externalTaxCode}
                                onChange={(e)=>{handleChange(e)}}
                            />
                        </Col>
                    </Row>
                )}
            </Form.Item>

            <Form.Item>
                {getFieldDecorator('comment')(
                    <Row className={'row'} type="flex" >
                        <Col className={'col'} span={6}>
                            Comment
                        </Col>
                        <Col className={'col'} span={18}>
                            <TextArea
                                name="comment"
                                rows={4}
                                value={props.preloadedData.comment}
                                onChange={(e)=>{handleChange(e)}}
                            />
                        </Col>
                    </Row>
                )}
            </Form.Item>
        </div>
    );
}

export default AccountForm;
  
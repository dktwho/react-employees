import React from 'react';
import {Layout} from "../../components/layout/layout";
import {Card, Form, Row} from "antd";
import {CustomInput} from "../../components/custom-input/custom-input";
export const Login = () => {
    return (
        <Layout>
            <Row align={'middle'} justify={'center'}>
                <Card title={'Войдите'} style={{width: '30rem'}}>
                    <Form onFinish={() => null}>
                        <CustomInput name={} placeholder={}/>
                    </Form>
                </Card>
            </Row>
        </Layout>
    );
};

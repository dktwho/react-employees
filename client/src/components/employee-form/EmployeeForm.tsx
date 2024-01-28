import {Employee} from "@prisma/client";
import {Card, Form, Space} from "antd";
import {CustomInput} from "../custom-input/custom-input";
import {ErrorMessage} from "../error-message/error-message";
import {CustomButton} from "../custom-button/custom-button";

type Props<T> = {
    onFinish: (values: T) => void,
    btnText: string
    title: string
    error?: string
    employee?: T
}
export const EmployeeForm = ({onFinish, btnText, title, error, employee}: Props<Employee>) => {
    return (
        <Card title={title} style={{width: '30rem'}}>
            <Form name={'employee-form'} onFinish={onFinish} initialValues={employee}>
                <CustomInput type={'text'} name={'firstName'} placeholder={'имя'}/>
                <CustomInput type={'text'} name={'lastName'} placeholder={'фамилия'}/>
                <CustomInput type={'number'} name={'age'} placeholder={'возраст'}/>
                <CustomInput type={'text'} name={'address'} placeholder={'адрес'}/>
                <Space>
                    <ErrorMessage message={error}/>
                    <CustomButton htmlType={'submit'}>{btnText}</CustomButton>
                </Space>
            </Form>
        </Card>
    );
};

import React from 'react';
import {Button, Form} from 'antd'

type Props = {
    children: React.ReactNode;
    ghost?:  boolean | undefined;
    htmlType?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    type?: "link" | "text" |  "default" | "primary" | "dashed" | undefined;
    danger?: boolean;
    loading?: boolean;
    shape?: "default" | "circle" | "round" | undefined;
    icon?: React.ReactNode;
}

export const CustomButton = ({children, htmlType = 'button', type, danger, loading, shape, icon, onClick, ghost}: Props) => {
    return (
        <Form.Item>
            <Button htmlType={htmlType}
                    type={type}
                    ghost={ghost}
                    danger={danger}
                    loading={loading}
                    shape={shape}
                    icon={icon}
                    onClick={onClick}>{children}</Button>
        </Form.Item>
    );
};

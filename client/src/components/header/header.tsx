import s from './header.module.css'
import {Layout, Space, Typography} from "antd";
import {LoginOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {CustomButton} from "../custom-button/custom-button";
import {Link} from "react-router-dom";
import {Paths} from "../../paths";

export const Header = () => {
    return (
        <Layout.Header className={s.header}>
            <Space>
                <TeamOutlined className={s.teamIcon}/>
                <Link to={Paths.home}>
                    <CustomButton type={"ghost"}>
                        <Typography.Title level={1}>Сотрудники</Typography.Title>
                    </CustomButton>
                </Link>
            </Space>

            <Space>
                <Link to={Paths.register}>
                    <CustomButton  icon={<UserOutlined/>}>Зарегистрироваться</CustomButton>
                </Link>

                <Link to={Paths.login}>
                    <CustomButton  icon={<LoginOutlined/>}>Войти</CustomButton>
                </Link>
            </Space>
        </Layout.Header>
    );
};

import s from './header.module.css'
import { Layout, Space, Typography} from "antd";
import {TeamOutlined} from "@ant-design/icons";
import {CustomButton} from "../custom-button/custom-button";
import {Link} from "react-router-dom";
import {Paths} from "../../paths";

export const Header = () => {
    return (
        <Layout.Header className={s.header}>
            <Space>
                <TeamOutlined className={s.teamIcon}/>
                <Link to={Paths.home}>
                    <CustomButton  ghost={true}>
                        <Typography.Title level={4}>Сотрудники</Typography.Title>
                    </CustomButton>
                </Link>

            </Space>
        </Layout.Header>
    );
};

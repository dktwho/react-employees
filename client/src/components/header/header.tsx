import s from './header.module.css'
import {Layout, Space, Typography} from "antd";
import {LoginOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {CustomButton} from "../custom-button/custom-button";
import {Link, useNavigate} from "react-router-dom";
import {Paths} from "../../paths";
import {useSelector} from "react-redux";
import {logout, selectUser} from "../../features/auth/authSlice";
import {useAppDispatch} from "../../app/hooks";

export const Header = () => {
    const user = useSelector(selectUser)
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const onLogoutClick = () => {
        dispatch(logout())
        localStorage.removeItem('token')
        navigate('/login')
    }

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
            {user ? (
                <CustomButton type={'ghost'} icon={<LoginOutlined/>} onClick={onLogoutClick}>Выйти</CustomButton>
            ) : (
                <Space>
                    <Link to={Paths.register}>
                        <CustomButton icon={<UserOutlined/>}>Зарегистрироваться</CustomButton>
                    </Link>

                    <Link to={Paths.login}>
                        <CustomButton icon={<LoginOutlined/>}>Войти</CustomButton>
                    </Link>
                </Space>
            )
            }
        </Layout.Header>
    );
};

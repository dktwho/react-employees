import s from './layout.module.css'
import {Layout as AntLayout} from 'antd'

type Props = {
    children: React.ReactNode
}

export const Layout = ({children}: Props) => {
    return (
        <div className={s.main}>
            <AntLayout.Content style={{height: '100%'}}>
                {children}
            </AntLayout.Content>
        </div>
    );
};

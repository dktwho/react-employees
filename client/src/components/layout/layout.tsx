import s from './layout.module.css'

type Props = {
    children: React.ReactNode
}

export const Layout = ({children}: Props) => {
    return (
        <div className={s.main}>
            {children}
        </div>
    );
};

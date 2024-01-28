import {Employee} from "@prisma/client";

type Props<T> = {
    onFinish: (values: T) => void,
    btnText: string
    title: string
    error?: string
    employee?: T
}
export const EmployeeForm = ({onFinish, btnText, title, error, employee}: Props<Employee>) => {
    return (
        <div>

        </div>
    );
};

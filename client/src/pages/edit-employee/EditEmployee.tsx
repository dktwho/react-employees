import {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import {useEditEmployeeMutation, useGetEmployeeQuery} from "../../app/services/employees";
import {Layout} from "../../components/layout/layout";
import {Row} from "antd";
import {EmployeeForm} from "../../components/employee-form/EmployeeForm";
import {Employee} from "@prisma/client";
import {Paths} from "../../paths";
import {isErrorWithMessage} from "../../utils/isErrorWithMessage";

export const EditEmployee = () => {
    const navigate = useNavigate()
    const params = useParams<{ id: string }>()
    const [error, setError] = useState('')
    const {data, isLoading} = useGetEmployeeQuery(params.id || '')
    const [editEmployee] = useEditEmployeeMutation();

    if (isLoading) {
        return <span>Загрузка</span>
    }

    const handleEditUser = async (employee: Employee) => {
        try {
            const editedEmployee = {
                ...data,
                ...employee
            }
            await editEmployee(editedEmployee).unwrap();
            navigate(`${Paths.status}/updated`)
        } catch (e) {
            const mayBeError = isErrorWithMessage(e)
            if (mayBeError) {
                setError(e.data.message)
            } else {
                setError('Неизвестная ошибка')
            }

        }
    }
    return (
        <Layout>
            <Row align={'middle'} justify={'center'}>
                <EmployeeForm onFinish={handleEditUser}
                              btnText={'Редактировать'}
                              title={'Редактировать'}
                              error={error}
                              employee={data}/>
            </Row>
        </Layout>
    );
};

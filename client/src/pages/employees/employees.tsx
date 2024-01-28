import {Layout} from "../../components/layout/layout";
import {CustomButton} from "../../components/custom-button/custom-button";
import {PlusCircleOutlined} from "@ant-design/icons";
import {Table} from "antd";
import {useGetAllEmployeesQuery} from "../../app/services/employees";
import type {ColumnsType} from "antd/es/table";
import {Employee} from "@prisma/client";

const columns: ColumnsType<Employee> = [
    {title: 'Имя', dataIndex: 'firstName', key: 'firstName'},
    {title: 'Возраст', dataIndex: 'age', key: 'age'},
    {title: 'Адрес', dataIndex: 'address', key: 'address'},
]


export const Employees = () => {
    const {data, isLoading} = useGetAllEmployeesQuery()
    return (
        <Layout>
            <CustomButton type={'primary'} onClick={() => null} icon={<PlusCircleOutlined/>}>Добавить</CustomButton>
            <Table loading={isLoading}
                   dataSource={data}
                   pagination={false}
                   columns={columns}
                   rowKey={(record) => record.id}/>
        </Layout>

    );
};

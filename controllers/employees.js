const {prisma} = require('../prisma/prisma-client')


/**
 @route GET /api/employees
 @desc получение всех сотрудников
 @access Private
 */
const all = async (req, res) => {
    try {
        const employees = await prisma.employee.findMany()
        res.status(200).json(employees)
    } catch {
        res.status(500).json({message: 'Не удалось получить список сотрудников'})
    }
}

/**
 @route POST /api/employees/add
 @desc добавление сотрудника
 @access Private
 */
const add = async (req, res) => {
    try {
        const data = req.body;

        if (!data.firstName || !data.lastName || !data.address || !data.age) {
            return res.status(400).json({message: 'Все поля обязательные', res})
        }

        const employee = await prisma.employee.create({
            data: {
                ...data, userId: req.user.id
            }
        })
        return res.status(201).json(employee)
    } catch (err) {
        console.log(err)
        res.status(500).json({message: 'Что-то пошло не так'})
    }
}

/**
 @route POST /api/employees/remove/:id
 @desc удаление сотрудника
 @access Private
 */
const remove = async (req, res) => {
    const {id} = req.body
    try {
        await prisma.employee.delete({
            where: {
                id
            }
        })
        res.status(204).json({message: 'ОК, сотрудник удален'})
    } catch (err) {
        res.status(500).json({message: 'не удалось удалить сотрудника'})
    }
}

/**
 @route PUT /api/employees/edit/:id
 @desc редактирование сотрудника
 @access Private
 */
const edit = async (req, res) => {
    const data = req.body
    const id = data.id

    try {
        await prisma.employee.update({
            where: {
                id
            },
            data
        })
        res.status(204).json({message: 'ОК, сотрудник изменен'})
    } catch {
        res.status(500).json({message: 'не удалось редактировать сотрудника'})
    }
}

/**
 @route GET /api/employees/:id
 @desc получение сотрудника по id
 @access Private
 */
const getEmployee = async (req, res) => {
    const {id} = req.params
    try {
        const employee = await prisma.employee.findUnique({
            where: {
                id
            }
        })
        res.status(200).json(employee)
    } catch {
        res.status(500).json({message: 'не удалось получить сотрудника'})
    }
}
module.exports = {
    all,
    add,
    remove,
    edit,
    getEmployee
}
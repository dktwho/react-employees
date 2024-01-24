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

module.exports = {
    all,
    add
}
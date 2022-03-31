import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiRestaurantDelete = async (req, res) => {
  try {
    const { id } = req.params

    const menu = await prisma.menu.delete({
      where: {
        id: Number(id)
      }
    })

    return res.status(201).json(menu)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiRestaurantDelete

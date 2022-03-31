import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiRestaurantShow = async (req, res) => {
  try {
    const { id } = req.params

    const restaurant = await prisma.restaurant.findUnique({
      where: {
        id: Number(id)
      },
      include: {
        orders: true
      }
    })

    return res.status(201).json(restaurant)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiRestaurantShow

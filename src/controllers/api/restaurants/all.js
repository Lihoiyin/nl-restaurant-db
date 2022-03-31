import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiRestaurantAll = async (req, res) => {
  try {
    const restaurant = await prisma.restaurant.findMany({

    })

    return res.status(201).json(restaurant)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiRestaurantAll

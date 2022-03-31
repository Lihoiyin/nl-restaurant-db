import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiRestaurantDelete = async (req, res) => {
  try {
    const { id } = req.params

    const newRestaurant = await prisma.restaurant.delete({
      where: {
        id
      }
    })

    return res.status(201).json(newRestaurant)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiRestaurantDelete

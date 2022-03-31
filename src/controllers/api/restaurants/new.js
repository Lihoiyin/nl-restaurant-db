import yup from 'yup'

import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const infoSchema = yup.object({
  coordinateX: yup.number().required(),
  coordinateY: yup.number().required(),
  address: yup.string().required()
})

const controllersApiRestaurantNew = async (req, res) => {
  try {
    const { body } = req
    const verifiedData = await infoSchema.validate(body, { abortEarly: false, stripUnknown: true })

    const newRestaurant = await prisma.restaurant.create({
      data: {
        coordinateX: verifiedData.coordinateX,
        coordinateY: verifiedData.coordinateY,
        address: verifiedData.address,
        orders: {
          create: []
        }
      },
      include: {
        orders: true
      }
    })

    return res.status(201).json(newRestaurant)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiRestaurantNew

import yup from 'yup'

import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const orderSchema = yup.object({
  totalPrice: yup.number().required()
})

const controllersApiOrderNew = async (req, res) => {
  try {
    console.log(req.body)
    const { body } = req
    const verifiedData = await orderSchema.validate(body, { abortEarly: false, stripUnknown: true })

    const order = await prisma.order.create({
      data: {
        totalPrice: verifiedData.totalPrice,
        status: 'initialized',
        userId: Number(req.session.user.id),
        restaurantId: Number(body.restaurantId),
        setOnOrders: {
          connect: req.body.setOnOrdersIds.split(',').map((setOnOrdersId) => ({ id: Number(setOnOrdersId) })) || []
        },
        couponOnUser: {
          connect: req.body.couponOnUserIds.split(',').map((couponOnUserId) => ({ id: Number(couponOnUserId) })) || []
        }
      }
    })

    return res.status(201).json(order)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiOrderNew

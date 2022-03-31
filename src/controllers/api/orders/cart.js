import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiCartShow = async (req, res) => {
  try {
    const order = await prisma.order.findMany({
      where: {
        userId: Number(req.session.user.id),
        status: {
          contains: 'initialized'
        }
      },
      include: {
        setOnOrders: true,
        couponOnUser: true
      }
    })

    return res.status(201).json(order)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiCartShow

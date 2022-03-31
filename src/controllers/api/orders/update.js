import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiOrderUpdate = async (req, res) => {
  try {
    const order = await prisma.order.updateMany({
      where: {
        userId: Number(req.session.user.id),
        status: {
          contains: 'initialized'
        }
      },
      data: {
        status: 'paid'
      }
    })

    return res.status(201).json(order)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiOrderUpdate

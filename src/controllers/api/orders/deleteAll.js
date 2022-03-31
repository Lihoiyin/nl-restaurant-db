import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiOrderDeleteAll = async (req, res) => {
  try {
    const { userId } = req.session.userId

    const order = await prisma.order.deleteMany({
      where: {
        userId: Number(userId)
      }
    })

    return res.status(201).json(order)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiOrderDeleteAll

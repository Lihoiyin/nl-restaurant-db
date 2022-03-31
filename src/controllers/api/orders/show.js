import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiOrderShow = async (req, res) => {
  try {
    const { id } = req.params

    const order = await prisma.order.findUnique({
      where: {
        id: Number(id)
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

export default controllersApiOrderShow

import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiOrderDelete = async (req, res) => {
  try {
    const { id } = req.params

    const order = await prisma.order.delete({
      where: {
        id: Number(id)
      }
    })

    return res.status(201).json(order)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiOrderDelete

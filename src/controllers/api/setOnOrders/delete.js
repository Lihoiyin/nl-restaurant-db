import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiSetOnorderDelete = async (req, res) => {
  try {
    const { id } = req.params

    const setOnOrder = await prisma.setOnOrder.delete({
      where: {
        id: Number(id)
      }
    })

    return res.status(201).json(setOnOrder)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiSetOnorderDelete

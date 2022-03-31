import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiItemShow = async (req, res) => {
  try {
    const item = await prisma.item.findUnique({
      where: {
        id: Number(req.params.id)
      }
    })

    return res.status(201).json(item)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiItemShow

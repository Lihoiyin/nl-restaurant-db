import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiItemsOnSetShow = async (req, res) => {
  try {
    const itemOnSet = await prisma.itemOnSet.findUnique({
      where: {
        id: Number(req.params.id)
      },
      include: {
        item: true
      }
    })

    return res.status(201).json(itemOnSet)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiItemsOnSetShow

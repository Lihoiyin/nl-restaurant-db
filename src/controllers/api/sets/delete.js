import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiItemDelete = async (req, res) => {
  try {
    const { id } = req.params

    const item = await prisma.item.delete({
      where: {
        id
      }
    })

    return res.status(201).json(item)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiItemDelete

import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiItemDelete = async (req, res) => {
  try {
    const { id } = req.params
    console.log(req.params)
    const set = await prisma.item.delete({
      where: {
        id: Number(id)
      }
    })

    return res.status(201).json(set)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiItemDelete

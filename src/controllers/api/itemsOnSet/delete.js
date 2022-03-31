import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiSetDelete = async (req, res) => {
  try {
    const { id } = req.params

    const set = await prisma.set.delete({
      where: {
        id
      }
    })

    return res.status(201).json(set)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiSetDelete

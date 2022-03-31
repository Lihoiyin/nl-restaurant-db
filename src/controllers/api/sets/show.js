import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiSetShow = async (req, res) => {
  try {
    const { id } = req.params

    const set = await prisma.set.findUnique({
      where: {
        id: Number(id)
      },
      include: {
        itemOnSets: {
          include: {
            item: true
          }
        }
      }
    })

    return res.status(201).json(set)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiSetShow

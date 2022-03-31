import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiOrderAll = async (req, res) => {
  try {
    const menu = await prisma.menu.findMany({
      where: {},
      include: {
        sets: {
          include: {
            itemOnSets: true
          }
        }
      }
    })

    return res.status(201).json(menu)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiOrderAll

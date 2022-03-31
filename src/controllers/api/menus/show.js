import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiMenuShow = async (req, res) => {
  try {
    const { id } = req.params

    const menu = await prisma.menu.findUnique({
      where: {
        id: Number(id)
      },
      include: {
        sets: true
      }
    })

    return res.status(201).json(menu)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiMenuShow

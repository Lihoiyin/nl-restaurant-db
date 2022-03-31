import yup from 'yup'

import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const menuSchema = yup.object({
  startTime: yup.number().required(),
  endTime: yup.number().required()
})

const controllersApiMenuUpdate = async (req, res) => {
  const { id } = req.params
  try {
    const { body } = req
    const verifiedData = await menuSchema.validate(body, { abortEarly: false, stripUnknown: true })

    const menu = await prisma.menu.update({
      where: {
        id
      },
      data: {
        startTime: verifiedData.startTime,
        endTime: verifiedData.endTime,
        sets: {
          create: []
        }
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

export default controllersApiMenuUpdate

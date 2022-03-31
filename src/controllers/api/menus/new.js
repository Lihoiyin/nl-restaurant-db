import yup from 'yup'

import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const menuSchema = yup.object({
  startTime: yup.number().required(),
  endTime: yup.number().required(),
  name: yup.string().required()
})

const controllersApiMenuNew = async (req, res) => {
  try {
    const { body } = req
    const verifiedData = await menuSchema.validate(body, { abortEarly: false, stripUnknown: true })

    const newMenu = await prisma.menu.create({
      data: {
        startTime: verifiedData.startTime,
        endTime: verifiedData.endTime,
        name: verifiedData.name,
        sets: {
          connect: req.body.setIds.split(',').map((setId) => ({ id: Number(setId) })) || []
        }
      },
      include: {
        sets: true
      }
    })

    return res.status(201).json(newMenu)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiMenuNew

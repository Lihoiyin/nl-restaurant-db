import yup from 'yup'

import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'
import uploadFileAsync from '../../_helpers/upload-file.js'

const itemSchema = yup.object({
  basePrice: yup.number().required(),
  upgradeCost: yup.number().required(),
  name: yup.string().required(),
  category: yup.string().required(),
  image: yup.mixed()
})

const controllersApiItemUpdate = async (req, res) => {
  try {
    const { id } = req.params
    const { body } = req
    const verifiedData = await itemSchema.validate(body, { abortEarly: false, stripUnknown: true })
    await uploadFileAsync(verifiedData, req)

    const item = await prisma.item.update({
      where: {
        id
      },
      data: {
        basePrice: verifiedData.basePrice,
        upgradeCost: verifiedData.upgradeCost,
        name: verifiedData.name,
        image: verifiedData.image,
        category: verifiedData.category
      }
    })

    return res.status(201).json(item)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiItemUpdate

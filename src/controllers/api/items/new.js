import yup from 'yup'

import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'
import uploadFileAsync from '../../_helpers/upload-file.js'

const itemSchema = yup.object({
  basePrice: yup.number().required(),
  upgradeCost: yup.number().required(),
  name: yup.string().required(),
  category: yup.string().required(),
  imageUrl: yup.mixed()
})

const controllersApiItemNew = async (req, res) => {
  try {
    const { body } = req
    const verifiedData = await itemSchema.validate(body, { abortEarly: false, stripUnknown: true })
    await uploadFileAsync(verifiedData, req)

    const item = await prisma.item.create({
      data: {
        basePrice: verifiedData.basePrice,
        upgradeCost: verifiedData.upgradeCost,
        name: verifiedData.name,
        imageUrl: verifiedData.imageUrl,
        category: verifiedData.category
      }
    })

    return res.status(201).json(item)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiItemNew

import yup from 'yup'

import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'
import uploadFileAsync from '../../_helpers/upload-file.js'

const setSchema = yup.object({
  basePrice: yup.number().required(),
  upgradeCost: yup.number().required(),
  name: yup.string().required(),
  category: yup.string().required(),
  imageUrl: yup.mixed()
})

const controllersApiSetUpdate = async (req, res) => {
  try {
    const { id } = req.params
    const { body } = req
    const verifiedData = await setSchema.validate(body, { abortEarly: false, stripUnknown: true })
    await uploadFileAsync(verifiedData, req)

    const set = await prisma.set.update({
      where: {
        id
      },
      data: {
        basePrice: verifiedData.basePrice,
        type: verifiedData.type,
        name: verifiedData.name,
        image: verifiedData.imageUrl,
        itemOnSets: {
          connect: req.body.itemOnSetIds.map((itemOnSetId) => ({ id: itemOnSetId })) || []
        }
      }
    })

    return res.status(201).json(set)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiSetUpdate

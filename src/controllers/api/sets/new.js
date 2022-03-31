import yup from 'yup'

import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'
import uploadFileAsync from '../../_helpers/upload-file.js'

const setSchema = yup.object({
  basePrice: yup.number().required(),
  name: yup.string().required(),
  type: yup.string().required(),
  imageUrl: yup.mixed()
})

const controllersApiSetNew = async (req, res) => {
  try {
    const { body } = req
    console.log(body)
    const verifiedData = await setSchema.validate(body, { abortEarly: false, stripUnknown: true })
    await uploadFileAsync(verifiedData, req)
    console.log(req.body.itemOnSetsId)
    const set = await prisma.set.create({
      data: {
        basePrice: verifiedData.basePrice,
        type: verifiedData.type,
        name: verifiedData.name,
        imageUrl: verifiedData.imageUrl,
        itemOnSets: {
          connect: req.body.itemOnSetsId.split(',').map((itemOnSetId) => ({ id: Number(itemOnSetId) })) || []
        }
      }
    })

    return res.status(201).json(set)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiSetNew

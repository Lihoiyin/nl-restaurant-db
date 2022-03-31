import yup from 'yup'

import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'
import uploadFileAsync from '../../_helpers/upload-file.js'

const itemOnSetSchema = yup.object({
  itemQuantity: yup.number().required(),
  canChange: yup.boolean().required()
})

const controllersApiItemNew = async (req, res) => {
  try {
    const { body } = req
    const verifiedData = await itemOnSetSchema.validate(body, { abortEarly: false, stripUnknown: true })
    console.log(verifiedData)
    await uploadFileAsync(verifiedData, req)

    const itemOnSet = await prisma.itemOnSet.create({
      data: {
        itemQuantity: verifiedData.itemQuantity,
        canChange: verifiedData.canChange,
        item: {
          connect: { id: Number(req.body.itemId) }
        }
      }
    })

    return res.status(201).json(itemOnSet)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiItemNew

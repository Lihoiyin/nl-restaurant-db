import yup from 'yup'

import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'
import uploadFileAsync from '../../_helpers/upload-file.js'

const setOnOrderSchema = yup.object({
  setQuantity: yup.number().required(),
  setSubtotal: yup.number().required(),
  itemDetails: yup.string().required()
})

const controllersApiSetOnOrderNew = async (req, res) => {
  try {
    const { body } = req
    const verifiedData = await setOnOrderSchema.validate(body, { abortEarly: false, stripUnknown: true })
    await uploadFileAsync(verifiedData, req)

    const setOnOrder = await prisma.setOnOrder.create({
      data: {
        setQuantity: verifiedData.setQuantity,
        setSubtotal: verifiedData.setSubtotal,
        itemDetails: verifiedData.itemDetails,
        setId: Number(req.body.setId)
      }
    })

    return res.status(201).json(setOnOrder)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiSetOnOrderNew

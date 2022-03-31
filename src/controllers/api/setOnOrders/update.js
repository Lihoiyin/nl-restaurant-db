import yup from 'yup'

import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'
import uploadFileAsync from '../../_helpers/upload-file.js'

const setOnorderSchema = yup.object({
  setQuantity: yup.number().required(),
  setSubtotal: yup.number().required(),
  itemDetails: yup.string().required()
})

const controllersApiSetOnorderUpdate = async (req, res) => {
  try {
    const { id } = req.params
    const { body } = req
    const verifiedData = await setOnorderSchema.validate(body, { abortEarly: false, stripUnknown: true })
    await uploadFileAsync(verifiedData, req)

    const setOnOrder = await prisma.setOnOrder.update({
      where: {
        id
      },
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

export default controllersApiSetOnorderUpdate

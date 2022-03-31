import yup from 'yup'

import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'
import uploadFileAsync from '../../_helpers/upload-file.js'

const couponSchema = yup.object({
  discount: yup.number().required(),
  desc: yup.string().required(),
  imageUrl: yup.mixed()
})

const controllersApiCouponNew = async (req, res) => {
  try {
    const { body } = req
    const verifiedData = await couponSchema.validate(body, { abortEarly: false, stripUnknown: true })
    await uploadFileAsync(verifiedData, req)

    const coupon = await prisma.coupon.create({
      data: {
        discount: verifiedData.discount,
        desc: verifiedData.desc,
        imageUrl: verifiedData.imageUrl,
        sets: {
          connect: req.body.setIds.split(',').map((setId) => ({ id: Number(setId) })) || []
        }
      }
    })

    return res.status(201).json(coupon)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiCouponNew

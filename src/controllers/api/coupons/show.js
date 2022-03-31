import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiCouponShow = async (req, res) => {
  try {
    const { id } = req.params

    const coupon = await prisma.coupon.findUnique({
      where: {
        id
      }
    })

    return res.status(201).json(coupon)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiCouponShow

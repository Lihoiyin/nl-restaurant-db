import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiCouponAll = async (req, res) => {
  try {
    const coupon = await prisma.coupon.findMany({
    })

    return res.status(201).json(coupon)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiCouponAll

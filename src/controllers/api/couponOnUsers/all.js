import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiCouponOnUserAll = async (req, res) => {
  try {
    const couponOnUser = await prisma.couponOnUser.findMany({
      where: {
        userId: Number(req.session.user.id)
      },
      include: {
        coupon: {
          include: {
            sets: true
          }
        }
      }
    })

    return res.status(201).json(couponOnUser)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiCouponOnUserAll

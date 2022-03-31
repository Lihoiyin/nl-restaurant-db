import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiCouponOnUserNew = async (req, res) => {
  try {
    console.log(req.session)

    const couponOnUser = await prisma.couponOnUser.create({
      data: {
        userId: Number(req.session.user.id),
        coupon: {
          connect: {
            id: Number(req.params.couponId)
          }
        }
      }
    })

    return res.status(201).json(couponOnUser)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiCouponOnUserNew

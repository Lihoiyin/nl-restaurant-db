import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiCouponOnUserShow = async (req, res) => {
  try {
    const { id } = req.params

    const couponOnUser = await prisma.couponOnUser.findUnique({
      where: {
        id: Number(id)
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

export default controllersApiCouponOnUserShow

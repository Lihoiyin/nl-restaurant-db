import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiCouponOnUserDelete = async (req, res) => {
  try {
    const { id } = req.params

    const couponOnUser = await prisma.couponOnUser.delete({
      where: {
        id: Number(id)
      }
    })

    return res.status(201).json(couponOnUser)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiCouponOnUserDelete

import _ from 'lodash'

import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiAuthShow = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(req.session?.user?.id) || 0
      }
    })

    return res.status(200).json(_.omit(user, ['passwordHash']))
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiAuthShow

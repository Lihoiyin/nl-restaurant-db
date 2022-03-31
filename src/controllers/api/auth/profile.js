import _ from 'lodash'

import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiAuthShow = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.session.user.id
      }
    })

    return res.status(201).json(_.omit(user, ['passwordHash']))
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiAuthShow

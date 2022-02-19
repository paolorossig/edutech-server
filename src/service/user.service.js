import User from '../model/user.model.js'

const omitPassword = (user) => {
  const { password, ...user_ } = user
  return user_
}

export async function createUser(input) {
  try {
    const user = await User.create(input)
    return omitPassword(user._doc)
  } catch (error) {
    throw new Error(e)
  }
}

export async function validatePassword({ email, password }) {
  const user = await User.findOne({ email })
  if (!user) return false

  const isValid = user.comparePassword(password)
  if (!isValid) return false

  return omitPassword(user)
}

export async function findUser(query) {
  return User.findOne(query).lean()
}

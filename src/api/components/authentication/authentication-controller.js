const authenticationService = require('../users/users-service');
const { errorResponder, errorTypes } = require('../../../core/errors');
const { passwordMatched } = require('../../../utils/password');

async function login(request, response, next) {
  const { email, password } = request.body;

  try {
    const user = await authenticationService.getUserByEmail(email);
    const isTrue = await passwordMatched(password, user.password);
    if (!isTrue) {
      throw errorResponder(errorTypes.INVALID_PASSWORD, 'INVALID_PASSWORD');
    }
    return response.status(200).json({ message: 'Login successfully' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  login,
};

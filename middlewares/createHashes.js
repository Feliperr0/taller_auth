import bcryptjs from 'bcryptjs'

export default async (req, res, next) => {
  try {
    const users = req.body;

    for (let user of users) {
      let password = user.password;
      let hashPassword = bcryptjs.hashSync(
        password,
        10 // Recomendado 10
      );
      user.password = hashPassword;
      user.online = false; // Inicializar `online` a false
    }
    next();
  } catch (error) {
    next(error);
  }
}

import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['No token provided'],
    });
  }

  const token = authorization.slice(7);

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = data;

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Invalid user'], // Exibir a mensagem de erro fornecida pela exceção
      });
    }

    req.userId = id;
    req.userEmail = email;

    return next();
  } catch {
    return res.status(401).json({
      errors: ['Invalid or expired token'], // Exibir a mensagem de erro fornecida pela exceção
    });
  }
};

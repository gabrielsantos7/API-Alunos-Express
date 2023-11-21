import jwt from 'jsonwebtoken';

export default (req, res, next) => {
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
    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (err) {
    return res.status(401).json({
      errors: [err], // Exibir a mensagem de erro fornecida pela exceção
    });
  }
};

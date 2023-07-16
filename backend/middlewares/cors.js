const allowedCors = [
  'https://shevtsova.mesto.nomoredomains.xyz',
  'localhost:3000',
];

module.exports.corsHandler = ((req, res, next) => {
  const { origin } = req.headers;
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  next();
});

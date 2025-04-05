const MyResponse = ({
  error = "",
  status = 401,
  res,
  data,
}
) => {
  if (error.length > 0)
    return res.status(status).json({
      isError: true,
      message: error,
    });
  else res.json(data);
};

module.exports = {
  MyResponse
}

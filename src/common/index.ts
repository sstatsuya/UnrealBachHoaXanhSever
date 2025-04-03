export const MyResponse = ({
  error = "",
  status = 401,
  res,
  data,
}: {
  isError?: boolean;
  error?: string;
  status?: number;
  res: any;
  data?: any;
}) => {
  if (error.length > 0)
    return res.status(status).json({
      isError: true,
      error: error,
    });
  else res.json(data);
};

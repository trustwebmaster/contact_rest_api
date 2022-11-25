export default (
  success: boolean,
  message: string,
  data?: any,
  issues?: any
) => {
  return {
    success,
    message,
    data,
    issues,
  };
};

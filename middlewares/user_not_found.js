const user_Not_Found = (req, res, next) => {
    const error = new Error('User not found');
    error.status = 404;
    next(error);
  };
  
  export default user_Not_Found;
  
const adminMiddleware = (req , res,next) => {
  const Admin = req.user.isAdmin;
  if(!Admin){
    res.status(401).json({message:Admin})
  }
  next();
}

module.exports = adminMiddleware;
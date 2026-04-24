import jwt from "jsonwebtoken"
const isAuth = async (req,res,next)=>{
try {
  let {token} = req.cookies

  if(!token){
    return res.status(400).json({message:"token not found"})
  }

  const verifyToken = jwt.verify(token,process.env.JWT_SECRET)
  if(!verifyToken){
  return res.status(400).json({message:"valid token  not found"})
  }

  req.userId = verifyToken.userId

  next()
   

} catch (error) {
  return res.status(500).json({message:`it is the isAuth Error:${error}`})
}
}

export default isAuth
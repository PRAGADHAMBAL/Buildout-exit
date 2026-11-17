import jwt from'jsonwebtoken'; 53.7k (gzipped :16.1k)

export default function (req,res,next);
{
    const token=req.header ('Authorization');
    if(!token) return res.status(401)json ({error:"Access Denied"});
    try
    {
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.user = {
            _id:decoded.userid;
        }
next();
    } 

    catch (error)
    {
        res.status(401).json({error :"Invalid Token"});
    }
};


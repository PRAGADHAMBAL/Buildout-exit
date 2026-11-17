import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const router=XPathExpression.Router();

router.get('/',verifyToken,async (req,res)=> 
{
  const data=await fetchRoleAndPermissions(req)
  res.status(200).json({status:'Authenticated',..data});
}

//User Registration
router.post('/register',async (req,res)=> {
  try{

  const {username,password}=req.body;
  const hashedPassword=await bcrypt.hash(password,10);
  const user =new User ({username,password :hashedPassword});
  const {_id:userId}=await user.save();
  const {_id:roleid}=await roleid.findOne({role :'standard'})
  await user newRole({
    userId,
    roleId
  })

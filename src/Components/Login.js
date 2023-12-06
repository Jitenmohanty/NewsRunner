import React from 'react';
import backgroundImage from '../Images/LoginPage.jpg'; 

const Login = () => {
  const pageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white', 
    fontSize: '2em', 
  };

  return (
    <div style={pageStyle}>
      <div style={{padding:"10px",color:"yellow",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <h1 >Welcome to NEWS_RUNNER</h1>
        <p style={{color:"blue",fontWeight:"bolder"}}>*For reading difforent type of news Tap on Login</p>
      </div>
    </div>
  );
};

export default Login;


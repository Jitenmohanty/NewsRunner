import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import NewsApp from '../Images/NewsAppLogo.jpg'
import Movie from '../Images/movie-icon.svg'
import Home from '../Images/home-icon.svg'
import Sports from '../Images/sports.svg'
import Health from '../Images/health.svg'
import Technology from '../Images/Technology.svg'
import Business from '../Images/Business.svg'
import Favlist from '../Images/Favlist.svg'
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../redux/Reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "../firebase";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

const Navbars = () => {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        history("/news");
      }
    });
  }, [userName]);

  const handleAuth = async () => {
    // Use auth and provider as before
    console.log("Button clicked");
    if (!userName) {
      await signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
          console.log("Successfully signed in with Google:", result);
        })
        .catch((error) => {
          console.error("Google Sign-In Error:", error);
        });
    } else if (userName) {
      await signOut(auth)
        .then(() => {
          dispatch(setSignOutState());
          history("/");
        })
        .catch((error) => alert(error.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
    <Logo>
      <img src={NewsApp} alt="NewsRunner+" />
    </Logo>
    {!userName ? (
      <Login onClick={handleAuth}>Login</Login>
    ) : (
      <>
        <NavMenu>
          <Link style={{textDecoration:"none"}}  to="/news">
            <img src={Home} />
            <span>Home</span>
          </Link>
          <Link style={{textDecoration:"none"}} to={"/entertainment"}>
            <img src={Movie} alt="SEARCH" />
            <span>Movies</span>
          </Link>
          <Link style={{textDecoration:"none"}} to={"/sports"}>
            <img src={Sports} alt="WATCHLIST" />
            <span>Sports</span>
          </Link>
          <Link style={{textDecoration:"none"}} to={"/health"}>
            <img src={Health} alt="ORIGINALS" />
            <span>Health</span>
          </Link>
          <Link style={{textDecoration:"none"}} to={"/technology"}>
            <img src={Technology} alt="MOVIES" />
            <span>Technology</span>
          </Link>
          <Link style={{textDecoration:"none"}} to={"/business"}>
            <img src={Business} alt="SERIES" />
            <span>Business</span>
          </Link>
          <Link style={{textDecoration:"none"}} to={"/favlist"}>
            <img src={Favlist} alt="SERIES" />
            <span>FavList</span>
          </Link>
        </NavMenu>
        <SignOut>
      
          <UserImg src={userPhoto} alt={userName} />
          <DropDown>
            <span onClick={handleAuth}>Sign out</span>
          </DropDown>
        </SignOut>

      </>
    )}
  </Nav>
  
);
};

const Nav = styled.nav`
position: fixed;
left: 0;
right: 0;
top: 0;
background-color: #090b13;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 36px;
height: 60px;
letter-spacing: 16px;
z-index: 3;
`;
const Logo = styled.a`
padding: 0;
width: 40px;
margin-top: 1.5px;
max-height: 70px;
font-size: 0;
display: inline-block;

img {
  display: block;
  width: 100%;
}
`;

const NavMenu = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
flex-flow: row nowrap;
height: 100%;
margin: 0px;
padding: 0px;
position: relative;
margin-right: auto;
margin-left: 25px;
Link{
  text-decoration: none;
}
a {
  display: flex;
  align-items: center;
  padding: 0 12px;

  img {
    height: 20px;
    min-width: 20px;
    width: 20px;
    z-index: auto;
  }
  span {
    color: rgb(249, 249, 249);
    font-size: 16px;
    font-weight:bolder;
    letter-spacing: 1.42px;
    line-height: 1.08;
    padding: 2px 0px;
    white-space: nowrap;
    position: relative;

    &:before {
      background-color: rgb(249, 249, 249);
      border-radius: 0px 0px 4px 4px;
      bottom: -6px;
      content: "";
      height: 2px;
      left: 0px;
      opacity: 0;
      position: absolute;
      right: 0px;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      visibility: hidden;
      width: auto;
    }
  }

  &:hover {
    span:before {
      transform: scaleX(1);
      visibility: visible;
      opacity: 1 !important;
    }
  }
}

@media (max-width: 920px) {
  display: none;
}
`;

const Login = styled.a`
background-color: rgba(0, 0, 0, 0.6);
padding: 8px 16px;
text-transform: uppercase;
letter-spacing: 1.5px;
border: 1px solid #f9f9f9;
border-radius: 4px;
transition: all 0.2s ease 0s;
cursor: pointer;

&:hover {
  background-color: #f9f9f9;
  color: #000;
  border-color: transparent;
}
`;

const UserImg = styled.img`
height: 100%;
`;

const DropDown = styled.div`
position: absolute;
top: 48px;
right: 0px;
background: rgb(19, 19, 19);
border: 1px solid rgba(151, 151, 151, 0.34);
border-radius: 4px;
box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
padding: 10px;
font-size: 14px;
letter-spacing: 3px;
width: 100px;
opacity: 0;
`;

const SignOut = styled.div`
position: relative;
height: 48px;
width: 48px;
display: flex;
cursor: pointer;
align-items: center;
justify-content: center;
color:white;

${UserImg} {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}

&:hover {
  ${DropDown} {
    opacity: 1;
    transition-duration: 1s;
    /* background-color:whitesmoke;
    color:black; */
  }
}
`;

export default Navbars;
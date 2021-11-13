import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Menu,
  Typography,
  MenuItem,
  CssBaseline,
  useScrollTrigger,
  Container,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavHashLink } from "react-router-hash-link";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import useAuth from '../../../hooks/useAuth';

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        color: "white",
        borderRadius: 1,
        textAlign: "center",
        fontSize: "1rem",
        m:1,
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

const Navigation = (props) => {
  const { user,logOut } = useAuth();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Box>
            <Box sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: { sm: "row" },
              justifyContent: { sm: "space-between" },
              m: 1,
              visibility: { sx: "hidden" },
            }}>
              <Box sx={{display:'flex',alignItems:'center'}}>
                <CameraAltIcon/><Typography variant='p'>{user.displayName}</Typography>
              </Box>
              <Box sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: { sm: "row" },
              justifyContent: { sm: "flex-end" },
              m: 1,
              visibility: { sx: "hidden" },
            }}>
              <NavHashLink style={{ textDecoration: "none" }} to="/">
                <Item>Home</Item>
              </NavHashLink>
              <NavHashLink style={{ textDecoration: "none" }} to="/products">
                <Item>Products</Item>
              </NavHashLink>
              {user.email && <NavHashLink style={{ textDecoration: "none" }} to="/dashboard">
                <Item>Dashboard</Item>
              </NavHashLink>}
              {!user.email ?
              <NavHashLink style={{ textDecoration: "none" }} to="/login">
                <Item>Login</Item>
              </NavHashLink>:
              <Button sx={{color:'#ffffff',fontWeight:'700'}} onClick={logOut}>Log out</Button>}
              </Box>
            </Box>
            <Box sx={{display:{xs:'flex',sm:'none',justifyContent:'space-between',alignItems:'center'}}}>
              <Box>
                <CameraAltIcon sx={{marginLeft:'10px'}}/>
              </Box>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
              >
                <MenuIcon sx={{color:'#ffffff'}} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                    <NavHashLink style={{ textDecoration: "none",color:'#01579b' }} to="/">Home
                    </NavHashLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <NavHashLink style={{ textDecoration: "none",color:'#01579b' }} to="/products">Products
                    </NavHashLink>
                </MenuItem>
                {user.email && <MenuItem onClick={handleClose}>
                    <NavHashLink style={{ textDecoration: "none",color:'#01579b' }} to="/dashboard">Dashboard
                    </NavHashLink>
                </MenuItem>}
                {!user.email? 
                <MenuItem onClick={handleClose}>
                    <NavHashLink style={{ textDecoration: "none",color:'#01579b' }} to="/login">Login
                    </NavHashLink>
                </MenuItem> :
                <MenuItem onClick={logOut}>
                    <Button sx={{color:'#065b9b',fontWieght:'500'}} >Log out</Button>
                </MenuItem>}
              </Menu>
            </Box>
          </Box>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
};

export default Navigation;

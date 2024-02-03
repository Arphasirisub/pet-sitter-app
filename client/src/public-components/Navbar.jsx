/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import sitterlogo from "../PublicPicture/sitter-logo.svg";
import { useAuth } from "../contexts/authentication";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

function Navbar() {
  const navigate = useNavigate();
  const { logout, state, checkToken } = useAuth();

  useEffect(() => {
    checkToken();
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleImageClick = () => {
    if (state.isAuthenticated) {
      handleClick();
    }
  };

  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        margin: 10px 0;
      `}
    >
      <div
        onClick={() => {
          navigate("/");
          window.location.reload();
        }}
        css={css`
          &:hover {
            cursor: pointer;
          }
        `}
      >
        <img src={sitterlogo} alt="Sitter Logo" />
      </div>
      <div
        css={css`
          display: flex;
          gap: 1rem;
          justify-content: center;
          align-items: center;
        `}
      >
        {state.isAuthenticated && state.user ? (
          <>
            <div>{state.user.role}</div>
            <img
              src={state.user.profile_img}
              alt="Profile"
              css={css`
                width: 40px;
                height: 40px;
                cursor: pointer;
              `}
              onClick={handleClick}
            />

            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Your Pet</MenuItem>
              <MenuItem onClick={handleClose}>History</MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  logout();
                }}
              >
                Log out
              </MenuItem>
            </Menu>
          </>
        ) : (
          <div
            css={css`
              &:hover {
                cursor: pointer;
              }
            `}
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </div>
        )}

        <div>
          <Button
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={() => {
              navigate("/list");
            }}
            css={css`
              background-color: rgb(255, 112, 55);
              color: white;
              font-size: 12px;
              padding: 10px; /* Adjust padding for responsiveness */
              border-radius: 20px; /* Adjust border-radius for responsiveness */
              transition: background-color 0.3s ease;

              &:hover {
                background-color: #ff7a3d;
              }
            `}
          >
            Find A Pet Sitter
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

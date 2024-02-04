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

function Navbar() {
  const navigate = useNavigate();
  const { logout, state, isAuthenticated } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleImageClick = () => {
    if (isAuthenticated) {
      handleClick(); // Open the menu when the image is clicked only if authenticated
    }
  };

  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        padding: 0 80px 0 80px;
        margin: 15px 0 15px 0;
      `}
    >
      <div
        onClick={handleImageClick}
        style={{ cursor: isAuthenticated ? "pointer" : "default" }}
      >
        <img
          css={css`
            width: 136.1px;
            height: 40px;
            cursor: pointer;
          `}
          src={sitterlogo}
          alt="sitterlogo"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div
        css={css`
          display: flex;
          gap: 2rem;
          justify-content: center;
          align-items: center;
        `}
      >
        {isAuthenticated ? (
          <div>
            <img
              // src={state.user.profile_img}
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
              // PaperProps={{
              //   component: "div", // Use a div container for the Paper
              //   style: {
              //     width: "186px",
              //     height: "148px",
              //     overflow: "hidden", // Prevent scrolling
              //   },
              // }}
              // MenuProps={{
              //   disableScrollLock: true, // Disable the Scroll Lock
              // }}
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
          </div>
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
              background-color: #ff7037;
              font-family: "Satoshi", sans-serif;
              font-weight: 700;
              font-size: 16px;
              text-align: center;
              color: white;
              &:hover {
                color: black;
              }
              padding: 12px 24px 12px 24px;
              border-radius: 99px;
              border: none;
              cursor: pointer;
              margin-left: 20px;
              gap: 8px;
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

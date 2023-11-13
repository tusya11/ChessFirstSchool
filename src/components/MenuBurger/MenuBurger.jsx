import React from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./MenuBurger.scss";

const MenuBurger = ({ items, onClickItem, open, onClose, onOpen, anchor }) => {
  return (
    <div className="menu-burger__container">
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={onOpen}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchor}
        open={open}
        onClose={onClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {items.map((item) => (
          <MenuItem key={item.id} onClick={() => onClickItem(item.link)}>
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MenuBurger;

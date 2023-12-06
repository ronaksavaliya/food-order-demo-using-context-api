import React, { useContext } from "react";
import "./Header.css";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import cartContext from "../../Store/Cart_Context";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Header(props) {
  const { cartState } = useContext(cartContext);
  return (
    <>
      <div className="header_container">
        <div className="header_name">
          <h1>React Meals</h1>
        </div>
        <div className="header_cart_button" onClick={props.onShowCart}>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={cartState.totalItems} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
          <span>Your Cart</span>
        </div>
      </div>
    </>
  );
}

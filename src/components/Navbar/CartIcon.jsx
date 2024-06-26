import React from 'react'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


const CartIcon = () => {
  return (
    <IconButton aria-label="cart" color='inherit'>
      <StyledBadge badgeContent={0} color="primary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
	)
}

export default CartIcon
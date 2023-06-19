import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import AppBar from '@mui/material/AppBar';
import { COLORS } from 'constants/COLOR';
import { KeyboardEvent } from 'react';

export interface IDeskTopNavbar {
  anchorElNav: null | HTMLElement;
  handleCloseNavMenu: () => void;
  handleOpenNavMenu?: (e: React.MouseEvent<HTMLElement>) => void;
  isUser: boolean;
  useLogOut: () => void;
  KakaoLogin: () => void;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  enterKey: (e: KeyboardEvent<HTMLDivElement>) => void;
}

export const AppBarContainer = styled(AppBar)`
  position: static;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  background-color: #fff;
`;

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '30px',
  border: `2px solid ${COLORS.secondary}`,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: `${COLORS.secondary}`,
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherqit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color: '#000',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        borderRadius: '30px',
        border: `1px solid ${COLORS.secondary}`,
        width: '33ch',
      },
    },
  },
}));

import PropTypes from 'prop-types';
import { memo } from 'react';
// @mui
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { AppBar, Box, Toolbar } from '@mui/material';
// config
import { HEADER } from '../../../config-global';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// components
import { NavSectionHorizontal } from '../../../components/nav-section';
//
import navConfig from './config-navigation';
import FinancialAdvisors from './config-navigationFinancialAdvisors';

// ----------------------------------------------------------------------

function NavHorizontal() {
  const theme = useTheme();
  const FinancialAdviserid = useSelector((state) => state.Auth.role);  // 'FinancialAdviser',

  return (
    <AppBar
      component="nav"
      color="transparent"
      sx={{
        boxShadow: 0,
        top: HEADER.H_DASHBOARD_DESKTOP_OFFSET,
      }}
    >
      <Toolbar
        sx={{
          ...bgBlur({
            color: theme.palette.background.default,
          }),
        }}
      >
              <NavSectionHorizontal data={ FinancialAdviserid !== 'FinancialAdviser'  ?  navConfig : FinancialAdvisors } />

      </Toolbar>

      <Shadow />
    </AppBar>
  );
}

export default memo(NavHorizontal);

// ----------------------------------------------------------------------

Shadow.propTypes = {
  sx: PropTypes.object,
};

function Shadow({ sx, ...other }) {
  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        bottom: 0,
        height: 24,
        zIndex: -1,
        width: 1,
        m: 'auto',
        borderRadius: '50%',
        position: 'absolute',
        boxShadow: (theme) => theme.customShadows.z8,
        ...sx,
      }}
      {...other}
    />
  );
}

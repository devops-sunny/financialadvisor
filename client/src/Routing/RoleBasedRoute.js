import { Container, Typography } from '@mui/material';
import { m } from 'framer-motion';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { ForbiddenIllustration } from '../assets/illustrations';
import { MotionContainer, varBounce } from '../components/animate';
import LoadingScreen from '../components/loading-screen/LoadingScreen';

RoleBasedRoute.propTypes = {
  children: PropTypes.node,
  hasContent: PropTypes.bool,
  roles: PropTypes.arrayOf(PropTypes.string),
};

const useCurrentRole = () => {
  const role = useSelector((state) => state.Auth.role);
  return role;
};

const useAuth = () => {
  const token = useSelector((state) => state.Auth.token);
  if (token) {
    return true;
  }
  return false;
};

export default function RoleBasedRoute({ hasContent = true, roles, children }) {
  const currentRole = useCurrentRole();
  const navigate = useNavigate();
  const auth = useAuth();


  if (!auth) {
    return <LoadingScreen />;
  }

  if (currentRole === '') {
    return navigate('/login');
  }


  if (!roles?.includes(currentRole)) {
    return hasContent ? (
      <Container component={MotionContainer} sx={{ textAlign: 'center' }}>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" paragraph>
            Permission Denied
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: 'text.secondary' }}>
            You do not have permission to access this page
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <ForbiddenIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
        </m.div>
      </Container>
    ) : null;
  }

  return <> {children} </>;
}

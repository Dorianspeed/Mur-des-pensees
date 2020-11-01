// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { createMedia } from '@artsy/fresnel';
import { Sidebar } from 'semantic-ui-react';

// == Import : local
import DesktopContainer from './desktopContainer';
import MobileContainer from './mobileContainer';

// == Composant
const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1192,
  },
});

const ResponsiveContainer = ({
  children, isLogged, handleLogout, role,
}) => (
  <MediaContextProvider>
    <Media greaterThan="mobile">
      <DesktopContainer isLogged={isLogged} handleLogout={handleLogout} role={role}>{children}
      </DesktopContainer>
    </Media>
    <Media as={Sidebar.Pushable} at="mobile">
      <MobileContainer isLogged={isLogged} handleLogout={handleLogout} role={role}>{children}
      </MobileContainer>
    </Media>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node.isRequired,
  isLogged: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired,
};

// == Export
export default ResponsiveContainer;

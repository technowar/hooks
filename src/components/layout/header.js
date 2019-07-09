import React from 'react';
import PropTypes from 'prop-types';

function HeaderComponent({ layout }) {
  return (
    <layout.Header />
  );
}

HeaderComponent.propTypes = {
  layout: PropTypes.instanceOf(Object).isRequired,
};

export default HeaderComponent;

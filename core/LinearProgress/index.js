import React from 'react';
import PropTypes from 'prop-types';
import cx, { rx } from './styles';

function LinearProgress(_ref) {
  var amount = _ref.amount,
      margin = _ref.margin;
  var type = typeof amount === 'undefined' ? cx('indeterminate') : cx('determinate');
  var style = amount ? {
    width: "".concat(amount, "%")
  } : null;
  return React.createElement("div", {
    role: "progressbar",
    className: rx('base'),
    style: {
      margin: margin
    }
  }, React.createElement("div", {
    style: style,
    className: rx('progress', type)
  }));
}

LinearProgress.propTypes = {
  amount: PropTypes.number,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
export { LinearProgress };
export default LinearProgress;
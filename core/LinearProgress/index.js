import React from 'react';
import PropTypes from 'prop-types';
import s from './styles';

function LinearProgress(_ref) {
  var amount = _ref.amount,
      margin = _ref.margin;
  var type = typeof amount === 'undefined' ? s('indeterminate') : s('determinate');
  var style = amount ? {
    width: "".concat(amount, "%")
  } : null;
  return React.createElement("div", {
    role: "progressbar",
    className: s('base'),
    style: {
      margin: margin
    }
  }, React.createElement("div", {
    style: style,
    className: s('progress', type)
  }));
}

LinearProgress.propTypes = {
  amount: PropTypes.number,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
export { LinearProgress };
export default LinearProgress;
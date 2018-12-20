import _objectSpread from "@babel/runtime-corejs2/helpers/esm/objectSpread";
import classNames from '../../utils/css';
import '../../defaults/colors.css';
import '../../defaults/common.css';
import common from '../../defaults/common.json';
import './styles.css';
import styles from './styles.json';
var cx = classNames(_objectSpread({}, common, styles));
export default cx;
export var rx = function rx() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return cx.apply(void 0, ['reset'].concat(args));
};
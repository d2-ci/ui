import React from 'react';
import { createContext, useState, useRef, useEffect } from 'react';
import MapApi from '@dhis2/maps-gl';
import styles from './MapItem.module.css';
export const MapContext = /*#__PURE__*/createContext(null);
const MapItem = ({
  syncId,
  children
}) => {
  const [map, setMap] = useState(null);
  const mapEl = useRef(null);
  useEffect(() => {
    const map = new MapApi(mapEl.current);
    map.once('ready', () => setMap(map));
    map.sync(syncId);
    map.resize();
    return () => {
      map.remove();
    };
  }, [mapEl, syncId]);
  return /*#__PURE__*/React.createElement(MapContext.Provider, {
    value: map
  }, /*#__PURE__*/React.createElement("div", {
    ref: mapEl,
    className: styles.mapItem
  }, map && children));
};
export default MapItem;
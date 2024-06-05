"use client";
import { useEffect, useState } from "react";
import { Map, Marker, Overlay } from "pigeon-maps";
// Styles
import css from "./styles.module.css";
import { PinIcon } from "@/assets/icons";

export default function MapComponent(props) {
  const {
    setLatLon,
    markerDisabled,
    height,
    styleCallback,
    data,
    children,
    ...rest
  } = props;

  const [position, setPosition] = useState([9.3068, 123.3054]);
  const [hoveredMarker, setHoveredMarker] = useState();

  function handleClick({ event, latLng, pixel }) {
    setPosition(latLng);
  }
  function handleMouseEnter(marker) {
    setHoveredMarker(marker);
  }
  function handleMouseLeave() {
    setHoveredMarker(null);
  }

  // UseEffects
  useEffect(() => {
    if (setLatLon) {
      setLatLon(position);
    }
  }, [position, setLatLon]);

  return (
    <div style={{ width: "100%" }}>
      <Map
        height={height || 400}
        defaultCenter={position}
        defaultZoom={12}
        onClick={handleClick}
        data={data}
        styleCallback={styleCallback}
        {...rest}>
        {!markerDisabled && (
          <Marker width={30} anchor={position} onClick={() => setHue(hue + 20)}>
            <div className={css.marker}>
              <PinIcon size={30} />
            </div>
          </Marker>
        )}
        {data?.features &&
          data?.features?.map((feature, index) => (
            <Marker
              key={index}
              width={40}
              anchor={feature.geometry.coordinates}
              styleCallback={(feature, hover) => styleCallback(feature, hover)}
              onContextMenu={() => {
                console.log(feature);
              }}
              onMouseOver={() => {
                console.log(feature);
                handleMouseEnter(feature);
              }}
              onMouseOut={({ event }) => {
                console.log(event);
                handleMouseLeave;
              }}>
              <div className={css.point} />
            </Marker>
          ))}
        {hoveredMarker && (
          <Overlay
            anchor={hoveredMarker.geometry.coordinates}
            offset={[0, -30]}>
            <div className={css.popup}>
              <p>
                Coordinates: {hoveredMarker.geometry.coordinates.join(", ")}
              </p>
              <p>Property: {hoveredMarker.properties.prop0}</p>
            </div>
          </Overlay>
        )}
        {children && children}
      </Map>
    </div>
  );
}

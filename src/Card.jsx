import React from "react";

export default function Card(props) {
  return (
    <div className="onecard">
      <div className="theimage">
        <img src={props.item.imageUrl} id="cardimage" />
      </div>
      <div className="text">
        <div id="locationmap">
          <div id="location"><i className="fa-solid fa-location-dot" id="locicon"></i> {props.item.location}</div>
          <div id="map"><a href={props.item.googleMapsUrl}>View on Google Maps</a></div>
        </div>
        <div id="someplace">{props.item.title}</div>
        <div id="dates">{props.item.startDate} - {props.item.endDate}</div>
        <div id="description">{props.item.description}</div>
      </div>
    </div>
  );
}

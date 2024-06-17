import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function GoogleMap() {
  return (
    <div
      style={{
        height: "200px",
        width: "100%",
        borderRadius: "8px",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25670.52993102784!2d52.8454612477895!3d36.46199689511562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f855d26bc0ac781%3A0x573f58a115ea3bca!2sQaem%20Shahr%2C%20Mazandaran%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1715780779733!5m2!1sen!2s"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

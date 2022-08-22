import React from "react";

export default function InputBox({ placeholder, type, onClick, required }) {
  return (
    <div class="group">
      <input onClick={onClick} type={type} required={required} />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{placeholder}</label>
    </div>
  );
}

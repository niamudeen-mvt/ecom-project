import React from "react";

export default function CustomInput({
  label,
  type = "text",
  value,
  handleOnChange,
}) {
  return (
    <div className="space-y-4 text-xl">
      <label className="capitalize">{label}</label>
      <input
        type={type}
        value={value}
        className="border p-3 rounded-lg w-full"
        onChange={handleOnChange}
        name={label}
        autoComplete="off"
      />
    </div>
  );
}

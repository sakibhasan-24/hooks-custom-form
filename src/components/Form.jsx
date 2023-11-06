import React, { useState } from "react";

export default function Form() {
  //   console.log(formData);
  const [formData, setFormData] = useState({ name: "" });

  const handleFormData = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.id]: e.target.value }));
  };
  return (
    <form className="flex justify-center items-center my-12">
      <input
        onChange={handleFormData}
        value={formData.name}
        type="text"
        id="name"
        className="px-4 py-2 rounded-lg"
      />
      <input
        type="submit"
        value="submit"
        className="ml-4 bg-green-400 px-4 py-2 rounded-md  cursor-pointer"
      />
    </form>
  );
}

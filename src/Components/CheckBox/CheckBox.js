import React, { useState } from "react";
import "./CheckBox.scss";

function CheckboxExample() {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
    checkbox8: false,
    checkbox9: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    // * check all checkboxes
    if (name === "checkbox1") {
      setCheckboxes({
        checkbox1: checked,
        checkbox2: checked,
        checkbox3: checked,
        checkbox4: checked,
        checkbox5: checked,
        checkbox6: checked,
        checkbox7: checked,
        checkbox8: checked,
        checkbox9: checked,
      });
    } else {
      setCheckboxes({
        ...checkboxes,
        [name]: checked,
      });
    }
  };

  return (
    <div className="flex flex-col gap-[10px] items-start my-[10px] CheckBox">
      <label className="flex items-center gap-[10px] text-[16px]">
        <input
          type="checkbox"
          name="checkbox1"
          checked={checkboxes.checkbox1}
          onChange={handleCheckboxChange}
          className=" CheckBox__input"
        />
        Hammasi
      </label>
      <label className="flex items-center gap-[10px] text-[16px]">
        <input
          type="checkbox"
          name="checkbox2"
          checked={checkboxes.checkbox2}
          onChange={handleCheckboxChange}
          className=" CheckBox__input"
        />
        Choy
      </label>
      <label className="flex items-center gap-[10px] text-[16px]">
        <input
          type="checkbox"
          name="checkbox3"
          checked={checkboxes.checkbox3}
          onChange={handleCheckboxChange}
          className=" CheckBox__input"
        />
        Asal
      </label>
      <label className="flex items-center gap-[10px] text-[16px]">
        <input
          type="checkbox"
          name="checkbox4"
          checked={checkboxes.checkbox4}
          onChange={handleCheckboxChange}
          className=" CheckBox__input"
        />
        Yog’
      </label>
      <label className="flex items-center gap-[10px] text-[16px]">
        <input
          type="checkbox"
          name="checkbox5"
          checked={checkboxes.checkbox5}
          onChange={handleCheckboxChange}
          className=" CheckBox__input"
        />
        Non
      </label>
      <label className="flex items-center gap-[10px] text-[16px]">
        <input
          type="checkbox"
          name="checkbox6"
          checked={checkboxes.checkbox6}
          onChange={handleCheckboxChange}
          className=" CheckBox__input"
        />
        Ziravorlar
      </label>
      <label className="flex items-center gap-[10px] text-[16px]">
        <input
          type="checkbox"
          name="checkbox7"
          checked={checkboxes.checkbox7}
          onChange={handleCheckboxChange}
          className=" CheckBox__input"
        />
        Sharbatlar
      </label>
      <label className="flex items-center gap-[10px] text-[16px]">
        <input
          type="checkbox"
          name="checkbox8"
          checked={checkboxes.checkbox8}
          onChange={handleCheckboxChange}
          className=" CheckBox__input"
        />
        Lolipoplar
      </label>
      <label className="flex items-center gap-[10px] text-[16px]">
        <input
          type="checkbox"
          name="checkbox9"
          checked={checkboxes.checkbox9}
          onChange={handleCheckboxChange}
          className=" CheckBox__input"
        />
        Tabletkalar
      </label>
    </div>
  );
}

export default CheckboxExample;

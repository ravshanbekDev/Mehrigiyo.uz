import { useState } from "react";
import { Collapse, Button } from "react-bootstrap";
import { FaPlus, FaTimes } from "react-icons/fa";

function Accordion({num ,info}) {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  return (
    <div className="w-[800px]">
      <div className="border-b">
        <div className="flex items-start justify-between py-[26px]">
          <div className="flex items-start gap-5">
            <h2 className="text-[#53B175] font-medium text-[24px]">{num}</h2>
            <p className="text-[#282938] font-medium text-[20px] max-w-[720px]">
              {info}
            </p>
          </div>
          <Button onClick={handleToggle}>
            {open ? <FaTimes /> : <FaPlus />}
          </Button>
        </div>
        <Collapse in={open}>
          <span>
            
          </span>
        </Collapse>
      </div>
    </div>
  );
}

export default Accordion;

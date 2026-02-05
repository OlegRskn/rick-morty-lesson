import { useEffect, useState } from "react";

export const Collapse = ({ className, title, content }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={className} onClick={handleClick}>
      <h3>{title}</h3>
      {open && content}
    </div>
  );
};

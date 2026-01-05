'use client'

import { useEffect, useState } from "react";
type Property = {
  tabs: Array<string>;
  onChange: (active: string) => void;
  styleContainer: string;
  styleTab: string;
};
const ProjectNavigation = ({
  tabs,
  onChange,
  styleContainer,
  styleTab,
}: Property) => {
  const [active, setActive] = useState(tabs[0]);

  useEffect(() => {
    onChange(active);
  }, [active]);
  return (
    <div className={styleContainer}>
      {tabs.map((name, index) => (
        <button
          key={index}
          className={`${styleTab} border dark:border-primaryColor
          ${active === name ? "text-primaryColor" : " text-text"}`}
          onClick={() => setActive(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};
export default ProjectNavigation;

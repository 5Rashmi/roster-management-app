import React from "react";
import SearchInput from "./SearchInput";

const CalendarControlPanel = () => {
  return (
    <div className="w-90 h-157 p-6 gap-4 border-r border-[var(--border-primary)] mt-0">
      <SearchInput />
    </div>
  );
};

export default CalendarControlPanel;

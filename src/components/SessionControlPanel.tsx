"use client";

import SearchInput from "./SearchInput";
import SessionFilterPanel from "./SessionFilterPanel";

const SessionControlPanel = () => {
  return (
    <div className="fixed w-90 h-157 p-6 gap-4 border-r border-[var(--border-primary)] mt-0">
      <SessionFilterPanel />
      <hr className="mt-4 w-73 border-[var(--border-primary)]" />
      <SearchInput />
    </div>
  );
};

export default SessionControlPanel;

"use client";
import React, { useState } from "react";
import DateGrid from "./session-main-area/DateGrid";
import DateNavigation from "./session-main-area/DateNavigation";
import ProviderSlots from "./session-main-area/ProviderSlots";

const SessionMainArea = ({
  setActiveView,
  setSelectedProvider,
}: {
  setActiveView: React.Dispatch<React.SetStateAction<"list" | "calendar">>;
  setSelectedProvider: (name: string) => void;
}) => {
  const [selectedDate, setSelectedDate] = useState<Date[]>([new Date()]);

  return (
    <div className="p-5">
      <DateGrid selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <DateNavigation selectedDate={selectedDate} />
      <ProviderSlots
        setSelectedProvider={setSelectedProvider}
        setActiveView={setActiveView}
      />
    </div>
  );
};

export default SessionMainArea;

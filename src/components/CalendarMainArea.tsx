import React, { useState } from "react";
import CalendarView, { CalendarEvent } from "./calendar-main-area/CalendarView";
import DateNavigation from "./calendar-main-area/DateNavigation";
import { getWeekDates } from "@/lib/current-week-dates";

const CalendarMainArea = () => {
  const [baseDate, setBaseDate] = useState(new Date());

  const handlePreviousWeek = () => {
    const newDate = new Date(baseDate);
    newDate.setDate(baseDate.getDate() - 7);
    setBaseDate(newDate);
  };

  const handleNextWeek = () => {
    const newDate = new Date(baseDate);
    newDate.setDate(baseDate.getDate() + 7);
    setBaseDate(newDate);
  };

  const currentWeekDates = getWeekDates(baseDate);

  const events: CalendarEvent[] = [
    {
      title: "Dr. Aarushi Sharma (Online)",
      day: "2025-09-06",
      start: "08:00",
      end: "08:15",
      status: "online",
    },
    {
      title: "Blocked - Unwell",
      day: "2025-09-06",
      start: "11:00",
      end: "11:15",
      status: "blocked",
    },
  ];

  return (
    <div className="p-5">
      <DateNavigation
        weekDates={currentWeekDates}
        onPrevWeek={handlePreviousWeek}
        onNextWeek={handleNextWeek}
      />
      <CalendarView events={events} weekDates={currentWeekDates} />
    </div>
  );
};

export default CalendarMainArea;

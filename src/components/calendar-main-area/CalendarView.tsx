"use client";
import React, { useState } from "react";
import { generateTimeSlots } from "@/lib/time-slots";

function formatTo12Hour(time: string): string {
  const [hour, minute] = time.split(":").map(Number);
  const period = hour >= 12 ? "PM" : "AM";
  const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
  return `${formattedHour}:${minute.toString().padStart(2, "0")} ${period}`;
}

export interface CalendarEvent {
  title: string;
  day: string;
  start: string;
  end: string;
  status:
    | "online"
    | "offline"
    | "online booked"
    | "offline booked"
    | "blocked"
    | "available"
    | "online + offline";
}

export default function CalendarView({
  events,
  weekDates,
}: {
  events: CalendarEvent[];
  weekDates: Date[];
}) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const slots = generateTimeSlots("00:00", "23:45", 60);

  const today = new Date().getDate().toString().padStart(2, "0");

  const [activeDayIndex, setActiveDayIndex] = useState(() => {
    return weekDates.findIndex(
      (date) => date.getDate().toString().padStart(2, "0") === today
    );
  });

  return (
    <div className="overflow-auto">
      <div className="grid grid-cols-8 sticky top-0 z-10 bg-white">
        <div className="p-2 border-r border-[#E0E0E0]"></div>
        {days.map((d, idx) => {
          const isActive = idx === activeDayIndex;
          const dayNumber = weekDates[idx]
            .getDate()
            .toString()
            .padStart(2, "0");

          return (
            <div
              key={d}
              className="p-2 text-center border-r border-[#E0E0E0] flex flex-col gap-2 items-center cursor-pointer"
              onClick={() => setActiveDayIndex(idx)}
            >
              <span className="text-[#9E9E9E] text-xs">{d}</span>
              <span
                className={`w-6 h-6 rounded-full text-xs flex items-center justify-center ${
                  isActive ? "bg-[#607447] text-white" : "text-[#4C4C4C]"
                }`}
              >
                {dayNumber}
              </span>
            </div>
          );
        })}
      </div>

      {slots.map((time) => (
        <div key={time} className="grid grid-cols-8 border-t border-[#E0E0E0]">
          <div className="p-1 text-xs border-r border-[#E0E0E0]">
            {formatTo12Hour(time)}
          </div>

          {days.map((d, i) => {
            const dateStr = weekDates[i].toISOString().split("T")[0];
            const event = events.find(
              (e) => e.day === dateStr && e.start === time
            );

            let bg = "";
            if (event?.status === "online") bg = "bg-green-400";
            if (event?.status === "offline") bg = "bg-orange-400";
            if (event?.status === "online + offline") bg = "bg-blue-400";
            if (event?.status === "blocked") bg = "bg-yellow-700";
            if (event?.status === "available") bg = "bg-gray-300";

            return (
              <div
                key={d + time}
                className={`h-15 min-w-[140px] border-r border-[#E0E0E0] text-xs flex items-center justify-center ${bg}`}
              >
                {event ? event.title : ""}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

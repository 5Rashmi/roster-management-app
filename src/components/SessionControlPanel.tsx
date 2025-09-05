"use client";
import { RootState } from "@/store";
import Dropdown from "@/ui/Dropdown";
import React from "react";
import { useSelector } from "react-redux";

const SessionControlPanel = () => {
  const providers = useSelector((state: RootState) => state.provider.items);

  const types = [
    ...new Set(
      providers.map(
        (p) =>
          p.provider_usertype.charAt(0).toUpperCase() +
          p.provider_usertype.slice(1)
      )
    ),
  ];
  const services = [
    ...new Set(
      providers.flatMap((p) => {
        const avail = p.availabilities?.[0];
        if (!avail) return [];
        const s: string[] = [];
        if (avail.online_slots?.length) s.push("Online");
        if (avail.offline_slots?.length) s.push("Offline");
        if (avail.both_slots?.length) s.push("Online + Offline");
        return s;
      })
    ),
  ];
  const centers = [...new Set(providers.map((p) => p.clinic_details?.name))];

  console.log(types, services, centers);

  return (
    <div className="fixed w-90 h-157 p-6 gap-4 border-r border-[var(--border-primary)] mt-0">
      <Dropdown options={types} />
      <Dropdown options={services} />
      <Dropdown options={centers} />
    </div>
  );
};

export default SessionControlPanel;

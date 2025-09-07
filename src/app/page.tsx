"use client";
import CalendarControlPanel from "@/components/CalendarControlPanel";
import CalendarMainArea from "@/components/CalendarMainArea";
import { Header } from "@/components/Header";
import SessionControlPanel from "@/components/SessionControlPanel";
import SessionMainArea from "@/components/SessionMainArea";
import { AppDispatch } from "@/store";
import { fetchProviders } from "@/store/providerSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const [activeView, setActiveView] = useState<"list" | "calendar">("list");
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);

  useEffect(() => {
    dispatch(fetchProviders());
  }, [dispatch]);

  useEffect(() => {
    if (activeView === "list") {
      setSelectedProvider(null);
    }
  }, [activeView]);

  const removeProvider = () => {
    setSelectedProvider(null);
  };

  return (
    <div className="font-sans grid">
      <Header activeView={activeView} setActiveView={setActiveView} />
      <div className="flex">
        {activeView === "list" ? (
          <>
            <SessionControlPanel />
            <SessionMainArea
              setActiveView={setActiveView}
              setSelectedProvider={setSelectedProvider}
            />
          </>
        ) : (
          <>
            <CalendarControlPanel
              selectedProvider={selectedProvider}
              removeProvider={removeProvider}
            />
            <CalendarMainArea selectedProvider={selectedProvider} />
          </>
        )}
      </div>
    </div>
  );
}

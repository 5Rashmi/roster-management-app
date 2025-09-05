"use client";
import { Header } from "@/components/Header";
import SessionControlPanel from "@/components/SessionControlPanel";
import { AppDispatch } from "@/store";
import { fetchProviders } from "@/store/providerSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProviders());
  }, [dispatch]);
  return (
    <div className="font-sans grid">
      <Header />
      <div className="flex flex-col">
        <SessionControlPanel />
      </div>
    </div>
  );
}

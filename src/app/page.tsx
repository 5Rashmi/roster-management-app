"use client";
import { Header } from "@/components/Header";
import SessionControlPanel from "@/components/SessionControlPanel";
import SessionMainArea from "@/components/SessionMainArea";
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
      <div className="flex">
        <SessionControlPanel />
        <SessionMainArea />
      </div>
    </div>
  );
}

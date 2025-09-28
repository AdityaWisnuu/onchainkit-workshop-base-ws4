"use client";

import HomePage from "@/components/pages/home";
import { sdk } from "@farcaster/miniapp-sdk";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    sdk.actions.ready();
  }, []);

  return (
    <>
      <HomePage />
    </>
  );
}

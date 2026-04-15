"use client";

import { useEffect } from "react";
import { getTrackClient } from "@/lib/track";

export function TrackProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    getTrackClient();
  }, []);

  return <>{children}</>;
}

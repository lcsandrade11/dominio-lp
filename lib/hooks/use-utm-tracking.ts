"use client";

import { useEffect, useState } from "react";

interface UTMParams {
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  referrer?: string;
}

export function useUTMTracking() {
  const [utmParams, setUtmParams] = useState<UTMParams>({});

  useEffect(() => {
    // Capture on first page load only
    const params = new URLSearchParams(window.location.search);
    const referrer = document.referrer;

    const captured: UTMParams = {
      utm_medium: params.get("utm_medium") || undefined,
      utm_campaign: params.get("utm_campaign") || undefined,
      utm_content: params.get("utm_content") || undefined,
      referrer: referrer || undefined,
    };

    setUtmParams(captured);

    // Optional: persist to sessionStorage for multi-page tracking
    sessionStorage.setItem("utm_params", JSON.stringify(captured));
  }, []);

  return utmParams;
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, CircleAlert, Radio, Siren, TimerReset } from "lucide-react";
import { Metric, PageHead, Panel, Pill } from "@/components/transit/primitives";
import { severityTone } from "@/lib/transit-ui";
import { INITIAL_DISRUPTION } from "@/data/transitData";

export const Route = createFileRoute("/disruptions")({
  head: () => ({
    meta: [
      { title: "Disruption Desk — DTC TransitOps" },
      {
        name: "description",
        content:
          "Breakdown, absenteeism and congestion events with automated standby recovery plans for the DTC network.",
      },
      { property: "og:title", content: "Disruption Desk — DTC TransitOps" },
      {
        property: "og:description",
        content: "Live disruption events and automated standby recovery plans.",
      },
    ],
  }),
  component: Disruptions;
});

function Disruptions() {
  return null;
}

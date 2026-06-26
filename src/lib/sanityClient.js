import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "your_project_id",
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  apiVersion: "2026-06-26",
  useCdn: true,
});
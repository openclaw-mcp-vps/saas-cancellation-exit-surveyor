import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CancelSurvey – Auto-survey users who cancel subscriptions",
  description: "Automatically triggers exit surveys when users cancel SaaS subscriptions, analyzes responses, and provides actionable insights to reduce churn."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2ca8c1a9-258a-4050-865e-32e56f391948"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}

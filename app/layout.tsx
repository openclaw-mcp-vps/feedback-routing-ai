import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FeedbackRoute AI – Auto-route customer feedback to the right team",
  description: "AI categorizes support tickets and routes to appropriate team members based on content and urgency. Built for customer success managers and support team leads."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5e8fc1fe-4349-457e-86b0-3deea835757a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}

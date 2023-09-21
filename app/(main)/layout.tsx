import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "College home page",
};

function layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

export default layout;

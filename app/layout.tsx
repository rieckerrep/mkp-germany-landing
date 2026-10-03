import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "New Warrior Training Adventure | ManKind Project Deutschland",
  description:
    "Das New Warrior Training Adventure (NWTA): ein intensives Wochenende für Männer, die sich ehrlich begegnen, Verantwortung übernehmen und ihr eigenes Leben bewusster gestalten wollen.",
  openGraph: {
    title: "New Warrior Training Adventure | MKP Deutschland",
    description:
      "Ein Wochenende. Ein Kreis von Männern. Eine ehrliche Begegnung mit dir selbst.",
    type: "website",
    images: [{ url: "/images/gruppe-von-maennern.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}

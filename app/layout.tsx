import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HIMTIF — Himpunan Mahasiswa Teknik Informatika UNU Sulawesi Tenggara",
  description: "Website resmi Himpunan Mahasiswa Teknik Informatika, Universitas Nahdlatul Ulama Sulawesi Tenggara, Kendari. Berkarya, berinovasi, mengabdi.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

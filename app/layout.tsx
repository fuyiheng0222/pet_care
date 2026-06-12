import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "暖爪宠物洗护店",
  description: "暖爪宠物洗护店提供猫狗洗澡、美容修剪、SPA护理和基础健康观察。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

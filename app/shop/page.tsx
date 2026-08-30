import type { Metadata } from "next";
import ShopClient from "./ShopClient";

export const metadata: Metadata = {
  title: "Shop the Look — Bespoke Studio Furniture & Decor",
  description:
    "Curated furniture, monolithic travertine tables, and artisanal lighting fixtures designed by Lumière Interiors.",
};

export default function ShopPage() {
  return <ShopClient />;
}

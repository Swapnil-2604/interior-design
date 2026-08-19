import { notFound } from "next/navigation";
import Link from "next/link";
import { roomDetails, rooms } from "@/lib/site";
import RoomDetailClient from "./RoomDetailClient";

export async function generateStaticParams() {
  return rooms.map((r) => ({
    slug: r.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = roomDetails[slug];
  if (!room) return {};

  return {
    title: `${room.title} — Services`,
    description: room.subtitle,
  };
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = roomDetails[slug];

  if (!room) {
    notFound();
  }

  const otherRooms = rooms.filter((r) => r.slug !== slug);

  return <RoomDetailClient room={room} otherRooms={otherRooms} />;
}

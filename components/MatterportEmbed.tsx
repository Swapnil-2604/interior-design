"use client";

import VirtualTourEmbed from "./VirtualTourEmbed";

export interface MatterportEmbedProps {
  title?: string;
  location?: string;
  coverImage?: string;
  area?: string;
  className?: string;
}

/**
 * Honest Architectural Spatial Walkthrough Showcase component.
 */
export function MatterportEmbed(props: MatterportEmbedProps) {
  return <VirtualTourEmbed {...props} />;
}

export default MatterportEmbed;

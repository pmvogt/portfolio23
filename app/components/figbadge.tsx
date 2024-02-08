import React, { useEffect, useState } from "react";
import { Badge } from "@radix-ui/themes";
import { FigmaLogoIcon } from "@radix-ui/react-icons";

const getDupes = async () => {
  const response = await fetch("/api/figma");
  const data = await response.json();
  console.log({ data });
  return data.dupes;
};

export default function FigBadge() {
  const [dupes, setDupes] = useState<number | null>(null);

  useEffect(() => {
    getDupes()
      .then(setDupes)
      .catch((error) => {
        console.error("Error fetching duplicates:", error);
        setDupes(null);
      });
  }, []); // The empty array ensures this effect runs once on mount

  return (
    <Badge highContrast variant="surface" color="gray">
      <FigmaLogoIcon width="16" height="16" />
      {dupes !== null ? dupes : "Loading..."}
    </Badge>
  );
}

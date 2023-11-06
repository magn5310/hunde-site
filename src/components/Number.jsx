"use client";
import { useState } from "react";
export default function Number() {
  const [nr, setNr] = useState(0);
  return (
    <div>
      <p
        onClick={() => {
          setNr((old) => old + 1);
        }}
      >
        {nr}
      </p>
    </div>
  );
}

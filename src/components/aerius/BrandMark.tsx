"use client";

import Image from "next/image";
import { useState } from "react";

type BrandMarkProps = {
  className?: string;
  height: number;
  width: number;
};

export function BrandMark({ className = "", height, width }: BrandMarkProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const classNames = `brand-lockup ${className}`.trim();

  if (imageFailed) {
    return (
      <span className={`brand-text-fallback ${className}`.trim()} aria-label="Aerius">
        Aerius
      </span>
    );
  }

  return (
    <span className={classNames} aria-label="Aerius">
      <Image
        className="brand-mark"
        src="/brand/Aerius/Aerius_black_master.svg.svg"
        alt=""
        width={width}
        height={height}
        onError={() => setImageFailed(true)}
        priority
      />
      <span className="brand-wordmark">Aerius</span>
    </span>
  );
}

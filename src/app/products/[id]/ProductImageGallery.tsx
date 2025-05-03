"use client";
import Image from "next/image";
import React from "react";

export default function ProductImageGallery({ images, name }: { images: string[]; name: string }) {
  const [selected, setSelected] = React.useState(0);

  if (!images || images.length === 0) {
    return <div className="aspect-[4/5] w-full rounded-lg bg-gray-100" />;
  }

  return (
    <div>
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-gray-100">
        <Image src={images[selected]} alt={name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
      {images.length > 1 && (
        <div className="mt-4 flex gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelected(i)}
              className={`focus-visible:ring-primary/70 relative h-20 w-20 overflow-hidden rounded border transition-all focus-visible:ring-2 ${selected === i ? "border-primary ring-primary ring-2" : "border-transparent"}`}
              aria-label={`Show image ${i + 1}`}
            >
              <Image src={img} alt={name + " thumbnail " + (i + 1)} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

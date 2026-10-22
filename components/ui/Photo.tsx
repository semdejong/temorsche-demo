import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  className?: string;
  preload?: boolean;
  caption?: string;
};

export default function Photo({ src, alt, width, height, sizes, className, preload, caption }: Props) {
  const image = (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      preload={preload}
      className={className ?? "h-auto w-full object-cover"}
    />
  );

  if (!caption) return image;

  return (
    <figure className="min-w-0">
      {image}
      <figcaption className="caption mt-2">{caption}</figcaption>
    </figure>
  );
}

export function PhotoFrame({
  src,
  alt,
  sizes,
  className,
  preload,
}: {
  src: string;
  alt: string;
  sizes: string;
  className: string;
  preload?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} preload={preload} className="object-cover" />
    </div>
  );
}

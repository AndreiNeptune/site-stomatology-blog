import { PortableText as PortableTextComponent } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";

const components = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value?.asset?._ref) return null;
      return (
        <figure className="my-8 rounded-2xl overflow-hidden">
          <Image
            src={urlFor(value).width(900).url()}
            alt={value.alt || "Blog image"}
            width={900}
            height={500}
            className="w-full h-auto object-cover rounded-2xl"
          />
          {value.caption && (
            <figcaption className="mt-3 text-center text-sm text-neutral-400 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="font-display text-xl md:text-2xl font-bold text-neutral-800 mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg font-bold text-neutral-800 mt-6 mb-2">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-neutral-600 leading-relaxed mb-4 text-base md:text-lg">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="my-6 pl-6 border-l-4 border-primary-300 bg-primary-50/30 rounded-r-xl py-4 pr-4 italic text-neutral-600">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-neutral-800">{children}</strong>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => (
      <code className="bg-primary-50 text-primary-700 px-1.5 py-0.5 rounded-md text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }: any) => {
      const target = value?.blank ? "_blank" : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target ? "noopener noreferrer" : undefined}
          className="text-primary-600 underline decoration-primary-300 underline-offset-2 hover:text-primary-700 hover:decoration-primary-500 transition-colors"
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-6 mb-4 space-y-2 text-neutral-600">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-6 mb-4 space-y-2 text-neutral-600">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }: any) => <li className="leading-relaxed">{children}</li>,
  },
};

interface PortableTextProps {
  value: any;
}

export default function PortableText({ value }: PortableTextProps) {
  return <PortableTextComponent value={value} components={components} />;
}

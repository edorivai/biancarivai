import clsx from "clsx";
import { PropsWithChildren, ReactNode } from "react";

export function Quote({
  children,
  classes,
  author,
}: PropsWithChildren<{
  classes?: { quote?: string; author?: string };
  author?: ReactNode;
}>) {
  return (
    <div className="my-20 text-right">
      <blockquote
        className={clsx(
          "font-serif italic font-bold text-2xl sm:text-3xl md:text-4xl",
          classes?.quote
        )}
      >
        „{children}“
      </blockquote>
      {author && (
        <figcaption className={clsx("font-serif", classes?.author)}>
          {author}
        </figcaption>
      )}
    </div>
  );
}

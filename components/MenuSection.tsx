import type { MenuCategory } from "@/data/menu";

/**
 * A single menu category: elegant heading, gold decorative line, item list.
 */
export default function MenuSection({ category }: { category: MenuCategory }) {
  const headingId = `${category.id}-heading`;

  return (
    <section
      id={category.id}
      aria-labelledby={headingId}
      className="reveal rounded-lg border border-gold/30 bg-white p-5 shadow-[0_1px_3px_rgba(43,32,32,0.06)] sm:p-6"
    >
      <header>
        <h2
          id={headingId}
          className="font-display text-lg uppercase tracking-[0.16em] text-burgundy sm:text-xl"
        >
          {category.category}
        </h2>

        {/* Small gold decorative line */}
        <div aria-hidden="true" className="mt-3 flex items-center gap-2">
          <span className="h-px w-8 bg-gold" />
          <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
          <span className="h-px flex-1 bg-gold/35" />
        </div>
      </header>

      <ul className="mt-4 space-y-3">
        {category.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-[1.0625rem] leading-relaxed text-ink"
          >
            <span
              aria-hidden="true"
              className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

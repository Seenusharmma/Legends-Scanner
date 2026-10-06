import BrandMark from "./BrandMark";

/**
 * Compact premium header for the QR menu.
 */
export default function MenuHeader() {
  return (
    <header className="relative overflow-hidden bg-burgundy text-cream">
      {/* Soft decorative rings */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 200"
        className="pointer-events-none absolute inset-x-0 top-0 h-full w-full opacity-[0.13]"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="40" cy="30" r="90" fill="none" stroke="#E3C77A" strokeWidth="1" />
        <circle cx="360" cy="170" r="110" fill="none" stroke="#E3C77A" strokeWidth="1" />
        <circle cx="360" cy="170" r="80" fill="none" stroke="#E3C77A" strokeWidth="0.5" />
      </svg>

      <div className="relative mx-auto w-full max-w-2xl px-6 pb-9 pt-10 text-center">
        <BrandMark className="mx-auto h-20 w-20" />

        <h1 className="mt-5">
          <span className="block font-display text-[2.35rem] leading-none tracking-[0.18em] text-cream sm:text-5xl">
            LEGENDS
          </span>
          <span className="mt-3 block text-[0.7rem] font-medium tracking-[0.5em] text-gold-light sm:text-xs">
            MICROBREWERY
          </span>
        </h1>

        {/* Gold decorative divider */}
        <div
          aria-hidden="true"
          className="mx-auto mt-6 flex w-44 items-center gap-2 sm:w-56"
        >
          <span className="h-px flex-1 bg-gold/70" />
          <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
          <span className="h-px flex-1 bg-gold/70" />
        </div>

        <h2 className="mt-6 font-display text-xl tracking-[0.3em] text-cream sm:text-2xl">
          DIGITAL MENU
        </h2>
        <p className="mt-2 text-xs tracking-[0.35em] text-gold-light sm:text-[0.8rem]">
          FOOD &amp; BEVERAGES
        </p>
      </div>

      {/* Gold base accent */}
      <div
        aria-hidden="true"
        className="h-1 w-full bg-linear-to-r from-burgundy-dark via-gold to-burgundy-dark"
      />
    </header>
  );
}

export default function Footer() {
  return (
    <footer className="mt-14 bg-burgundy-dark text-cream">
      <div
        aria-hidden="true"
        className="h-1 w-full bg-linear-to-r from-burgundy-dark via-gold to-burgundy-dark"
      />
      <div className="mx-auto w-full max-w-2xl px-6 py-10 text-center">
        <p className="font-display text-lg tracking-[0.24em] text-cream sm:text-xl">
          LEGENDS MICROBREWERY
        </p>

        <div
          aria-hidden="true"
          className="mx-auto mt-4 flex w-32 items-center gap-2"
        >
          <span className="h-px flex-1 bg-gold/70" />
          <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
          <span className="h-px flex-1 bg-gold/70" />
        </div>

        <p className="mt-4 text-[0.78rem] tracking-[0.22em] text-gold-light sm:text-sm">
          Food &bull; Beer &bull; Cocktails &bull; Experiences
        </p>

        <p className="mt-6 text-xs text-cream/75 sm:text-[0.8rem]">
          &copy; 2026 Legends Microbrewery
        </p>
      </div>
    </footer>
  );
}

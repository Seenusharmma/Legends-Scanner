"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Images, Maximize2, Minus, Plus, RotateCcw, X } from "lucide-react";
import type { MenuImageInfo } from "@/data/menu";

type PaneKey = "food" | "beverages";

const ZOOM_STEPS = [1, 1.5, 2, 3, 4];

/**
 * "View Menu Images" button + full-screen viewer for the original
 * printed menu images, with zoom controls.
 * Renders nothing when no menu images are present.
 */
export default function MenuImageViewer({
  food,
  beverage,
}: {
  food: MenuImageInfo | null;
  beverage: MenuImageInfo | null;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const initialPane = food ? "food" : beverage ? "beverages" : "food";
  const [pane, setPane] = useState<PaneKey>(initialPane);
  const [zoomIndex, setZoomIndex] = useState(0);

  const paneList: { key: PaneKey; label: string; image: MenuImageInfo }[] = [];
  if (food) {
    paneList.push({ key: "food", label: "Food Menu", image: food });
  }
  if (beverage) {
    paneList.push({ key: "beverages", label: "Beverage Menu", image: beverage });
  }

  // Keep selected pane valid when images change.


  const currentImage = pane === "food" ? food : beverage;
  const hasAnyImage = Boolean(food || beverage);
  const scale = ZOOM_STEPS[zoomIndex] ?? 1;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const openViewer = () => {
    setZoomIndex(0);
    setPane(food ? "food" : "beverages");
    setOpen(true);
  };

  const closeViewer = () => setOpen(false);

  const changeZoom = (direction: 1 | -1) => {
    setZoomIndex((index) =>
      Math.min(ZOOM_STEPS.length - 1, Math.max(0, index + direction))
    );
  };

  return (
    <>
      <section
        aria-labelledby="menu-images-heading"
        className="mx-auto w-full max-w-2xl px-4 pb-2 pt-8 sm:px-6"
      >
        <div className="rounded-lg border border-gold/30 bg-white p-5 text-center shadow-[0_1px_3px_rgba(43,32,32,0.06)] sm:p-6">
          <h2
            id="menu-images-heading"
            className="font-display text-lg uppercase tracking-[0.16em] text-burgundy sm:text-xl"
          >
            View Menu Images
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-3 flex w-28 items-center gap-2"
          >
            <span className="h-px flex-1 bg-gold" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <span className="h-px flex-1 bg-gold" />
          </div>

          <button
            type="button"
            onClick={openViewer}
            className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-burgundy px-6 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-cream transition-colors duration-200 hover:bg-burgundy-dark sm:w-auto"
          >
            <Images aria-hidden="true" className="h-4 w-4" />
            View Menu Images
          </button>
        </div>
      </section>

      {hasAnyImage && (
        <dialog
          ref={dialogRef}
          onClose={() => {
            setOpen(false);
            setZoomIndex(0);
          }}
          onClick={(event) => {
            if (event.target === dialogRef.current) closeViewer();
          }}
          aria-label="Menu images viewer"
          className="m-auto w-full max-w-4xl bg-transparent p-0 backdrop:bg-[rgba(30,8,16,0.88)]"
        >
        <div
          className="flex max-h-[100dvh] w-full flex-col overflow-hidden rounded-none bg-burgundy-dark sm:rounded-lg"
          onClick={(event) => event.stopPropagation()}
        >
          {/* Viewer header */}
          <div className="flex items-center justify-between gap-3 border-b border-gold/30 px-4 py-3">
            <div
              role="tablist"
              aria-label="Choose menu image"
              className="flex gap-2"
            >
              {food && (
                <button
                  type="button"
                  role="tab"
                  aria-selected={pane === "food"}
                  onClick={() => {
                    setPane("food");
                    setZoomIndex(0);
                  }}
                  className={[
                    "h-9 rounded-full px-3 text-[0.7rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200",
                    pane === "food"
                      ? "bg-gold text-burgundy-dark"
                      : "border border-gold/40 text-cream hover:border-gold",
                  ].join(" ")}
                >
                  Food Menu
                </button>
              )}
              {beverage && (
                <button
                  type="button"
                  role="tab"
                  aria-selected={pane === "beverages"}
                  onClick={() => {
                    setPane("beverages");
                    setZoomIndex(0);
                  }}
                  className={[
                    "h-9 rounded-full px-3 text-[0.7rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200",
                    pane === "beverages"
                      ? "bg-gold text-burgundy-dark"
                      : "border border-gold/40 text-cream hover:border-gold",
                  ].join(" ")}
                >
                  Beverage Menu
                </button>
              )}
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeViewer}
              aria-label="Close menu images"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-cream transition-colors duration-200 hover:bg-white/10"
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>

          {/* Image + zoom controls */}
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="min-h-0 flex-1 overflow-auto overscroll-contain bg-[#1e0810] p-2">
              <Image
                src={currentImage!.src}
                alt={currentImage!.alt}
                width={currentImage!.width}
                height={currentImage!.height}
                sizes="100vw"
                unoptimized
                priority
                className="mx-auto !h-auto max-w-none"
                style={{ width: `${scale * 100}%` }}
                onDoubleClick={() =>
                  setZoomIndex((index) => (index === 0 ? 2 : 0))
                }
              />
            </div>

            <div className="flex items-center justify-center gap-3 border-t border-gold/30 px-4 py-3">
              <button
                type="button"
                onClick={() => changeZoom(-1)}
                disabled={zoomIndex === 0}
                aria-label="Zoom out"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-cream transition-colors duration-200 hover:border-gold disabled:opacity-35"
              >
                <Minus aria-hidden="true" className="h-4 w-4" />
              </button>

              <span
                aria-live="polite"
                className="min-w-16 text-center text-xs tracking-[0.12em] text-gold-light"
              >
                {Math.round(scale * 100)}%
              </span>

              <button
                type="button"
                onClick={() => changeZoom(1)}
                disabled={zoomIndex === ZOOM_STEPS.length - 1}
                aria-label="Zoom in"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-cream transition-colors duration-200 hover:border-gold disabled:opacity-35"
              >
                <Plus aria-hidden="true" className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => setZoomIndex(0)}
                disabled={zoomIndex === 0}
                aria-label="Reset zoom"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-cream transition-colors duration-200 hover:border-gold disabled:opacity-35"
              >
                <RotateCcw aria-hidden="true" className="h-4 w-4" />
              </button>

              <span className="hidden items-center gap-1.5 pl-2 text-[0.7rem] tracking-[0.1em] text-cream/70 sm:flex">
                <Maximize2 aria-hidden="true" className="h-3.5 w-3.5" />
                Double-tap to zoom
              </span>
            </div>
          </div>
        </div>
      </dialog>
      )}
    </>
  );
}

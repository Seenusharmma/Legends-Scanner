"use client";

import { useRef, useState } from "react";
import { Beer, UtensilsCrossed } from "lucide-react";
import type { MenuCategory } from "@/data/menu";
import MenuSection from "./MenuSection";

type TabKey = "food" | "beverages";

const TABS: { key: TabKey; label: string; Icon: typeof Beer }[] = [
  { key: "food", label: "Food", Icon: UtensilsCrossed },
  { key: "beverages", label: "Beverages", Icon: Beer },
];

/**
 * Sticky FOOD / BEVERAGES tab switcher.
 * Both panels stay in the DOM (hidden) so switching is instant.
 */
export default function MenuTabs({
  food,
  beverages,
}: {
  food: MenuCategory[];
  beverages: MenuCategory[];
}) {
  const [active, setActive] = useState<TabKey>("food");
  const tabRefs = useRef<Record<TabKey, HTMLButtonElement | null>>({
    food: null,
    beverages: null,
  });

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    const last = TABS.length - 1;
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = index === last ? 0 : index + 1;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = index === 0 ? last : index - 1;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = last;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      const next = TABS[nextIndex];
      setActive(next.key);
      tabRefs.current[next.key]?.focus();
    }
  };

  return (
    <div>
      {/* Sticky tab bar */}
      <div className="sticky top-0 z-40 border-b border-gold/30 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/85">
        <div
          role="tablist"
          aria-label="Menu sections"
          className="mx-auto grid w-full max-w-2xl grid-cols-2 gap-2 px-4 py-3"
        >
          {TABS.map((tab, index) => {
            const isActive = active === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                role="tab"
                id={`tab-${tab.key}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.key}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActive(tab.key)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                ref={(node) => {
                  tabRefs.current[tab.key] = node;
                }}
                className={[
                  "flex h-12 items-center justify-center gap-2 rounded-full px-4 text-[0.8rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-200 sm:text-[0.85rem]",
                  isActive
                    ? "bg-burgundy text-cream shadow-[0_2px_10px_rgba(74,16,36,0.28)]"
                    : "border border-burgundy/20 bg-white text-ink hover:border-gold hover:text-burgundy",
                ].join(" ")}
              >
                <tab.Icon aria-hidden="true" className="h-4 w-4 shrink-0" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Panels */}
      <div className="mx-auto w-full max-w-2xl px-4 pb-4 sm:px-6">
        <div
          role="tabpanel"
          id="panel-food"
          aria-labelledby="tab-food"
          hidden={active !== "food"}
          className="menu-panel"
        >
          <div className="flex flex-col gap-4 pt-6">
            {food.map((category) => (
              <MenuSection key={category.id} category={category} />
            ))}
          </div>
        </div>

        <div
          role="tabpanel"
          id="panel-beverages"
          aria-labelledby="tab-beverages"
          hidden={active !== "beverages"}
          className="menu-panel"
        >
          <div className="flex flex-col gap-4 pt-6">
            {beverages.map((category) => (
              <MenuSection key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { createElement } from "react";
import { createRoot, type Root } from "react-dom/client";
import { landings, type LandingId } from "./registry";
import { ensureUtm } from "./utm";

declare const __VERSION__: string;

type MountOptions = { landing: LandingId; brand: string; language: string };

let root: Root | null = null;
let styleEl: HTMLStyleElement | null = null;

export const version = __VERSION__;

export function mount(selector: string, opts: MountOptions) {
  const el = document.querySelector(selector);
  const lp = landings[opts.landing];
  if (!el || !lp) {
    console.error("[CNHLandings] container ou landing não encontrado", selector, opts.landing);
    return;
  }
  unmount();
  ensureUtm();

  styleEl = document.createElement("style");
  styleEl.textContent = lp.css; // CSS já escopado pelo prefixo da classe
  document.head.appendChild(styleEl);

  root = createRoot(el);
  root.render(createElement(lp.Component, { brand: opts.brand, language: opts.language }));
}

export function unmount() {
  root?.unmount();
  root = null;
  styleEl?.remove();
  styleEl = null;
}
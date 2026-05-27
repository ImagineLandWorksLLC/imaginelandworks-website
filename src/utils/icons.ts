import {
  faPersonDigging,
  faLeaf,
  faTree,
  faWater,
  faFire,
  faRulerCombined,
  faHammer,
  faTractor,
  faClipboardCheck,
  faCalendarDays,
  faMedal,
  faShieldHalved,
  faStar,
  faBolt,
  faHelmetSafety,
  faGears,
  faHouseChimney,
  faHandshake,
  faUserShield,
  faMapPin,
  faLocationDot,
  faPhone,
  faEnvelope,
  faQuoteLeft,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

// ---------------------------------------------------------------------------
// Central icon registry — add new FA icons here, reference them by key string
// ---------------------------------------------------------------------------
const iconMap: Record<string, IconDefinition> = {
  digging:           faPersonDigging,
  leaf:              faLeaf,
  tree:              faTree,
  water:             faWater,
  fire:              faFire,
  "ruler-combined":  faRulerCombined,
  hammer:            faHammer,
  tractor:           faTractor,
  "clipboard-check": faClipboardCheck,
  "calendar-days":   faCalendarDays,
  medal:             faMedal,
  "shield-halved":   faShieldHalved,
  star:              faStar,
  "star-half":       faStarHalfStroke,
  bolt:              faBolt,
  "helmet-safety":   faHelmetSafety,
  gears:             faGears,
  "house-chimney":   faHouseChimney,
  handshake:         faHandshake,
  "user-shield":     faUserShield,
  "map-pin":         faMapPin,
  "location-dot":    faLocationDot,
  phone:             faPhone,
  envelope:          faEnvelope,
  "quote-left":      faQuoteLeft,
};

// ---------------------------------------------------------------------------
// Internal builder — shared by both public helpers below
// ---------------------------------------------------------------------------
function buildSvg(
  w: number,
  h: number,
  path: string | string[],
  cssClass: string
): string {
  const d = Array.isArray(path) ? path.join(" ") : path;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" fill="currentColor" class="${cssClass}" aria-hidden="true"><path d="${d}" /></svg>`;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Render a registered FA icon by string key.
 * Returns an empty string if the key isn't found (fails silently).
 */
export function iconSvg(name: string, cssClass = "size-6"): string {
  const fa = iconMap[name];
  if (!fa) return "";
  const [w, h, , , path] = fa.icon;
  return buildSvg(w, h, path, cssClass);
}

/**
 * Render a FA icon from an imported IconDefinition directly.
 * Use this when you have a specific `faXxx` import and don't need the registry.
 */
export function iconFromDef(fa: IconDefinition, cssClass = "size-6"): string {
  const [w, h, , , path] = fa.icon;
  return buildSvg(w, h, path, cssClass);
}

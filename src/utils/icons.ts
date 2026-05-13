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
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

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
  bolt:              faBolt,
  "helmet-safety":   faHelmetSafety,
};

export function iconSvg(name: string, cssClass = "size-6"): string {
  const fa = iconMap[name];
  if (!fa) return "";
  const [w, h, , , path] = fa.icon;
  const d = Array.isArray(path) ? path.join(" ") : path;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" fill="currentColor" class="${cssClass}" aria-hidden="true"><path d="${d}" /></svg>`;
}

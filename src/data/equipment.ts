export interface EquipmentItem {
  name: string;
  /** Icon key from src/utils/icons.ts, used until a real equipment photo is available */
  icon: string;
  /** Filename only from src/assets/images/equipment/. Omit until a real photo exists. */
  image?: string;
  use: string;
}

export const equipmentList: EquipmentItem[] = [
  {
    name: "Skid Steer",
    icon: "gears",
    use: "Compact, agile power for brush clearing, grading, and material handling in tight spaces.",
  },
  {
    name: "Forestry Mulcher",
    icon: "tree",
    use: "Grinds trees and brush in place, turning vegetation into ground cover instantly, no hauling required.",
  },
  {
    name: "Mini Excavator",
    icon: "digging",
    use: "Precision digging for trenches, footers, and drainage in yards a full-size excavator can't reach.",
  },
  {
    name: "Excavator",
    icon: "hammer",
    use: "Heavy-duty digging and demolition for foundations, ponds, and large-scale site work.",
  },
  {
    name: "Bulldozer",
    icon: "tractor",
    use: "Pushes and grades large volumes of soil and debris to level a site fast.",
  },
  {
    name: "Dump Truck",
    icon: "truck",
    use: "Hauls cleared debris, spoil, and fill material on and off site.",
  },
];

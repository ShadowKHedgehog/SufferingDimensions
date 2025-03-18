import { MultiplierTabIcons } from "./icons";

// See index.js for documentation
export const eternities = {
  total: {
    name: "Eternities gained per Eternity",
    isBase: true,
    multValue: () => gainedEternities(),
    isActive: () => (PlayerProgress.realityUnlocked() || Achievement(113).isUnlocked) && !Pelle.isDoomed,
    overlay: ["Δ", "<i class='fa-solid fa-arrows-rotate' />"],
  },
  achievement: {
    name: "Achievements",
    multValue: () => DC.D1.timesEffectsOf(
     Achievement(113).effectOrDefault(1), 
     Achievement(115).effectOrDefault(1),
     Achievement(106).effectOrDefault(1)
     ),
    isActive: () => Achievement(106).isUnlocked,
    icon: MultiplierTabIcons.ACHIEVEMENT,
  },
  amplifierEter: {
    name: "Reality Upgrade - Eternal Amplifier",
    multValue: () => RealityUpgrade(3).effectOrDefault(1),
    isActive: () => RealityUpgrade(3).canBeApplied,
    icon: MultiplierTabIcons.UPGRADE("reality"),
  },
  glyph: {
    name: "Equipped Glyphs",
    multValue: () => getAdjustedGlyphEffect("timeetermult"),
    isActive: () => PlayerProgress.realityUnlocked(),
    icon: MultiplierTabIcons.GENERIC_GLYPH,
  },
  ra: {
    name: "Ra Upgrade - Multiplier based on TT",
    multValue: () => Ra.unlocks.continuousTTBoost.effects.eternity.effectOrDefault(1),
    isActive: () => Ra.unlocks.continuousTTBoost.isUnlocked,
    icon: MultiplierTabIcons.GENERIC_RA,
  },
  alchemy: {
    name: "Alchemy Resource - Eternity",
    powValue: () => AlchemyResource.eternity.effectOrDefault(1),
    isActive: () => AlchemyResource.eternity.canBeApplied,
    icon: MultiplierTabIcons.ALCHEMY,
  },
};

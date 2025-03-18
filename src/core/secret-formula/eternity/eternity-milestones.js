export const eternityMilestones = {
  autobuyerIPMult: {
    eternities: 2,
    reward: "Unlock the Infinity Point multiplier autobuyer",
    pelleUseless: true
  },
  keepAutobuyers: {
    eternities: 4,
    reward: "You start Eternity with all Normal Challenges complete, all normal autobuyers, and infinity broken"
  },
  autobuyerReplicantiGalaxy: {
    eternities: 8,
    reward: "Unlock the Replicanti Galaxy Autobuyer"
  },
  keepInfinityUpgrades: {
    eternities: 16,
    reward: "You start Eternity with all Infinity Upgrades",
    givenByPelle: () => PelleUpgrade.keepInfinityUpgrades.isBought,
    pelleUseless: true
  },
  bigCrunchModes: {
    eternities: 1,
    reward: "Unlock more Big Crunch Autobuyer options"
  },
  autoEP: {
    eternities: 32,
    reward: () => {
      const EPmin = getOfflineEPGain(TimeSpan.fromMinutes(1).totalMilliseconds);
      const em200 = getEternitiedMilestoneReward(TimeSpan.fromHours(1).totalMilliseconds,
        EternityMilestone.autoEternities.isReached).gt(0);
      const em1000 = getInfinitiedMilestoneReward(TimeSpan.fromHours(1).totalMilliseconds,
        EternityMilestone.autoInfinities.isReached).gt(0);
      if (!player.options.offlineProgress) return `This milestone would give offline EP generation, but offline progress
        is currently disabled`;
      const effectText = (em200 || em1000) ? "Inactive" : `Currently ${format(EPmin, 2, 2)} EP/min`;
      return `While offline, gain ${formatPercents(0.25)} of your best Eternity Points per minute from previous
        Eternities (${effectText})`;
    },
    activeCondition: () => (player.options.offlineProgress
      ? `Active as long as neither of the other offline milestones
        (${formatInt(200)} or ${formatInt(1000)}) are also active`
      : ""),
  },
  autoIC: {
    eternities: 64,
    reward: `You complete Infinity Challenges as soon as you unlock them,
      and keep the Dimensional Sacrifice Autobuyer`,
    pelleUseless: true
  },
  keepBreakUpgrades: {
    eternities: 128,
    reward: "You start Eternity with all Break Infinity Upgrades",
    givenByPelle: () => PelleUpgrade.keepBreakInfinityUpgrades.isBought,
    pelleUseless: true
  },
  autobuyMaxGalaxies: {
    eternities: 256,
    reward: "Unlock the buy max Antimatter Galaxies Autobuyer mode"
  },
  unlockReplicanti: {
    eternities: 512,
    reward: "You start with Replicanti unlocked",
    givenByPelle: () => PelleUpgrade.replicantiStayUnlocked.isBought,
    pelleUseless: true
  },
  autobuyerID1: {
    eternities: 1024,
    reward: "Unlock the 1st Infinity Dimension Autobuyer",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID2: {
    eternities: 2048,
    reward: "Unlock the 2nd Infinity Dimension Autobuyer",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID3: {
    eternities: 4096,
    reward: "Unlock the 3rd Infinity Dimension Autobuyer",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID4: {
    eternities: 8192,
    reward: "Unlock the 4th Infinity Dimension Autobuyer",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID5: {
    eternities: 16384,
    reward: "Unlock the 5th Infinity Dimension Autobuyer",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID6: {
    eternities: 32768,
    reward: "Unlock the 6th Infinity Dimension Autobuyer",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID7: {
    eternities: 65536,
    reward: "Unlock the 7th Infinity Dimension Autobuyer",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID8: {
    eternities: 65560,
    reward: "Unlock the 8th Infinity Dimension Autobuyer",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autoUnlockID: {
    eternities: 65589,
    reward: "You automatically unlock Infinity Dimensions upon reaching them"
  },
  unlockAllND: {
    eternities: 103201,
    reward: "Start with all Antimatter Dimensions available for purchase"
  },
  replicantiNoReset: {
    eternities: 195651,
    reward: `Replicanti Galaxies no longer reset Antimatter, Antimatter Dimensions,
      Tickspeed, Dimensional Sacrifice, or Dimension Boosts`,
    pelleUseless: true
  },
  autobuyerReplicantiChance: {
    eternities: 215341,
    reward: "Unlock the Replicanti Chance Upgrade Autobuyer",
    givenByPelle: () => PelleUpgrade.replicantiAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerReplicantiInterval: {
    eternities: 276513,
    reward: "Unlock the Replicanti Interval Upgrade Autobuyer",
    givenByPelle: () => PelleUpgrade.replicantiAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerReplicantiMaxGalaxies: {
    eternities: 324153,
    reward: "Unlock the Max Replicanti Galaxy Upgrade Autobuyer",
    givenByPelle: () => PelleUpgrade.replicantiAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerEternity: {
    eternities: 561032,
    reward: "Unlock autobuyer for Eternities"
  },
  autoEternities: {
    eternities: 561032,
    reward: () => {
      if (!player.options.offlineProgress) return `This milestone would generate eternities offline, but offline
        progress is currently disabled`;
      const eternities = getEternitiedMilestoneReward(TimeSpan.fromHours(1).totalMilliseconds,
        player.eternities.gte(200));
      // As far as I can tell, using templates here as Codefactor wants would lead to nested templates,
      // which seems messy to say the least.
      const realTime = PlayerProgress.seenAlteredSpeed() ? " real-time" : "";
      // eslint-disable-next-line prefer-template
      return `While offline, gain Eternities at ${formatPercents(0.5)} the rate of your fastest${realTime} Eternity ` +
        (eternities.gt(0) ? `(Currently ${format(eternities, 2, 2)}/hour)` : "(Inactive)");
    },
    activeCondition: () => (player.options.offlineProgress
      ? `Must be outside of all Challenges and Dilation, and the Eternity Autobuyer must be set to Eternity at zero EP.
        This milestone's effect is capped at ${formatInt(33)}ms.`
      : ""),
    pelleUseless: true
  },
  autoInfinities: {
    eternities: 1000000,
    reward: () => {
      if (!player.options.offlineProgress) return `This milestone would generate infinities offline, but offline
        progress is currently disabled`;
      const infinities = getInfinitiedMilestoneReward(TimeSpan.fromHours(1).totalMilliseconds,
        player.eternities.gte(1000));
      // eslint-disable-next-line prefer-template
      return `While offline, gain Infinities equal to ${formatPercents(0.5)}
        your best Infinities/hour this Eternity ` +
        (infinities.gt(0) ? `(Currently ${format(infinities, 2, 2)}/hour)` : "(Inactive)");
    },
    activeCondition: () => (player.options.offlineProgress
      ? `Must be outside of Normal/Infinity Challenges and outside of EC4 and EC12,
        the Big Crunch Autobuyer must be turned on and set to time mode with ${formatInt(5)} seconds or less,
        and the Eternity Autobuyer must be turned off.`
      : ""),
    pelleUseless: true
  }
};

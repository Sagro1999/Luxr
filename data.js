window.LC_LAMPS = [
  { id: "aputure_1200d",     label: "Aputure 1200d",          lumens: 125000 },
  { id: "aputure_600d",      label: "Aputure 600d",           lumens: 53000  },
  { id: "aputure_300d2",     label: "Aputure 300d II",        lumens: 21000  },
  { id: "aputure_120d2",     label: "Aputure 120d II",        lumens: 9600   },
  { id: "aputure_60d",       label: "Aputure 60d",            lumens: 4500   },
  { id: "nanlite_forza500",  label: "Nanlite Forza 500",      lumens: 37000  },
  { id: "nanlite_forza300",  label: "Nanlite Forza 300",      lumens: 21000  },
  { id: "nanlite_forza60",   label: "Nanlite Forza 60",       lumens: 5000   },
  { id: "godox_sl200ii",     label: "Godox SL200II",          lumens: 13000  },
  { id: "godox_sl60ii",      label: "Godox SL60IID",          lumens: 4500   },
  { id: "arri_skypanel_s60", label: "ARRI SkyPanel S60-C",    lumens: 28000  },
  { id: "custom",            label: "── Manuelle Eingabe ──", lumens: null   },
];

window.LC_MODIFIERS = [
  { id: "bare",            label: "Bare Bulb / Open Face",      factor: 1.00, beamFactor: 1.0,  domeDiffusion: false },
  { id: "reflector",       label: "Reflektor (Standard)",       factor: 0.85, beamFactor: 1.6,  domeDiffusion: false },
  { id: "ap_spotlight",    label: "Aputure Spotlight Mount",    factor: 0.72, beamFactor: 3.5,  domeDiffusion: false },
  { id: "ap_fresnel",      label: "Aputure Fresnel",            factor: 0.78, beamFactor: 2.4,  domeDiffusion: false },
  { id: "ap_dome150",      label: "Aputure Light Dome 150",     factor: 0.58, beamFactor: 0.65, domeDiffusion: true  },
  { id: "ap_dome2",        label: "Aputure Light Dome II",      factor: 0.60, beamFactor: 0.72, domeDiffusion: true  },
  { id: "ap_lantern",      label: "Aputure Lantern",            factor: 0.55, beamFactor: 0.50, domeDiffusion: false },
  { id: "softbox",         label: "Softbox (generisch)",        factor: 0.65, beamFactor: 0.70, domeDiffusion: false },
  { id: "octobox",         label: "Octobox (generisch)",        factor: 0.60, beamFactor: 0.75, domeDiffusion: false },
  { id: "fresnel_generic", label: "Fresnel / Spot (generisch)", factor: 0.80, beamFactor: 2.2,  domeDiffusion: false },
];

window.LC_DOME_DIFFUSIONS = [
  { id: "bare",  label: "Keine (Bare Dome)",       factor: 1.00 },
  { id: "half",  label: "Half Diffusion",          factor: 0.85 },
  { id: "inner", label: "Inner Diffusion (weiss)", factor: 0.70 },
  { id: "outer", label: "Outer Diffusion (Frost)", factor: 0.55 },
];

window.LC_DIFFUSIONS = [
  { id: "none",          label: "Keine",                       factor: 1.00  },
  { id: "lastolite_075", label: "Lastolite TriGrip 0.75 Bl.",  factor: 0.595 },
  { id: "lastolite_125", label: "Lastolite TriGrip 1.25 Bl.",  factor: 0.420 },
  { id: "ultrabounce",   label: "Ultrabounce (Reflexion)",      factor: 0.70  },
  { id: "diff_216",      label: "216 White Diffusion (1 Bl.)",  factor: 0.50  },
  { id: "diff_250",      label: "250 Heavy Frost (2 Bl.)",      factor: 0.25  },
  { id: "light_grid",    label: "Light Grid Cloth (~0.15 Bl.)", factor: 0.90  },
];

// Umgebungslicht-Presets (Lux-Werte typische Richtwerte)
window.LC_AMBIENT_PRESETS = [
  { label: "Vollnacht",        lux: 0      },
  { label: "Mondlicht",        lux: 1      },
  { label: "Daemmerung",       lux: 30     },
  { label: "Strassenlampe",    lux: 100    },
  { label: "Wohnzimmer",       lux: 200    },
  { label: "Buero / Laden",    lux: 500    },
  { label: "Studio",           lux: 3000   },
  { label: "Bedeckter Himmel", lux: 10000  },
  { label: "Klarer Himmel",    lux: 40000  },
  { label: "Direktsonne",      lux: 100000 },
];

window.LC_APERTURES = [1.0,1.2,1.4,1.7,2.0,2.4,2.8,3.3,4.0,4.8,5.6,6.7,8,9.5,11,13,16,19,22];

window.LC_SHUTTERS = [
  {label:"1/8000",val:1/8000},{label:"1/4000",val:1/4000},{label:"1/2000",val:1/2000},
  {label:"1/1000",val:1/1000},{label:"1/500",val:1/500},{label:"1/250",val:1/250},
  {label:"1/200",val:1/200},{label:"1/125",val:1/125},{label:"1/100",val:1/100},
  {label:"1/60",val:1/60},{label:"1/50",val:1/50},{label:"1/30",val:1/30},
  {label:"1/25",val:1/25},{label:"1/15",val:1/15},{label:"1/8",val:1/8},
  {label:"1/4",val:1/4},{label:"1/2",val:1/2},{label:"1s",val:1},
];

window.LC_ISO_VALUES = [100,200,400,800,1600,3200,6400,12800];

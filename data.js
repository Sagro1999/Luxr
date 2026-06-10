window.LC_LAMPS = [
  { id: "aputure_1200d",     label: "Aputure 1200d Pro",      refLux: 6380,  refDist: 3, source: "bare @3m gemessen"  },
  { id: "aputure_600d",      label: "Aputure 600d Pro",       refLux: 22150, refDist: 1, source: "bare @1m gemessen"  },
  { id: "aputure_300d2",     label: "Aputure 300d II",        refLux: 11000, refDist: 1, source: "bare @1m gemessen"  },
  { id: "aputure_storm80c",  label: "Aputure STORM 80c",      refLux: 6502,  refDist: 1, source: "bare @1m gemessen"  },
  { id: "nanlux_2400b",      label: "Nanlux Evoke 2400B",     refLux: 9584,  refDist: 3, source: "bare @3m gemessen"  },
  { id: "godox_sl200ii",     label: "Godox SL200II",          refLux: 13000, refDist: 1, source: "Herstellerangabe"   },
  { id: "godox_sl60ii",      label: "Godox SL60IID",          refLux: 4500,  refDist: 1, source: "Herstellerangabe"   },
  { id: "arri_skypanel_s60", label: "ARRI SkyPanel S60-C",    refLux: 28000, refDist: 1, source: "Herstellerangabe"   },
  { id: "custom",            label: "── Manuelle Eingabe ──", refLux: null,  refDist: 1, source: ""                   },
];

window.LC_MODIFIERS_BY_LAMP = {
  aputure_1200d: [
    { id: "bare",        label: "Bare Bulb",                       factor: 1.0   },
    { id: "refl_narrow", label: "Hyper Reflektor Narrow (BM1215)", factor: 13.0  },
    { id: "refl_medium", label: "Hyper Reflektor Medium (BM1230)", factor: 3.51  },
    { id: "refl_wide",   label: "Hyper Reflektor Wide (BM1245)",   factor: 2.04  },
    { id: "f10_flood",   label: "F10 Fresnel Flood",               factor: 2.27  },
    { id: "f10_spot",    label: "F10 Fresnel Spot",                factor: 5.08  },
  ],
  aputure_600d: [
    { id: "bare",        label: "Bare Bulb",                       factor: 1.0   },
    { id: "refl_hyper",  label: "Hyper Reflektor",                 factor: 4.45  },
    { id: "f10_flood",   label: "F10 Fresnel Flood (45°)",    factor: 4.03  },
    { id: "f10_spot",    label: "F10 Fresnel Spot (15°)",     factor: 10.12 },
    { id: "dome150",     label: "Light Dome 150",                  factor: 0.32, domeDiffusion: true },
    { id: "dome2",       label: "Light Dome II",                   factor: 0.32, domeDiffusion: true },
    { id: "lantern",     label: "Lantern",                         factor: 0.18  },
    { id: "spotlight",   label: "Spotlight Mount",                 factor: 3.20  },
  ],
  aputure_300d2: [
    { id: "bare",         label: "Bare Bulb",                      factor: 1.0   },
    { id: "refl_hyper",   label: "Hyper Reflektor",                factor: 4.09  },
    { id: "fresnel_flood",label: "Fresnel 2X Flood",               factor: 3.45  },
    { id: "fresnel_spot", label: "Fresnel 2X Spot",                factor: 7.27  },
    { id: "dome150",      label: "Light Dome 150",                 factor: 0.32, domeDiffusion: true },
    { id: "dome2",        label: "Light Dome II",                  factor: 0.32, domeDiffusion: true },
    { id: "lantern",      label: "Lantern",                        factor: 0.18  },
    { id: "spotlight",    label: "Spotlight Mount",                factor: 3.20  },
  ],
  aputure_storm80c: [
    { id: "bare",         label: "Bare COB",                       factor: 1.0   },
    { id: "refl_hyper",   label: "Hyper Reflektor",                factor: 3.05  },
    { id: "lantern_mini", label: "Mini Lantern Diffuser",          factor: 0.18  },
    { id: "cf4_spot",     label: "CF4 Fresnel 15° Spot",      factor: 5.54  },
    { id: "cf4_flood",    label: "CF4 Fresnel 40° Flood",     factor: 1.92  },
    { id: "dome40_1stop", label: "Quick Dome 40 (1-Stop Diff.)",   factor: 0.37  },
    { id: "dome40_2stop", label: "Quick Dome 40 (2-Stop Diff.)",   factor: 0.27  },
  ],
  nanlux_2400b: [
    { id: "bare",        label: "Bare Bulb",                       factor: 1.0   },
    { id: "refl_15",     label: "Reflektor 15°",              factor: 12.20 },
    { id: "refl_30",     label: "Reflektor 30°",              factor: 11.67 },
    { id: "refl_45",     label: "Reflektor 45°",              factor: 4.37  },
    { id: "refl_60",     label: "Reflektor 60°",              factor: 2.71  },
    { id: "fl35_spot",   label: "FL-35E Fresnel 15° Spot",    factor: 7.90  },
    { id: "fl35_flood",  label: "FL-35E Fresnel 46° Flood",   factor: 1.85  },
    { id: "nl70",        label: "NL70 Parallel Beam",              factor: 5.0   },
  ],
  godox_sl200ii: [
    { id: "bare",      label: "Bare Bulb",          factor: 1.0  },
    { id: "reflector", label: "Reflektor (Standard)",factor: 1.6  },
    { id: "softbox",   label: "Softbox",             factor: 0.55 },
  ],
  godox_sl60ii: [
    { id: "bare",      label: "Bare Bulb",           factor: 1.0  },
    { id: "reflector", label: "Reflektor (Standard)", factor: 1.6  },
    { id: "softbox",   label: "Softbox",              factor: 0.55 },
  ],
  arri_skypanel_s60: [
    { id: "bare",    label: "Direct (Standard)", factor: 1.0  },
    { id: "diffuse", label: "Diffuse Mode",       factor: 0.65 },
    { id: "heavy",   label: "Heavy Diffusion",    factor: 0.40 },
  ],
  custom: [
    { id: "bare",      label: "Bare Bulb",       factor: 1.0,  domeDiffusion: false },
    { id: "reflector", label: "Reflektor",        factor: 1.6,  domeDiffusion: false },
    { id: "softbox",   label: "Softbox",          factor: 0.55, domeDiffusion: false },
    { id: "dome",      label: "Dome / Octobox",   factor: 0.38, domeDiffusion: true  },
    { id: "fresnel",   label: "Fresnel",          factor: 3.0,  domeDiffusion: false },
    { id: "lantern",   label: "Lantern",          factor: 0.18, domeDiffusion: false },
  ],
};

window.LC_DOME_DIFFUSIONS = [
  { id: "none",   label: "Keine (Bare Dome)",  factor: 1.000 },
  { id: "stop15", label: "1.5-Stop Diffusion", factor: 0.354 },
  { id: "stop25", label: "2.5-Stop Diffusion", factor: 0.177 },
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

window.LC_ND_FILTERS = [
  { id: "none",  label: "Kein ND",           stops: 0  },
  { id: "nd03",  label: "ND 0.3  — 1 Stop",  stops: 1  },
  { id: "nd06",  label: "ND 0.6  — 2 Stop",  stops: 2  },
  { id: "nd09",  label: "ND 0.9  — 3 Stop",  stops: 3  },
  { id: "nd12",  label: "ND 1.2  — 4 Stop",  stops: 4  },
  { id: "nd15",  label: "ND 1.5  — 5 Stop",  stops: 5  },
  { id: "nd18",  label: "ND 1.8  — 6 Stop",  stops: 6  },
  { id: "nd21",  label: "ND 2.1  — 7 Stop",  stops: 7  },
  { id: "nd24",  label: "ND 2.4  — 8 Stop",  stops: 8  },
  { id: "nd30",  label: "ND 3.0  — 10 Stop", stops: 10 },
];

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
  {label:"1/8000",val:1/8000},{label:"1/4000",val:1/4000},{label:"1/2000",val:1/2000},{label:"1/1600",val:1/1600},
  {label:"1/1000",val:1/1000},{label:"1/800",val:1/800},{label:"1/500",val:1/500},{label:"1/250",val:1/250},
  {label:"1/200",val:1/200},{label:"1/125",val:1/125},{label:"1/100",val:1/100},
  {label:"1/60",val:1/60},{label:"1/50",val:1/50},{label:"1/30",val:1/30},
  {label:"1/25",val:1/25},{label:"1/15",val:1/15},{label:"1/8",val:1/8},
  {label:"1/4",val:1/4},{label:"1/2",val:1/2},{label:"1s",val:1},
];

window.LC_ISO_VALUES = [100,200,300,400,600,800,1600,3200,6400,12800];

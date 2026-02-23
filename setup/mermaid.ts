import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => ({
  theme: 'base',
  themeVariables: {
    // Backgrounds
    primaryColor: '#F0EBE3',       // Sand 100 — Node/Box-Hintergrund
    secondaryColor: '#FAF8F5',     // Sand 50 — Sekundäre Elemente
    tertiaryColor: '#F0EBE3',      // Sand 100 — Tertiäre Elemente
    background: '#FAF8F5',         // Sand 50 — Diagramm-Hintergrund

    // Borders & Lines
    primaryBorderColor: '#D4C5B0', // Sand 200
    secondaryBorderColor: '#D4C5B0',
    tertiaryBorderColor: '#D4C5B0',
    lineColor: '#C68B59',          // Copper — Verbindungslinien
    arrowheadColor: '#C68B59',     // Copper

    // Text
    primaryTextColor: '#2C2416',   // Sand 800
    secondaryTextColor: '#6B5436', // Sand 600
    tertiaryTextColor: '#6B5436',
    textColor: '#2C2416',          // Sand 800
    titleColor: '#1A1714',         // Sand 900

    // Typography — larger for 1080x1080 canvas readability
    fontFamily: 'DM Sans, system-ui, sans-serif',
    fontSize: '24px',

    // Nodes
    nodeBkg: '#F0EBE3',
    nodeBorder: '#D4C5B0',
    mainBkg: '#F0EBE3',

    // Clusters
    clusterBkg: '#FAF8F5',
    clusterBorder: '#D4C5B0',

    // Edges
    edgeLabelBackground: '#FAF8F5',
    defaultLinkColor: '#C68B59',

    // Notes (Sequence Diagrams)
    noteBkgColor: '#F0EBE3',
    noteBorderColor: '#C68B59',
    noteTextColor: '#2C2416',

    // Actors (Sequence Diagrams)
    actorBkg: '#F0EBE3',
    actorBorder: '#D4C5B0',
    actorTextColor: '#1A1714',
    actorLineColor: '#D4C5B0',
    signalColor: '#C68B59',
    signalTextColor: '#2C2416',
    labelBoxBkgColor: '#FAF8F5',
    labelBoxBorderColor: '#D4C5B0',
    labelTextColor: '#2C2416',
    loopTextColor: '#6B5436',
    activationBorderColor: '#C68B59',
    activationBkgColor: '#F0EBE3',

    // Mindmap — override default colors with Sand/Copper palette
    cScale0: '#F0EBE3',   // Sand 100
    cScale1: '#F0EBE3',
    cScale2: '#F0EBE3',
    cScale3: '#F0EBE3',
    cScale4: '#F0EBE3',
    cScale5: '#F0EBE3',
    cScale6: '#F0EBE3',
    cScale7: '#F0EBE3',
    cScale8: '#F0EBE3',
    cScale9: '#F0EBE3',
    cScale10: '#F0EBE3',
    cScale11: '#F0EBE3',
    cScaleLabel0: '#2C2416',  // Sand 800
    cScaleLabel1: '#2C2416',
    cScaleLabel2: '#2C2416',
    cScaleLabel3: '#2C2416',
    cScaleLabel4: '#2C2416',
    cScaleLabel5: '#2C2416',
    cScaleLabel6: '#2C2416',
    cScaleLabel7: '#2C2416',
    cScaleLabel8: '#2C2416',
    cScaleLabel9: '#2C2416',
    cScaleLabel10: '#2C2416',
    cScaleLabel11: '#2C2416',
  },
}))

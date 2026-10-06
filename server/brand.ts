export const BRAND = {
  id: 'fx-nova-academy',
  name: 'FX Nova Academy',
  shortName: 'FX Nova',
  engineName: 'FX Nova Engine',
  company: 'FX Nova Academy',
  url: 'https://www.fxnovaacademy.com',
  host: 'fxnovaacademy.com',
  storagePrefix: 'fxnova.academy',
  demoStudentEmail: 'student@fxnovaacademy.com',
  demoAdminEmail: 'admin@fxnovaacademy.com',
  colors: {
      "navy": "#ffd8c2",
      "navy800": "#ffc4a3",
      "navy700": "#ffab80",
      "navy600": "#fff0e8",
      "baazex": "#e85d2a",
      "baazex600": "#c4471a",
      "bright": "#ff8a4c",
      "accent": "#9a3412",
      "ink": "#2a1208",
      "muted": "#8a6558",
      "canvas": "#fff7f3",
      "line": "#f3d5c6",
      "onButton": "#ffffff",
      "glow": "232 93 42"
  },
} as const

export type Brand = typeof BRAND

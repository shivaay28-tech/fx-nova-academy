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
    navy: '#06152B',
    baazex: '#0066FF',
    bright: '#00A3FF',
    canvas: '#F4F8FC',
    ink: '#172033',
  },
} as const

export type Brand = typeof BRAND

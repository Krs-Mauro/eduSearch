export interface Program {
  'Annual Tuition': string
  'Degree Type': string
  Delivery: string
  Location: string
  'Program Name': string
  School: string
}

export interface ProgramItem extends Program {
  id: string
}

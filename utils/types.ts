export type MiniProjectRecord = {
  route: string
  title: string
  background: string
  id: number
}

export type SkillsRecord = {
  id: number
  name: string
  stars: number
  icon: string
}

export type CompanyRecord = {
  id: number
  name: string
  icon: string
  location: string
  startDate: string
  endDate: string
  isRemote: boolean
  skills: string[]
  position: string
  achievement?: string
  workAndRes: string[]
}

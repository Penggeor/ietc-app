import { GetValues } from '../../utils/type'

const HomeRoute = {
  HOME: 'home',
  WORD: 'word',
  LISTEN: 'listen',
  COMPOSITION: 'composition',
  MOCK_EXAM: 'mock-exam',
} as const

const HomeRouteIcon: {
  [key in GetValues<typeof HomeRoute>]: string
} = {
  [HomeRoute.HOME]: 'home',
  [HomeRoute.WORD]: 'book',
  [HomeRoute.LISTEN]: 'headphones',
  [HomeRoute.COMPOSITION]: 'edit',
  [HomeRoute.MOCK_EXAM]: 'file-text',
}

export { HomeRoute, HomeRouteIcon }

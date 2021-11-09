export const PATHS = {
  Account: userID => `/dream-tracker/account/${userID}`,
  Board: userID => `/dream-tracker/account/${userID}/wish-board`,
  Goals: userID => `/dream-tracker/account/${userID}/goals`,
  Inspiration: userID => `/dream-tracker/account/${userID}/inspiration`,
  Settings: userID => `/dream-tracker/account/${userID}/settings`
}
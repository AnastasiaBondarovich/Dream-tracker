export const ROUTE = {
  Account: "/dream-tracker/account/:userID",
  Board: "/dream-tracker/account/:userID/wish-board",
  Goals: "/dream-tracker/account/:userID/goals",
  Inspiration: "/dream-tracker/account/:userID/inspiration",
  Settings: "/dream-tracker/account/:userID/settings",
};


export const PATHS = {
  Account: userID => `/dream-tracker/account/${userID}`,
  Board: userID => `/dream-tracker/account/${userID}/wish-board`,
  Goals: userID => `/dream-tracker/account/${userID}/goals`,
  Inspiration: userID => `/dream-tracker/account/${userID}/inspiration`,
  Settings: userID => `/dream-tracker/account/${userID}/settings`
}
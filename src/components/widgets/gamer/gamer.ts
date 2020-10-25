// the year we consider the first video game to be invented
const FIRST_VIDEO_GAME_YEAR = 1972

// advanced exponential algorithm
// see https://docs.google.com/spreadsheets/d/1S7WrDI7YcITNFz_KmBDZOc1tZ8G4lPLyNMIUYEPWn-w/edit?usp=sharing
export const percentGamersInYear = (year: number) => {
  if (year < FIRST_VIDEO_GAME_YEAR) {
    return 0
  } else {
    return 1.3e-62 * Math.E ** (0.07 * year)
  }
}

export const beatles: string[] = ['John', 'Paul', 'George', 'Ringo'];

function isBeatle(host: string) {
  for (const beatle of beatles) {
    if (host === beatle) return true;
  }
  return false;
}

export class SubmarineController {
  constructor(private guests) {}

  leaderBoard() {
    type albumName = string;
    type albumCount = number;
    const albumMap: Map<albumName, albumCount> = new Map();
    for (const { favourite_album: album } of this.guests) {
      if (!albumMap.has(album)) {
        albumMap.set(album, 1);
      } else {
        albumMap.set(album, albumMap.get(album) + 1);
      }
    }
    const COUNT_POS = 1;
    return [...albumMap.entries()].sort((a, b) => a[COUNT_POS] - b[COUNT_POS]);
  }

  locations() {
    const locationMap: { [key: string]: number } = {};
    for (const { location } of this.guests) {
      if (!locationMap[location]) locationMap[location] = 0;
      locationMap[location]++;
    }
    return locationMap;
  }

  guestNumber(host: string): number {
    if (!isBeatle(host)) {
      console.error(`${host} is not a Beatle!`);
      return 0;
    } else {
      let numGuests = 0;
      for (const guest of this.guests) {
        if (guest.guest_of === host) numGuests++;
      }
      return numGuests;
    }
  }

}

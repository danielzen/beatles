import { albumName, Guest, guestName, locationType } from './guest';

import { Beatle } from './beatle';

type albumCount = number;

export class SubmarineController {

  // Internal models
  private albumMap: Map<albumName, albumCount> = new Map();
  private locationCountMap: { [location: string]: number } = {};
  private beatleInviteCountMap: { [beatleName: string]: number } = {};
  private guestList: Guest[] = [];

  constructor(guests: Guest[]) {
    for (const guest of guests) {
      this.addGuest(guest);
    }
  }

  addGuest(guest: Guest) {
    this.guestList.push(guest);
    this.addInvite(guest.guest_of);
    this.addAlbum(guest.favourite_album);
    this.addLocation(guest.location);
  }

  // deleteGuest(name: guestName) {
  //   // Could now be written
  // }

  leaderBoard(): any[] {
    const COUNT_POS = 1;
    return [...this.albumMap.entries()].sort((a, b) => a[COUNT_POS] - b[COUNT_POS]);
  }

  locations() {
    return this.locationCountMap;
  }

  guestNumber(host: Beatle): number {
    return this.beatleInviteCountMap[host];
  }

  private addInvite(host: Beatle) {
    if (!this.beatleInviteCountMap[host]) this.beatleInviteCountMap[host] = 1;
    else this.beatleInviteCountMap[host]++;
  }

  private addAlbum(album: albumName) {
    if (!this.albumMap.has(album)) {
      this.albumMap.set(album, 1);
    } else {
      this.albumMap.set(album, this.albumMap.get(album) + 1);
    }
  }

  private addLocation(location: locationType) {
    if (!this.locationCountMap[location]) this.locationCountMap[location] = 1;
    else this.locationCountMap[location]++;
  }

}

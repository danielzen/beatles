import { Beatle } from './beatle';

export type albumName = string;
export type locationType = string;
export type guestName = string;

export class Guest {
  public name: guestName;
  public location: locationType;
  public guest_of: Beatle;
  public favourite_album: albumName;
}

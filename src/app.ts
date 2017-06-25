import * as data from '../guests.json';
import { Beatle } from './beatle';
import { Guest } from './guest';
import { SubmarineController } from './SubmarineController';

const guests: Guest[] = Object.setPrototypeOf(data, Array.prototype);
const submarineController = new SubmarineController(guests);

function beatleGuests() {
  for (const beatle of Object.keys(Beatle)) {
    console.log(
      `${beatle} invited ${submarineController.guestNumber(beatle as Beatle)} guests`
    );
  }
}

beatleGuests();
console.log(submarineController.leaderBoard());
console.log(submarineController.locations());

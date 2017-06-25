import * as data from '../guests.json';
import { beatles, SubmarineController } from './SubmarineController';

const submarineController = new SubmarineController(data);

function beatleGuests() {
  for (const beatle of beatles) {
    console.log(
      `${beatle} has ${submarineController.guestNumber(beatle)} guests`
    );
  }
}

beatleGuests();
console.log(submarineController.leaderBoard());
console.log(submarineController.locations());

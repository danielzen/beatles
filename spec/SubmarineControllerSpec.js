"use strict";

import {SubmarineController} from '../build/SubmarineController';
import * as data from '../guests.json';

const guests = Object.setPrototypeOf(data, Array.prototype);

const submarine = new SubmarineController(guests);

describe("SubmarineController", () => {
  it("shows john has 4 guests", () => {
    expect(submarine.guestNumber("John")).toBe(4);
  });

  it("shows john has 4 guests", () => {
    expect(submarine.guestNumber("Paul")).toBe(4);
  });

  it("shows john has 3 guests", () => {
    expect(submarine.guestNumber("George")).toBe(3);
  });

  it("shows john has 5 guests", () => {
    expect(submarine.guestNumber("Ringo")).toBe(5);
  });

  it("sorts liked album leaderboard", () => {
    expect(submarine.leaderBoard()).toEqual([
      ["Let it be", 1],
      ["Abbey Road", 2],
      ["Sgt. Pepper", 2],
      ["White Album", 2],
      ["Revolver", 4],
      ["Magical Mystery Tour", 5]
    ]);
  });

  it("shows how many people are being picked up at each location", () => {
    expect(submarine.locations()).toEqual({
        'Octopus\'s Garden': 3,
        'Penny Lane': 4,
        'Buckingham Palace': 1,
        'Abbey Road': 2,
        USSR: 1,
        India: 2,
        'Strawberry fields': 2,
        'Lime Street': 1
      })
  })
});

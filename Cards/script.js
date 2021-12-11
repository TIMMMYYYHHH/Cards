"use strict";

const cards = {
  acc: {
    suite: "Clubs",
    value: 1,
    img: "img/AC.png",
  },
  kic: {
    suite: "Clubs",
    value: 13,
    img: "img/KC.png",
  },
  quc: {
    suite: "Clubs",
    value: 12,
    img: "img/QC.png",
  },
  jac: {
    suite: "Clubs",
    value: 11,
    img: "img/JC.png",
  },
  tec: {
    suite: "Clubs",
    value: 10,
    img: "img/10C.png",
  },
  nic: {
    suite: "Clubs",
    value: 9,
    img: "img/9C.png",
  },
  eic: {
    suite: "Clubs",
    value: 8,
    img: "img/8C.png",
  },
  sec: {
    suite: "Clubs",
    value: 7,
    img: "img/7C.png",
  },
  sic: {
    suite: "Clubs",
    value: 6,
    img: "img/6C.png",
  },
  fic: {
    suite: "Clubs",
    value: 5,
    img: "img/9C.png",
  },
  foc: {
    suite: "Clubs",
    value: 4,
    img: "img/4C.png",
  },
  thc: {
    suite: "Clubs",
    value: 3,
    img: "img/3C.png",
  },
  twc: {
    suite: "Clubs",
    value: 2,
    img: "img/2C.png",
  },

  acd: {
    suite: "Diamond",
    value: 1,
    img: "img/AD.png",
  },
  kid: {
    suite: "Diamond",
    value: 13,
    img: "img/KD.png",
  },
  qud: {
    suite: "Diamond",
    value: 12,
    img: "img/QD.png",
  },
  jad: {
    suite: "Diamond",
    value: 11,
    img: "img/JD.png",
  },
  ted: {
    suite: "Diamond",
    value: 10,
    img: "img/10D.png",
  },
  nid: {
    suite: "Diamond",
    value: 9,
    img: "img/9D.png",
  },
  eid: {
    suite: "Diamond",
    value: 8,
    img: "img/8D.png",
  },
  sed: {
    suite: "Diamond",
    value: 7,
    img: "img/7D.png",
  },
  sid: {
    suite: "Diamond",
    value: 6,
    img: "img/6D.png",
  },
  fid: {
    suite: "Diamond",
    value: 5,
    img: "img/9D.png",
  },
  fod: {
    suite: "Diamond",
    value: 4,
    img: "img/4D.png",
  },
  thd: {
    suite: "Diamond",
    value: 3,
    img: "img/3D.png",
  },
  twd: {
    suite: "Spade",
    value: 2,
    img: "img/2D.png",
  },

  acs: {
    suite: "Spade",
    value: 1,
    img: "img/AS.png",
  },
  kis: {
    suite: "Spade",
    value: 13,
    img: "img/KS.png",
  },
  qus: {
    suite: "Spade",
    value: 12,
    img: "img/QS.png",
  },
  jas: {
    suite: "Spade",
    value: 11,
    img: "img/JS.png",
  },
  tes: {
    suite: "Spade",
    value: 10,
    img: "img/10S.png",
  },
  nis: {
    suite: "Spade",
    value: 9,
    img: "img/9S.png",
  },
  eis: {
    suite: "Spade",
    value: 8,
    img: "img/8S.png",
  },
  ses: {
    suite: "Spade",
    value: 7,
    img: "img/7S.png",
  },
  sis: {
    suite: "Spade",
    value: 6,
    img: "img/6S.png",
  },
  fis: {
    suite: "Spade",
    value: 5,
    img: "img/9S.png",
  },
  fos: {
    suite: "Spade",
    value: 4,
    img: "img/4S.png",
  },
  ths: {
    suite: "Spade",
    value: 3,
    img: "img/3S.png",
  },
  tws: {
    suite: "Spade",
    value: 2,
    img: "img/2S.png",
  },
  // Heart
  ach: {
    suite: "Heart",
    value: 1,
    img: "img/AH.png",
  },
  kih: {
    suite: "Heart",
    value: 13,
    img: "img/KH.png",
  },
  quh: {
    suite: "Heart",
    value: 12,
    img: "img/QH.png",
  },
  jah: {
    suite: "Heart",
    value: 11,
    img: "img/JH.png",
  },
  teh: {
    suite: "Heart",
    value: 10,
    img: "img/10H.png",
  },
  nih: {
    suite: "Heart",
    value: 9,
    img: "img/9H.png",
  },
  eih: {
    suite: "Heart",
    value: 8,
    img: "img/8H.png",
  },
  seh: {
    suite: "Heart",
    value: 7,
    img: "img/7H.png",
  },
  sih: {
    suite: "Heart",
    value: 6,
    img: "img/6H.png",
  },
  fih: {
    suite: "Heart",
    value: 5,
    img: "img/9H.png",
  },
  foh: {
    suite: "Heart",
    value: 4,
    img: "img/4H.png",
  },
  thh: {
    suite: "Heart",
    value: 3,
    img: "img/3H.png",
  },
  twh: {
    suite: "Heart",
    value: 2,
    img: "img/2H.png",
  },
};

// Card ID Array
const deck = [
  "acc",
  "kic",
  "quc",
  "jac",
  "tec",
  "nic",
  "eic",
  "sec",
  "sic",
  "fic",
  "fod",
  "thc",
  "twc",
  "acd",
  "kid",
  "qud",
  "jad",
  "ted",
  "nid",
  "eid",
  "sed",
  "sid",
  "fid",
  "fod",
  "thd",
  "twd",
  "acs",
  "kis",
  "qus",
  "jas",
  "tes",
  "nis",
  "eis",
  "ses",
  "sis",
  "fis",
  "fos",
  "ths",
  "tws",
  "ach",
  "kih",
  "quh",
  "jah",
  "teh",
  "nih",
  "eih",
  "seh",
  "sih",
  "fih",
  "foh",
  "thh",
  "twh",
];

console.log(deck.length);

var cardel = document.getElementById("myImg");

function newCard() {
  // Get random  item from cards array
  const card = deck[Math.floor(Math.random() * deck.length)];
  let previousCard = card;
  // Log random card to console
  console.log(cards[card].value, cards[card].suite);

  // Update Card element source with random card
  document.getElementById("cardEl").src = cards[card].img;
  document.getElementById("previousCardEl").src = cards[card].img;
}

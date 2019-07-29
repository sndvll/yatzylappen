export const getTypeString = (type) => {
    return {
        ones: 'Ettor',
        twos: 'Tvåor',
        threes: 'Treor',
        fours: 'Fyror',
        fives: 'Femmor',
        sixes: 'Sexor',
        pair: 'Ett par',
        twoPair: 'Två par',
        trips: 'Tretal',
        fourOfAKind: 'Fyrtal',
        fullHouse: 'Kåk',
        smallStraight: 'Liten stege',
        largeStraight: 'Stor stege',
        chance: 'Chans',
        yatzy: 'Yatzy'
    }[type];
};

export const getTypePosition = (type) => {
    return {
        ones: 'top',
        twos: 'top',
        threes: 'top',
        fours: 'top',
        fives: 'top',
        sixes: 'top',
        pair: 'bottom',
        twoPair: 'bottom',
        trips: 'bottom',
        fourOfAKind: 'bottom',
        fullHouse: 'bottom',
        smallStraight: 'bottom',
        largeStraight: 'bottom',
        chance: 'bottom',
        yatzy: 'bottom'
    }[type];
};

export const possiblePoints = (type) => {
  return {
      ones: [0,1,2,3,4,5,6],
      twos: [0,2,4,6,8,10],
      threes: [0,2,9,12,15,18],
      fours: [0,4,8,12,16,20],
      fives: [0,5,10,15,20,25],
      sixes: [0,6,12,18,24,30],
      pair: [0,2,4,6,8,10,12],
      twoPair: [0,6,8,10,12,14,16,18,20,22],
      trips: [0,3,6,9,12,15,18],
      fourOfAKind: [0,4,8,12,16,20,24],
      fullHouse: [0,7,9,11,12,13,14,15,16,17,18,19,21,22,23,24,26,27,28],
      smallStraight: [0,15],
      largeStraight: [0,20],
      chance: [0,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
      yatzy: [0,50]
  }[type]
};

export const newPlayer = (name) => {
    return {
        name: name,
        points: {
            top: {
                ones: 0,
                twos: 0,
                threes: 0,
                fours: 0,
                fives: 0,
                sixes: 0,
            },
            bottom: {
                pair: 0,
                twoPair: 0,
                trips: 0,
                fourOfAKind: 0,
                fullHouse: 0,
                smallStraight: 0,
                largeStraight: 0,
                chance: 0,
                yatzy: 0
            }
        }
    }
};
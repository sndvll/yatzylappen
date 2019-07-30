
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
      threes: [0,3,6,9,12,15],
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

const newValue = () => ({value: 0, valid: 'pristine'});

export const newPlayer = (name) => {
    return {
        name: name,
        points: {
            top: {
                ones: newValue(),
                twos: newValue(),
                threes: newValue(),
                fours: newValue(),
                fives: newValue(),
                sixes: newValue(),
            },
            bottom: {
                pair: newValue(),
                twoPair: newValue(),
                trips: newValue(),
                fourOfAKind: newValue(),
                fullHouse: newValue(),
                smallStraight: newValue(),
                largeStraight: newValue(),
                chance: newValue(),
                yatzy: newValue()
            }
        }
    }
};
function getVillainName(birthday) {

  let firstNames = new Map([
    [1, 'The Evil'],
    [2, 'The Vile'],
    [3, 'The Cruel'],
    [4, 'The Trashy'],
    [5, 'The Despicable'],
    [6, 'The Embarrassing'],
    [7, 'The Disreputable'],
    [8, 'The Atrocious'],
    [9, 'The Twirling'],
    [10, 'The Orange'],
    [11, 'The Terrifying'],
    [12, 'The Awkward']
  ]);

  let lastNames = new Map([
    [0, 'Mustache'],
    [1, 'Pickle'],
    [2, 'Hood Ornament'],
    [3, 'Raisin'],
    [4, 'Recycling Bin'],
    [5, 'Potato'],
    [6, 'Tomato'],
    [7, 'House Cat'],
    [8, 'Teaspoon'],
    [9, 'Laundry Basket']
  ]);
  let month = birthday.getMonth() + 1;
  let day = birthday.getDate().toString();
  let lastDigit = Number([...day].pop());
  return `${firstNames.get(month)} ${lastNames.get(lastDigit)}`;
}

module.exports = getVillainName;
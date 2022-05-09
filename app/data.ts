export const categories = [
  'Investigations',
  'Medication Request',
  'Home Collection Requests',
  'Alerts',
  'Notification',
  'Procedures',
  'Questionnaire',
  'Education Material',
  'POC Device Request',
  'Consultation',
  'Charge Item',
];

export const random = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;
function range(size, startAt = 0) {
  return [...Array(size).keys()].map((i) => i + startAt);
}
const randomCategories = () => {
  const length = random(0, 11) || 3;
  const arr = [];
  let randomIndex = random(0, 11);
  do {
    if (arr.indexOf(categories[randomIndex]) == -1) {
      arr.push(categories[randomIndex]);
    }
    randomIndex = random(0, 11);
  } while (arr.length < length);

  return arr.map((v) => ({ name: v, value: random(1, 10) }));
};

export const getData = (days) => {
  const monthly = range(days, 1);
  return monthly.map((x) => ({ name: x, series: randomCategories() }));
};

var myd = [
  {
    name: 'Germany',
    series: [
      {
        name: '2010',
        value: 7300000,
      },
      {
        name: '2011',
        value: 8940000,
      },
    ],
  },

  {
    name: 'USA',
    series: [
      {
        name: '2010',
        value: 7870000,
      },
      {
        name: '2011',
        value: 8270000,
      },
    ],
  },

  {
    name: 'France',
    series: [
      {
        name: '2010',
        value: 5000002,
      },
      {
        name: '2011',
        value: 5800000,
      },
    ],
  },
];

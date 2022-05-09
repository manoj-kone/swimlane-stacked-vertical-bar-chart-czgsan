// var moment = require('moment');
// var R = require('ramda');

import moment from 'moment';
import * as R from 'ramda';

function getSequence(data) {
  const arr = [];
  let format = 'YYYY-MM-DD';
  let startMoment = moment(data.startDate, format);
  let endMoment = moment(data.endDate, format);
  let diff = endMoment.diff(startMoment, 'days');
  const sampleObj = { name: data.type, title: data.name, status: data.status };
  for (let i = 0; i <= diff; i++) {
    arr.push(
      R.assoc('date', startMoment.clone().add(i, 'd').format(format), sampleObj)
    );
  }
  return arr;
}
export function prepareData(data) {
  const prepareSeries = R.pipe(
    R.groupBy(R.prop('name')),
    R.toPairs,
    R.map((c) => ({ name: c[0], value: c[1].length, data:c[1] }))
  );
  return R.pipe(
    R.map(getSequence),
    R.flatten,
    R.groupBy(R.prop('date')),
    R.toPairs,
    R.map((row) => ({ name: row[0], series: prepareSeries(row[1]) }))
  )(data.activities);
}

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

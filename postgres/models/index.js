const { Cause, Organization, TrendingCauses  } = require('../');

const getTrendingCauses = (callback) => {
  TrendingCauses.findAll({raw: true, include: [Organization]})
    .then(trending => {
      callback(null, [
        {
          cause: 'Black Lives Matter',
          data: trending.filter(org => org.cause === 'BLM')
        },
        {
          cause: 'Pride 2020',
          data: trending.filter(org => org.cause === 'PRIDE')
        },
        {
          cause: 'COVID-19',
          data: trending.filter(org => org.cause === 'RELIEF')
        },
        {
          cause: 'Social Justice',
          data: trending.filter(org => org.cause === 'JUSTICE')
        },
        {
          cause: 'Education',
          data: trending.filter(org => org.cause === 'EDUCATION')
        },
        {
          cause: 'Cancer',
          data: trending.filter(org => org.cause === 'CANCER')
        },
        {
          cause: 'Women\'s Rights',
          data: trending.filter(org => org.cause === 'WOMEN')
        },
        {
          cause: 'Environment',
          data: trending.filter(org => org.cause === 'ENVIRONMENT')
        },
        {
          cause: 'Veterans',
          data: trending.filter(org => org.cause === 'VETERANS') },
        {
          cause: 'Children',
          data: trending.filter(org => org.cause === 'CHILDREN') },
        {
          cause: 'Medical Research',
          data: trending.filter(org => org.cause === 'RESEARCH') },
        {
          cause: 'Animal\'s Rights',
          data: trending.filter(org => org.cause === 'ANIMALS')
        },
      ]);
    })
    .catch(err => callback(null));
};

module.exports.getTrendingCauses = getTrendingCauses;




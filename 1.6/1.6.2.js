const fetch = require('node-fetch');

const url = 'http://api.postcodes.io/postcodes/';
const bccUrl = 'https://opendata.bristol.gov.uk/api/records/1.0/search/?dataset=english-indices-of-deprivation-2015-bristol&facet=lsoa11_local_name&facet=ward&facet=multiple_deprivation_decile&refine.lsoa11_name=';

fetch(url + 'bs50bt')
  .then(e => e.json()) 
  .then(e => e.result.lsoa)
  .then(e => e.split(' ').join('+'))
  .then(e => fetch(bccUrl + e))
  .then(e => e.json())
  .then(e => e.records[0].fields)
  .then(e => e.sub_domain_children_and_young_people_decile)
  .then(e => console.log(e))

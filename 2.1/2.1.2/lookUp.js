const submitForm = () => {
  
  const postcode = document.getElementById('postcodeForm').elements[0].value;
  
  const getPostcodeData = postcode => {
    return getRemoteData(
      'https://api.postcodes.io/postcodes/',
      postcode
    )
  }
  
  const getLsoaData = lsoa => {
    return getRemoteData(
      'https://opendata.bristol.gov.uk/api/records/1.0/search/?dataset=english-indices-of-deprivation-2015-bristol&refine.lsoa11_name=',
      lsoa
    )
  }
    
  const getRemoteData = (baseUrl, data) => {
    return fetch(baseUrl + data)
      .then(e => e.json())
  }

  getPostcodeData(postcode)
    .then(e => e.result.lsoa)
    .then(e => e.split(' ').join('+'))
    .then(e => getLsoaData(e))
    .then(e => e.records[0].fields)
    .then(e => e.sub_domain_children_and_young_people_decile)
    .then(e => updateDisplay(e))
    .catch(e => updateDisplay('invalid postcode'))
} 

const updateDisplay = number => {
  document.getElementById('apiValue').innerText = number;
}

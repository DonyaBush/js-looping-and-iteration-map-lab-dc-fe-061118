// Code your solution in this file.
function toLower(driver) {
  return driver.toLowerCase();
}
function lowerCaseDrivers(drivers) {
  return drivers.map(toLower)
}

  function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
    splitName = driver.split(' ')
    return {firstName: splitName[0], lastName: splitName[1]}
  })
  
  function nameToAttributes(drivers){
  return drivers.map(function (driver) {
    splitName = driver.split(' ')
    console.log(splitName)
    return {firstName: splitName[0], lastName: splitName[1]}
  })

}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
  return driver.name + 'is from' + driver.hometown
  })





const drivers = [
        { name: 'Bobby',   hometown: 'Pittsburgh'  },
        { name: 'Sammy',   hometown: 'New York'    },
        { name: 'Sally',   hometown: 'Cleveland'   },
        { name: 'Annette', hometown: 'Los Angeles' },
        { name: 'Bobby',   hometown: 'Tampa Bay'   }
      ];

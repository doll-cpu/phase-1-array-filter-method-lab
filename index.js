// Code your solution here
// Function to find exact matches (case insensitive)
function findMatching(drivers, name) {
  return drivers.filter(driver => 
      driver.toLowerCase() === name.toLowerCase()
  );
}

// Function to find matches that begin with provided letters
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => 
      driver.toLowerCase().startsWith(letters.toLowerCase())
  );
}

// Function to match drivers' names in an array of objects
function matchName(drivers, name) {
  return drivers.filter(driver => 
      driver.name === name
  );
}



// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.
// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

// my solution

function whatCentury(year){
  const century = Math.ceil(year / 100);
  const suffix = getCenturySuffix(century);
  return century + suffix;
}

function getCenturySuffix(century){
  if (century >= 11 && century <= 13){
    return 'th'
  }
  
  const lastDigit = century % 10
  switch(lastDigit){
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
      return 'th';
  }
}
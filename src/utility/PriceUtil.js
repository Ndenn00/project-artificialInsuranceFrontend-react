var quoteUtility = require('./QuoteUtil')

module.exports = {
    generateTotalPrice : function(quote){
        var totalPrice = 0; 
        
        totalPrice += quoteUtility.basePrice(); 
        totalPrice += quoteUtility.ageCalculation(quote.dob, quoteUtility.basePrice()); 
        totalPrice += quoteUtility.drivingExperienceCalculation(quote.yearsHeld ,quoteUtility.basePrice()); 
        totalPrice += quoteUtility.vinCalculation(quote.licenceNumber); 
        totalPrice += quoteUtility.accidentWithinSixYears(quote.accidentWithinFiveYears)
        
        return totalPrice; 

    }
      
     
}
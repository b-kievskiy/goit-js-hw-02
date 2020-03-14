'use strict';

const checkForSpam = function(message) {
    const newMessage = message.toLowerCase();
    const findSpam = newMessage.includes('spam');
    const findSale = newMessage.includes('sale');
    
    if (findSpam || findSale) {
        message = true;
    } else {
        message = false;
    }

    return message;
};
  
  
  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
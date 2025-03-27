module.exports = (jsonData) => {
   jsonData = require('../../gifted-science.json');
   const jsonString = JSON.stringify(jsonData);
   const formattedString = `${jsonString}`;

   return formattedString;
};
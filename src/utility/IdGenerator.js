module.exports = {
    generateId : function (){
        var generatedId = "";
        var possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      
        for (var i = 0; i < 5; i++)
        generatedId += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
      
        return generatedId;
      }
      
     
}
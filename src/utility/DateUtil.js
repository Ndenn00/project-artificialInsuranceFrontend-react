var moment = require('moment');
module.exports = {

    differenceInYears: function(date){
        var years = moment().diff(date, 'years', false);
        return years;
    }
}
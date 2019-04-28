export const ukPhoneRegexp =  /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?#(\d{4}|\d{3}))?$/; 

export const ukPostcodeRegexp = /^([A-PR-UWYZ](?:[0-9]{1,2}|[0-9][A-HJKMNPR-Y]|[A-HK-Y][0-9]{1,2}|[A-HK-Y][0-9][ABEHMNPRVWXY]))\s*([0-9][ABD-HJLNP-UW-Z]{2})$/i; 

export const vinRegexp = /^[A-HJ-NPR-Za-hj-npr-z\\d]{8}[\\dX][A-HJ-NPR-Za-hj-npr-z\\d]{2}\\d{6}$/; 

export const registartionRegexp = /(^[A-Z]{2}[0-9]{2} [A-Z]{3}$)|(^[A-Z][0-9]{1,3} [A-Z]{3}$)|(^[A-Z]{3} [0-9]{1,3}[A-Z]$)|(^[0-9]{1,4} [A-Z]{1,2}$)|(^[0-9]{1,3} [A-Z]{1,3}$)|(^[A-Z]{1,2} [0-9]{1,4}$)|(^[A-Z]{1,3} [0-9]{1,3}$)/

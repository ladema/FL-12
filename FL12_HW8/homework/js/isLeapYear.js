function isLeapYear(date){
    let year = new Date(date).getFullYear();
    if (!year){
        return "Invalid Date";
    } else{
        if (year %100===0 && year%400!==0){
            return `${year}`+" is not a leap year";
        } else if (year%4===0){
            return `${year}`+" is a leap year";
        } else {
            return `${year}`+" is not a leap year";
        }
    }
}
isLeapYear('2020-01-01 00:00:00');
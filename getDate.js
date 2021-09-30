exports.getTodayDateLong = function(){
    let today = new Date();

    //Object literal
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }

    let day = today.toLocaleDateString('en-US', options);
    return day;
}

// luua meetod, mis kuvaks ainult kuupäeva ja kuud
exports.getTodayDateShort = function(){
    let today = new Date();

    //Object literal
    let options = {
        day: 'numeric',
        month: 'long'
    }

    let day = today.toLocaleDateString('en-US', options);
    return day;
}
(function (c, d) {
    let getCurrentDateFromUrl = () => {
        let parts = window.location.href.split("http://nightly.changelog.com/")[1].split('/');
        return new Date(parts[0], parts[1] - 1, parts[2]);
    };

    let getNextDate = (currentDate) => {
        let nextDate = new Date(currentDate);
        nextDate.setDate(currentDate.getDate() + 1);
        return nextDate;
    };

    let getDateAsString = (date) => {
        let fullYear = date.getFullYear();
        let month = (date.getMonth() + 1);
        let day = date.getDate();
        if (day < 10) {
            day = '0' + day;
        }
        if (month < 10) {
            month = '0' + month;
        }
        return fullYear + '/' + month + "/" + day + "/";
    };

    let msgHandler = function (message, callback) {
        let currentDate = getCurrentDateFromUrl();
        let nextDate = getNextDate(currentDate);
        let nextDateString = getDateAsString(nextDate);
        window.location.href = "http://nightly.changelog.com/" + nextDateString
    };
    c.runtime.onMessage.addListener(msgHandler);
})(chrome, document);



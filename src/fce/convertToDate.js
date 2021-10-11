export default function convertToDate(inputDate) {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let strMonth;
    switch(month) {
        case 0:
            strMonth = 'Jan';
            break;
        case 1:
            strMonth = 'Feb';
            break;
        case 2:
            strMonth = 'Mar';
            break;
        case 3:
            strMonth = 'Apr';
            break;
        case 4:
            strMonth = 'May';
            break;
        case 5:
            strMonth = 'Jun';
            break;
        case 6:
            strMonth = 'Jul';
            break;
        case 7:
            strMonth = 'Aug';
            break;
        case 8:
            strMonth = 'Sep';
            break;
        case 9:
            strMonth = 'Oct';
            break;
        case 10:
            strMonth = 'Nov';
            break
        case 11:
            strMonth = 'Dec';
            break
        default:
            break;
    }

    if(hours<10) {
        hours--;
        hours.toString();
        hours='0'+hours;
    } 
    if(minutes<10) {
        minutes.toString();
        minutes='0'+minutes;
    }
    if(seconds<10) {
        seconds.toString();
        seconds='0'+seconds;
    }

    return `${strMonth} ${day}, ${year} ${hours}:${minutes}:${seconds}`;
}
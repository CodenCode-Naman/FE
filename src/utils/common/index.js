import { monthInfo } from "../../constants/monthInfo";

export const getFormattedDateFromUTCtimestamp = (utcTimestamp) => {
    const date = new Date(utcTimestamp);
    return `${date.getDate()} 
        ${monthInfo[date.getMonth()]}, 
        ${date.getYear()} ${date.getUTCHours()}:${date.getUTCMinutes()} ${date.getUTCHours()> 12 ? 'PM' : 'AM'}`;
};
import dayjs from "dayjs";
import 'dayjs/locale/vi';

const LOCALE = "VI";

export const getDay = (date: string): string => {
    return dayjs(date).locale(LOCALE).format("DD");
}

export const getMonth = (date: string): string => {
    return dayjs(date).locale(LOCALE).format("MM");
}

export const getYear = (date: string): string => {
    return dayjs(date).locale(LOCALE).format("YYYY");
}

export const dayOfWeek = (date: string): string => {
    return dayjs(date).locale(LOCALE).format("dddd");
}

export const fullDate = (date: string): string => {
    return dayjs(date).locale(LOCALE).format("DD, MMMM, YYYY");
}
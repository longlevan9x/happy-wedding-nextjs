import dayjs from "dayjs";

export const getDay = (date: string) => {
    return dayjs(date).format("DD");
}

export const getMonth = (date: string) => {
    return dayjs(date).format("MM");
}

export const getYear = (date: string) => {
    return dayjs(date).format("YYYY");
}
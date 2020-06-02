export default function formatDate(date) {
    const year = new Date(date).getFullYear();
    const day = new Date(date).getDate();
    const month = new Date(date).getMonth();
    return `${formatDay(day)}/${formatMonth(month++)}/${year}`
}

function formatDay(day) {
    return day < 10 ? `0${day}`: day;
}
function formatMonth(month) {
    return month <= 9 ? `0${month}` : month;
}

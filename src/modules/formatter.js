function formatDate(inputDate) {
    const months = ["янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];
    const parts = inputDate.split("-");
    const year = parts[0];
    const month = parseInt(parts[1]) - 1;
    const day = parts[2];

    return `${day} ${months[month]} ${year}`;
}

export {
    formatDate
}
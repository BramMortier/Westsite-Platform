export const timestampToDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("nl-NL", options);
};

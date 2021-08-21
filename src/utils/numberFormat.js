export default (number) => {
    const formatter = new Intl.NumberFormat("id-ID");
    return formatter.format(number);
}
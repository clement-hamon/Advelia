export function sortByParam(data, param) {
    return data.sort(function (a, b) {
        return parseInt(a[param]) - parseInt(b[param]);
    });
}

export function findByParam(data, param, value) {
    return data.find(item => item[param] === value)
}
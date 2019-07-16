function round(number){
    return (Math.round(number * 100)/100).toFixed(2);
}

export function sortByParam(data, param) {
    return data.sort(function (a, b) {
        return parseInt(a[param]) - parseInt(b[param]);
    });
}

export function findByParam(data, param, value) {
    return data.find(item => item[param] === value)
}

export function findWithPredicateByParam(data, param, predicate) {
    return data.reduce((acc, item) => {
        if ( predicate(item[param], acc[param])) {
            return item;
        }
        return acc;
    })
}

export function findAverage(data) {
    let totalCount = 0;
    const total = data.reduce((acc, item) => {
        totalCount += parseInt(item.count);
        return acc + (parseInt(item.count) * parseInt(item.term))
    }, 0);
    return round(total / totalCount);
}
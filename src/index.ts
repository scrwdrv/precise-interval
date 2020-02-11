let preciseIntervals = [],
    i = 0;

export function setPreciseInterval(callback: (...args: any[]) => any, ms: number, ...args: any[]) {
    let previous = Date.now(), id = i++;
    (function exec() {
        preciseIntervals[id] = setTimeout(() => {
            previous += ms;
            callback(...args);
            exec();
        }, ms - (Date.now() - previous));
    })();
    return id;
}

export function clearPreciseInterval(preciseIntervalId?: number) {
    clearTimeout(preciseIntervals[preciseIntervalId]);
}
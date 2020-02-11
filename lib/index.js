"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let preciseIntervals = [], i = 0;
function setPreciseInterval(callback, ms, ...args) {
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
exports.setPreciseInterval = setPreciseInterval;
function clearPreciseInterval(preciseIntervalId) {
    clearTimeout(preciseIntervals[preciseIntervalId]);
}
exports.clearPreciseInterval = clearPreciseInterval;
//# sourceMappingURL=index.js.map
/**
 * 按规则获取，数组中计算结果最大的对象
 * @param {Function} callbackfn function(value, index, array):number //根据对象的运算结果来筛选对象
 * @param {Array} thisArg 
 */
Array.prototype.max = function(callbackfn, thisArg) {
    let comparefn = (newResult, result) => newResult > result
    return this.limit(callbackfn, comparefn, thisArg)
}

/**
 * 按规则获取，数组中计算结果最小的对象
 * @param {Function} callbackfn function(value, index, array):number //根据对象的运算结果来筛选对象
 * @param {Array} thisArg 
 */
Array.prototype.min = function(callbackfn, thisArg) {
    let comparefn = (newResult, result) => newResult < result
    return this.limit(callbackfn, comparefn, thisArg)
}

/**
 * 按规则获取，数组中计算结果符合比较标准的对象
 * @param {Function} callbackfn function(value, index, array):number //根据对象的运算结果来筛选对象
 * @param {Function} comparefn function(newResult, result):bool //为true则选择newValue代表的对象
 * @param {Array} thisArg 
 */
Array.prototype.limit = function(callbackfn, comparefn, thisArg) {
    var max;
    var result;
    this.forEach((value, index, array) => {
        let newResult = callbackfn(value, index, array)
        //value为空表示当前对象为第一个值，不必判断，直接选用
        if (!result || comparefn(newResult, result)) {
            max = value
            result = newResult;
        }
    }, thisArg)
    return max
}
function customizeIterator(arr) {
    let idx = 0;

    function next() {
        if(idx == arr.length) {
            return {
                value: undefined,
                done: true
            }
        }
        let nextElement = arr[idx];
        idx++;
        return {
            value: nextElement,
            done: false
        }
    }
    return { next }
}
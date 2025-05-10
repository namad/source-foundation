export function _clone(val) {
    const type = typeof val
    if (val === null) {
        return null
    }
    else if (
        type === 'undefined' || type === 'number' ||
        type === 'string' || type === 'boolean') {
        return val
    }
    else if (type === 'object') {
        if (val instanceof Array) {
            return val.map(x => _clone(x))
        }
        else if (val instanceof Uint8Array) {
            return new Uint8Array(val)
        }
        else {
            let o = {}
            for (const key in val) {
                o[key] = _clone(val[key])
            }
            return o
        }
    }
    throw 'unknown'
}
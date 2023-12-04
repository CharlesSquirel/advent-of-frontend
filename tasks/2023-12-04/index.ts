export function memoize(arg: any) {
    if (typeof arg === "number") {
        return arg*arg
    }
    else if (typeof arg === "string") {
        return `${arg}!`
    }
    else {
        return 'Function to be memoized must be a function.'
    }
}
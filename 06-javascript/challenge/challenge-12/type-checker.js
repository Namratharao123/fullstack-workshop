const typeOf = (value) => {

    if (value === null) {
        return "null";
    }

    if (value === undefined) {
        return "undefined";
    }

    if (typeof value === "number" && isNaN(value)) {
        return "nan";
    }

    if (Array.isArray(value)) {
        return "array";
    }

    if (value instanceof Date) {
        return "date";
    }

    if (value instanceof Map) {
        return "map";
    }

    if (value instanceof Set) {
        return "set";
    }

    if (value instanceof RegExp) {
        return "regexp";
    }

    if (value instanceof Error) {
        return "error";
    }

    if (value instanceof Promise) {
        return "promise";
    }

    return typeof value;
};

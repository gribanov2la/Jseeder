export default (object, callback) => Object.keys(object).reduce((result, propName, index) => ({
    ...result,
    [propName]: callback(object[propName], propName, index, result)
}), {});

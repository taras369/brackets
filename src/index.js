module.exports = function check(str, bracketsConfig) {

    if (!str || !bracketsConfig || bracketsConfig.length < 1 || str.length < 2 || str.length % 2) {
         return false;}
        
    const array = str.split("");
    const newA = [];

    for (let e = 0; e < array.length; e++) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (array[e] === bracketsConfig[i][1] && newA[newA.length - 1] === bracketsConfig[i][0]){
                newA.pop();
            }
            else if (array[e] === bracketsConfig[i][0]) {
                newA.push(array[e]);
            }
        }

    }

    if (newA.length > 0) {
        return false;
    }
    return true;
};

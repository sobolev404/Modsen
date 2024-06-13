'use strict'
function checkOnDuplicates(arr){
    return arr.length !== (new Set(arr)).size;
}

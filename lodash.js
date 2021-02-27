// Clamp method
const _ ={
    clamp(number, lower, upper){
    var lowerClampedValue = Math.max(number, lower);
    var clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
  }, // inRange method
    inRange(number, start, end){
      if (end === undefined){
        end = start
        start = 0
      }
      if (start > end){
        var temp = end
        end = start
        start = temp
      }
      var isInRange = start <= number && number < end
      return isInRange;
    }, // Words method
      words(string){
        var words = string.split(' ')
        return words;
      }, // pad method
      pad(string, length){
        if (length <= string.length){
          return string;
        }
        const startPaddingLength = Math.floor((length - string.length) / 2);
        const endPaddingLength = ((length - string.length) - startPaddingLength);
        const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
        return paddedString;

      }, // has method
      has(object, key){
        const hasValue = (object)[key];
        if(hasValue != undefined){
          return true;
        } return false;
      }, // invert method
      invert(object){
        var invertedObject = {};
        for(let key in object){
          let originalValue = object[key];
          invertedObject[originalValue] = key;
        } 
        return invertedObject;
       }, // findKey method
      findKey(object, predicate){
        for(let key in object){
          let value = object[key];
          let predicateReturnValue = predicate(value);
          if(predicateReturnValue){
            return key;
          };
        };
        undefined
        return undefined;
      }, // drop method
      drop(array, n){
        if (n === undefined){
          n = 1;
        }
          let droppedArray = array.slice(n, array.length);
         return droppedArray;
      }, // dropWhile method
      dropWhile(array, predicate){
        const callback = (element, index) => {
          return !predicate(element, index, array);
        }
        let dropNumber = array.findIndex(callback);
        let droppedArray = this.drop(array, dropNumber);
        return droppedArray;
      }, // chunk method
      chunk(array, size){
        if (size === undefined){
          size = 1;
        }
        let arrayChunks = [];
        for (let i = 0; i < array.length; i+= size){
          let arrayChunk = array.slice(i, i+size);
          arrayChunks.push(arrayChunk);
        }     
          return arrayChunks;
      }


}


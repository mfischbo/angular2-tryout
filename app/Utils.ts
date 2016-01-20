export module Util {

  /**
   * Removes the given value from the specified array
   * @param array The array to remove the value from
   * @param value The value to be removed from the array
   */
  export function remove(array : Array<any>, value : Object) {
    for (var i=0; i < array.length; i++) {
      if (array[i] == value) {
        array.splice(i, 1);
      }
    }
  }

  export function uuid() : string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  }
}

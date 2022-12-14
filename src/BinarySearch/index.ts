/**
 * Finds the index of an element in an array.
 * @param haystack A sorted array
 * @param comparisonFn Function used to determine how to travers the array to find the `target`. 
 * It is expected to return a negative value if the element is less than the `target`, zero if 
 * the element is matched, and a positive value otherwise. 
 * @example 
 * // Finding a number:
 * const haystack: Array<number> = [10, 20, 30, 40, 50, 60]
   binarySearch(haystack, ((a) => 50 - a)) // 4
   @example 
   // Finding an object by a property: 
 * const haystack: { name: string } = [{name: 'Alhpa'}, {name: 'Beta'}, {name: 'Gamma'}, {name: 'Zeta'}]
   binarySearch(haystack, (({ name }) => 'Gamma'.localeCompare(name))) // 2
 * @returns The index of the element `-1` if there is no match.
 */
function binarySearch<T>(
  haystack: Array<T>,
  comparisonFn: (value: T) => number
): number {
  let start: number = 0;
  let end: number = haystack.length - 1;
  while (start <= end) {
    const mid: number = Math.floor((start + end) / 2);
    const comparison: number = comparisonFn(haystack[mid]);
    if (comparison > 0) {
      start = mid + 1;
    } else if (comparison < 0) {
      end = mid - 1;
    } else {
      return mid;
    }
  }

  return -start - 1;
}

/**
 * Finds an element in an array.
 * @param haystack A sorted array
 * @param comparisonFn Function used to determine how to travers the array to find the `target`. 
 * It is expected to return a negative value if the element is less than the `target`, zero if 
 * the element is matched, and a positive value otherwise. 
 * @example 
 * // Finding a number:
 * const haystack: Array<number> = [10, 20, 30, 40, 50, 60]
   binarySearch(haystack, ((a) => 50 - a)) // 50
   @example 
   // Finding an object by a property: 
 * const haystack: { name: string } = [{name: 'Alhpa'}, {name: 'Beta'}, {name: 'Gamma'}, {name: 'Zeta'}]
   binarySearch(haystack, (({ name }) => 'Gamma'.localeCompare(name))) // { name: Gamma}
 * @returns The the element `undefined` if there is no match.
 */
function binarySearchElement<T>(
  haystack: Array<T>,
  comparisonFn: (value: T) => number
): T | undefined {
  return haystack[binarySearch(haystack, comparisonFn)] || undefined;
}

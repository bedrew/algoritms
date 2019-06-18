const binarySearch = ( array, item ) => {

  let low = 0; 
  let high = array.length - 1

  while ( low <= high ) {

    let mid = Math.round( ( low + high ) / 2 )
    let guess = array[mid]

    if ( guess == item ) {
        return mid
    }

    if ( guess > item ) {
        high = mid - 1 
    } else {
        low = mid + 1
    }

  }

  return false;

}

chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(array , element) {
  new_array = [element, ...array]
  return new_array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  new_array = [...array, element]
  return new_array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  new_array = array.slice(1)
  return new_array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  new_array = array.slice(0, array.length-1)
  return new_array
}


export const AlgorithmPseudocode: { [key: string]: string[] } = {
  'bubble-sort': [
    'for i from 0 to n - 1',
    '  for j from 0 to n - i - 1',
    '    if arr[j] > arr[j+1]',
    '      swap arr[j] and arr[j+1]'
  ],
  'insertion-sort': [
    'for i from 1 to n-1',
    '  key = arr[i]',
    '  j = i - 1',
    '  while j >= 0 and arr[j] > key',
    '    arr[j+1] = arr[j]',
    '    j = j - 1',
    '  arr[j+1] = key'
  ],
  'selection-sort': [
    'for i from 0 to n - 1',
    '  min_idx = i',
    '  for j from i + 1 to n',
    '    if arr[j] < arr[min_idx]',
    '      min_idx = j',
    '  swap arr[i] and arr[min_idx]'
  ],
  'shell-sort': [
    'gap = n/2',
    'while gap > 0',
    '  for i from gap to n - 1',
    '    temp = arr[i]',
    '    j = i',
    '    while j >= gap and arr[j - gap] > temp',
    '      arr[j] = arr[j - gap]',
    '      j = j - gap',
    '    arr[j] = temp',
    '  gap = gap / 2'
  ],
  'quick-sort': [
    'function quicksort(arr, low, high)',
    '  if low < high',
    '    pi = partition(arr, low, high)',
    '    quicksort(arr, low, pi - 1)',
    '    quicksort(arr, pi + 1, high)',
    '',
    'function partition(arr, low, high)',
    '  pivot = arr[high]',
    '  i = low - 1',
    '  for j from low to high - 1',
    '    if arr[j] < pivot',
    '      i++',
    '      swap arr[i] and arr[j]',
    '  swap arr[i + 1] and arr[high]',
    '  return i + 1'
  ],
  'radix-sort': [
    'function radixSort(arr)',
    '  max = getMax(arr)',
    '  for exp = 1 to max by exp *= 10',
    '    countingSort(arr, exp)',
    '',
    'function countingSort(arr, exp)',
    '  output[] = new int[n]',
    '  count[10] = {0}',
    '  for i from 0 to n-1',
    '    index = (arr[i]/exp) % 10',
    '    count[index]++',
    '  for i from 1 to 9',
    '    count[i] += count[i-1]',
    '  for i from n-1 to 0',
    '    output[count[(arr[i]/exp)%10] - 1] = arr[i]',
    '    count[(arr[i]/exp)%10]--',
    '  copy output to arr'
  ]
};

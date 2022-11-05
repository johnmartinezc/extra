
// nmp install
// npm run test



function twoSmallest(arrays){
    arrays = []
    let nums1 = arrays[0]
    let nums2 = arrays[1]
  
    if (nums1 < nums2){
        nums1 = arrays[1]
        nums2 = arrays[0]
  
    }
    for (let i = 2; i < arrays.length; i++) {
        if(arrays[i] < nums1){
        nums2 = nums1
        nums1 = arrays[i]
        }else if(arrays[i] < nums2){
        nums2 =arrays[i]
  
    }
  return arrays
  }
    
  }
  
  console.log(twoSmallest([3,7]))
  console.log(twoSmallest([0, 6, 12, 1]))
  console.log(twoSmallest([122, 277, 409, 99]))
  console.log(twoSmallest([12, 15, 7, 100, 5, 200, 111, 1000, 11, 4]))
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  if (typeof twoSmallest === 'undefined') {
    twoSmallest = undefined
  }
  
  
  module.exports = {
    twoSmallest,
  }
  
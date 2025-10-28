
let merge = function(nums1, m, nums2, n) {
    let result = [];
    let stor = [];

    let array1 = nums1
    stor = [...array1,...nums2]
    result = stor.filter( element => element !==0 ).sort()
    nums1 = result;
    
    return nums1;
};

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));


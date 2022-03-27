import React from 'react'

const Test = () => {
    
    // const isAnagram = (str1, str2) => {
    //     var result = false;
    //     if (str1.length === str2.length) {
    //         for (var i = 0; i < str1.length; i++) {
    //             for (var j = 0; j < str2.length; j++) {
    //                 if (str1[i] === str2[j]) {
    //                     result = true;
    //                     break;
    //                 } else {
    //                     result = false;
    //                 }
    //             }
    //         }
    //     }
    //     var res = "";
    //     if(result == true){
    //         return res = "Yes it.s anagram"
    //     }else{
    //         return res = "Sorry its not anagram"
    //     }
    //     return res;
    // }
    // console.log(isAnagram("rawea", "waerc"))

    const str = "hhello";
    console.log(str.split("").sort((a,b) => (a>b) ? 1 : -1))
    return (
        <>

        </>
    )
}

export default Test;
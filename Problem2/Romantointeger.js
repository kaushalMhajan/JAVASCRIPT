const romanToInteger = (numerals) => {

        const obj = {'I' : 1, 'V' : 5, 'X' : 10, 'L' : 50, 'C' : 100, 'D' : 500, 'M' : 1000 }
    
        let result = 0;
        //XI=10+1=11  IX=10-1=9
        for(let i =0 ; i<numerals.length ; i++){
         const first =  obj[numerals[i]] 
         const second = obj[numerals[i+1]]
    
         if(first<second){
            result += second - first
            i++
         }else{
            result += first 
         }
       }
    
         return result
    }
    
    console.log(romanToInteger("VIII"))
    console.log(romanToInteger("VII"))
    console.log(romanToInteger("XI"))
    console.log(romanToInteger("IX"))
    console.log(romanToInteger("XII"))
    console.log(romanToInteger("LVI"))
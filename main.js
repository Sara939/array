// var names= ["sara", "shlomo", "guy", "yoni" ,"nati"];
// for (i=0; i<names.length; i++){
//     console.log(names[i]);
// }
// console.log(names[2]);
// console.log(names);

// var num= [76, 85, 98 , 65, 74, 99, 3];
// console.log(num);
// console.log(num[3]);
// for(i=0; i<num.length; i++){
//     console.log(num[i]);
// }

// var numbers= [13, 15,4,9,26 ,27, 86,45,9,39];
// for ( i=0; i< numbers.length; i++){
//     if (numbers[i]%2==0){
//         console.log(numbers[i]);}
// }

// var myArray= ["he", 7, "jh", 8, 9];
// for (i=0; i<myArray.length; i++){
//     if (myArray[i]*0!=0){
//         console.log(myArray[i]);
//     }
// }

// var empty=[];
// empty.push(9);
// console.log(empty);

// var num= [];
// num.push(0,1,2,3,4,5,6,7,8,9);
// console.log(num);

// var num=[];
// for(i=0; i<10; i++){
//     num.push(i);
//     console.log(num[i]);
    
// }
// console.log(num);


// 75:

// count=0;
// avg=0;
// var numbers= [5,3,7,8,11];
// for(i=0; i<numbers.length; i++){
//     count+= numbers[i]
// }
// console.log(count)
// console.log(avg= count/numbers.length)

//76:

// names= ["sara", "nati", "eldad", "yoni", "shlomo"];
// for(i=0; i<names.length; i++){
//     console.log(names[i]);
// }

// 77:
// function comper (b){
//     var a =[3,7,9,10.46,83,24];
//     for (i=0; i<a.length; i++)
//         if (b==a[i]){
//             return true;
//         }
//         return false;
// }

// console.log(comper(9));

// 78:

// function evennum (){
//     var count=0;
//     var nums= [3,5,6,8,10,12];
//     for (i=0; i<nums.length; i++)
//     if (nums[i]%2==0){
//         count+=1;
//     }
//     return count; 
// }
// console.log(evennum());

// 79:

// function copy(){ לא סיימתי לחזור
//     var a=[2,4,5];
//     var b=[6, "hey", 9];
//     var ary= [];
//     for(i=0; i<a.length; i++)
//     if (a.length==b.length){ 
//         var ary = a.splice(0);
//         b.push(ary);
//         return true;

//     }
//     return false;
// }
// console.log(copy());


// 80:
// function order(){ לבדוק!!
//     var myNumbers= [1,6,9,4,3];
//     var newnumber=[];
//     for( i=0; i<myNumbers.length; i++);
//     if (myNumbers[i]< myNumbers[i++]){
//         newnumber.unshift(myNumbers[i]);
//         console.log(newnumber);
//     }
//     return newnumber;

// }
    // console.log(order());

// 81:
// var a= [];
// function findmax(a){
// var max=0;
// for (i=0; i< a.length; i++){
//     if (a[i]>max){
//         max= a[i]
//     }
// }
// return max;
// }

// console.log(findmax([3,4,6]));

// 82:
// var ary= [];
// function findmin(ary){
//     var min=0;
//     for(i=0; i< ary.length; i++){
//         if (ary[i]>min){
//             min = i;
//         }
//     }
//     return i;
// }
// console.log(findmin([6,8,9]));


// 83:

// var b=[];
// function sum(b){
    
//     sum=0
//     for(i=0; i< b.length; i++){
//         sum+=b[i]
        
//     }
//     return sum;
// }

// console.log(sum([3,6]));


// 85:

// var mn =[];
// function minmax(mn){
//     for(i=0; i< mn.length; i++){
//         var maxresult= findmax(a)
//         var minresult= findmin(ary)
//     }
//     return finelresult= maxresult * minresult

// }


// 86:
// var sara= [];
// var even=0;
// function evenmax(sara){
// for(i=0; i<sara.length; i++){
//     if (sara[i]%2==0){
//         if (sara[i] > even){
//             even = sara[i];
//         }
//     }
// }
// return even;
// }
// console.log(evenmax([4,34,7,28,3]));

// 87:
// nums= [];
// function sumodd(nums){
//     var all= 0;
//     for(i=0; i<nums.length; i++){
//         if(nums[i]%2 != 0){
//             all += nums[i];
//         }
// }
// return all;
// }
// console.log(sumodd([3,6,2,4,1]));

// 89:
// names= ["gil", "sara", "mor"];
// singlename= "dor";
// function addname(names,singlename){
    // names.push(singlename);
    // return names;
    // }
// console.log(addname(names,singlename));

// 90:
// function addmail(){
//     emails= ["sara@walla.com","lili@walla.com","toto@walla.com"]
//     m= "kiki@gmail.com"
//     emails.unshift(m);
//     return emails;
// }
// console.log(addmail());
// 91:
// function addevennum(numsarray, singlnum){
//     if (singlnum %2==0){
//         numsarray.unshift(singlnum);
//     }
//     else{numsarray.push(singlnum);
//     }
//     return numsarray;

// }
// console.log(addevennum([2,4,65,7,8], 24));

// ///////////////////////////////////////////////////////////////////////////////////////
// 92:
// function existnum(numslist,onenum){
//     for(i=0; i<numslist.length; i++){
//         if(onenum==numslist[i]){
//             numslist.splice(onenum);
//         }
    
//         else if(onenum!=numslist[i]){
//             numslist.push(onenum);
//         }
//     }    
//     return numslist;
// }
// console.log(existnum([3,5,7,2],7));







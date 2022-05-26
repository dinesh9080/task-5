
Do the below programs in anonymous function & IIFE
Print odd numbers in an array

var a=[1,2,3,4,5,6,7,8,9]
function odd(a){
for(i=0;i<a.length;i++){
    if(a[i]%2!=0){
        console.log(a[i]);
        
    }
}
}
odd(a)

OUTPUT : 1 3 5 7 9

Print odd numbers in an array-IIFE

(function odd(a){
    for(i=0;i<a.length;i++){
        if(a[i]%2!=0){
            console.log(a[i]);
            
        }
    }
    })
    odd([1,2,3,4,5,6,7,8,9,]);

Convert all the strings to title caps in a string array using  anonymous function 

    function caps(title){
        title=title.toLowerCase().split(" ");
       
        for( let i=0;i<title.length;i++){
            title[i]=title[i].charAt(0).toUpperCase()+title[i].slice(1); 
        }
        return title.join(' ');
    }
    caps("i love india")

'I Love India'



Convert all the strings to title caps in a string array using  IIFE

    (function caps(title){
        title=title.toLowerCase().split(" ");
       
        for( let i=0;i<title.length;i++){
            title[i]=title[i].charAt(0).toUpperCase()+title[i].slice(1); 
        }
        return title.join(' ');
    });
    ("i love india");

'i love india'

Sum of all numbers in an array using  anonymous function 

                  function odd(a){
        var odd=0;
    for(i=0;i<a.length;i++){
        odd+=a[i]; 
            
        }
        return odd
    }
    console.log(odd([1,2,3,4,5,6,7,8,9]))


Sum of all numbers in an array using  IIFE 


   ( function odd(a){
        var odd=0;
    for(i=0;i<a.length;i++){
        odd+=a[i]; 
            
        }
        console.log(odd)
    })
([1,2,3,4,5,6,7,8,9]);


Return all the prime numbers in an array-IIFE
(function(a){
    var  mus="";
    for(var i=0;i<a.length;i++)
    {
        var count=0;
        for(var j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            mus+=a[i]+" "
        }
    }
    console.log(mus);
 
})([1,2,3,4,5,6,7,8,9,11]);

//4.Return all the prime numbers in an array-anonymous
var lot = function(a){
    var  mus="";
    for(var i=0;i<a.length;i++)
    {
        var count=0;
        for(var j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            mus+=a[i]+" "
        }
    }
    return mus;
 
}
console.log(lot([1,2,3,4,5,6,7,8,9,11]));

//5.Return all the palindromes in an array-IIFE
(function(a){
    var res="";
    var ans="";
    for(i=0;i<a.length;i++)
    {
        res+=a[i];
        var count=0
        
        for(j=0;j<res.length;j++)
        {
            if(res[j]===res[((res.length-1)-j)])
            {
                count++
                
            }
        }
        if(count===res.length)
        {
            ans+=res+" "
        }
        res="";
    }
    console.log(ans);
 
}) 
(["madam","mustak",356,454,"dad"]);

//5.Return all the palindromes in an array-anonymous
var palindrome=function(a){
    var res="";
    var ans="";
    for(i=0;i<a.length;i++)
    {
        res+=a[i];
        var count=0
        
        for(j=0;j<res.length;j++)
        {
            if(res[j]===res[((res.length-1)-j)])
            {
                count++
                
            }
        }
        if(count===res.length)
        {
            ans+=res+" ";
        }
        res="";
    }
    return ans;
 
}
console.log(palindrome(["madam","mustak",356,454,"dad"]));

//Return median of two sorted arrays of the same size-IIFE
(function(a,b){
    var c=[];
    var n=a.length;
    var p=b.length;
    var i=0;
    var j=0;
    var med=0;
    while(i<n && j<p)
    {
        if(a[i]<b[j])
        {
            c.push(a[i])
            i++
        }
        else
        {
            c.push(b[j])
            j++
        }
    }
    
     if(i<n)
     {
         for(let k=i;k<n;k++)
         {
             c.push(a[k])
         }
     }
     else if(j<p)
     {
         for(let m=j;m<p;m++)
         {
             c.push(b[m]);
         }
     }
     if(c.length%2===0)
     {
         med=(c[(c.length/2)-1]+c[c.length/2])/2
     }
     else
     {
         med=c[Math.floor(c.length/2)]
     };
     console.log(med);
    
}) ([1,2,3,7],[4,5,6,8]);

//Return median of two sorted arrays of the same size-anonymous
var arr=function(a,b){
    var c=[];
    var n=a.length;
    var p=b.length;
    var i=0;
    var j=0;
    var med=0;
    while(i<n && j<p)
    {
        if(a[i]<b[j])
        {
            c.push(a[i])
            i++
        }
        else
        {
            c.push(b[j])
            j++
        }
    }
    
     if(i<n)
     {
         for(let k=i;k<n;k++)
         {
             c.push(a[k]);
         }
     }
     else if(j<p)
     {
         for(let m=j;m<p;m++)
         {
             c.push(b[m])
         }
     }
     if(c.length%2===0)
     {
         med=(c[(c.length/2)-1]+c[c.length/2])/2
     }
     else
     {
         med=c[Math.floor(c.length/2)]
     }
     return med;
    
}
console.log(arr([1,2,3,7],[4,5,6,8]));

//Remove duplicates from an array-IIFE
(function(a){
    var b=[];
    var n=a.length;
    for(let i=0;i<n-1;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            if(a[i]===a[j])
            {
                delete a[j]
            }
        }
    }
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%10===Math.floor(a[i]%10))
        {
            b.push(a[i])
        }
    }
    let c=""
    for(let i=0;i<b.length-1;i++)
     {
         c+=b[i]+" ";
    }
    c+=b[b.length-1];
     console.log(c);
    
})([1,1,2,1,2,3,3,3,4,3,3,3,3,2,2,2]);

//Remove duplicates from an array-anonymous
var arr=function(a){
    var b=[];
    var n=a.length;
    for(let i=0;i<n-1;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            if(a[i]===a[j])
            {
                delete a[j]
            }
        }
    }
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%10===Math.floor(a[i]%10))
        {
            b.push(a[i])
        }
    }
    let c=""
    for(let i=0;i<b.length-1;i++)
     {
         c+=b[i]+" ";
    }
    c+=b[b.length-1];
     return c;
    
}
console.log(arr([1,1,2,1,2,3,3,3,4,3,3,3,3,2,2,2]));

//Rotate an array by k times-IIFE
(function(a,k){
    n=a.length;
 c=[];
  d="";
  for(i=0;i<n;i++)
  {
      c[(i+k)%(n)]=a[i]
  }
  for(i=0;i<c.length-1;i++)
  {
      d+=c[i]+" "
  }
  d+=c[c.length-1]
  console.log(d);
}) ([1,2,3,4,5],3);

//Rotate an array by k times-anonymous
var rotate=function(a,k){
    n=a.length;
 c=[];
  d="";
  for(i=0;i<n;i++)
  {
      c[(i+k)%(n)]=a[i]
  }
  for(i=0;i<c.length-1;i++)
  {
      d+=c[i]+" "
  }
  d+=c[c.length-1]
  return d;
}
console.log(rotate([1,2,3,4,5],3));

//Do the below programs in arrow functions
//Print odd numbers in an array
var odd=(a) => {
    var res = "";
    for (var i = 0; i < a.length - 1; i++) {
        if (a[i] % 2 !== 0) {
            res += a[i] + " ";
        }
    }
    res += a[a.length - 1];
    return res;
}
console.log(odd([1,2,3,4,5,6,7,8,9]));

//Convert all the strings to title caps in a string array
var str = (string) => {
    var send = string.toLowerCase().split(' ');
    for (var i = 0; i < send.length; i++) {
        send[i] = send[i][0].toUpperCase() + send[i].slice(1);
    }
    send.join("");
    var rrr = "";
    for (var i = 0; i < send.length; i++) {
        rrr += send[i] + ' ';
    }
    return rrr;
}
console.log(str("we are guvi"));

//Sum of all numbers in an array
var mus = (a) => {
    var mus = 0;
    for (var i = 0; i < a.length; i++) {
        mus += a[i];
    }
    return mus;
}
console.log(mus([1,2,3,4,5,6]));

//Return all the prime numbers in an array
var lot = (a) => {
    var mus = "";
    for (var i = 0; i < a.length; i++) {
        var count = 0;
        for (var j = 1; j <= a[i]; j++) {
            if (a[i] % j === 0) {
                count++;
            }
        }
        if (count == 2) {
            mus += a[i] + " ";
        }
    }
    return mus;

}
console.log(lot([1,2,3,4,5,6,7,8,9,11]));

//Return all the palindromes in an array
var palindrome=(a) => {
    var res = "";
    var ans = "";
    for (i = 0; i < a.length; i++) {
        res += a[i];
        var count = 0;

        for (j = 0; j < res.length; j++) {
            if (res[j] === res[((res.length - 1) - j)]) {
                count++;

            }
        }
        if (count === res.length) {
            ans += res + " ";
        }
        res = "";
    }
    return ans;

}
console.log(palindrome(["madam","mustak",356,454,"dad"]));
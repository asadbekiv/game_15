let a=new Array();  // created new array with variable a
let b=new Array();  // created new array with variable b
//

for (let i = 1; i <= 4; i++) {
    b[i]=new Array()
    
}

let k,bor;

for (let i = 1; i <= 15; i++) {

    do {

        soni =0 ;
        k=Math.round(Math.random()*14 + 1);
        for (let j = 1; j < i; i++) 
        if (a[j]==k){
            soni =1 ;
        }
        

        
    } while (soni != 0);
    a[i]=k;


    k=Math.round(Math.random()*14 + 1); //  it outputs from 0 inclusive to 15
    a[i]=k;  
}

a[16]=16;

// console.log(a);


k=1;

for (let i = 1; i <= 4; i++)
for (let j = 1; j <= 4; j++){
    b[i][j] = a[k];
    k++;
}


for (let i = 1; i <= 4; i++)
for (let j = 1; j <= 4; j++)
document.getElementById('btn'+i+"_"+j).innerHTML = b[i][j];

console.log(b);

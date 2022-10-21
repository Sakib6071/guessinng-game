document.getElementById('btn-restart').addEventListener('click',function(){
    location.reload()
})
const random = Math.round(Math.random()*4+1)
console.log(random);
let count = 3;

    document.getElementById("btn").addEventListener('click',function(){
        count=count-1;
        const inputField=document.getElementById('inputField')
        const inputValue = inputField.value;
        const inputNumber = Number.parseInt(inputValue)
        //console.log(inputNumber);
        // console.log(typeof(inputNumber));
        inputField.value=''       
        if(count>=0){
            document.getElementById('life').innerText=count;
            if((inputNumber <= 5) && (inputNumber>=1)){
                if(random == inputNumber){
                    
                    document.getElementById('main-bg').classList.remove('bg-danger')
                    document.getElementById('main-bg').classList.add('bg-success')
                    document.getElementById('message-field').innerText="Yahoo!! You are correct"
                    document.getElementById('message-field').classList.remove('text-danger') 
                    document.getElementById('message-field').classList.add('text-success') 
                }else{
                    document.getElementById('message-field').innerText="Oh ho!! You are wrong"
                    document.getElementById('main-bg').classList.remove('bg-success')
                    document.getElementById('main-bg').classList.add('bg-danger')
                    document.getElementById('message-field').classList.remove('text-success')
                    document.getElementById('message-field').classList.add('text-danger') 
                    if(count==0){
                        document.getElementById('answer-field').innerText=`The answer is ${random}`                     
                    }
                }     
            }else{  
            document.getElementById('main-bg').classList.remove('bg-success')         
            document.getElementById('message-field').innerText="Sorry!Please select a valid number"
            document.getElementById('main-bg').classList.remove('bg-success')
            document.getElementById('main-bg').classList.add('bg-danger')
            document.getElementById('message-field').classList.remove('text-success')
            document.getElementById('message-field').classList.add('text-danger')      
            }
        }else{
            document.getElementById('main-bg').classList.remove('bg-success')
            document.getElementById('main-bg').classList.add('bg-danger')
            document.getElementById('message-field').innerText="Sorry! You Have No Life.You can restart the match"
            document.getElementById('message-field').classList.remove('text-success')
            document.getElementById('message-field').classList.add('text-danger') 
        }       
        })




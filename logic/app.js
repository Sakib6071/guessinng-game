const random = Math.round(Math.random()*4+1)
console.log(random);
let count = 3;

    document.getElementById("btn").addEventListener('click',function(){
        count=count-1;
        
        if(count>=0){
            document.getElementById('life').innerText=count;
            const inputField=document.getElementById('inputField')
            const inputValue = inputField.value;
            const inputNumber = Number.parseInt(inputValue)
            console.log(inputNumber);
            // console.log(typeof(inputNumber));
            inputField.value=''
        
            if((inputNumber <= 5) && (inputNumber>=1)){
                if(random == inputNumber){
                    document.getElementById('message-field').innerText="Yahoo!! You are correct"
                    document.getElementById('message-field').classList.add('text-primary') 
                }else{
                    document.getElementById('message-field').innerText="Oh ho!! You are wrong"
                    document.getElementById('message-field').classList.add('text-danger') 

                }
        
            }else{
            
            document.getElementById('message-field').innerText="Sorry!Please select a valid number"
            document.getElementById('message-field').classList.add('text-danger')
        
            }
        }else{
            document.getElementById('message-field').innerText="Sorry! You Have No Life"
            document.getElementById('message-field').classList.add('text-danger') 
        }


        
        })




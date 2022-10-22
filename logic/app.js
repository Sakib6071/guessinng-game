/* restart button functionality */
document.getElementById('btn-restart').addEventListener('click',function(){
    location.reload()
})


/* random number generate 1 to 5 */
const random = Math.round(Math.random()*4+1)
let count = 3;

/* Submit button functionality */
    document.getElementById("btn").addEventListener('click',function(){
        count=count-1;

        /* Take input and convert to number */
        const inputField=document.getElementById('inputField')
        const inputValue = inputField.value;
        const inputNumber = Number.parseInt(inputValue)
        inputField.value=''       
        if(count>=0){
            /* update life value */
            document.getElementById('life').innerText=count;

            /* Check input number and random number */
            if((inputNumber <= 5) && (inputNumber>=1)){
                if(random == inputNumber){                   
                    document.getElementById('main-bg').classList.remove('bg-danger')
                    document.getElementById('main-bg').classList.add('bg-success')
                    document.getElementById('message-field').innerText="Yahoo!! You are correct"
                    document.getElementById('audio-field').innerHTML=`
                            <audio autoplay>
                            <source src="resources/win.mp3" type="audio/mpeg">
                            </audio>    
                    `
                    document.getElementById('message-field').classList.remove('text-danger') 
                    document.getElementById('message-field').classList.add('text-success') 
                }else{
                    document.getElementById('message-field').innerText="Oh ho!! You are wrong"
                    document.getElementById('main-bg').classList.remove('bg-success')
                    document.getElementById('main-bg').classList.add('bg-danger')
                    document.getElementById('message-field').classList.remove('text-success')
                    document.getElementById('message-field').classList.add('text-danger')
                    document.getElementById('audio-field').innerHTML=`
                            <audio autoplay>
                            <source src="resources/lose.mp3" type="audio/mpeg">
                            </audio>    
                    ` 
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
             document.getElementById('audio-field').innerHTML=`
                            <audio autoplay>
                            <source src="resources/lose.mp3" type="audio/mpeg">
                            </audio>    
                    `      
            }
        }else{
            document.getElementById('main-bg').classList.remove('bg-success')
            document.getElementById('main-bg').classList.add('bg-danger')
            document.getElementById('message-field').innerText="Sorry! You Have No Life.You can restart the match"
            document.getElementById('message-field').classList.remove('text-success')
            document.getElementById('message-field').classList.add('text-danger') 
            document.getElementById('audio-field').innerHTML=`
                            <audio autoplay>
                            <source src="resources/lose.mp3" type="audio/mpeg">
                            </audio>    
                    ` 
        }       
        })




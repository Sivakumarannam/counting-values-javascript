let counter=document.getElementById('countervalue');
function increment(){
    let previousvalue=counter.textContent;
    let updatedvalue=parseInt(previousvalue)+1;
    counter.textContent=updatedvalue;
    if (updatedvalue>0){
        counter.style.color='green';
    }
    else if(updatedvalue<0){
        counter.style.color='red';
    }
    else{
        counter.style.color='black';
    }
}
function decrement(){
    let previousvalue=counter.textContent;
    let updatedvalue=parseInt(previousvalue)-1;
    counter.textContent=updatedvalue;
    if (updatedvalue>0){
        counter.style.color='green';
    }
    else if(updatedvalue<0){
        counter.style.color='red';
    }
    else{
        counter.style.color='black';
    }

}
function reset(){
    let updatedvalue=0;
    counter.textContent=updatedvalue;
    counter.style.color='black'

}



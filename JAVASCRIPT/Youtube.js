function subscribe(){
    const buttonElement=document.querySelector('.js-button-subscribe')
     if(buttonElement.innerText=== 'Subscribe'){
        buttonElement.innerHTML = 'Subscribed';
        buttonElement.classList.add('is-subscribed');
    }else{
        buttonElement.innerHTML = 'Subscribe';
        buttonElement.classList.remove('is-subscribed');
    }
}
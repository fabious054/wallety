
function alert(status, message){
    let div = document.createElement('div');
        div.innerHTML = message;
        div.style.backgroundColor = status === 200 ? 'green' : 'red';
        div.style.color = 'white';
        div.style.position = 'fixed';
        div.style.top = '10px';
        div.style.right = '3px';
        div.style.padding = '1rem';
        div.style.borderRadius = '5px';
        document.body.appendChild(div);
        setTimeout(() => {
            div.remove();
        }, 3000);


}

export {alert};

window.onload = () => {
    let menu2 = document.getElementById('allMenu');
    
    
    document.onclick = function (e) {
        if (e.target.id !== 'allMenu') {
            // menu.style.setProperty('display', 'none');
            menu2.style.display = 'none';
        }
    }
}


window.addEventListener('click', function (e){
    if(this.document.querySelector('.all-menu').contains(e.target)){
        //clicked in the box
    }else{
        //outside the box
        document.querySelector('.all-menu').style.setProperty('display','none')
    }
})



function closeMenu(e){
    e.style.setProperty('display','none');
}


function closeAllMenu(){
    let menu3 = document.getElementById('allMenu');
    if(menu3.target.id !== "allMenu"){
        menu3.style.display="none";
    }else{
        menu3.style.display="flex";
    }
}



function showMenu(e){
    e.style.setProperty('display','flex');
}

function onClickOutside(element, callback){
    document.addEventListener('click', event => {
        if(!element.contains(event.target)) callback()
    })
}


// Close menu when user clicks outside
function onClickOutside(){
    const allMenu = document.querySelector('.all-menu');

    document.addEventListener('click', event => {
        if(!allMenu.contains(event.target)){
            return
        }else{
            allMenu.style.setProperty('display','none');
        }
    })
}



document.addEventListener("click", closeAllMenu())


function showAllMenu(){
    let menu = document.querySelector('.all-menu');
    menu.style.setProperty('display','flex');
}




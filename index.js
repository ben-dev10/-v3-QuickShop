






// Toggle for 'all-menu'
function toggleView(){
    let allMenu = document.querySelector('.all-menu');
    allMenu.classList.toggle('hidden')
}

window.addEventListener('click', function (e) {
    let allMenu = document.querySelector('.all-menu');
    // let navButton = document.getElementById('nav-button');

    if (this.allMenu.contains(e.target) || e.target.id === 'nav-button'|| e.target.id === 'bars-icon' || e.target.id === 'btn-p') {
        //clicked in the box; do nothing!
    } else {
        //outside the box   
        allMenu.classList.add('hidden')
        // allMenu.style.setProperty('display', 'none')
    }
})









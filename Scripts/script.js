
document.addEventListener('DOMContentLoaded', function (e) {
    // document.querySelectorAll(".dropdown-toggle").forEach(e=>{
    //     e.addEventListener("click", e=>{
    //         const menu = e.currentTarget.dataset.path;
    //         console.log('menu - '+menu);
    //         const dropdown = document.querySelector('#'+menu);
    //         // document.querySelectorAll(".dropdown-menu").forEach(e=>{
    //             // const menuItem = e.currentTarget;
    //             // console.log('menuItem - '+ menuItem);
    //             // if(!document.querySelector('[data-target=${menu}]').classList.contains('open')){
    //             //     document.querySelector('[data-target=${menu}]').classList.add('menu-active');
    //             //
    //             // }
    //         // })
    //     });
    // });
    const menuButtons = document.querySelectorAll('.dropdown-toggle');
    menuButtons.forEach(menuButton => {
        menuButton.addEventListener('click', (e) => {
            const path = menuButton.dataset.path;
            console.log('path - '+path);
            const menu = document.getElementById(path);
            if(menu.classList.contains('menu-hidden')===true) {
                menu.classList.remove('menu-hidden');
                menu.classList.add('menu-active');
            }
            else{
                menu.classList.remove('menu-active');
                menu.classList.add('menu-hidden');
            }
        })
    });
    const menuAbsolute = document.querySelector('.menuAbsolute')
    const openMenu = document.getElementById('openMenu');
    openMenu.addEventListener('click', e => {
        console.log('openMenu');
        menuAbsolute.classList.remove('menu-hidden');
    });

    const closeMenu = document.getElementById('closeMenu')
    closeMenu.addEventListener('click',(e) => {
        console.log('closeMenu');
        menuAbsolute.classList.add('menu-hidden')
    });
    
    
});

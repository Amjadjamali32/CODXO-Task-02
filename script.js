const openMenuButton = document.querySelector('.open-menu-btn');
const closeMenuButton = document.querySelector('.close-menu-btn');
const menusContainer = document.querySelector('.menus-container');


openMenuButton.addEventListener("click" , ()=> {
    if(closeMenuButton.style.display = "inline") {
        menusContainer.style.display = "block";
        openMenuButton.style.display = "none"  
    }
})

closeMenuButton.addEventListener("click" , ()=> {
    menusContainer.style.display = "none";
    if(openMenuButton.style.display = "none") {
        closeMenuButton.style.display = "none" 
        openMenuButton.style.display = "inline" 
    }
})
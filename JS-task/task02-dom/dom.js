function changeOuterLinks() {
    const selectedElements = document.querySelectorAll('nav#link-list a');
    selectedElements.forEach(element => {
        if (element.innerHTML.includes('outer-link')) {
            element.target = '_blank';
            //element.innerHTML = <strong>${element.innerHTML}</strong>
            
        }
    })
    document.querySelectorAll("nav").forEach((e) => {
        e.style.display = "flex";
        e.style.flexDirection = "column";
        e.style.margin = "0px auto";
        e.style.width = "30%";
        e.style.border = "1px solid blue";
        e.style.padding = "16px"
    })
}


//Ha a link belső szövege tartalmazza az 'outer-link' szövegrészt, akkor a linkre történő kattintásnál új ablakban kell megjelennie a tartalomnak (target attributum használata)
//Ezek a linkek innerHTML tartalma legyen kiemelve ('strong' elem segítségével)

export { changeOuterLinks };
const navslide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    const nav_links = document.querySelectorAll('.nav_links li')

    burger.addEventListener('click',()=>{
        //toggle 
        nav.classList.toggle('nav-active')

        //Animate Links
        nav_links.forEach((link ,index) => {
            if(link.style.animation)
            {
                link.style.animation = ""
            }
            else{
                link.style.animation = `navlinkfade 0.5s ease forwards ${index/7 + 1}s`; 
                //index/7 for equal delay
            }
        });

        //burger animation
        burger.classList.toggle('toggle');
    });
}

navslide();
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header section ul li a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sections.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top < offset + height){
            navLinks.forEach( links =>{
                links.classList.remove('nav-item active');
                document.querySelector('header section ul li a[href*=' + id +']').classList.add('nav-item active');
            });
        };
    });
};
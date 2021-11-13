

    let parentBlockMenu = document.querySelector('.header_burger');
    let nav = document.querySelector('.mobile-nav');
    let icon = document.querySelector('.nav-icon');
    parentBlockMenu.addEventListener('click', function() {
        nav.classList.toggle('active');
        menu();
    })

function menu() {
       document.querySelector('.arrow').style.cssText = ` 
       
       margin-top: 20px;
       transform: rotate(-45deg);`
            
        if (nav.classList.contains('active')) {
            document.querySelector('.active').innerHTML = `
        <a href="">Каталог</a>
        <a href="">Доставка</a>
        <a href="">Коллекции</a>
        <a href="">Контакты</a>`;

        
        
      
        } else {
            document.querySelector('.arrow').style.cssText = `
            margin-top: -40px;    
            transform: rotate(135deg);
            `;
            nav.innerHTML = '';
            
            
            }
    }  

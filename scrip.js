const cuerpoPagina= document.querySelector("body");
const select1= document.querySelector ("select");
const imagen1= document.querySelector ("#imagen-1");

const IMAGEN_1="https://mymodernmet.com/wp/wp-content/uploads/2020/10/ultra-white-paint-radiative-cooling-01.png" 
const IMAGEN_2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZvWWMUh_yGpemc3ybf71x-_1bByZ807k-lQg3N-FrmuJshGxDRATxmsgX4ge34F7WqKQ&usqp=CAU"
const IMAGEN_3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6TBkVRkHpPfnWiR9pz8xQSjc_irxBf1AGorLCq1BY1wH7Xk5m2MCOW8d9snA7nn8xkvY&usqp=CAU"

function cambioDeColor() {

    switch (parseInt(select1.value)) {
        case 1:
            cuerpoPagina.style.background= "black";
            cuerpoPagina.style.color= "white";
            select1.style.color="white";
            imagen1.src=IMAGEN_1;
            break;
        case 2:
            cuerpoPagina.style.background= "green";
            cuerpoPagina.style.color= "violet";
            select1.style.color="violet";
            imagen1.src=IMAGEN_2;
            break;
        case 3:
            cuerpoPagina.style.background= "orange";
            cuerpoPagina.style.color= "pink";
            select1.style.color="pink";
            imagen1.src=IMAGEN_3;
            break;
    
    }
}
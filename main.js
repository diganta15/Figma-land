/*css
        <ul class="emp1 ">
          <li class="link"><a href="#" class="link">Home</a></li>
          <li class="link"><a href="#" class="link">Product</a></li>
          <li class="link"><a href="#" class="link">About</a></li>
          <li class="link"><a href="#" class="link">Contact</a></li>
        </ul>
*/

const area = document.getElementById('empty');
const menu = document.getElementById('menu'); 

console.log(area);

menu.addEventListener('click',showFlex);

function showFlex(){

    area.style.display="block";
    menu.style.visibility="hidden";

    
    
}


area.innerHTML = `<img src="assets/images/outline_close_white_24dp.png" id="cross" />
        <ul class="emp1">
          <li class="link"><a href="#" class="link">Home</a></li>
          <li class="link"><a href="#" class="link">Product</a></li>
          <li class="link"><a href="#" class="link">About</a></li>
          <li class="link"><a href="#" class="link">Contact</a></li>
        </ul>`;

cross = document.getElementById('cross')

cross.addEventListener('click',hideFlex);

function hideFlex(){
    area.style.display = "none";
    menu.style.visibility = "visible";
}

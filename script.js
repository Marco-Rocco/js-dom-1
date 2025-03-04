const lampSwitch = document.getElementById('switch');
console.log(lampSwitch);

const lamp = document.getElementById('lamp-img');
console.log(lamp);
lamp.src = 'img/white_lamp.png';

let onOff = 0; 

lampSwitch.addEventListener ('click',
    function() {
        if (onOff < 1){

        lamp.src = 'img/yellow_lamp.png'
        console.log('ho acceso la lampadina')
        
        lampSwitch.innerHTML = 'spegni la lampadina'


        return onOff ++
        };

        lamp.src = 'img/white_lamp.png'
        console.log('ho spento la lampadina')

        lampSwitch.innerHTML = 'accendi la lampadina'

        return onOff --
        
    }
);

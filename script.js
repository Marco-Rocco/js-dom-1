const onOff = document.getElementById('switch')
console.log(onOff)

const lamp = document.getElementById('lamp-img')
console.log(lamp)
lamp.src = 'img/white_lamp.png'

onOff.addEventListener ('click',
    function() {
        lamp.src = 'img/yellow_lamp.png'
    }
)
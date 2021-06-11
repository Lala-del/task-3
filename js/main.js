let weapon =  {
    bulletInCharger: 19,
    bulletInBag: 50,
    capacityOfCharger: 30
}


const shoot = () =>  {
    if ( weapon.bulletInCharger == 0) {
        alert('daraqda hal hazirda  gulle yoxdur')
        return;
    }
   weapon.bulletInCharger--;
   console.log('daraqda hal hazirda bu sayda gulle var =', weapon.bulletInCharger);
  
}

const fillCharger = () => {
    if(weapon.bulletInCharger == weapon.capacityOfCharger){
        alert('Daragin tutumu domushdur')
        return;
    }
    if(weapon.bulletInBag == 0){
        alert('Cantada gulle bitmishdir')
        return;
    }
   weapon.bulletInCharger++;
   weapon.bulletInBag--;
   console.log(weapon.bulletInCharger, weapon.bulletInBag);
}



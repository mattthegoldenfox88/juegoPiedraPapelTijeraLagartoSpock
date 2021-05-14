//var opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];
var opciones = [0, 1, 2, 3, 4];
var eleccionMaquina;

function aleatorio(minimo, maximo){
    var numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
    return numero;
}

function usuario(eleccionUsuario){
    eleccionUsuario = parseInt(eleccionUsuario);
    eleccionMaquina = aleatorio(0,4);
    //alert(eleccionUsuario);
    //alert(eleccionMaquina);

    if(eleccionUsuario == 0){//el usuario eligio piedra 
        if(opciones[eleccionMaquina] == 1){//si la maquina eligio papel 
            document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio papel y tu piedra.</h3>';
        }else{
            if(opciones[eleccionMaquina] == 2){
                document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio tijera y tu piedra.</h3>';
            }else{
                if(opciones[eleccionMaquina] == 0){
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron piedra.</h3>';
                }else{
                    if(opciones[eleccionMaquina] == 3){
                        document.getElementById('efecto').innerHTML = '<h1>¡Ganaste!</h1> <h3>La maquina eligio lagarto y tu piedra lo aplasto.</h3>'
                    }else{
                        if(opciones[eleccionMaquina] == 4){
                            document.getElementById('efecto').innerHTML = '<h1>¡Perdiste!</h1> <h3>La maquina eligio spock y vaporiza tu piedra.</h3>'
                        }
                    }
                }
            }
        } 
    }

    if(eleccionUsuario == 1){//el usuario eligio papel 
        if(opciones[eleccionMaquina] == 2){
            document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio tijera y tu papel.</h3>';
        }else{
            if(opciones[eleccionMaquina] == 0){
                document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio piedra y tu papel.</h3>';
                
            }else{
                if(opciones[eleccionMaquina] == 1){
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron papel.</h3>'; 
                }else{
                    if(opciones[eleccionMaquina] == 3){
                        document.getElementById('efecto').innerHTML = '<h1>¡Perdiste!</h1> <h3>La maquina eligio lagarto y se comió tu papel.</h3>'
                    }else{
                        if(opciones[eleccionMaquina] == 4){
                            document.getElementById('efecto').innerHTML = '<h1>¡Ganaste!</h1> <h3>La maquina eligio spock y tu papel le desautoriza.</h3>'
                        }
                    }
                }    
            }
        }
    }

    if(eleccionUsuario == 2) {//el usuario eligio tijera 
        if(opciones[eleccionMaquina] == 1){
            document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio papel y tu tijera.</h3>';
        }else{
            if(opciones[eleccionMaquina] == 0){
                document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio piedra y tu tijera.</h3>'; 
            }else{
                if(opciones[eleccionMaquina] == 2) {
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron tijera.</h3>';
                }else{
                    if(opciones[eleccionMaquina] == 3){
                        document.getElementById('efecto').innerHTML = '<h1>¡Ganaste!</h1> <h3>La maquina eligio lagarto y tu tijera lo decapito.</h3>'
                    }else{
                        if(opciones[eleccionMaquina] == 4){
                            document.getElementById('efecto').innerHTML = '<h1>¡Perdiste!</h1> <h3>La maquina eligio spock y rompio tus tijeras.</h3>'
                        }
                    }
                }
            }
        }
    }

    if(eleccionUsuario == 3){//el usuario eligio lagarto
        if(opciones[eleccionMaquina] == 2){
            document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio tijera y mato tu lagarto.</h3>';
        }else{
            if(opciones[eleccionMaquina] == 0){
                document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio piedra y aplasto tu lagarto.</h3>';
                }else{
                    if(opciones[eleccionMaquina] == 1){
                    document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La máquina eligió papel y tu lagarto se lo comio.</h3>'; 
                    }else{
                        if(opciones[eleccionMaquina] == 3){
                        document.getElementById('efecto').innerHTML = '<h1>¡Empate!</h1> <h3>Ambos eligieron lagarto.</h3>'
                        }else{
                            if(opciones[eleccionMaquina] == 4){
                            document.getElementById('efecto').innerHTML = '<h1>¡Ganaste!</h1> <h3>La maquina eligio spock y tu lagarto lo enveneno.</h3>'
                            }
                        }
                    }    
                }
            }
        }
        
    if(eleccionUsuario == 4){//el usuario eligio spock
        if(opciones[eleccionMaquina] == 2){
            document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio tijera y spock las rompio.</h3>';
        }else{
            if(opciones[eleccionMaquina] == 0){
                document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio piedra y spock la vaporizo.</h3>';
                }else{
                    if(opciones[eleccionMaquina] == 1){
                    document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La máquina eligió papel y desautorizo a spock.</h3>'; 
                    }else{
                        if(opciones[eleccionMaquina] == 3){
                        document.getElementById('efecto').innerHTML = '<h1>¡Perdiste!</h1> <h3>La máquina eligió lagarto y enveneno a spock.</h3>'
                        }else{
                            if(opciones[eleccionMaquina] == 4){
                            document.getElementById('efecto').innerHTML = '<h1>¡Empate!</h1> <h3>Ambos eligieron spock.</h3>'
                            }
                        }
                    }    
                }
            }
        }
    
    document.getElementById('efecto').style.display = "";
}
function quitarEfecto() {
    document.getElementById('efecto').style.display = "none";
}
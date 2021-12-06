import { colors } from "./colors.js";

document.getElementById("começar").addEventListener('click', jogar);

function jogar() {
    var cores = colors();
    var corUsuario;
    var coresAleatorias = [];
    var chances = 5;
    var acabou = false;

    while (coresAleatorias.length < 10) {
        coresAleatorias[coresAleatorias.length] = cores[Math.floor(Math.random() * (cores.length - 1)) + 1];
        coresAleatorias = [...new Set(coresAleatorias)];
    }

    coresAleatorias.sort();

    var corGerada = coresAleatorias[Math.floor(Math.random() * (coresAleatorias.length - 1)) + 1].toLowerCase();
    //alert(corGerada);
    var coresAleatorias2 = coresAleatorias.map(coresAleatorias => coresAleatorias.toLowerCase());
    
    while (!acabou) {
        corUsuario = prompt("Eu estou pensando em uma dessas cores: \n\n" + coresAleatorias.join(', ') + "\n\nEm qual delas eu estou pensando?\n\n" + `Você tem ${chances} vidas restantes`);
        corUsuario = corUsuario.toLowerCase();
        if (chances == 1) {
            acabou = true;
            document.getElementById("mensagem").innerHTML = "Não foi dessa vez, mas tente novamente."
            alert("Suas chances acabaram! \nFim de jogo.");
        } else {
            if (coresAleatorias2.indexOf(corUsuario) < 0) {
            alert("Esta cor não consta na lista.");
            }
             else if (corUsuario == corGerada) {
                alert("Certa resposta!");
                acabou = true;
                document.body.style.background = corUsuario;
                document.getElementById("mensagem").innerHTML = `A cor correta é: ${corGerada}`;

            } else {
                let resposta = corUsuario.localeCompare(coresAleatorias2[corGerada])
                let pista = "Dica: a cor escolhida é alfabeticamente ";
                if (resposta == -1) {
                    pista += "maior que a escolhida"
                } else {
                    pista += "menor que a escolhida"
                }
                chances--;
                alert(`Desculpe! Resposta incorreta!\n${pista}\nPor favor, tente novamente.`);
            }
        }
    }
}

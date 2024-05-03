const { log } = require("console");
const ps = require("prompt-sync");

const prompt = ps();

let nivel, heroi, xpHeroi;

while (heroi === "" || heroi === undefined) {
    heroi = prompt("Digite o nome do seu herói? \n");
}

while (isNaN(xpHeroi) || xpHeroi === undefined || xpHeroi <= 0) {
    xpHeroi = parseInt(prompt("Qual a experiência (XP) do seu herói? \n"));
}
console.log(xpHeroi);

if (xpHeroi <= 1000) {
    nivel = "Ferro"
} else {
    if (xpHeroi > 1000 && xpHeroi <= 2000) {
        nivel = "Bronze"
    } else {
        if (xpHeroi > 2000 && xpHeroi <= 5000) {
            nivel = "Prata"
        } else {
            if (xpHeroi > 5000 && xpHeroi <= 7000) {
                nivel = "Ouros"
            } else {
                if (xpHeroi > 7000 && xpHeroi <= 8000) {
                    nivel = "Platina"
                } else {
                    if (xpHeroi > 8000 && xpHeroi <= 9000) {
                        nivel = "Ascendente"
                    } else {
                        if (xpHeroi > 9000 && xpHeroi <= 10000) {
                            nivel = "Imortal"
                        } else {
                            if (xpHeroi > 10000) {
                                nivel = "Radiante"
                            }
                        }
                    }
                }
            }
        }
    }
};

console.log(`O Herói de nome ${heroi} está no nível de ${nivel}`);
let nivel = ""
let saldoVitoria = saldoRankeadas(400,200)

if(saldoVitoria <10){
    nivel = "Ferro"}

else if(saldoVitoria >11 && saldoVitoria <20){
    nivel = "Bronze"}
        
else if(saldoVitoria >21 && saldoVitoria <50){
    nivel = "Prata"}

else if(saldoVitoria >51 && saldoVitoria <80){
    nivel = "Ouro"}
        
else if(saldoVitoria >81 && saldoVitoria <90){
    nivel = "Platina"}

else if(saldoVitoria >91 && saldoVitoria <100){
    nivel = "Ascendente"}

else if(saldoVitoria >=101){
    nivel = "Imortal"}

console.log(`O Herói tem de saldo de ${saldoVitoria} está no nível de ${nivel}`)

function saldoRankeadas (quantVitorias, quantDerrotas){
    return quantVitorias - quantDerrotas;
 }
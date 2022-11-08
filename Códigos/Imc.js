const Altura = 1.76;
const Peso = 85;
const Imc = Peso / Math.pow(Altura, 2);
console.log(Imc);

if(Imc <= 18.5 ) {
    console.log('Abaixo do peso')
} else if (Imc >= 18.5 && Imc <25){
    console.log('Peso ideal')
} else if (Imc >= 25 && Imc < 30){ 
console.log('Acima do peso');
} else if (Imc >= 30 && Imc <40)
{
    console.log('Obeso')
} else { 
 console.log('Obesidade grave');
}

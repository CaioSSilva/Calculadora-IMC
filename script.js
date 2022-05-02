const name = document.getElementById("name");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const calcButton = document.getElementById("submit");
const resultCamp = document.getElementById("result")
const wipe = document.getElementById("button-wipe");
const form = document.getElementById("form")
form.onsubmit = function(){
    return false
}
calcButton.addEventListener('click', () =>{
    let resultado = weight.value / (height.value * height.value);
    if(resultado < 18.5){
        resultCamp.textContent = `Ola ${name.value} seu resultado é ${resultado.toFixed(2)}, você esta Magro(a)`
    }else{
        if(resultado > 18.5 && resultado < 24.9){
            resultCamp.textContent = `Ola ${name.value} seu resultado é ${resultado.toFixed(2)}, você esta Normal`
        }else{
            if(resultado > 25.0 && resultado < 29.9){
                resultCamp.textContent = `Ola ${name.value} seu resultado é ${resultado.toFixed(2)}, você esta com Sobrepeso`
            }else{
                if(resultado > 30.0 && resultado < 39.9){
                    resultCamp.textContent = `Ola ${name.value} seu resultado é ${resultado.toFixed(2)}, você esta com Obesidade`
                }else{
                    if(resultado > 40.0){
                        resultCamp.textContent = `Ola ${name.value} seu resultado é ${resultado.toFixed(2)}, você esta com Obesidade Grave`
                    }
                }
            }
        }
    }
})
wipe.addEventListener("click", () => {
    resultCamp.style.display = "none";
    name.value='';
    height.value='';
    weight.value='';
})
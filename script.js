function displayText() {
    let input = document.getElementById("inputText").value;
    let input1 = document.getElementById("inputText1").value;
    let input2 = document.getElementById("inputText2").value;
    let input3 = document.getElementById("inputText3").value;
    let input4 = document.getElementById("inputText4").value;
    let errorElement = document.getElementById("error");
    let normElement = document.getElementById("norm");
    errorElement.style.display = 'none'
    normElement.style.display = 'none'
    
    if (input === "") {
        errorElement.innerText = "Имя обязательно должно быть.";
        errorElement.style.display = 'block';
    } else {
        if (input1.includes('@')){
            if (input2 == input3 && input2.length >= 8 && input3.length >= 8){
                if (input4 === "" || input4 >= 1 && input4 <= 120 ){
                    normElement.innerText = "В Успешно зарегистририровались.\nВот ваши данные\nИмя: "+input+"\nПочта: "+input1+"\nПароль: "+input2+"\nВозраст: "+input4
                    normElement.style.display = 'block';
                }
                else{
                    errorElement.innerText = "Возраст меньши 1 или бошьле 120 ";
                    errorElement.style.display = 'block';
                }
            }
            else{
                errorElement.innerText = "Не правельно ввиден пароль.";
                errorElement.style.display = 'block';
            }
        }
        else{
            errorElement.innerText = "Почта не действительная.";
            errorElement.style.display = 'block';
        }
    }
}
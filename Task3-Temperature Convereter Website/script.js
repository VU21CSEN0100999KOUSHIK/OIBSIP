const UIcelsius = document.querySelector('#result-celsius');
const UIfahrenheit = document.querySelector('#result-fahrenheit');
const UIkelvin = document.querySelector('#result-kelvin');
const UIinputValue = document.querySelector('#UIinputValue');
const UIinputValueUnit = document.querySelector('#UIinputValueUnit');

const defaultVideo = document.querySelector('#default-video');
const summerVideo = document.querySelector('#summer-video');
const autumnVideo = document.querySelector('#auttum-video');
const winterVideo = document.querySelector('#winter-video');

summerVideo.style.display = 'none';
autumnVideo.style.display = 'none';
winterVideo.style.display = 'none';

const calculateBtn = document.querySelector('.calculateBtn');
const temperatureUnit = document.querySelector('#tempUnit');

calculateBtn.addEventListener('click',calculateResult);
temperatureUnit.addEventListener('click',changeUIUnit);

function calculateResult(e){
    
    let inputNumber = parseInt(UIinputValue.value);

    
    let optionValue = (temperatureUnit.options[temperatureUnit.selectedIndex].text).toLowerCase();

    
    if(optionValue == "select your desire temperature unit" || isNaN(inputNumber)){
       alert('Please Enter Both Number / Temperature Value');

    }else
        if(optionValue == "celsius"){
            celsius = inputNumber;
            fahrenheit = ((inputNumber * 9/5)+32).toFixed(2);
            kelvin = (inputNumber + 273.15).toFixed(2);
            UIresultOutput();
        };
        if(optionValue == "fahrenheit"){
            celsius = ((inputNumber-32)*5/9).toFixed(2);
            fahrenheit = inputNumber;
            kelvin = (((inputNumber-32)*5/9)+273.15).toFixed(2);
            UIresultOutput();
        };
        if(optionValue == "kelvin"){
            celsius = (inputNumber - 273.15).toFixed(2);
            fahrenheit = ((inputNumber - 273.15)*9/5 + 32).toFixed(2);
            kelvin = inputNumber;
            UIresultOutput();
        }
        

    e.preventDefault();
};


function changeUIUnit(){
    let UIoptionValue = (temperatureUnit.options[temperatureUnit.selectedIndex].text).toLowerCase();
        if(UIoptionValue == 'celsius'){
            UIinputValueUnit.innerHTML ='&deg;C';
        }
        if(UIoptionValue == 'fahrenheit'){
            UIinputValueUnit.innerHTML ='&deg;F';
        }
        if(UIoptionValue == 'kelvin'){
            UIinputValueUnit.innerHTML ='&deg;K';
        }
}


function UIresultOutput(){
    UIcelsius.value = celsius;
    UIfahrenheit.value = fahrenheit;
    UIkelvin.value = kelvin;
    if(celsius >= 30){
        summerVideo.style.display = 'block';
        autumnVideo.style.display = 'none';
        winterVideo.style.display = 'none';
        defaultVideo.style.display = 'none';
    }
   else if(celsius >= 20  &&  celsius <= 29){
        summerVideo.style.display = 'none';
        autumnVideo.style.display = 'block';
        winterVideo.style.display = 'none';
        defaultVideo.style.display = 'none';
    }
    else {
        summerVideo.style.display = 'none';
        autumnVideo.style.display = 'none';
        winterVideo.style.display = 'block';
        defaultVideo.style.display = 'none';
    }

    
    UIinputValue.value = '';
    UIinputValueUnit.value = '';

}
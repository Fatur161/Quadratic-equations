const inputA = document.querySelector('#valueA');
const inputB = document.querySelector('#valueB');
const inputC = document.querySelector('#valueC');

const solveContainer = document.querySelector('.solve-container');

const equation = document.querySelector('#equation');
const answ = document.querySelector('#answer');


const btn = document.querySelector('#btn');




btn.addEventListener('click', ()=>{
    const a = inputA.value;
    const b = inputB.value;
    const c = inputC.value;
    if(a == '') a = 0;
    if(b == '') b = 0;
    if(c == '') c = 0;
    solving(a,b,c);
});

function solving(a,b,c){
    let x1, x2;
    let discriminant = Math.pow(b,2) - 4 * a * c;
    if(discriminant > 0){
        x1 = (-(b) + Math.floor(Math.pow(discriminant, 1/2))) / 2 * a;
        x2 = (-(b) - Math.floor(Math.pow(discriminant, 1/2))) / 2 * a;
        solveContainer.classList.remove('none');
        equation.innerHTML = `Ваше уравнение:<br> ${a}x²+${b}x+${c}=0`;
        answ.innerHTML = `Корни:<br> x=${x1} и x=${x2}`;
    }
    else if(discriminant == 0){
        x1 = -(b) / 2 * a;
        solveContainer.classList.remove('none');
        equation.innerHTML = `Ваше уравнение:<br> ${a}x²+${b}x+${c}=0`;
        answ.innerHTML = `Корни:<br> x=${x1}`
    }else{
        solveContainer.classList.remove('none');
        equation.innerHTML = `Ваше уравнение:<br> ${a}x²+${b}x+${c}=0`;
        answ.innerHTML = `Корни:<br> нет действительных корней`
    }
}

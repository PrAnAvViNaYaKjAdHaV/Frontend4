const tip = document.querySelectorAll('.tipValue > li');
const tipAmout = document.querySelector('.Tamount');
const total = document.querySelector('.PTamount');
const error = document.querySelector('.error p:last-child');
const eBorder = document.querySelector('.numberPeople');
const texBill = document.querySelector('.billText');
const CostumTip = document.querySelector('.tipValue>input[type=text]');
  let Totalbill =0;
  let tipPercent =0;
  let tipPepole = 0;

 function TipClick(){
     let check = this.classList.contains('Cycan');
    if(!check){
        tip.forEach(tip=>tip.classList.remove('Cycan'));
        this.classList.add('Cycan');
        let value = this.textContent;
         value = value.replace("%","");
         tipPercent = value;
    }
}
function Focus(){
   texBill.classList.add('focusBorder')
}
function Focus1(){
    CostumTip.classList.add('Cycan');
}
function getVal() {
    tip.forEach(tip=>tip.classList.remove('Cycan'));
    const check = document.querySelector('.tipValue > input[type=text]').value;
    tipPercent = check;
}
function Bill(){
    const bill = document.querySelector('.billText  > input[type=text]').value;
    texBill.classList.remove('focusBorder')
    Totalbill = bill;
}
function Reload(){
    document.location.reload(true);
}

function TipPerson(){
    const people= document.querySelector('.numberPeople  > input[type=text]').value;
    if(people==0){
         error.classList.remove('none');
         eBorder.classList.add('Border');
    }else{
        error.classList.add('none');
        eBorder.classList.remove('Border');
        CostumTip.classList.remove('Cycan');
        tipPepole = people===1?0:people;
        tipPercent = tipPercent/100;
        let tipValue = Totalbill*tipPercent;
        let PersonTipValue = (tipValue/tipPepole).toFixed(2);
        let TotalPerson = (Totalbill/tipPepole)+(PersonTipValue-'0');
        console.log(PersonTipValue);
        console.log(TotalPerson);
        tipAmout.innerHTML = 
        `
        <p>$${PersonTipValue}</p>
        `
        total.innerHTML = 
        `
        <p>$${TotalPerson}</p>
        `
        const reset = document.querySelector('button');
        reset.classList.add('Cycan')
        reset.addEventListener('click',Reload);
    }

   
}

tip.forEach(tip=> tip.addEventListener('click',TipClick))

 
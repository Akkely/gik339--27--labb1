// /* Hämtar div textbox med hjälp av getElementsByClassName, där classname är textbox */
// const textBox = document.getElementsByClassName("container");

// /* Hämtar input med hjälp av getElementById, där id är color */
// const color = document.getElementById("color");

// /* Hämtar textfält med hjälp getElementByClassName, där className är textfield*/
// const textfield = document.getElementsByClassName("textfieldOne");

// /* Hämtar content med hjälp av getElementById, där id är content*/
// const content = document.getElementById("content");



// /* eventLyssnare(); */

// /* Hämtar textfält med hjälp av querySelector, där className är textfield*/
// const textfield1 = document.querySelector(".textfieldTwo");

// /* Hämtar divStyle med hjälp av getElementById, där id är divStyle*/
// const divStyle = document.getElementById("divStyle");

// /* Hämtar checkbox med hjälp av getElementByClassName, där className är checkbox*/
// const checkbox = document.getElementsByClassName("checkBox");

// /* Hämtar knappen med hjälp av getElementByTagName, där tagName är delete*/
// const button = document.querySelector("#delete");


function handleBlur(e){
  const name = e.target.name;
  const value = e.target.value;
 // output.innerHTML= '<p> Fältet ' + name + ' har värdet ' + value + '</p>';
 const html = `<p> Fältet ${name} har värdet ${value}</p>`;
 output.insertAdjacentHTML('afterbegin', html);
}
const dynamicDisplay = document.getElementById('dynamicDisplay');
function handleClick(e){
  e.preventDefault();
  const targetName = e.target.id;
  const colorField = document.getElementById('color');
  const contentField = document.getElementById('content');
  //const colorField = settings.color;
  //const contentField = setting.content;
  console.log(targetName);
  if(targetName == 'addElement'){
    const newElement = document.createElement('div');
    newElement.classList.add('new-element');
    newElement.style.backgroundColor=colorField.value;
    newElement.innerHTML = contentField.value;
    dynamicDisplay.insertAdjacentElement('beforeend', newElement);
  }
}
document.addEventListener('reset', () => console.log('reset'));
/* Skapar en funktion (eventlyssnare) som när den triggas 
ska avsändaren (target) skrivas ut till konsolen. Om avsändaren (target) 
är inputfältet content, ska dess värde skrivas ut till div-elementet */

/* getTextfield1.addEventListener'click', () => {
    content = document.getElementsByName("content");
    content.for((content) => {
        if (content.checked) {
            output.innerText = `You selected: ${content.value}`;
        }
    }); */

/* function eventLyssnare(event) {*/
    /* alert("Target")
    content.addEventListener("click", eventLyssnare); */
    /* let e = event || window.event; */
/* Skriver ut till konsolen vilket inputfält som genererade eventet (target) */
   /*  console.log("Event triggered by: " + e.content.id);
 */
/* Tar reda på inputfältets name attribut*/
   /*  let fieldName = e.target.name;
 */
    /* Om name-attributet är "content" */
  /*   if (fieldName == "content") {
        let outputDiv = document.getElementById("output"); */

        /* Skriver ut värdet i inputfältet till div-elementet */
       /*  outputDiv.innerHTML = "Input value: " + e.content.value;
    }
}  */

/* Hämtar input-elementet */
/* const contentInput = document.getElementById("content"); */

/* Lägger till en eventlyssnare till input-elementet */
/* contentInput.addEventListener("input", handleInput); */
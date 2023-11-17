// Hämtar alla input-element med klassen 'textfield'
const inputFields = document.querySelectorAll('.textfield');

// Hämtar elementet där nya element ska visas
const dynamicDisplay = document.getElementById('dynamicDisplay');

// Hämtar input-fält för färg
const colorField = document.getElementById('color');

// Hämtar input-fält för innehåll
const contentField = document.getElementById('content');

// Hämtar checkbox-elementet
const divStyleCheckbox = document.querySelector('input[type="checkbox"]');


// Kollar i consol loggen vad vi hämtat
console.log(inputFields, dynamicDisplay, colorField, contentField,divStyleCheckbox)


// Funktionen som hanterar eventet
function handleInputEvent(e) {
  // Skriver ut vilket element som genererade eventet
  console.log('Event genererat av:', e.target);
  // Hämtar name-attributet från elementet som genererade eventet
  const fieldName = e.target.name;
  // Kontrollerar om det är 'content'-fältet
  if (fieldName === 'content') {
      // Hämtar värdet från 'content'-fältet
      const contentValue = e.target.value;
      // Skriver ut värdet i 'content'-fältet till div-elementet
      dynamicDisplay.innerHTML = contentValue;
  }
}

// Lägger till eventlyssnare till alla input-fält
inputFields.forEach(field => field.addEventListener('input', handleInputEvent));

// Lägger till en eventlyssnare på checkboxen för att hantera förändringar
divStyleCheckbox.addEventListener('change', function() {
  // Kontrollerar om checkboxen är ikryssad
  if (this.checked) {
    // Rensar befintligt innehåll i dynamicDisplay
    dynamicDisplay.innerHTML = '';
    // Skapar ett nytt div-element
    const newElement = document.createElement('div');
    // Lägger till en klass till det nya elementet
    newElement.classList.add('new-element');
    // Sätter bakgrundsfärgen på det nya elementet baserat på värdet i colorField
    newElement.style.backgroundColor = colorField.value;
    // Sätter innehållet i det nya elementet baserat på värdet i contentField
    newElement.innerHTML = contentField.value;
    // Lägger till det nya elementet i dynamicDisplay
    dynamicDisplay.appendChild(newElement);
  }
});

// Hämtar "Ta bort"-knappen
const deleteButton = document.querySelector("#delete");
console.log(deleteButton)
// Lägger till en eventlyssnare på "Ta bort"-knappen
deleteButton.addEventListener('click', function() {
    // Hämtar dynamicDisplay-elementet
    const dynamicDisplay = document.getElementById('dynamicDisplay');
    // Rensar allt innehåll i dynamicDisplay när knappen klickas
    dynamicDisplay.innerHTML = '';
});
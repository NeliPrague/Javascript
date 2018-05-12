// ** Zadání 1.1 **
// Vytvoř funkci, která načte hodnoty z formuláře, vytvoří objekt, naplní ho těmi hodnotami a vrátí ten objekt.
//
// postup:
// 1. Vytvoř funkci jménem "getFormData".
// 2. V té funkci si vytvoř tři proměnné do kterých si uložíš hodnoty "First Name", "Last Name" a "Age" z formuláře. ( Na nalezení hodnot na formuláři použij id u inputů např. id="ex1-input-1" )
// 3. Dál si v té funkci vytvoř objekt person s property "firstName", "lastName" a "age" a hodnoty pro ty property naplň hodnotama z těch pomocných proměnných z bodu 2.
// 4. Nastav ať funkce vrátí ten objekt.
// 5. Pomocí console.log() si můžeš zkontrolovat, že funkce vrátí správný objekt.
//
function getFormData() {
var First_Name = document.getElementById("ex1-input-1").value;
var Last_Name = document.getElementById("ex1-input-2").value;
var Age = document.getElementById("ex1-input-3").value;
var person = {
  firstName: First_Name,
  lastName: Last_Name,
  age: Age
  }
  return person;
}
console.log(getFormData());
// Příklad:
//
// function getName(){
//     var ourText = document.getElementById("text").value;
//
//     var ourText = "john";
//
//     var notebook = {
//         text: ourText
//     }
//
//     return notebook;
// }
// console.log(getName());

//
// ** Zadání 1.2 **
// Zadání: Vytvoříme funkci "createTableRow", která na vstupu dostane jako parametr objekt (jednu osobu) a v těle funkce vytvoříš html kód řádku tabulky a tuto hodnotu pak funkce vrátí.
//
// postup:
// 1. Vytvoř funkci jménem "createTableRow", která bude mít jeden parametr, do kterého při zavolání funkce pošleme objekt Person
// 2. Vytvoř si proměnnou, do které si vytvoříš html kód řádku tabulky a vlož tam to jméno, příjmení a věk.
// 3. Nastav aby funkce vracela tuto hodnotu jako výsledek.
//
function createTableRow (person){
  var tableRow = '<tr><td>' + person.firstName + '</td><td>' + person.lastName + '</td><td>' + person.age + '</td></tr>';
  return tableRow;
}

// Příklad:
// function createTR(notebook){
//     var tableRow = '<tr><th>' + notebook.text + '</th></tr>';
//
//     return tableRow;
// }
//
// ** Zadání 1.3 **
// Zadání: Vytvoř si prázdné pole jménem "personList", do kterého budeš později posílat načtené objekty.
//
var personList = [];

// ** Zadání 1.4 **
// Zadání: Vytvoř funkci "createTable", která dostane na vstup pole objektů personList. Funkce projde for cyklem každý prvek v poli, provolá funkci createTableRow a vrátí vytvořenou tabulku.
//
// postup:
// 1. Vytvoř funkci "createTable",  která bude mít jeden parametr (do kterého při zavolání funkce pošleme pole objektů personList)
// 2. Vytvoř si proměnnou "htmlTable", do které si budeš ukládat html kód tabulky. (zatím bude prázdná)
// 3. Vytvoř si for cyklus, který projde všechny prvky pole personList.
// 4. Ve for cyklu si zavolej funkci "createTableRow", které jako parametr předáš aktuální prvek pole personList. Výsledek si ulož do pomocné proměnné "htmlTableRow".
// 5. Ve for cyklu vezmi hodnotu v htmlTableRow a přidej jí do proměnné htmlTable (která je mimo for cyklus).
// 6. Po skončení for cyklu je v proměnnhtmlTableé "htmlTable" vytvořená tabulka.
// 7. Nastav, aby funkce createTable vracela tuto hodnotu.

function createTable(personList)
{
  var htmlTable = "";
  for (i=0; i < personList.length; i++)
  {
    var htmlRow = createTableRow(personList[i]);
    htmlTable += htmlRow;
  }
  return htmlTable;
}
// Příklad:
// var personArray = [];
//
// function createT(personArray)
// {
//     var htmlTable;
//
//     for(...)
//     {
//         var htmlRow = createTableRow(...);
//
//         htmlTable ... htmlRow;
//     }
//
//     return ...
// }
//
// // tečky nahrazují kód, aby to nebylo moc snadné :)
//
// ** Zadání 1.5 **
// Zadání: Vytvoř funkci "clickButtonAddToTable", kterou napojíme na stisknutí tlačítka. Funkce načte data z formuláře, přidá je do pole objektů, pak se zavolá funkce na vytvoření tabulky a nakonec se do html kódu vloží ta tabulka.
//
function clickButtonAddToTable()
{
  personList.push(getFormData());

  document.getElementById("ex1-table-body").innerHTML = createTable(personList);
}

// Postup:
// 1. Vytvoř si funkci "clickButtonAddToTable" bez vstupních parametrů.
// 2. Do pole personList přidej výsledek provolání funkce "getFormData".     // příklad: myArray.push(myFunction());
// 3. Do těla tabulky (v html kódu je to tag tbody s id="ex1-table-body") pomocí innerHtml vlož výsledek volání funkce createTable.
//     https://www.w3schools.com/jsref/prop_html_innerhtml.asp
//     Příklad: document.getElementById("demo").innerHTML = createTable(personList);
//
// ** Zadání 1.6 **
// Zadání: Nastavíme, aby se na stisk tlačítka "Add to table" zavolala funkce "clickButtonAddToTable".
//
document.getElementById("ex1-addToTable").addEventListener("click", clickButtonAddToTable);

// Postup:
// Použij postup popsaný tady https://www.w3schools.com/js/js_htmldom_eventlistener.asp , id tlačítka je "ex1-addToTable". tlačítku nastav, aby se volala funkce "clickButtonAddToTable".





var test = [{
            firstName: "John",
            lastName: "Doe",
            age: 24
          },{
            firstName: "Jimmy",
            lastName: "Smith",
            age: 18
            }]

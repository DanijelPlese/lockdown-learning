// create function that gets data from the inputs and create a new person table row 
// https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
/* 
      <tr>
        <td>David</td>
        <td>Abram</td>
        <td>30</td>
        <td><input type="button" value="remove" /></td>
      </tr>
*/

// set the onclick of the button so it removes the table row from the table
//event.tagret -> bitno!


function createNewDiv(text) {
  const newRow = document.createElement('div');
  
  document.body.appendChild(element);
  element.textContent = text;
  if (event.target === onclick.create);
}

createNewDiv();

const commitButtonElement = document.querySelector('#create');

newRow.onclick = createNewDiv;
/*
function generate_table() {
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < 2; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < 2; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode("cell in row "+i+", column "+j);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}
*/
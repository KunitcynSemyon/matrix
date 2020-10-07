let inputsData;
let colCount;
let rowCount; 
let matrix;
let vectorB1;
let vectorB2;
let vectorB3;

function generate(){
    rowCount = document.getElementById('rowCount').value;
    colCount = document.getElementById('colCount').value;

    if(document.getElementsByTagName('table').length !== 0) {
        document.getElementById('table').remove(); 
    }
    let tbl = document.createElement('table');
    tbl.id = 'table'
    if (rowCount > 0  && colCount > 0) {
        tbl.insertRow(-1);
        for (let j=0; j<=colCount; j++){ 
            tbl.tBodies[0].rows[0].insertCell(-1).innerHTML = j||' ';
        }
        for (let i=1; i<=rowCount; i++){
            tbl.insertRow(-1).insertCell(-1).innerHTML = i;
            for (let j=1; j<=colCount; j++) {
                let input = document.createElement('input');
                input.id=input.name='m_'+i+'_'+j;
                input.className = 'input';
                input.size = "5";
                tbl.tBodies[0].rows[i].insertCell(-1).appendChild(input);
            }
        }
        document.body.appendChild(tbl);

        inputsData = document.querySelectorAll('input.input');
    } else alert('Значения полей не должны быть равны нулю');
}

function getValues() {
    vectorB1 = document.getElementById('b1').value;
    vectorB2 = document.getElementById('b2').value;
    vectorB3 = document.getElementById('b3').value;
    vector = [vectorB1, vectorB2, vectorB3];
    matrix = [];
    for(let i = 0; i < colCount; i++) {
        let row = []
        for(let j = 0; j < rowCount; j++) {
            row.push(inputsData[j + i * colCount].value)
            matrix[i] = row;
        }
    }
    eel.get(matrix, vector)(callBackGet)
}

function callBackGet(X){
    let resTable = document.createElement('table');
    resTable.id = 'resTable';
    let markup = '';
    let xy = ['x1,2,3 =','y1,2,3 =']
    document.body.append(resTable);
    console.log(X)
    for(let i = 0; i < 2; i++){
        markup += '<tr>'
        markup += `<td>${xy[i]}</td><td style="width: 30px; height: 15px; text-align: center; padding: 5px">${X[i]}</td>`
        markup += '</tr>'
    }
    markup += '</table>'
    resTable.innerHTML = markup;
}
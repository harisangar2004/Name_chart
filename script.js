
const num = {
    A: 1, J: 1, S: 1,
    B: 2, K: 2, T: 2,
    C: 3, L: 3, U: 3,
    D: 4, M: 4, V: 4,
    E: 5, N: 5, W: 5,
    F: 6, O: 6, X: 6,
    G: 7, P: 7, Y: 7,
    H: 8, Q: 8, Z: 8,
    I: 9, R: 9
};
const numInitial = {
    A: 1, J: 10, S: 19,
    B: 2, K: 11, T: 20,
    C: 3, L: 12, U: 21,
    D: 4, M: 13, V: 22,
    E: 5, N: 14, W: 23,
    F: 6, O: 15, X: 24,
    G: 7, P: 16, Y: 25,
    H: 8, Q: 17, Z: 26,
    I: 9, R: 18
};
function initializeArrays(n) {
    const arrays = [];

    for (let i = 0; i <= n; i++) {
        const newArray = []; // Create a new empty array
        arrays.push(newArray); // Add the new array to the arrays array
    }

    return arrays;
}
const n = 12;
const box = initializeArrays(n);

var str;
var strSplit;
let strLengthWithoutSpace = 0;
function takeValue() {

    /*
        for (let w = 1; w <= 12; w++) {
            var test = `b-${w}`
            console.log(document.getElementById(test).innerHTML);
            console.log("\n");
            document.getElementById(test).innerHTML = ' ';
        }*/
    // str = ' ';
    str = document.querySelector('input').value;
    for (let a = 0; a < str.length; a++) {
        if (str[a] !== ' ') {
            strLengthWithoutSpace++;
        }
    }
    strSplit = str.split(" ");
    console.log(str);
    console.log(strSplit);
    let temp = 0, count = 0;
    var idName;
    var tempStr;
    for (let j = 0; j < strSplit.length; j++) {
        if (j == 0) {
            if (strSplit[j].length == 1) {
                //INITAL PART
                console.log("IT IS INITIAL")
                temp = temp + numInitial[strSplit[j]];
                console.log(strSplit[j]);
                if (temp > 12) {
                    temp = temp % 12;
                }
                if (temp % 12 == 0) {
                    temp = 12;
                }
                idName = `b-${temp}`;
                // idName = 'b-0';
                console.log(idName);
                console.log(temp);
                box[temp].push(strSplit[j]);
                console.log(box[temp]);
                console.log(box[temp].toString());
                count++;
                document.getElementById(idName).innerHTML = box[temp].toString();
            }

            if (strSplit[j].length > 1) {
                for (let k = 0; k < strSplit[j].length; k++) {

                    console.log(strSplit[j]);
                    console.log(strSplit[j][k]);

                    temp = temp + num[strSplit[j][k]];
                    if (k != 0) {
                        temp = temp - 1;
                    }
                    if (temp > 12) {
                        temp = temp % 12;
                    }
                    idName = `b-${temp}`;
                    console.log(idName);
                    console.log(temp);
                    box[temp].push(strSplit[j][k]);
                    console.log(box[temp]);
                    console.log(box[temp].toString());
                    count++;
                    document.getElementById(idName).innerHTML = box[temp].toString();

                }
            }
        }
        // NAME PART
        if (j != 0) {
            if (strSplit[j].length == 1) {
                console.log("2 initial!!\n\n");
                console.log(strSplit[j]);
                console.log(`${strSplit[j]} value is ${numInitial[strSplit[j]]}`);
                console.log(temp);
                temp = temp + numInitial[strSplit[j]];
                temp = temp - 1;
                console.log(temp);
                if (temp % 12 == 0) {
                    temp = 12;
                } else
                    if (temp > 12) {
                        temp = temp % 12;
                    }
                console.log(temp);
                idName = `b-${temp}`;
                console.log(idName);
                console.log(temp);
                box[temp].push(strSplit[j]);
                console.log(box[temp]);
                console.log(box[temp].toString());
                count++;
                document.getElementById(idName).innerHTML = box[temp].toString();
            }

            if (strSplit[j].length > 1) {
                for (let k = 0; k < strSplit[j].length; k++) {
                    console.log(strSplit[j]);
                    console.log(strSplit[j][k]);

                    temp = temp + num[strSplit[j][k]];
                    /*if (k = 0) {
                        temp = temp - 1;
                    }*/
                    temp = temp - 1;
                    if (temp > 12) {
                        temp = temp % 12;
                    }
                    idName = `b-${temp}`;
                    console.log(idName);
                    console.log(temp);
                    box[temp].push(strSplit[j][k]);
                    console.log(box[temp]);
                    console.log(box[temp].toString());
                    count++;
                    document.getElementById(idName).innerHTML = box[temp].toString();

                }
            }
        }
        console.log(count);
        console.log(strLengthWithoutSpace);
        var statusOutput = document.getElementById("status");
        if (count == strLengthWithoutSpace) {
            statusOutput.value = "success";
            statusOutput.style.color = "white";
            statusOutput.style.fontSize = "1.5rem"
            statusOutput.style.backgroundColor = "green";

        }
        else {
            document.getElementById("status").value = "error";
            statusOutput.style.color = "white";
            statusOutput.style.fontSize = "1.5rem";
            statusOutput.style.backgroundColor = "red";
        }
    }
    for (let i = 1; i <= n; i++) {
        console.log(`Box ${i} : ${box[i]} \n`);
    }
    let mark = 0, flag = 0;
    for (let i = 1; i <= n; i++) {
        console.log(`Box ${i} len : ${box[i].length}`)
        if (i == 1 || i == 2 || i == 4) {
            if (box[i].length > 0)
                mark += 10;
        }
        else if (i == 5 || i == 7 || i == 9 || i == 11) {
            if (box[i].length > 0)
                mark += 15;
        }
        else if (i == 10) {

            if (box[i].length > 0) {
                flag = 1;
                mark += 40;
            }
        }
        else {
            if (box[i].length >= 0 && box[i].length <= 1) {
                mark += 5;
            }
            else if (box[i].length == 2) {
                mark += 0;
            }
            else {
                mark = mark - (box[i].length - 2) * 5;
            }
        }
    }
    var markBox = document.getElementById("mark");
    if (flag == 1) {
        markBox.value = "#" + mark;
    }
    else {
        markBox.value = mark;
    }

    console.log(`mark is ${mark}`);
    // console.log(count);
}
function reset() {
    location.reload();
}

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
const n = 12;const markBox = document.getElementById("mark");
document.getElementById("input-name").onkeyup = function () {
    let mark = 0, flag = 0;
    markBox.value = 0;
    for (let w = 1; w <= 12; w++) {
        var test = `b-${w}`
        document.getElementById(test).innerHTML = ' ';
    }
    const box = initializeArrays(n);
    const str = this.value;
    const strSplit = str.split(" ");
    let strLengthWithoutSpace = strSplit.join("").length;
    let temp = 0, count = 0;
    var idName;
    var tempStr;
    for (let j = 0; j < strSplit.length; j++) {
        if (j == 0) {
            if (strSplit[j].length == 1) {
                //INITAL PART
                temp = temp + numInitial[strSplit[j]];
                if (temp > 12) {
                    temp = temp % 12;
                }
                if (temp % 12 == 0) {
                    temp = 12;
                }
                idName = `b-${temp}`;
                // idName = 'b-0';
                box[temp].push(strSplit[j]);
                count++;
                document.getElementById(idName).innerHTML = box[temp].toString();
            }
            if (strSplit[j].length > 1) {
                for (let k = 0; k < strSplit[j].length; k++) {
                    temp = temp + num[strSplit[j][k]];
                    if (k != 0) {
                        temp = temp - 1;
                    }
                    if (temp > 12) {
                        temp = temp % 12;
                    }
                    idName = `b-${temp}`;
                    box[temp].push(strSplit[j][k]);
                    count++;
                    document.getElementById(idName).innerHTML = box[temp].toString();
                }
            }
        }
        // NAME PART
        if (j != 0) {
            if (strSplit[j].length == 1) {
                console.log("2 initial!!\n\n");
                temp = temp + numInitial[strSplit[j]];
                temp = temp - 1;
                if (temp % 12 == 0) {
                    temp = 12;
                } else
                    if (temp > 12) {
                        temp = temp % 12;
                    }
                idName = `b-${temp}`;
                box[temp].push(strSplit[j]);
                count++;
                document.getElementById(idName).innerHTML = box[temp].toString();
            }
            if (strSplit[j].length > 1) {
                for (let k = 0; k < strSplit[j].length; k++) {
                    temp = temp + num[strSplit[j][k]];
                    /*if (k = 0) {
                        temp = temp - 1;
                    }*/
                    temp = temp - 1;
                    if (temp > 12) {
                        temp = temp % 12;
                    }
                    idName = `b-${temp}`;
                    box[temp].push(strSplit[j][k]);
                    count++;
                    document.getElementById(idName).innerHTML = box[temp].toString();
                }
            }
        }
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
        console.log(`Box ${i} len : ${box[i].length} \n ${mark}`)
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
            else if ((box[i].length > 2)) {
                mark = mark - (box[i].length - 2) * 5;
            }
        }
    }
    if (flag == 1) {
        markBox.value = "#" + mark;
    }
    markBox.value = mark;
}
function reset() {
    location.reload();
}

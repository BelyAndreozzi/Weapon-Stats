"use strict";

let formTable = document.querySelector("#dinamicTableForm")
formTable.addEventListener("submit", function (e) {
    e.preventDefault();
});


document.querySelector("#formTableSendBtn").addEventListener("click", function () {
    if (validateForm()) {
        addOneTeamToTable(getFormValue())
    }
});
document.querySelector("#addThreeRows").addEventListener("click", function () {
    if (validateForm(player1)) {
        addThreeTeams()
    }
});
document.querySelector("#deleteTable").addEventListener("click", deleteTable);


function getFormValue() {
    let teamName = document.querySelector("#teamName").value;

    let players = [];
    for (let i = 1; i <= 5; i++) {
        players.push(document.querySelector(`#player${i}`).value);
    }

    let row = {
        "teamName": teamName,
        "players": players
    }

    return row;
}

function validateForm() {

    let formData = getFormValue()

    if (formData.teamName == "" || formData.players.some(player => player == "")) {
        return false;
    } else {
        return true;
    }
}

let teams = [];

function addOneTeamToTable(row) {
    teams.push(row);

    addHTMLRow(teams);
    formTable.reset();
}

function addThreeTeams() {
    let row = getFormValue()
    for (let i = 0; i < 3; i++) {
        addOneTeamToTable(row);
    }
}


function addHTMLRow(teams) {
    let htmlRow = document.querySelector("#dinamicTableBody");

    htmlRow.innerHTML = "";

    for (let i = 0; i < teams.length; i++) {
        htmlRow.innerHTML += `
        <tr>
            <td>${teams[i].teamName}</td>
            <td>${teams[i].players[0]}</td>
            <td>${teams[i].players[1]}</td>
            <td>${teams[i].players[2]}</td>
            <td>${teams[i].players[3]}</td>
            <td>${teams[i].players[4]}</td>
        </tr>
        `;
    }
}

function deleteTable() {
    teams = []
    document.querySelector("#dinamicTableBody").innerHTML = "";
}




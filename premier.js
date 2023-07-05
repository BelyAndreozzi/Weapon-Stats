"use strict";

window.addEventListener("DOMContentLoaded", teamDefault)

let htmlRow = document.querySelector("#dinamicTableBody");
let teams = [];

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
    if (validateForm()) {
        addThreeTeams(getFormValue())
    }
});
document.querySelector("#deleteTable").addEventListener("click", deleteTable);


function validateForm() {

    let formData = getFormValue()

    if (formData.teamName == "" || formData.players.some(player => player == "") || formData.teamElo == "") {
        return false;
    } else {
        return true;
    }
}

function getFormValue() {
    let teamName = document.querySelector("#teamName").value;

    let players = [];
    for (let i = 1; i <= 5; i++) {
        players.push(document.querySelector(`#player${i}`).value);
    }

    let teamElo = document.querySelector("#teamElo").value;

    let row = {
        "teamName": teamName,
        "players": players,
        "teamElo": teamElo
    }

    return row;
}

function addOneTeamToTable(row) {
    teams.push(row);

    addHTMLRow(teams);
    formTable.reset();
}

function addThreeTeams(row) {
    for (let i = 0; i < 3; i++) {
        addOneTeamToTable(row);
    }
}


function addHTMLRow(teams) {
    htmlRow.innerHTML = "";

    for (let i = 0; i < teams.length; i++) {
        htmlRow.innerHTML += `
        ${(teams[i].teamElo == "Diamante" || teams[i].teamElo == "Ascendente" || teams[i].teamElo == "Inmortal" || teams[i].teamElo == "Radiante") ? `<tr class="filaResaltada">` : "<tr>"}
            <td>${teams[i].teamName}</td>
            <td>${teams[i].players[0]}</td>
            <td>${teams[i].players[1]}</td>
            <td>${teams[i].players[2]}</td>
            <td>${teams[i].players[3]}</td>
            <td>${teams[i].players[4]}</td>
            <td>${teams[i].teamElo}</td>
        </tr>
        `
    }
}

function deleteTable() {
    teams = []
    htmlRow.innerHTML = "";
}


function teamDefault() {
    let team = {
        "teamName": "Promocionadores de Web",
        "players": ["Bely", "Caro", "Chimu", "Martha", "Discord"],
        "teamElo": "Diamante"
    }

    teams.push(team)

    addHTMLRow(teams);
}

var uri = 'https://portal.phuongchau.com:9901/pcportal/api/3rd/';
//var uri = 'https://localhost:5001/api/3rd/';

function getItems() {
    document.getElementById('table-detail').innerHTML = "";
    var date = document.getElementById('birthday').value.replace('/','').replace('/','');
    fetch(uri + 'vaccination/' + date, { mode: "cors" })
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Error: ' + response.status);
                    return;
                }
                response.json().then(data => {
                    data.forEach(addDetail);
                })
            }
        )
        .catch(err => {
            console.log('Error: ', err)
        });
};

function showDetail(name) {
    fetch(uri + 'detail/' + name, { mode: "cors" })
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Error: ' + response.status);
                    return;
                }
                response.json().then(data => {
                    data.forEach(showVcDetail);
                })
            }
        )
        .catch(err => {
            console.log('Error: ', err)
        });
};

function addDetail(item, index, array) {
    var obj = Object.values(item);
    var html = '<tr>' + '<td>' + obj[0] + '</td><td>' + obj[1] + '</td><td>' + obj[2] + '</td></tr>';
    const table = document.getElementById("table-detail");
    table.innerHTML += html;
};

function showVcDetail(item, index, array){
    var obj = Object.values(item);
    const title = document.getElementById("modalTitle");
    title.innerHTML = obj[0];
    const body = document.getElementById("modalBody");
    body.innerHTML = obj[1];
    $("#modal").modal()
}
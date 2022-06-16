var uri = 'http://localhost:9839/api/3rd/vaccination/';

function getItems() {
    document.getElementById('table-detail').innerHTML = "";
    var date = document.getElementById('birthday').value.replace('/','').replace('/','');
    fetch(uri + date, { mode: "cors" })
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

function addDetail(item, index, array) {
    var obj = Object.values(item);
    var html = '<tr>' + '<td>' + obj[0] + '</td><td>' + obj[1] + '</td><td>' + obj[2] + '</td></tr>';
    const table = document.getElementById("table-detail");
    table.innerHTML += html;
};
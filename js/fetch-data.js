var uri = 'http://113.161.210.94:9001/pcportal/api/3rd/vaccination/23041991';

function getItems() {
    fetch(uri, {mode: "cors"})
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Error:: ' + response.status);
                    return;
                }
                response.json().then(data => {
                    console.log(data);
                })
            }
        )
        .catch(err => {
            console.log('Error: ', err)
        });
};

function showDetail(item) {
    alert(item);
}
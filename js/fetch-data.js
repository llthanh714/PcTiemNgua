var uri = 'http://113.161.210.94:9001/pcportal/api/3rd/vaccination/23041991';
function getItems() {
    fetch(uri, { mode: 'no-cors'})
        .then(function (response) {
            return response.text();
        })
        .then(function (text) {
            alert('text');
        })
        .catch(function (error) {
            alert(error);
        });
};
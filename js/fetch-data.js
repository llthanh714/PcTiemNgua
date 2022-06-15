var uri = 'http://113.161.210.94:9001/pcportal/api/3rd/vaccination/23041991';
function getItems() {
    alert(uri);
    fetch(uri)
        .then(response => response.json())
        .then(data => alert(data))
        .catch(error => console.error('Unable to get items.', error));
};
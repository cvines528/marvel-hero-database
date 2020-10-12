// Load database

function loadData() {
    // Create XHR Object
    var xhr = new XMLHttpRequest();
    // OPEN - type, url/file, async
    xhr.open('GET', 'sample.txt', true );

    // Optional - used for loaders
    /*
    xhr.onprogress = function() {
        console.log('readystate:', xhr.readyState)
    }
    */

    xhr.onload = function() {
        if(this.status == 200) {
            console.log(this.responseText);
        } else if(this.status = 404){

        }
    }

    xhr.onerror = function() {
        console.log('request error....');
    }

    // Sends Request
    xhr.send();
}
loadData()
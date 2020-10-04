
var connection=false;
var connect_timeout;
function connect_websocket() {
    
    if(connection.readyState != 1) {
        console.log("Trying to connect to websocket");
        connection = new WebSocket('ws://192.168.4.1:81/');
    }else{
        console.log("Tried to connect to websocket, but was already established", connection);
    }
    
    connection.onopen = function () {
        console.log("Connected to websocket");
        console.log("YES!");
        clearTimeout(connect_timeout);
    };
    connection.onerror = function (error) {
        checkWebsocketConnection()
        console.log('WebSocket Error ', error);
    };
    connection.onmessage = function (e) {
        console.log('Server: ', e.data);
    };
    connection.onclose = function () {
        checkWebsocketConnection();
        console.log('WebSocket connection closed');
        clearTimeout(connect_timeout);
        connect_timeout = setTimeout( () => { connect_websocket(); }, 100);
    };
}

setInterval ( () => {
    checkWebsocketConnection();
    
},500);

function checkWebsocketConnection() {
    if(connection.readyState == 1) {
        document.getElementById('point').style.display='block';
        document.getElementById('msgOverlay').style.display='none';
    }else{
        stopDriving();
        document.getElementById('msgOverlay').style.display='block';
        document.getElementById('point').style.display='none';
    }
}
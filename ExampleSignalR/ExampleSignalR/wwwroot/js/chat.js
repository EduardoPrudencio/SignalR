"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

//Disable send button until connection is established
document.getElementById("sendButton").disabled = true;

connection.on("ReceiveMessage", function (user, message) {
    var msg        = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var encodedMsg = user + " says... " + msg;
    var li         = document.createElement("li");
    li.textContent = encodedMsg;

    document.getElementById("messagesList").appendChild(li);
});

connection.start().then(function () {
    document.getElementById("sendButton").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

//document.getElementById("sendButton").addEventListener("click", function (event) {
//    var user    = document.getElementById("userInput").value;
//    //var message = document.getElementById("messageInput").value;
//    var message = new Date().toLocaleString();

//    connection.invoke("SendMessage", user, message).catch(function (err) {
//        return console.error(err.toString());
//    });

//    event.preventDefault();
//});


//var millisecondsToWait = 500;

//setTimeout(function () {

//    var user = document.getElementById("userInput").value;
//    var message = new Date().toLocaleString();

//    connection.invoke("SendMessage", user, message).catch(function (err) {
//        return console.error(err.toString());
//    });

//}, millisecondsToWait);

//var cont = 0;

//while (cont < 10)
{
    var user = document.getElementById("userInput").value;
    var message = new Date().toLocaleString();

    connection.invoke("SendMessage", user, message).catch(function (err) {
        return console.error(err.toString());
    });

  //  cont++;
}

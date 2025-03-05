
const button =document.getElementById("changeText");
button.addEventListener("click",function changeMessage() {
    let messageElement = document.getElementById('message');
    if (messageElement.innerText === "Hello, World!") {
        messageElement.innerText = "你好，世界！";
    } else {
        messageElement.innerText = "Hello, World!";
    }
 });


const apiUrl = "https://ync2h8yb78.execute-api.us-east-1.amazonaws.com/items";  // 替換為你的 API Key (如果 API 需要)
document.getElementById("mybutton").addEventListener("click", function() {
    fetch(apiUrl, {
        method: 'GET', // 或 'POST', 'PUT', 'DELETE' 等，取決於你的 API
        headers: {
            'Content-Type': 'application/json',
        },
        // 如果是 POST 或 PUT，請加上 body
        // body: JSON.stringify({ key1: 'value1', key2: 'value2' })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // 或 response.text() 取決於 API 的回應
    })
    .then(data => {
        console.log('Success:', data);
        document.getElementById("responseArea").textContent = JSON.stringify(data, null, 2); // 顯示格式化的 JSON
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById("responseArea").textContent = "Error: " + error;
    });
});
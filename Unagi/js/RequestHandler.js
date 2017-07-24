
fetch('http://192.168.43.24:3000/posts', {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        text: "hello server",
        location: "S:",
    })
  },
).then((response) => console.log(response))
.catch((error) => console.log("ERROR", error))
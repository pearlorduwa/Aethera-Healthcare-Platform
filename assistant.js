async function sendMessage() {

    const input = document.getElementById("message");
    const text = input.value;

    try {

        const response = await fetch("http://localhost:3000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: text
            })
        });

        const data = await response.json();

        console.log(data);

        addMessage(data.reply, "bot");

    } catch (err) {

        console.error(err);

        addMessage("Could not connect to the server.", "bot");

    }

}
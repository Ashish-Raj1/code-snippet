document.addEventListener("DOMContentLoaded", function() {
    const usernameForm = document.getElementById("usernameForm");

    usernameForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const language = document.getElementById("language").value;
        const code = document.getElementById("code").value;

        // Send username, language, and code to the server to store in the database
        fetch("/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, language, code })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Redirect to page2.html after storing the username, language, and code
            window.location.href = "/page2.html";
        })
        .catch(error => console.error("Error:", error));
    });
});

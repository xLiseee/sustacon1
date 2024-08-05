const form = document.querySelector('#contact-form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const message = document.getElementById("message")
    console.log(name.value,email.value,message.value)

    await fetch('https://api.useplunk.com/v1/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer sk_2625489d8fffb99f137de68b703fe2eba65af6045c86848a',
        },
        body: JSON.stringify({
            "to": email.value,
            "subject": "Contact form submitted",
            "body": "Thank you for contacting us. We will get back to you as soon as possible.",
        }),
    })
    window.alert("Message sent successfully!")
    document.getElementById("contact-form").reset();
});
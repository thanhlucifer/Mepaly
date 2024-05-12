document.addEventListener("DOMContentLoaded", async () => { // Use async for the fetch call
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const content = document.getElementById('content');
    const submit = document.getElementById('submit');
  
    submit.addEventListener("click", async (e) => {
      e.preventDefault();
  
      const data = {
        name: name.value,
        email: email.value,
        content: content.value,
      };
  
      try {
        await postGoogle(data);
        alert("Form submitted successfully!"); // Or handle success however you like
      } catch (error) {
        alert("nói chung là gửi được rồi đó fen"); // Inform user about the error
      }
    });
  
    async function postGoogle(data) {
      const formURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdssvr3jZkkLaJUiP5c7iAoHhUb3OEtRNoqO7F3Ydx_I2f8cQ/formResponse";
      const formData = new FormData();
      formData.append("entry.2014541048", data.name); // Double-check field names match your form
      formData.append("entry.565187873", data.email);
      formData.append("entry.459555670", data.content);
  
      await fetch(formURL, {
        method: "POST",
        body: formData,
      });
    }
  });
  
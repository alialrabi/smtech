document.getElementById("contact-form").addEventListener("submit", async function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  try {
    const res = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error("Request failed");

    document.querySelector(".sent-message").style.display = "block";
    document.querySelector(".error-message").style.display = "none";
  } catch (err) {
    document.querySelector(".error-message").innerText = "Failed to send message";
    document.querySelector(".error-message").style.display = "block";
  }
});
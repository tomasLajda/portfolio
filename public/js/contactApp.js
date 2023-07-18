const contactForm = document.querySelector(".contactForm");
let fullName = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = {
    name: fullName.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };

  if (fullName.value === "") {
    alert("You didn't write your name.");
    return;
  } else if (email.value === "") {
    alert("You didn't write message.");
    return;
  } else if (subject.value === "") {
    alert("You didn't write subject.");
    return;
  } else if (message.value === "") {
    alert("You didn't write message.");
    return;
  }

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == "success") {
      alert("Email sent😀");
      fullName.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";
    } else {
      alert("Something went wrong😢");
    }
  };

  xhr.send(JSON.stringify(formData));
});

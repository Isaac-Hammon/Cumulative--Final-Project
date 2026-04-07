const getResponse = await fetch("http://localhost:5173/testimonials")
const testimonialsJson = await getResponse.json();
console.log("testimonialsJson");
console.log(testimonialsJson);
const testimonialsList = document.querySelector("ul[name=testimonials_list");
for (let i = 0; i < testimonialsJson.length; i++) {
    const testimonial = testimonialsJson[i];
    //const { feedback, rating } = testimonial;
    const feedback = testimonial.feedback;
    const rating = testimonial.rating;

    const newLi = document.createElement("li");
    newLi.innerText = `Feedback: ${feedback}, Rating: ${rating}`;
    testimonialsList.appendChild(newLi);
}

const form = document.querySelector("form");
form.addEventListener("submit", async () => {
    e.preventDefault();
    const formData = new formData(form);
    const body = {
        Feedback: formData.get("feedback"),
        Rating: formData.get("rating"),
    }
    console.log("formData")
    console.log(formData.get("feedback"))
    console.log(formData.get("rating"))
   await fetch("http://localhost:5173/testimonials", {
    method: "post", 
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
   });
   location.reload();
})
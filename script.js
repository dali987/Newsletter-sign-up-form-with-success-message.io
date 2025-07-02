const form = document.getElementById('form');
const body = document.body;
const successCard = document.querySelector(".success");
const emailText = successCard.querySelector("span")
const dismisButton = successCard.querySelector("button")

const handleSubmit = (e) => {
    e.preventDefault(e);

    const data = Object.fromEntries(new FormData(e.target));
    const email = data.email;
    
    const result = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    if (result){
        emailText.textContent = email;
        body.classList.add("successful")
    }
    else{
        form.classList.add("error");
        setTimeout(() => {
            form.classList.remove("error");
        }, 3000);
    }
}

form.addEventListener("submit", handleSubmit);

dismisButton.addEventListener("click", (e) => {
    body.classList.remove("successful")
})

document.addEventListener('mousemove', e => { // for making the glow effect follow the cursor
    const target = e.target.closest('button');
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    target.style.setProperty('--x', `${x}px`);
    target.style.setProperty('--y', `${y}px`);
});
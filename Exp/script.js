function checkAnswersI() {

    const answers = {
        q1: "a", // main()
        q2: "a", // iostream
        q3: "b", // namespace std
        q4: "c", // cout
        q5: "c"  // return 0
    };

    let score = 0;

    for (let q in answers) {

        const selected =
        document.querySelector(
        `input[name="${q}"]:checked`
        );

        if (
            selected &&
            selected.value === answers[q]
        ) {
            score++;
        }
    }

    document.getElementById("result").innerHTML =
    `<strong>You scored ${score} out of 5</strong>`;
}

function checkAnswers1() {
    checkAnswersI();
}

const menuToggle =
document.getElementById('menuToggle');

const modalOverlay =
document.getElementById('modalOverlay');

const closeModal =
document.getElementById('closeModal');

if(menuToggle)
menuToggle.onclick = () => {
    modalOverlay.style.display = 'flex';
};

if(closeModal)
closeModal.onclick = () => {
    modalOverlay.style.display = 'none';
};

if(modalOverlay)
window.onclick = (event) => {
    if(event.target === modalOverlay)
        modalOverlay.style.display = 'none';
};

function checkAnswersI() {

  const correctAnswers = {
    q1: "a",
    q2: "c",
    q3: "b",
    q4: "b",
    q5: "b"
  };

  let score = 0;
  const total = Object.keys(correctAnswers).length;

  for (let key in correctAnswers) {

    document.querySelectorAll(`input[name="${key}"]`).forEach(option => {

      const label = option.parentElement;
      label.style.color = "";

      if (option.checked) {

        if (option.value === correctAnswers[key]) {
          label.style.color = "green";
          score++;
        } else {
          label.style.color = "red";
        }

      }
    });
  }

  document.getElementById("result").innerHTML =
    `You scored <strong>${score}</strong> out of <strong>${total}</strong>`;
}

function checkAnswers1() {
  checkAnswersI();
}

const menuToggle = document.getElementById('menuToggle');
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');

if (menuToggle)
  menuToggle.onclick = () => {
    modalOverlay.style.display = 'flex';
  };

if (closeModal)
  closeModal.onclick = () => {
    modalOverlay.style.display = 'none';
  };

if (modalOverlay)
  window.onclick = (event) => {
    if (event.target === modalOverlay)
      modalOverlay.style.display = 'none';
  };
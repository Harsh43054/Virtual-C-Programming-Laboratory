function checkAnswersI() {

  const correctAnswers = {
    q1: "a",
    q2: "c",
    q3: "c",
    q4: "b",
    q5: "d"
  };

  let score = 0;
  const total = Object.keys(correctAnswers).length;

  for (let key in correctAnswers) {

    document.querySelectorAll(`input[name="${key}"]`).forEach(option => {

      const label = option.parentElement;

      if (option.checked) {

        if (option.value === correctAnswers[key]) {
          label.style.color = "green";
          score++;
        } else {
          label.style.color = "red";
        }

      } else {
        label.style.color = "";
      }

    });
  }

  document.getElementById("result").innerText =
    `${score} out of ${total}`;
}

function checkAnswers1() {
  checkAnswersI();
}

/* Modal Menu */
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
    if (event.target === modalOverlay) {
      modalOverlay.style.display = 'none';
    }
  };
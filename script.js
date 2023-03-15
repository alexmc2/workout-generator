const exercises = [
  'Jumping jacks',
  'Push-ups',
  'Mountain climbers',
  'Squats',
  'Lunges',
  'Burpees',
  'High knees',
  'Plank',
  'Sit-ups',
  'Crunches'
];

let workout = [];

function generateWorkout() {
  workout = [];
  const exercise1 = exercises[Math.floor(Math.random() * exercises.length)];
  const exercise2 = exercises[Math.floor(Math.random() * exercises.length)];
  workout.push(exercise1, exercise2);
  document.getElementById('workout').textContent = workout.join(' and ');
}

let timerInterval;

function startTimer() {
  const countdown = document.getElementById('timer');
  let seconds = 120; // 2 minutes
  clearInterval(timerInterval); // clear any existing interval to avoid multiple instances of the timer running
  timerInterval = setInterval(() => {
    seconds--;
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    countdown.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    if (seconds === 0) {
      clearInterval(timerInterval);
      countdown.textContent = '00:00';
    }
  }, 1000);
}

const startTimerButton = document.getElementById('start-timer-button');
startTimerButton.addEventListener('click', startTimer);

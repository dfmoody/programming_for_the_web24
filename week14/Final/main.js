function calculateGoalPace(goalTime, raceValue) {
  let timeInSeconds = convertTimeToSeconds(goalTime);
  let pace;
  let label;

  if (raceValue === 800 || raceValue === 1600 || raceValue === 3200) {
    // For races 800m, 1600m, or 3200m, calculate pace per 400m
    pace = timeInSeconds / (raceValue / 400); // Calculate pace in seconds per 400m
    label = '';
  } else {
    // For races longer than 3200m, calculate pace per mile
    pace = timeInSeconds / (raceValue / 1609); // Calculate pace in seconds per mile
    label = '';
  }

  let minutes = Math.floor(pace / 60);
  let seconds = Math.round(pace % 60);
  return `${label} ${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function submitData() {
  // Retrieve input values
  let goalRace = document.getElementById('goalRace').value;
  let hours2 = document.getElementById('hours2').value;
  let minutes1 = document.getElementById('minutes1').value;
  let minutes2 = document.getElementById('minutes2').value;
  let seconds1 = document.getElementById('seconds1').value;
  let seconds2 = document.getElementById('seconds2').value;

  // Combine the selected values to form the time duration
  let goalTime = `${hours2}:${minutes1}${minutes2}:${seconds1}${seconds2}`;

  // Display the data fields
  displayData(goalRace, goalTime);
}

function getRaceValue(goalRace) {
  switch (goalRace) {
    case '800m':
      return 800;
    case '1600m':
      return 1600;
    case '3200m':
      return 3200;
    case '3 mile':
      return 4828;
    case '5k':
      return 5000;
    case '10k':
      return 10000;
    case 'Half Marathon':
      return 21097;
    case 'Marathon':
      return 42195;
    default:
      return null;
  }
}

function convertTimeToSeconds(time) {
  let [hours, minutes, seconds] = time.split(':').map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}
function calculateRaceEquivalency(goalRace, goalTime) {
  let baseValue;
  let timeInSeconds = convertTimeToSeconds(goalTime);

  switch (goalRace) {
    case '800m':
      baseValue = timeInSeconds * 7.755;
      break;
    case '1600m':
      baseValue = timeInSeconds * 3.495;
      break;
    case '3200m':
      baseValue = timeInSeconds * 1.602;
      break;
    case '3 mile':
        baseValue = timeInSeconds * 1.000;
        break;
    case '5k':
      baseValue = timeInSeconds * 0.967;
      break;
    case '10k':
      baseValue = timeInSeconds * 0.464;
      break;
    case 'Half Marathon':
      baseValue = timeInSeconds * 0.212;
      break;
    case 'Marathon':
      baseValue = timeInSeconds * 0.100;
      break;
    default:
      baseValue = null;
  }

  return baseValue;
}

// Section 2 of Data - Training Paces

function calculateTrainingPaces(baseValue) {
  let trainingPaces = [
    { label: 'ET Pace', length: 'per mile', value: secondsToTime(baseValue / 2.55) },
    { label: 'Marathon Pace', length: 'per mile', value: secondsToTime(baseValue / 2.62) },
    { label: 'Half Mara. Pace', length: 'per mile', value: secondsToTime(baseValue / 2.777) },
    { label: 'Threshold Pace', length: 'per mile', value: secondsToTime(baseValue / 2.82) },
    { label: 'Threshold Pace', length: 'per 1k', value: secondsToTime((baseValue / 2.82) * (1000 / 1600)) },
    { label: 'Threshold Pace', length: 'per 800m', value: secondsToTime((baseValue / 2.82) * (800 / 1600)) },
    { label: '10k Pace', length: 'per mile', value: secondsToTime(baseValue / 2.875) },
    { label: '10k Pace', length: 'per 800m', value: secondsToTime((baseValue / 2.82) * (800 / 1600)) },
    { label: '5k Pace', length: 'per mile', value: secondsToTime(baseValue / 3) },
    { label: '5k Pace', length: 'per 800m', value: secondsToTime((baseValue / 3) * (800 / 1600)) },
    { label: '3200m Pace', length: 'per 800m', value: secondsToTime((baseValue / 3.49) * 2.178 * (800 / 3200)) },
    { label: '3200m Pace', length: 'per 400m', value: secondsToTime((baseValue / 3.49) * 2.178 * (400 / 3200)) },
    { label: '1600m Pace', length: 'per 600m', value: secondsToTime((baseValue / 3.49) * (600 / 1600)) },
    { label: '1600m Pace', length: 'per 400m', value: secondsToTime((baseValue / 3.49) * (400 / 1600)) },
    { label: '800m Pace', length: 'per 300m', value: secondsToTime((baseValue / 3.49) * 0.45 * (300 / 800)) },
    { label: '800m Pace', length: 'per 200m', value: secondsToTime((baseValue / 3.49) * 0.45 * (200 / 800)) }
  ];

  return trainingPaces.map(({ label, length, value }) => ({
    label: `<span class="pace-label">${label}</span>`,
    length: `<span class="pace-length">${length}</span>`,
    value: `<span class="pace-value">${value}</span>`
  }));
}

function secondsToTime(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let secs = Math.floor(seconds % 60);

  let timeString = '';
  if (hours > 0) {
    timeString += `${hours}:`;
  }
  timeString += `${minutes}:${secs.toString().padStart(2, '0')}`;
  
  return timeString;
}

// Section 3 of Data - Predicted Race Times


function calculatePredictions(baseValue) {
  let predictions = [
    { label: 'Marathon', value: convertSecondsToTime((baseValue / 2.62) * 26.2) },
    { label: 'Half Mara.', value: convertSecondsToTime((baseValue / 2.777) * 13.1) },
    { label: '10k', value: convertSecondsToTime((baseValue / 2.875) * 6.2) },
    { label: '5k', value: convertSecondsToTime((baseValue / 3) * 3.1) },
    { label: '3 Mile', value: convertSecondsToTime(baseValue) },
    { label: '3200m', value: convertSecondsToTime((baseValue / 3.49) * 2.178) },
    { label: '1600m', value: convertSecondsToTime(baseValue / 3.49) },
    { label: '800m', value: convertSecondsToTime((baseValue / 3.49) * 0.45) }
  ];

  return predictions.map(({ label, value }) => ({
    label: `<span class="pace-label">${label}</span>`,
    value: `<span class="pace-value">${value}</span>`
  }));
}

function convertSecondsToTime(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let remainingSeconds = Math.round(seconds % 60);
  
  let timeString = '';
  if (hours > 0) {
    timeString += `${hours}:`;
  }
  if (minutes < 10) {
    timeString += `0${minutes}:`;
  } else {
    timeString += `${minutes}:`;
  }
  timeString += `${remainingSeconds.toString().padStart(2, '0')}`;
  
  return timeString;
}


function displayData(goalRace, goalTime) {
  let dataFieldsDiv = document.getElementById('data-fields');
  dataFieldsDiv.innerHTML = ''; // Clear previous data

  // Section 1: Goal Race, Goal Time, and Goal Pace
  let goalRaceDiv = document.createElement('div');
  goalRaceDiv.classList.add('grid-row', 'goal-race-section'); // Add class for styling
  dataFieldsDiv.appendChild(goalRaceDiv);

  let goalRaceItem = document.createElement('div');
  goalRaceItem.classList.add('grid-item', 'goalItems');
  goalRaceItem.innerHTML = `<strong>Goal Race:</strong> ${goalRace}`;
  goalRaceDiv.appendChild(goalRaceItem);

  let goalTimeItem = document.createElement('div');
  goalTimeItem.classList.add('grid-item', 'goalItems');
  goalTimeItem.innerHTML = `<strong>Goal Time:</strong> ${goalTime}`;
  goalRaceDiv.appendChild(goalTimeItem);

  let goalPace = calculateGoalPace(goalTime, getRaceValue(goalRace));
  let goalPaceItem = document.createElement('div');
  goalPaceItem.classList.add('grid-item', 'goalItems');
  goalPaceItem.innerHTML = `<strong>Goal Pace:</strong> ${goalPace}`;
  goalRaceDiv.appendChild(goalPaceItem);

  // Section 2: Training Paces
  let trainingPacesDiv = document.createElement('div');
  trainingPacesDiv.classList.add('grid-row', 'training-paces-section'); // Add class for styling
  dataFieldsDiv.appendChild(trainingPacesDiv);

  // Add Section 2 Heading
  let trainingPacesHeading = document.createElement('h2');
  trainingPacesHeading.textContent = 'Training Paces';
  trainingPacesDiv.appendChild(trainingPacesHeading);

  let trainingPacesData = document.createElement('div');
  trainingPacesData.classList.add('grid-row', 'training-paces-data'); // Add class for styling
  dataFieldsDiv.appendChild(trainingPacesData);

  let trainingPaces = calculateTrainingPaces(calculateRaceEquivalency(goalRace, goalTime));
  trainingPaces.forEach(trainingPace => {

  let trainingPaceItem = document.createElement('div');
  trainingPaceItem.classList.add('grid-item');
  trainingPaceItem.innerHTML = `<strong>${trainingPace.label}</strong> ${trainingPace.length} ${trainingPace.value}`;
  trainingPacesData.appendChild(trainingPaceItem);
  });

  // Section 3: Predicted Race Times
  let predictedRaceTimesDiv = document.createElement('div');
  predictedRaceTimesDiv.classList.add('grid-row', 'predicted-race-times-section'); // Add class for styling
  dataFieldsDiv.appendChild(predictedRaceTimesDiv);

  // Add Section 3 Heading
  let predictedRaceTimesHeading = document.createElement('h2');
  predictedRaceTimesHeading.textContent = 'Predicted Race Times';
  predictedRaceTimesDiv.appendChild(predictedRaceTimesHeading);

  let predictedRaceTimesData = document.createElement('div');
  predictedRaceTimesData.classList.add('grid-row','predicted-race-times-data'); 
  predictedRaceTimesDiv.appendChild(predictedRaceTimesData);

  let predictedRaceTimes = calculatePredictions(calculateRaceEquivalency(goalRace, goalTime));
  predictedRaceTimes.forEach(predictedRaceTime => {

  let predictedRaceTimeItem = document.createElement('div');
  predictedRaceTimeItem.classList.add('grid-item');
  predictedRaceTimeItem.innerHTML = `<strong>${predictedRaceTime.label}</strong> ${predictedRaceTime.value}`;
  predictedRaceTimesData.appendChild(predictedRaceTimeItem);
  });

  let additionalHeading = document.createElement('h3');
  additionalHeading.textContent = "HOW TO USE THE TRAINING PACES";
  dataFieldsDiv.appendChild(additionalHeading);

  let additionalText = document.createElement('h4');
  additionalText.textContent = "Training can be divided into four general workout types: Tempo, Threshold, Long Intervals, and Short Intervals.";
  dataFieldsDiv.appendChild(additionalText);

  let tempoText = document.createElement('h4');
  tempoText.textContent = "The first type is Tempo workouts.  Tempo workouts use ET (Efficiency Threshold), Marathon and Half Marathon paces and are typically done it lenths of 2-10 miles. These paces should feel like a controlled hard effort. Example workouts can be 3 x 2 miles @ Half Marathon pace with 5min rest in between reps, 5 miles continous at Marathon pace, or 2 x 4 miles at ET Pace with a half mile easy jog in-between.";
  dataFieldsDiv.appendChild(tempoText);

  let thresholdText = document.createElement('h4');
  thresholdText.textContent = "The second type is Threshold workouts.  Threshold workouts use Half Marathon and Threshold paces and are typically done in lengths of 800m-1 mile of length.  These paces should feel like the fastest effort that still feels controlled.  A key element to these workouts is that the rest between reps is always 60-90 seconds.  If the workout can't be accomplished with that rest the pace is too fast.  Example workouts can be 8 x 800m @ Threshold pace with 60-90 seconds rest or 4 x mile at Half Marathon Pace with 60-90seconds rest.";
  dataFieldsDiv.appendChild(thresholdText);

  let longintervalText = document.createElement('h4');
  longintervalText.textContent = "The third type is Long Interval workouts.  Long Intervals use 10k, 5k, and 2 Mile Paces and are typically done in lengths of 800m-1mile of length (or can be time based between 1min-6min).  These paces should feel like a strong effort and feel less controlled than the previous style workouts.  The key difference between Long Invtervals and Threshold workouts is the rest between reps.  Long Intervals are typically 2min-4min of rest in between allowing for the faster paces.  Example workouts can be 5 x 4min @ 10k pace with 2min easy jog in between, 6 x 1k @ 5k pace with 2min 30sec rest inbetween, or 4 x 800m at 2 mile pace with 3min rest inbetween.";
  dataFieldsDiv.appendChild(longintervalText);

  let shortintervalText = document.createElement('h4');
  shortintervalText.textContent = "The fourth type is Short Interval workouts.  Short Intervals use 2 Mile, Mile, and 800m Paces and are typically done in lengths of 200m-800m of length.  These paces should feel like a hard, fast effort and feel less controlled than the previous style workouts. Short Intervals are typically 2min-5min of rest in between allowing for the fastest paces.  Example workouts can be 2 sets of 4 x 400m at mile pace with 2min rest between reps and 5min rest between sets, 3 sets of 300, 200, or 200 @ 800m pace with 200m easy jog rest between reps and 5min rest between sets.";
  dataFieldsDiv.appendChild(shortintervalText);
}


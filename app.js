const progressBar = document.getElementById('progress');
const ProgressText = document.getElementById('Progress-Text');

function setProgress(percent) {
    const circumference = 251.327;
    const offset = circumference - (percent / 100) * circumference;
    progressBar.style.strokeDashoffset = offset;
    ProgressText.textContent = `${percent}%`;
};
setProgress(19);
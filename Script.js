const progressBar = document.querySelector('.progress');

function simulateVirusRemoval() {
    let width = 0;
    const intervalId = setInterval(() => {
        width += 5;
        progressBar.style.width = width + '%';
        if (width >= 100) {
            clearInterval(intervalId);
            alert('Virus removed successfully!');
        }
    }, 100);
}

simulateVirusRemoval();lp Kool.
  

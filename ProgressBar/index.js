const steps = document.querySelectorAll('.progress_step');
const progress = document.getElementById('progress');
const progressVal = document.getElementById('progress_value');

const posChange = (item) => {
    item.style.cssText = `left: calc(${item.children[1].innerHTML * progress.clientWidth / progress.max}px - .75rem);`;
};
const progressValueSet = () => {
    progress.value = progressVal.children[0].textContent;
    let position = progress.clientWidth * progress.value / progress.max - progressVal.clientWidth;
    if (position < 0) {
        return;
    }
    progressVal.style.left = position + 'px';
};

const renderProgressBar = () => {
    progressValueSet();
    steps.forEach((step) => {
        if (progress.value >= step.children[1].textContent) {
            step.children[0].style.backgroundColor = '#24A148';
        }
        posChange(step);
    });
};

// Необязательный момент, сам поймёшь почему
window.onresize = () => {
    renderProgressBar();
}

// Основной инструмент
// renderProgressBar()

// Чисто по фану))
const fun = () => {
    if (progressVal.children[0].textContent >= progress.max) {
        console.log('Stops!')
        return;
    }
    progressVal.children[0].innerHTML++;
    renderProgressBar();
    console.log('Done!')
    setTimeout(fun, 50);
};
fun();
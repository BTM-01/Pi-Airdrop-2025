const ConnectWindow = document.getElementById('ConnectWindowid');
const OpenBTN = document.getElementById('ConnectWalletBTN');
const CloseBTN =document.getElementById('CancelBTNid');

OpenBTN.addEventListener('click', openBoard1);
CloseBTN.addEventListener('click', closeBoard1);

function openBoard1() {
    ConnectWindow.classList.add('Open');
}

function closeBoard1() {
    ConnectWindow.classList.remove('Open');
}
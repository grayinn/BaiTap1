document.getElementById('random').onclick
= () => {
    const valueRandom =Math.random();
    const isCheckAttendance = !!Math.round(valueRandom);
    if(isCheckAttendance) {
        document.getElementsByTagName('h3') [0].innerText = "Có"

    } else {
        document.getElementsByTagName("h3") [0].innerText = "Không"
    }
}
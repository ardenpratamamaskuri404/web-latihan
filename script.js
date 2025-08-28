document.getElementById("checkButton").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const result = document.getElementById("result");

    if (name) {
        const khodam = chekKhodam(name);
        result.innerHTML = `Khodam Anda Adalah: <strong>${khodam}</strong>`;
    } else {
        result.innerHTML =
            '<span style="color: red;">Silahkan masukkan nama Anda!</span>';
    }
});

function chekKhodam(name) {
    const Khodams = [
        "monyet kayang",
        "pocong terbang",
        "macan kumbang",
        "kunti bogel",
        "tuyul botak",
        "orang-orangan sawah",
        "kuda poni",
        "bebek goyang",
        "buaya darat",
        "nene lampir",
        "kancut busuk",
        "macan tutul",
    ];
    const index = Math.floor(Math.random() * Khodams.length);
    return Khodams[index];
}

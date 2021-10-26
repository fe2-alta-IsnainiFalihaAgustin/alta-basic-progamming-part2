//full prima

function fullprime(angka) {
    let lenght = angka.toString().length;
    let strAngka = angka.toString();
    let arr = [];
    let hasil = " ";

    for (let i = 0; i <= lenght - 1; i++) {
        let bulat = parseInt(strAngka[i]);

        if (bulat % 2 === 0 && bulat !== 2) {
            arr.push("Tidak");
        } else if (bulat < 2) {
            arr.push("Tidak");
        } else {
            arr.push("Ya")
        }
    }

    function cocokologi(arr) {
        return arr === "Ya";
    }

    if (arr.every(cocokologi)) {
        hasil = "Ya";
    } else {
        hasil = "Tidak";
    }

    console.log(hasil);
}

fullprime(2)
fullprime(3)
fullprime(11)
fullprime(13)
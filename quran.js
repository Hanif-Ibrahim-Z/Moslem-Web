window.onload = function() {
    getDataQuran();
}

function getDataQuran() {
    fetch('https://api.banghasan.com/quran/format/json/surat')
    .then(function(response) {
        if (!response.ok) {
            throw new Error ('Gagal mengambil data')
        } else {
            return response.json();
        }
    })
    .then(function(data) {
        displayData(data);
    })
    .catch(function(error) {
        console.log('terjadi kesalahan', error);
    })
}

function displayData(data) {
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    data.hasil.forEach(function(surat) {
        let suratDiv = document.createElement('div');
        suratDiv.classList.add('kotak');

        let abuDiv = document.createElement('div');
        abuDiv.classList.add('kecil');

        let nomorSurat = document.createElement('button');
        nomorSurat.innerHTML = surat.nomor;
        nomorSurat.classList.add('nomor');

        let namaSurat = document.createElement('h3');
        namaSurat.innerHTML = surat.nama;
        namaSurat.classList.add('nama');

        let gambar = document.createElement('save');
        gambar.classList.add('save');

        let putihDiv = document.createElement('div');
        putihDiv.classList.add('sukses');

        let arabSurat = document.createElement('h2');
        arabSurat.innerHTML = surat.asma;
        arabSurat.classList.add('arab');

        let ayatSurat = document.createElement('p');
        ayatSurat.innerHTML = 'Ayat : ' + surat.ayat;
        ayatSurat.classList.add('ayat');

        let artiSurat = document.createElement('p');
        artiSurat.innerHTML = 'Arti : ' + surat.arti;
        artiSurat.classList.add('arti');

        let value = document.createElement('p');
        value.classList.add('line');

        suratDiv.appendChild(abuDiv);
        abuDiv.appendChild(nomorSurat);
        abuDiv.appendChild(namaSurat);
        // abuDiv.appendChild(gambar);
        suratDiv.appendChild(putihDiv);
        putihDiv.appendChild(arabSurat);
        putihDiv.appendChild(ayatSurat);
        putihDiv.appendChild(artiSurat);
        putihDiv.appendChild(value);

        resultDiv.appendChild(suratDiv);
    })
}
const city = 1301;
const date = new Date();
const dd = String(date.getDate()).padStart(2, "0"); //padstart itu buat didepan angka ada angka 0 jika digit kurang dari batas yang ditentukan
const mm = String(date.getMonth() + 1).padStart(2, "0");
const yyyy = date.getFullYear();

console.log(dd, mm, yyyy)

const now = yyyy + '-' + mm + '-' + dd;

// jadwal solat API

const jadwalAPI = `https://api.myquran.com/v1/sholat/jadwal/${city}/${yyyy}/${mm}`

fetch(jadwalAPI)
.then(function (response){
    if (!response.ok){
        throw new Error ("API DETECTION FAILED!")
    }else{
        
    }
    return response.json()
})
.then((data) => {
    const jadwal = data.data;
    const list = jadwal.jadwal;
    const listJadwal = document.getElementById('list-jadwal');
    const city = document.getElementById('city');
    const prov = document.getElementById('prov');

    city.innerHTML = jadwal.lokasi;
    prov.innerHTML = jadwal.daerah;

    // list.forEach((el) => {
    //     const tr = document.createElement("tr");

    //     // tanggal
    //     const dd = document.createElement("td")
    //     dd.innerText = el.tanggal;
    //     dd.classList.add("date");

    //     listJadwal.appendChild(tr);
    //     tr.appendChild(dd);
    // })
    list.forEach(el => {
        const tr = document.createElement('tr');
    
        if (el.date === now) {
            tr.classList.add('table-primary')
        }
        ['tanggal', 'imsak', 'subuh', 'terbit', 'dzuhur', 'ashar', 'maghrib', 'isya'].forEach(shalat => {
            const td = document.createElement('td');
            td.innerText = el[shalat];
    
            tr.appendChild(td);
        })
        document.getElementById('list-jadwal').appendChild(tr);
    })
})

function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    setTimeout(showTime, 1000);
}
showTime();
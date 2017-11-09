/*var buah = ['apel', 'mangga', 'jambu', 'jeruk', 'sirsak', 'pepaya', 'pisang', 'rambutan'];

console.log(buah[0]);
console.log(buah[4]);
buah[4] = 'durian';
console.log(buah[4]);

var person = {
    nama : 'uli',
    age : 22,
    address : 'cipadung-bandung',
    kucing: {
        nama: 'beno',
        teman: 'ucing abu'
    },
    emeng: ['beno', 'anak gumbal', 'gumbal', 'gumbil']
};

console.log(person.nama);
console.log(person.kucing.nama);
console.log(person.emeng[1]);*/

//latihan ambil data dari property
/*var quran = 
    {code : 200,
    status:"OK",
    data: {number:1,
            name :"\u0633\u0648\u0631\u0629 \u0627\u0644\u0641\u0627\u062a\u062d\u0629",
            englishName :"Al-Faatiha",
            englishNameTranslation :"The Opening",
            revelationType:"Meccan",
            numberOfAyahs:7,
            ayahs :[{number:1,
                    text:"\ufeff\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0670\u0646\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650",
                    numberInSurah:1,
                    juz:1, manzil :1, page :1, ruku :1, hizbQuarter :1, sajda :false},
                    {number :2, text :"\u0627\u0644\u0652\u062d\u064e\u0645\u0652\u062f\u064f \u0644\u0650\u0644\u0651\u064e\u0647\u0650 \u0631\u064e\u0628\u0651\u0650 \u0627\u0644\u0652\u0639\u064e\u0627\u0644\u064e\u0645\u0650\u064a\u0646\u064e",
                    numberInSurah:2,juz:1,manzil:1,page:1,ruku:1,hizbQuarter:1,sajda:false},
                    {number:3,text:"\u0627\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0670\u0646\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650",
                    numberInSurah:3,juz:1,manzil:1,page:1,ruku:1,hizbQuarter:1,sajda:false},
                    {number:4,text:"\u0645\u064e\u0627\u0644\u0650\u0643\u0650 \u064a\u064e\u0648\u0652\u0645\u0650 \u0627\u0644\u062f\u0651\u0650\u064a\u0646\u0650",
                    numberInSurah:4,juz:1,manzil:1,page:1,ruku:1,hizbQuarter:1,sajda:false},
                    {number:5,text:"\u0625\u0650\u064a\u0651\u064e\u0627\u0643\u064e \u0646\u064e\u0639\u0652\u0628\u064f\u062f\u064f \u0648\u064e\u0625\u0650\u064a\u0651\u064e\u0627\u0643\u064e \u0646\u064e\u0633\u0652\u062a\u064e\u0639\u0650\u064a\u0646\u064f",
                    numberInSurah:5,juz:1,manzil:1,page:1,ruku:1,hizbQuarter:1,sajda:false},
                    {number:6,text:"\u0627\u0647\u0652\u062f\u0650\u0646\u064e\u0627 \u0627\u0644\u0635\u0651\u0650\u0631\u064e\u0627\u0637\u064e \u0627\u0644\u0652\u0645\u064f\u0633\u0652\u062a\u064e\u0642\u0650\u064a\u0645\u064e",
                    numberInSurah:6,juz:1,manzil:1,page:1,ruku:1,hizbQuarter:1,sajda:false},
                    {number:7,text:"\u0635\u0650\u0631\u064e\u0627\u0637\u064e \u0627\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e \u0623\u064e\u0646\u0652\u0639\u064e\u0645\u0652\u062a\u064e \u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650\u0645\u0652 \u063a\u064e\u064a\u0652\u0631\u0650 \u0627\u0644\u0652\u0645\u064e\u063a\u0652\u0636\u064f\u0648\u0628\u0650 \u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650\u0645\u0652 \u0648\u064e\u0644\u064e\u0627 \u0627\u0644\u0636\u0651\u064e\u0627\u0644\u0651\u0650\u064a\u0646\u064e",
                    numberInSurah:7,juz:1,manzil:1,page:1,ruku:1,hizbQuarter:1,sajda:false}],
            edition:{identifier:"quran-simple",language:"ar",name:"Simple",englishName:"Simple",format:"text",type:"quran"}
        }
    }

console.log(quran.data.name);
/*console.log(quran.data.ayahs[0].text);
console.log(quran.data.ayahs[1].text);
console.log(quran.data.ayahs[2].text);
console.log(quran.data.ayahs[3].text);
console.log(quran.data.ayahs[4].text);
console.log(quran.data.ayahs[5].text);
console.log(quran.data.ayahs[6].text);*/

/*for (i = 0; i < quran.data.ayahs.length; i++) {
    console.log(quran.data.ayahs[i].text);
}*/

//contoh kondisi if
/*var nilai = 7;
if (nilai >= 8) {
    console.log("selamat anda lulus dengan nilai memuaskan");
}
else if (nilai>=6) {
    console.log("anda lulus dengan nilai pas-pasan");
}
else {
    console.log("belajar yang rajin ya");
}*/

//if conditional jam
/*var nilai = 17;

if (nilai >= 1 && nilai <=11) {
    alert("selamat pagi");
}
else if (nilai >= 12 && nilai <= 15) {
    alert("selamat siang");
}
else if (nilai >= 16 && nilai <= 18) {
    alert("selamat sore");
}
else if (nilai >= 19 && nilai <=24){
    alert("selamat malam"); 
}
else {
    alert("waktu tidak diketahui");
}*/

//latihan swicth case hari
/*var hari = 5;
switch (hari) {
    case 1:
        console.log("Senin");
        break;
    case 2:
        console.log("Selasa");
        break;
    case 3:
        console.log("Rabu");
        break;
    case 4:
        console.log("Kamis");
        break;
    case 5:
        console.log("Jumat");
        break;
    case 6:
        console.log("Sabtu");
        break;
    default:
        console.log("Minggu");
}

//latihan looping
var buah = ['apel', 'jeruk', 'mangga', 'delima'];

for (i = 0; i < buah.length; i++) {
    console.log(buah[i]);
}

//latihan function
function sapaan (nama) {
    return alert ("haloooo " + nama );
}

sapaan("uli")*/

//latihan event
var btnGreet = document.getElementById("greet");
btnGreet.addEventListener('click', function () {
    var name = document.getElementById('nama').value;
    var surel = document.getElementById('alamat_email').value;
    alert ("hallooo " + name + " ini alamat email " + surel);
})
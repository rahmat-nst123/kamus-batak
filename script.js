const kataList = [
  { kata: "Horas", arti: "Salam sejahtera", contoh: "Horas, apa kabar?" },
  { kata: "Bagas", arti: "Anak laki-laki", contoh: "Bagas sedang bermain di luar." },
  { kata: "Tondi", arti: "Roh jiwa", contoh: "Tondi seseorang tidak bisa dilihat, tapi ada di dalam dirinya." }
];

const kamusContainer = document.getElementById("kamus");
const searchInput = document.getElementById("search");

function tampilkanKata(kataListFiltered) {
  kamusContainer.innerHTML = "";
  kataListFiltered.forEach(item => {
    const div = document.createElement("div");
    div.className = "kata";
    div.innerHTML = `
      <h3>${item.kata}</h3>
      <p><strong>Arti:</strong> ${item.arti}</p>
      <p><em>Contoh:</em> "${item.contoh}"</p>
    `;
    kamusContainer.appendChild(div);
  });
}

searchInput.addEventListener("input", function() {
  const keyword = this.value.toLowerCase();
  const filtered = kataList.filter(item => item.kata.toLowerCase().includes(keyword));
  tampilkanKata(filtered);
});

tampilkanKata(kataList); // tampilkan semua kata di awal

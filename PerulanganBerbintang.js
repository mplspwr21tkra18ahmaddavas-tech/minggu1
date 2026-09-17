let n = 5;

// ==========================================
// 1. Segitiga Siku-Siku Kiri
// ==========================================
console.log("1. Segitiga Siku-Siku Kiri");
for (let i = 1; i <= n; i++) {
  // Baris ke-i mencetak bintang sebanyak i kali
  console.log("*".repeat(i));
}

console.log("\n"); // Jarak antar pola

// ==========================================
// 2. Segitiga Siku-Siku Terbalik
// ==========================================
console.log("2. Segitiga Siku-Siku Terbalik");
for (let i = n; i >= 1; i--) {
  // Perulangan mundur dari n ke 1
  console.log("*".repeat(i));
}

console.log("\n");

// ==========================================
// 3. Segitiga Sama Sisi (Piramida)
// ==========================================
console.log("3. Segitiga Sama Sisi (Piramida)");
for (let i = 1; i <= n; i++) {
  // Membutuhkan spasi di awal agar bentuknya simetris di tengah
  let spasi = " ".repeat(n - i);
  let bintang = "*".repeat(2 * i - 1);
  console.log(spasi + bintang);
}

console.log("\n");

// ==========================================
// 4. Belah Ketupat (Diamond)
// ==========================================
console.log("4. Belah Ketupat (Diamond)");
let nDiamond = 3;

// Bagian Atas Diamond
for (let i = 1; i <= nDiamond; i++) {
  console.log(" ".repeat(nDiamond - i) + "*".repeat(2 * i - 1));
}
// Bagian Bawah Diamond
for (let i = nDiamond - 1; i >= 1; i--) {
  console.log(" ".repeat(nDiamond - i) + "*".repeat(2 * i - 1));
}

console.log("\n");

// ==========================================
// 5. Persegi / Kotak Kosong (Hollow Square)
// ==========================================
console.log("5. Persegi Kosong");
for (let i = 1; i <= n; i++) {
  // Garis paling atas dan bawah diisi bintang penuh
  if (i === 1 || i === n) {
    console.log("*".repeat(n));
  } else {
    // Baris tengah hanya mencetak bintang di ujung kiri dan kanan
    console.log("*" + " ".repeat(n - 2) + "*");
  }
}

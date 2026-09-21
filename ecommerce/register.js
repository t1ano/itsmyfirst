const password = document.getElementById("password");
const viewpass = document.getElementById("viewpass");

viewpass.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        viewpass.textContent = "Sembunyikan";
    } else {
        password.type = "password";
        viewpass.textContent = "Lihat";
        }
});


const born = document.getElementById("born");
const phone = document.getElementById("nomortelepon");
const bornError = document.getElementById("born-error");
const phoneError = document.getElementById("phone-error");

// Validasi tanggal lahir
// Maksimal tanggal yang diperbolehkan adalah kemarin
const today = new Date();
today.setDate(today.getDate() - 1);

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

born.max = `${year}-${month}-${day}`;

born.addEventListener("change", () => {
    if (born.value && born.value > born.max) {
        bornError.textContent =
            "Tanggal lahir tidak boleh hari ini atau tanggal mendatang.";

        born.value = "";
    } else {
        bornError.textContent = "";
    }
});

// Validasi nomor telepon
phone.addEventListener("input", () => {
    const value = phone.value;

    if (value === "") {
        phoneError.textContent = "";
        return;
    }

    if (!value.startsWith("+62")) {
        phoneError.textContent = "Nomor telepon harus diawali dengan +62.";
    } else if (!/^\+62\d+$/.test(value)) {
        phoneError.textContent =
            "Setelah +62, masukkan angka saja.";
    } else {
        phoneError.textContent = "";
    }
});
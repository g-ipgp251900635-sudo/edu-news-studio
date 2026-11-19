# EDU-NEWS STUDIO

Fail website: `index.html`, `style.css`, `script.js`. Backend Google Drive: `Code.gs`.

## GitHub Pages
Muat naik tiga fail website ke root repository. Di GitHub, buka Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save. Tunggu URL Pages. HTTPS diperlukan untuk kamera/mikrofon.

## Google Drive upload setup
1. Buka https://script.google.com/ dan cipta projek baharu.
2. Tampal kandungan `Code.gs`, simpan.
3. Deploy → New deployment → Web app.
4. Execute as: Me. Tetapkan akses mengikut polisi sekolah (contohnya Anyone jika dibenarkan).
5. Benarkan kebenaran akses Google Drive.
6. Salin URL Web App yang berakhir dengan `/exec`.
7. Dalam `script.js`, gantikan `PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE` dengan URL tersebut.
8. Commit perubahan `script.js` ke GitHub.

Folder ID dan video telah dimasukkan berdasarkan pautan yang diberikan. Had rakaman versi ini 15 MB. Uji satu rakaman pendek dahulu. Polisi Google Workspace sekolah mungkin mengehadkan akses Web App.

const fs = require('fs');
const path = require('path');

function tambahPesan(pesan) {
	const filePesan = path.join(__dirname, 'pesan.json');
	const pesanArray = pesan;

	if (pesanArray.length > 32) {
		pesanArray.splice(2, 2);
	}

	const jsonContent = JSON.stringify(pesanArray, null, 2);

	fs.writeFile(filePesan, jsonContent, 'utf8', (err) => {
		if (err) {
			console.error('Gagal menulis pesan ke file pesan.json:', err);
		}
		else {
			console.log('Pesan baru berhasil ditulis ke file pesan.json');
		}
	});
}

module.exports = { tambahPesan };

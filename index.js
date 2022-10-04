window.jsPDF = window.jspdf.jsPDF;
var qrcode;

function generate() {
	qrcode = new QRCode(document.getElementById("qrcode"), {
        text: "http://jindo.dev.naver.com/collie",
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    })
}

function printPDF() {
	const doc = new jsPDF({
        orientation: "landscape",
        unit: "in",
        format: [84, 40]
      });
      const base64Image = $('#qrcode img').attr('src');
    doc.addImage(base64Image, 'JPEG', 0, 0, 40, 40)
    doc.save('generated.pdf')
}

$('#generate').click(generate);
$('#savepdf').click(printPDF);

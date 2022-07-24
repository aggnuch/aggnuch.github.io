import { jsPDF } from "jspdf";

const ria = new jsPDF({
	orientation: "portrait",
	unit: "in",
	format: [8.5,11]
});

function bark() {
	ria.text("Bruh",1,1);
	ria.save("awit.pdf");
}

takbo = true;
bilang = 0;
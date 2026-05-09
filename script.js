// ====================form popup for cv download====================
function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Form submit handle
document.getElementById("cvForm").addEventListener("submit", function(e) {

  // Wait thoda so Formspree ko submit ho jaaye
  setTimeout(() => {
    // CV Download
    let link = document.createElement("a");
    link.href = "cv.pdf";  // apna CV file
    link.download = "My-CV.pdf";
    link.click();

    closePopup();
  }, 1000);
});

// ============================================================


      //======== tiny slider for slider-items-active===============================
      tns({
         autoplay: true,
         autoplayButtonOutput: false,
         mouseDrag: true,
         gutter: 0,
         container: ".slider-items-active",
         center: false,
         nav: true,
         navPosition: "bottom",
         controls: false,
         speed: 400,
         controlsText: [
            '<i class="lni lni-arrow-left-circle"></i>',
            '<i class="lni lni-arrow-right-circle"></i>',
         ],
         responsive: {
            0: {
               items: 1,
            },

            768: {
               items: 2,
            },
            992: {
               items: 3,
            },
         },
      });
   
// ===================================

// ==================form for booking appointment=======================

// Popup open/close
function openAppointmentPopup() {
  document.getElementById("appointPopup").style.display = "flex";
}

function closeAppointmentPopup() {
  document.getElementById("appointPopup").style.display = "none";
}

// Prevent past date
let today = new Date().toISOString().split("T")[0];
document.getElementById("appDate").setAttribute("min", today);

// Submit function
function submitAppointment() {
  let name = document.getElementById("appName").value;
  let phone = document.getElementById("appPhone").value;
  let date = document.getElementById("appDate").value;
  let time = document.getElementById("appTime").value;
  let issue = document.getElementById("appIssue").value;

  if (!name || !phone || !date || !time) {
    alert("Please fill all required fields");
    return;
  }

  let message = `🩺 *New Appointment*
👤 Name: ${name}
📞 Phone: ${phone}
📅 Date: ${date}
⏰ Time: ${time}
📝 Issue: ${issue}`;

  // ⚠️ YAHAN APNA NUMBER DAALO (without +)
  let whatsappURL = `https://wa.me/919901840019?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");

  closeAppointmentPopup();
}



// =======================video =======================
const videos = document.querySelectorAll("video");
const buttons = document.querySelectorAll(".play-btn");

buttons.forEach((btn, index) => {

  btn.addEventListener("click", () => {

    const currentVideo = videos[index];

    // Pause all videos first
    videos.forEach((vid, i) => {
      if (i !== index) {
        vid.pause();
        buttons[i].textContent = "▶";
      }
    });

    // Toggle play/pause
    if (currentVideo.paused) {
      currentVideo.play();
      btn.textContent = "❚❚";
    } else {
      currentVideo.pause();
      btn.textContent = "▶";
    }
  });

});














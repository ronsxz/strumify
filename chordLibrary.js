const filterButtons = document.querySelectorAll(".filter-link");
const chords = document.querySelectorAll(".chord-card");

// FILTER SYSTEM
filterButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.textContent.trim().toLowerCase();

        chords.forEach(card => {

            const type = card.getAttribute("data-type");

            if (filter === "all") {
                card.style.display = "block";
            }
            else {
                card.style.display = (type === filter) ? "block" : "none";
            }

        });

    });

});

// MODAL
function openChordModal(title, image, code, songs) {

    document.getElementById("chordModal").style.display = "flex";
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalImage").src = image;
    document.getElementById("modalCode").innerText = code;

    let songList = document.getElementById("songList");
    songList.innerHTML = "";

    songs.forEach(song => {
        songList.innerHTML += `<li>🎵 ${song}</li>`;
    });

}

function closeChordModal() {
    document.getElementById("chordModal").style.display = "none";
}

window.onclick = function(e) {
    let modal = document.getElementById("chordModal");
    if (e.target == modal) modal.style.display = "none";
}
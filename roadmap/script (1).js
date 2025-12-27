const overlay = document.getElementById("roadmapOverlay");
const pathGlow = document.getElementById("path-glow");
const phases = document.querySelectorAll(".phase");

function toggleRoadmap() {
  overlay.classList.toggle("active");
}

// Initialize SVG path
const pathLength = pathGlow.getTotalLength();
pathGlow.style.strokeDasharray = pathLength;
pathGlow.style.strokeDashoffset = pathLength;

overlay.addEventListener("scroll", () => {
  // 1. Update Glowing Path
  const scrollHeight = overlay.scrollHeight - overlay.clientHeight;
  const scrollPercent = overlay.scrollTop / scrollHeight;
  const draw = pathLength * scrollPercent;
  pathGlow.style.strokeDashoffset = pathLength - draw;

  // 2. Activate Phases on Scroll
  phases.forEach((phase) => {
    const phaseTop = phase.getBoundingClientRect().top;
    if (phaseTop < window.innerHeight * 0.75) {
      phase.classList.add("active");
    } else {
      phase.classList.remove("active");
    }
  });
});

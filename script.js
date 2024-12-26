const barbutton = document.querySelector('.iconbutton');
const icon = barbutton.querySelector('i');
const newIconText = document.createElement("span");
newIconText.textContent = "X";
const sections = document.querySelectorAll('.main-section');
const viewportWidth = window.innerWidth;
const Body = document.getElementsByTagName('body');
sections[1].style.display="none";

barbutton.onclick = () => {
    if (barbutton.contains(icon)) {
        barbutton.removeChild(icon);
        barbutton.appendChild(newIconText);
        toggleSections(1, 0); // Show section1, hide section2
    } else {
        barbutton.removeChild(newIconText);
        barbutton.appendChild(icon);
        toggleSections(0, 1); // Show section2, hide section1
    }
};
// 51 45 51
const toggleSections = (showIndex, hideIndex) => {

    sections[showIndex].style.display = "block";
    sections[hideIndex].style.display = "none";
     if(viewportWidth>960){
        sections[0].style.display ="none";
     }
};

const animationBox = document.querySelector('.animationbox1');
const animationBox2 = document.querySelector('.animationbox2');
let lastScrollTop = 0; // Keeps track of the last scroll position for direction detection
const animationList = document.querySelector('.list-container-ul')

window.addEventListener('scroll', () => {
  // Calculate the current scroll position
  const currentScroll = window.scrollY;

  // Calculate the shift based on scroll amount
  const shiftAmount = currentScroll * 0.150; // Adjust multiplier for desired speed

  // Translate the box based on the calculated shift amount
  animationBox.style.transform = `translateX(${shiftAmount}px)`;
  animationBox2.style.transform = `translateX(${-shiftAmount}px)`;
  animationList.style.transform = `translateX(${shiftAmount}px)`;
  animationList.style.transform = `translateX(${-shiftAmount}px)`;

  // Update the last scroll position for the next event
  lastScrollTop = currentScroll;
});

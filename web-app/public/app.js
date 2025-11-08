const toggleDance = kitty => kitty.classList.toggle('dancing');

document.querySelectorAll('.kitty').forEach(kitty => {
  kitty.addEventListener('click', () => toggleDance(kitty));
});

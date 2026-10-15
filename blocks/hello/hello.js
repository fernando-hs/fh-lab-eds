export default function decorate(block) {
  const rows = [...block.children];
  block.classList.add('fh-hello');
  const note = document.createElement('p');
  note.textContent = `Authored rows: ${rows.length}`;
  block.append(note);
}

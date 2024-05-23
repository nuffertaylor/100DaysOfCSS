const divOverlap = (rect1, rect2) =>
  !(rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom);


const main = () => {
let curFrame = 0;
let lastMovementFrame = 0;
setInterval(() => {curFrame++;}, 33);
const cover = document.getElementById("cover");
const frame = document.getElementById("frame");
const boundingRect = frame.getBoundingClientRect();

const rows = []; // arr of bounding rects
for(let i = 0; i < 20; i++) {
const linerow = document.createElement('div');
linerow.classList.add("line-row");
linerow.innerHTML = `

  <div class="line left"></div>
  <div class="line right">
</div>
`;
frame.appendChild(linerow);
rows.push({linerow: linerow, boundingRect: 
  linerow.getBoundingClientRect()});
}

const moveEventHandler = (event) => {
// only update once every 33ms
if (lastMovementFrame === curFrame) { return; }
const coverBoundingRect = cover.getBoundingClientRect();
for (const row of rows) {
  if (divOverlap(coverBoundingRect, row.boundingRect)) {
    row.linerow.classList.add("close");
  } else {
    row.linerow.classList.remove("close");
  }
}
// -50 to center mouse
// -boundingRect to maintain center relative to game div
// Math.min to bound to right and bottom
// Math.max to bound to left and top
cover.style.left =
  Math.min(
    Math.max(event.pageX - 50 - boundingRect.left, -50),
    boundingRect.width - 50
  ).toString() + "px";
cover.style.top =
  Math.min(
    Math.max(event.pageY - 50 - boundingRect.top, 0),
    boundingRect.height - 100
  ).toString() + "px";
};

frame.addEventListener("mousemove", moveEventHandler);




};




main();
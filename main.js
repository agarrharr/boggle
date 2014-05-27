$(function() {
  board.initialize({boardWidth: 500, padding: 5, tilesPerSide: 5});
  board.createSvg();
  board.drawBackground();
  board.drawBoard();
});
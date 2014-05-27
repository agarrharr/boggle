var board = function() {
  var tileLocations = [];
  var boardWidth;
  var tilesPerSide;
  var padding;
  var pieceWidth;
  var svg;

  var initialize = function(options) {
    if(typeof options === 'undefined') { options = {}; }
    if(typeof options.boardWidth === 'undefined') { options.boardWidth = 100; }
    if(typeof options.padding === 'undefined') { options.padding = 5; }
    if(typeof options.tilesPerSide === 'undefined') { options.tilesPerSide = 4; }

    boardWidth = options.boardWidth;
    tilesPerSide = options.tilesPerSide;
    padding = options.padding;
    pieceWidth = (boardWidth - (padding * (options.tilesPerSide + 1))) / options.tilesPerSide;
    setBoard();
  };

  var setBoard = function() {
    var row;
    for(var i = 0; i < tilesPerSide; i++) {
      row = [];
      for(var j = 0; j < tilesPerSide; j++) {
        row.push(getRandomValue());
      }
      tileLocations.push(row);
    }
  };

  var getRandomValue = function() {
    return random(1, 2);
  };

  var random = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var drawBoard = function() {
    for(var i = 0; i < tileLocations.length; i++) {
      for(var j = 0; j < tileLocations[i].length; j++) {
        drawTile({x: j, y: i});
      }
    }
  };

  var drawTile = function(location) {
    var rect = svg.append('rect')
      .style('fill', 'red')
      .attr('x', getLocation(location.x))
      .attr('y', getLocation(location.y))
      .attr('width', pieceWidth)
      .attr('height', pieceWidth);

    rect.append('text')
      .attr('x', getLocation(location.x))
      .attr('y', getLocation(location.y))
      .text('hi asdf asdf sdaf asd fsa dfsa df asdf sdf sdf sd f');
  };

  var drawBackground = function() {
    var background = svg.append('rect')
      .attr('width', '100%')
      .attr('height', '100%')
      .style('fill', '#bbada0');

    for(var i = 0; i < tilesPerSide; i++) {
      for(var j = 0; j < tilesPerSide; j++) {
        svg.append('rect')
          .attr('x', getLocation(i))
          .attr('y', getLocation(j))
          .attr('width', pieceWidth)
          .attr('height', pieceWidth)
          .style('fill', 'rgba(238, 228, 218, 0.35)');
      }
    }
  };

  var createSvg = function() {
    svg = d3.select('body')
      .append('svg')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', boardWidth)
      .attr('height', boardWidth);
  };

  var getLocation = function(position) {
    return ((position + 1) * padding) + (position * pieceWidth);
  };

  var public = {
    initialize: initialize,
    createSvg: createSvg,
    drawBackground: drawBackground,
    drawBoard: drawBoard
  };

  public._private = {
  };

  return public;
}();
// function range(a, b) {
//   var array = []
//    for (var i = a; i<=b; i++)
//    array.push(i);
// return array;
// }
//
// function sum(range) {
//   var sum = 0;
//     for(i = 0; i <= range.length; i++)
//       sum += i;
//   return sum;
// }
//
//
//
// // console.log(range(1, 10));
// console.log(sum(range(1, 10)));
// // console.log(range(5, 2, -1));

function rowHeights(rows) {
  return rows.map(function (row) {
    return row.reduce(function (max, call) {
      return Math.max(max, call.minHeight());
    }, 0);
  });
}

function colWidths(rows) {
  return rows[0].map(function (_, i) {
    return rows.reduce(function (max, row) {
      return Math.max(max, row[i].minWidth());
    }, 0);
  });
}

function drawTable(rows) {
  var heights = rowHeights(rows);
  var widths = colWidths(rows);

  function drawLine(blocks, lineNo) {
    return blocks.map(function (block) {
      return block[lineNo];
    }).join(" ");
  }

  function drawRow(row, rowNum) {
    var blocks = row.map(function (cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum]);
    });
    return blocks[0].map(function (_, lineNo) {
      return drawLine(blocks, lineNo);
    }).join("\n");
  }
  return rows.map(drawRow).join("\n");
}

function repeat(string, times) {
  var result = "";
  for (var i = 0; i < times; i++)
    result += string
  return result;

}

function TextCell(text) {
  this.text = text.split("\n");
}

TextCell.prototype.minWidth = function () {
  return this.text.reduce(function (width, line) {
    return Math.max(width, line.length)
  }, 0);
}

TextCell.prototype.minHeight = function () {
  return this.text.length
};

TextCell.prototype.draw = function (width, height) {
  var result = [];
  for (let i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
}

var rows = [];
for (let i = 0; i < 5; i++) {
  var row = [];
  for (let j = 0; j < 5; j++) {
    if ((j + i) % 2 == 0)
      row.push(new TextCell("##"));
    else
      row.push(new TextCell("  "));
  }
  rows.push(row);
}
console.log(drawTable(rows));
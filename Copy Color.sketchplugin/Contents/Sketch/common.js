//转化成 Objective-C 颜色代码
function getColorWithObjCStyle(color) {

    var colorStr = String(color);
    colorStr = colorStr.replace('r:', '');
    colorStr = colorStr.replace('g:', '');
    colorStr = colorStr.replace('b:', '');
    colorStr = colorStr.replace('a:', '');
    colorStr = colorStr.replace('(', '');
    colorStr = colorStr.replace(')', '');

    var color_array = colorStr.split(" ");

    var red = color_array[0];
    var green = color_array[1];
    var blue = color_array[2];
    var alpha = color_array[3];

    return "[UIColor colorWithRed:" + red + " green:" + green + " blue:" + blue + " alpha:" + alpha + "];";
}

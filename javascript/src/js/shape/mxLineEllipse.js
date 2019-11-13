function mxLineEllipse() {
    mxEllipse.call(this);
};
mxUtils.extend(mxLineEllipse, mxEllipse);
mxLineEllipse.prototype.paintVertexShape = function (c, x, y, w, h) {
    mxEllipse.prototype.paintVertexShape.apply(this, arguments);

    c.setShadow(false);
    c.begin();

    if (mxUtils.getValue(this.style, 'line') == 'vertical') {
        c.moveTo(x + w / 2, y);
        c.lineTo(x + w / 2, y + h);
    } else {
        c.moveTo(x, y + h / 2);
        c.lineTo(x + w, y + h / 2);
    }

    c.end();
    c.stroke();
};

// mxCellRenderer.registerShape('lineEllipse', mxLineEllipse);

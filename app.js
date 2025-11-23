const fs = require('fs');
const input = require('./input/input.json');
const output = 'output/output.svg'

function object(label, size, color, y1, y2) {
    return `<text x="200" y="${y1}" font-size="26" text-anchor="end" fill="black" font-family="Arial, sans-serif">${label}</text>
        <rect x="210" y="${y2}" width="${size}" height="40" fill="${color}"/>
        <text x="1300" y="${y1}" font-size="28" text-anchor="start" fill="black" font-family="Arial, sans-serif">${size}</text>`
}

function content() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
    <rect width="1600" height="900" fill="${input.Backgorund}"/>

    <text x="800" y="120" text-anchor="middle" font-size="48" font-weight="bold" fill="${input.Title.color}" font-family="Arial, sans-serif">
        ${input.Title.text}
    </text>

    <g>
        ${object(input.line1.label, input.line1.size, input.line1.color, 360, 330)}

        ${object(input.line2.label, input.line2.size, input.line2.color, 420, 390)}

        ${object(input.line3.label, input.line3.size, input.line3.color, 480, 450)}

        ${object(input.line4.label, input.line4.size, input.line4.color, 540, 510)}

        ${object(input.line5.label, input.line5.size, input.line5.color, 600, 570)}
    </g>
</svg>`
}

fs.writeFileSync(output, content())
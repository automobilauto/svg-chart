const fs = require('fs');
const input = require('./input/input.json');
const output = 'output/output.svg'

function content() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
    <rect width="1600" height="900" fill="${input.Backgorund}"/>

    <text x="800" y="120" text-anchor="middle" font-size="48" font-weight="bold" fill="${input.Title.color}" font-family="Arial, sans-serif">
        ${input.Title.text}
    </text>

    <g>
        <text x="200" y="360" font-size="26" text-anchor="end" fill="black" font-family="Arial, sans-serif">${input.line1.label}</text>
        <rect x="210" y="330" width="${input.line1.size}" height="40" fill="${input.line1.color}"/>
        <text x="1300" y="360" font-size="28" text-anchor="start" fill="black" font-family="Arial, sans-serif">${input.line1.size}</text>

        <text x="200" y="420" font-size="26" text-anchor="end" fill="black" font-family="Arial, sans-serif">${input.line2.label}</text>
        <rect x="210" y="390" width="${input.line2.size}" height="40" fill="${input.line2.color}"/>
        <text x="1300" y="420" font-size="28" text-anchor="start" fill="black" font-family="Arial, sans-serif">${input.line2.size}</text>

        <text x="200" y="480" font-size="26" text-anchor="end" fill="black" font-family="Arial, sans-serif">${input.line3.label}</text>
        <rect x="210" y="450" width="${input.line3.size}" height="40" fill="${input.line3.color}"/>
        <text x="1300" y="480" font-size="28" text-anchor="start" fill="black" font-family="Arial, sans-serif">${input.line3.size}</text>

        <text x="200" y="540" font-size="26" text-anchor="end" fill="black" font-family="Arial, sans-serif">${input.line4.label}</text>
        <rect x="210" y="510" width="${input.line4.size}" height="40" fill="${input.line4.color}"/>
        <text x="1300" y="540" font-size="28" text-anchor="start" fill="black" font-family="Arial, sans-serif">${input.line4.size}</text>

        <text x="200" y="600" font-size="26" text-anchor="end" fill="black" font-family="Arial, sans-serif">${input.line5.label}</text>
        <rect x="210" y="570" width="${input.line5.size}" height="40" fill="${input.line5.color}"/>
        <text x="1300" y="600" font-size="28" text-anchor="start" fill="black" font-family="Arial, sans-serif">${input.line5.size}</text>
    </g>
</svg>`
}

fs.writeFileSync(output, content())
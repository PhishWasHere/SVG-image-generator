const svgList = [
    {
        circle: `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="{{color}}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">{{name}}</text>
  
  </svg>`
    },

    {
        square: `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect x="90" y="40" width="120" height="120" fill="{{color}}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="#444">{{name}}</text>
  
  </svg>`
    },

    {
        triangle: `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150, 18 244, 182 56, 182" fill="{{color}}" />
  
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="#3a0467">{{name}}</text>
  
  </svg>`
    },
]
const getSvg = (chosenShape, answers) => {
    const shape = shapes[chosenShape];
    const svgFile = shape
      .replace('{{name}}', answers.name)
      .replace('{{color}}', answers.color);
};

module.exports = svgList;
function genSVG(answer) {

  if (answer.shape === 'circle') {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      <circle cx="150" cy="100" r="80" fill="${answer.color}" />
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${answer.name}</text>
    
    </svg>`;
  }

  if (answer.shape === 'square') {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      <rect x="90" y="40" width="120" height="120" fill="${answer.color}" />
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="#444">${answer.name}</text>
    
    </svg>`;
  }

  if (answer.shape === 'triangle') {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      <polygon points="150, 18 244, 182 56, 182" fill="${answer.color}" />
    
      <text x="150" y="150" font-size="60" text-anchor="middle" fill="#3a0467">${answer.name}</text>
    
    </svg>`;
  }

}

module.exports = genSVG;
//svg file template
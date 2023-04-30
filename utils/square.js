
class Square {
    constructor(answer) {
        this.answer = answer;
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
        <rect x="90" y="40" width="120" height="120" fill="${this.answer.color}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.answer.txtcolor}">${this.answer.name}</text>
      
      </svg>`;
    }
}

module.exports = {Square};
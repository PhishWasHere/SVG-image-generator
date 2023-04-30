
class Triangle {
    constructor(answer) {
        this.answer = answer;
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
        <polygon points="150, 18 244, 182 56, 182" fill="${this.answer.color}" />
      
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.answer.txtcolor}">${this.answer.name}</text>
      
      </svg>`;
    }
}

module.exports = {Triangle};
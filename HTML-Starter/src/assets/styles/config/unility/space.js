let max = 500
let p = 0
let Space = {
  '0p5': '1px',
  '1p5': '3px',
  '2p5': '5px',
  '3p5': '7px',
  '4p5': '9px',
  '50vw': '50vw',
  '100vw': '100vw',
  '50vh': '50vh',
  '100vh': '100vh',
  '500' : '500px',
  '300': '300px',
  '39.62':'39.62px',
  '18cc' :'16px',
  '27cc': '-27px',
  '209': '209%',
  '30rem': '-30rem',
  '28rem': '-28rem',
  '31rem': '-31rem',
  '27rem': '-27rem',
  '24rem': '-24rem',
  '22rem': '-22rem',
  '3rem': '-3rem',
  '35rem': '-35rem',
  '32rem': '-32rem',
  '5rem': '-5rem',
  '2rem': '-2rem'

  

}

for (let i = 0; i < max; i++) {
  Space[i] = i * 2 + 'px'
  p = i + 'p'
  Space[p] = i + '%'
}
// console.log(Space)

module.exports = {
  Space
}

var styles = {
body{
  font-family: 'Noto Sans', sans-serif;
}

h1{
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-size: 40px;
  color: #00688B;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}

.Header {
  background: url(/images/water_texture2355.jpg) center 80%;
  background-size: cover;
  margin-bottom: 50px;
  transition: 0.5s ease all;
  &.blurred { filter: blur(2px);}
}

};

module.exports = styles;

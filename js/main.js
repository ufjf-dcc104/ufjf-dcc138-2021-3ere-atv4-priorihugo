import AssetManager from "./AssetManager.js";
import Cena from "./Cena.js" ;
import Mapa from "./Mapa.js";
import Sprite from "./Sprite.js";


///canvas config
const canvas = document.body.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 14*32;
canvas.height = 10*32;

const assets = new AssetManager();
const mapa1 = new Mapa();

const c1 = new Cena(canvas , assets);
c1.configuraMapa(mapa1);

const pc = new Sprite({x: 20 , y:10 , vx : 50});
const en = new Sprite({x: 20 , y:80 , color: "red" , vx: 50})
const en2 = new Sprite({x: 400 , y:10 , color: "orange" ,vx: -50})

c1.adicionar(pc);
//c1.adicionar(en);
c1.adicionar(en2);

c1.quadro(0);
c1.iniciar();

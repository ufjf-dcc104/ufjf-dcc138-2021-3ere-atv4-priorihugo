import AssetManager from "./AssetManager.js";
import Mixer from "./Mixer.js";
import InputManager from "./InputManager.js";
import Game from "./Game.js";
import CenaJogo from "./CenaJogo.js";
import CenaCarregando from "./CenaCarregando.js";
import CenaFim from "./CenaFim.js";

///canvas config
const canvas = document.body.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 32 * 32;
canvas.height = 21 * 32;

const mixer = new Mixer(500);
const input = new InputManager();
const assets = new AssetManager(mixer);
const c0 = new CenaCarregando(canvas); 
const c1 = new CenaJogo(canvas);
const c2 = new CenaFim(canvas);
const game = new Game(canvas, assets, input);

game.adicionarCena("carregando" , c0);
game.adicionarCena("jogo", c1);
game.adicionarCena("fim" , c2);

assets.carregaAudio("boom", "assets/sons/boom.wav");
assets.carregaAudio("hurt", "assets/sons/hurt.wav");
assets.carregaAudio("perdeu", "assets/sons/perdeu.wav");
assets.carregaAudio("baque", "assets/sons/baque.wav");
assets.carregaAudio("hit1", "assets/sons/hit1.wav");
assets.carregaAudio("hit2", "assets/sons/hit2.wav");
assets.carregaAudio("hit3", "assets/sons/hit3.wav");

assets.carregaImagem("paredeL1", "assets/terreno/paredeL1.png");
assets.carregaImagem("paredeL2", "assets/terreno/paredeL2.png");
assets.carregaImagem("paredeL3", "assets/terreno/paredeL3.png");
assets.carregaImagem("paredeF1", "assets/terreno/paredeF1.png");
assets.carregaImagem("paredeF2", "assets/terreno/paredeF2.png");
assets.carregaImagem("paredeF3", "assets/terreno/paredeF3.png");
assets.carregaImagem("canto1", "assets/terreno/canto1.png");
assets.carregaImagem("canto2", "assets/terreno/canto2.png");
assets.carregaImagem("canto3", "assets/terreno/canto3.png");
assets.carregaImagem("canto4", "assets/terreno/canto4.png");
assets.carregaImagem("canto5", "assets/terreno/canto5.png");
assets.carregaImagem("canto6", "assets/terreno/canto6.png");
assets.carregaImagem("piso", "assets/terreno/piso.png");
assets.carregaImagem("piso2", "assets/terreno/piso2.png");

assets.carregaImagem("floresta", "assets/terreno/forest_.png");
assets.carregaImagem("florestaDecoracao", "assets/terreno/forestDecoration_0.png");

assets.carregaImagem("pc" , "assets/personagens/lancelot_.png")
assets.carregaImagem("orc" , "assets/personagens/orc_.png")
assets.carregaImagem("skeleton" , "assets/personagens/skeleton_.png")
assets.carregaImagem("demon" , "assets/personagens/demon_.png")
assets.carregaImagem("devil" , "assets/personagens/devil_.png")
assets.carregaImagem("goblin" , "assets/personagens/goblin_.png")
assets.carregaImagem("necromancer" , "assets/personagens/necromancer_.png")

assets.carregaImagem("armas" , "assets/personagens/weapons_.png")
assets.carregaImagem("arco" , "assets/personagens/arco.png")
assets.carregaImagem("fogo" , "assets/personagens/fire_.png")

input.configurarTeclado({
  ArrowLeft: "MOVE_ESQUERDA",
  ArrowRight: "MOVE_DIREITA",
  ArrowDown: "MOVE_BAIXO",
  ArrowUp: "MOVE_CIMA",
  " ": "PROXIMA_CENA",
  a: "MOVE_ESQUERDA",
  d: "MOVE_DIREITA",
  s: "MOVE_BAIXO",
  w: "MOVE_CIMA",

  q: "ATAQUE_HORARIO",
  e: "ATAQUE_ANTIHORARIO"

});
game.iniciar();



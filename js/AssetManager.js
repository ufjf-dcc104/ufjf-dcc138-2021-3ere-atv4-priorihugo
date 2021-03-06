export default class AssetManager{

    constructor(mixer = null){
        this.carregadas = 0;
        this.aCarregar = 0;
        this.imagens = new Map();
        this.audios = new Map();
        this.mixer = mixer;
    }
    progresso(){
        if(this.aCarregar>0){
            return `${((this.carregadas/this.aCarregar)*100).toFixed(2)}%`;
        }else{
            return "[Nada a carregar]";
        }
    }
    carregaImagem(chave , src){
        const img = new Image();
        img.src = src;
        img.addEventListener("load" , ()=>{
            console.log(`${this.carregadas}/${this.aCarregar} Imagens carregadas`);
            this.carregadas++;
        })
        this.imagens.set(chave, img);
        this.aCarregar++;
    }
    getImg(chave){
        return this.imagens.get(chave);
    }

    carregaAudio(chave , src){
        const audio = new Audio();
        audio.src = src;
        audio.addEventListener("loadeddata" , ()=>{
            this.carregadas++;
            console.log(`${this.carregadas}/${this.aCarregar} Audios carregados`);  
        })
        this.audios.set(chave, audio);
        this.aCarregar++;
    }
    getAudio(chave){
        return this.audios.get(chave);
    }
    acabou(){
        return this.carregadas === this.aCarregar;
    }
    play(chave){
        this.mixer?.playMixer(this.getAudio(chave));
    }
}
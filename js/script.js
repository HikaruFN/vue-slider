var app = new Vue(
    {
        el: '#root',
        data: {
                //Stabilisco immagine default per il carousel
                defaultImg: 0,
                //creo array contenete le immagini del carousel
                carouselImg: ['img/campagna.jpg','img/cascate.webp','img/fiori.jpeg','img/montagne.webp'],               
        },
        methods: {
                chevronRight: function(){
                    if(this.defaultImg > this.carouselImg.length - 2){
                        this.defaultImg = 0;
                    }else{
                        this.defaultImg = this.defaultImg + 1;
                    }
                },
                chevronLeft: function(){
                    if(this.defaultImg == 0){
                        this.defaultImg = this.carouselImg.length -1;
                    }else{
                        this.defaultImg = this.defaultImg -1;
                    }
                }
        }
    }
);


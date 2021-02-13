export class Registro {

    public format: string;
    public text: string;
    public type: string;
    public icon: string;
    public created: Date;

    constructor( format: string, text: string){

        this.format = format;
        this.text = text;

        this.created = new Date();

        this.determinarTipo();

    }

    private determinarTipo(){

        const iniciotext = this.text.substr(0,4);
        console.log('TIPO', iniciotext);

        switch(iniciotext ){

            case 'http':
                this.type = 'http';
                this.icon = 'globe';
            break;

            // case 'geo:':
            //     this.type = 'http';
            //     this.icon = 'pin';
            // break;
            
            case 'text':
                this.type = 'Texto';
                this.icon = 'text';
            break;

            case 'wifi':
                this.type = 'Wifi';
                this.icon = 'wifi';
            break;

            case 'url':
                this.type = 'url';
                this.icon = 'url';
            break;

            case 'tabl':
                this.type = 'table';
                this.icon = 'table';
            break;

            default:
                this.type = 'no reconocido';
                this.icon = 'create';
        }
    }

}
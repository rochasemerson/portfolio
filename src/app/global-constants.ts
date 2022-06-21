
type menuTextType = {
    home: string,
    about: string,
    contact: string
}

type aboutMenuType = {
    title: string[]
}

export class GlobalConstants {
    public static language: string = 'portuguese'
    
    public static menuText: menuTextType = {
        home: 'Início',
        about: 'Sobre',
        contact: 'Contato'
    }

    public static aboutText: aboutMenuType = {
        title: ['Sobre mim', 'About me']
    }
}
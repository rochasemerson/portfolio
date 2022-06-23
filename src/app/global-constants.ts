
type menuTextType = {
    home: string,
    about: string,
    contact: string
}

type aboutMenuType = {
    pt: string[]
    en: string[]
}

export class GlobalConstants {
    public static menuTextPt: menuTextType = {home: 'Início', about: 'Sobre', contact: 'Contato'}
    public static menuTextEn: menuTextType = {home: 'Home', about: 'About', contact: 'Contact'}


    public static aboutText: aboutMenuType = {
        pt: ['Sobre mim', 'Graduando em Análise e Desenvolvimento de Sistemas, com conhecimento em Javascript, C++ e Python. Programador ousado e interessado em adquirir cada vez mais conhecimento.'],
        en: ['About me', 'Student of Development and Analisys of Computer Systems, with knowledge of Javascript, C++ e Python. Bold and eager to improve.']
    }
}
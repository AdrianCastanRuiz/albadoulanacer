import type { SocialIconType } from "../types"

const whatsappMessage: string = 'Hola Alba! Me gustaría obtener más información sobre tus servicios. ¿Podríamos hablar?'




export const whatsappIcon:SocialIconType = {

    name: 'whatsapp',
    href: `https://wa.me/34670521358?text=${encodeURIComponent(whatsappMessage)}`,
    icon: '/icons/whatsapp.svg',
    color: '#25D366',
    label: 'WhatsApp'
}


export const instaGramIcon: SocialIconType = {
    name: 'instagram',
    href: 'https://instagram.com/albadoulanacer',
    icon: '/icons/instagram.svg',
    color: '#E1306C',
    label: 'Instagram'
}


export const facebookIcon: SocialIconType = {
    name: 'facebook',
    href: 'https://facebook.com/albadoulanacer',
    icon: '/icons/facebook.svg',
    color: '#1877F2',
    label: 'Facebook'
}

export const socialFABS : SocialIconType[] = [whatsappIcon,instaGramIcon,facebookIcon]
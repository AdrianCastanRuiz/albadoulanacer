export type Testimonial = {
  text: string
  name: string
  role: string
}

export type Highlight = {
  icon: string
  title: string
  text: string
}

export type Etapa = {
  num: string,
  title: string,
  subtitle: string,
  content: string[],
  tips: string[]    
  
}


export type Frase = string

export type Recurso = {
  icon: string
  title: string
  text: string
}

export type FormState = {
  nombre: string
  email: string
  telefono: string
  etapa: string
  mensaje: string
}


export type Valor = {
  icon: string
  label: string
}

export type Formacion = {
  year: string
  titulo: string
  centro: string
}

export type CookiePreferences = {
  necesarias: boolean
  analiticas: boolean
  marketing: boolean
}
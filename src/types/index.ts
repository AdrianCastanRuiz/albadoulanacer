
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

export type Testimonio = {
  id: string
  nombre: string
  rol: string
  etapa: string
  texto: string
  destacado?: boolean
}

export type FormStatus = 'idle' | 'sending' | 'success' | 'error'


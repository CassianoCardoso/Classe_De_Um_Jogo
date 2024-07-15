//Classes e Objetos

class Heroi {
  constructor(Nome, Idade, Tipo) {
    this.Nome = Nome
    this.Idade = Idade
    this.Tipo = Tipo
  }

  TipoAtaque() {
    var Ataque
    switch (this.Tipo) {
      case 'Mago':
        Ataque = 'Magia'
        break
      case 'Guerreiro':
        Ataque = 'Espada'
        break
      case 'Monge':
        Ataque = 'Artes Marciais'
        break
      case 'Elfo':
        Ataque = 'Flechas'
        break
      default:
        Ataque = 'INVÁLIDO'
        break
    }
    return Ataque
  }

  Atacar() {
    var Ataque = this.TipoAtaque()
    console.log(`O ${this.Tipo} Atacou usando ${Ataque}`)
  }
}

let Heroi1 = new Heroi('Cassiano', '35', 'Mago')
let Heroi2 = new Heroi('Shin', '30', 'Guerreiro')

Heroi1.Atacar()
Heroi2.Atacar()

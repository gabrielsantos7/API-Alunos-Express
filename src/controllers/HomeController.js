import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Gabriel',
      sobrenome: 'Silva',
      email: 'gabriel@email.com',
      idade: 25,
      peso: 70.5,
      altura: 1.75,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();

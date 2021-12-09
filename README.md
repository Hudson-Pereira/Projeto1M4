API de Filmes.

API construída com NESTJS, linkada ao banco de dados Postgres utilizando ORM Prisma. Validações de entrada de dados novos e alterações dos já existentes feitas com Decorators.
Também foi utilizado o esquema de segurança HELMET. Os testes de uso foram executados pela extensão THUNDER CLIENT.

Essa API possui três rotas, sendo /filme, /participante e /genero. Afim de facilitar o uso, a rota /genero já possui algums dados inseridos, o que não impede que o usuário insira novos dados ou manipule os já existentes, seja alterando ou excluindo.

Cada rota possui um CRUD completo, que será descrito abaixo. Recomenda-se utilizar essa API iniciando os cadastros pela rota /genero, seguida por /filme, e, por fim, /participante.

/genero

A rota GET /genero está configurada para retornar todos os itens inseridos, mostrando os dados cadastrados e o ID dos mesmos. Quando sem dados, retornará xxxxxxxxxxxxxxxxxxxxxxx

A rota GET /genero/id está configurada para retornar os dados do item especificado pelo id. Quando sem dados, retornará xxxxxxxxxxxxxxxxxxxxxxx

A rota PATCH /genero/id está configurada para alterar os dados do item especificado pelo id, seja um único ou um conjunto de dados. Quando não encontrado o item pelo id, retornará xxxxxxxxxxxxxxxxxxxxxxx

A rota POST /genero está configurada para cadastrar um novo filme, seguindo as informações:

name: do tipo string, sendo validado se está vazio e se foi inserido o tipo correto.

A rota DELETE /genero/id está configurada para deletar os dados inseridos no id selecionado. Quando não encontrado o item pelo id, retornará xxxxxxxxxxxxxxxxxxxxxxx

/filme

A rota GET /filme está configurada para retornar todos os itens inseridos, mostrando os dados cadastrados e o ID dos mesmos. Quando sem dados, retornará xxxxxxxxxxxxxxxxxxxxxxx

A rota GET /filme/id está configurada para retornar os dados do item especificado pelo id. Quando sem dados, retornará xxxxxxxxxxxxxxxxxxxxxxx

A rota PATCH /filme/id está configurada para alterar os dados do item especificado pelo id, seja um único ou um conjunto de dados. Quando não encontrado o item pelo id, retornará xxxxxxxxxxxxxxxxxxxxxxx

A rota POST /filme está configurada para cadastrar um novo filme, seguindo as informações:

name: do tipo string, sendo validado se está vazio e se foi inserido o tipo correto.

ano: do tipo number, sendo validado se foi inserido o tipo correto.

capa: do tipo string, sendo validado se está vazio e se foi inserido o tipo correto.Aqui é recomendado que se insira uma URL com a imagem escolhida.

generoid: do tipo number, sendo validado se está vazio e se foi inserido o tipo correto. Aqui deve-se usar o ID de um genero já cadastrado em banco, ou de algum inserido posteriormente pelo usuário.

A rota DELETE /filme/id está configurada para deletar os dados inseridos no id selecionado. Quando não encontrado o item pelo id, retornará xxxxxxxxxxxxxxxxxxxxxxx

/participante

A rota GET /participante está configurada para retornar todos os itens inseridos, mostrando os dados cadastrados e o ID dos mesmos. Quando sem dados, retornará xxxxxxxxxxxxxxxxxxxxxxx

A rota GET /participante/id está configurada para retornar os dados do item especificado pelo id. Quando sem dados, retornará xxxxxxxxxxxxxxxxxxxxxxx

A rota PATCH /participante/id está configurada para alterar os dados do item especificado pelo id, seja um único ou um conjunto de dados. Quando não encontrado o item pelo id, retornará xxxxxxxxxxxxxxxxxxxxxxx

A rota POST /participante está configurada para cadastrar um novo filme, seguindo as informações:

name: do tipo string, sendo validado se está vazio e se foi inserido o tipo correto.

genero: do tipo string, sendo validado se está vazio e se foi inserido o tipo correto.
Este genero refere-se ao sexo do participante.

ano: do tipo number, sendo validado se está vazio e se foi inserido o tipo correto.
Este ano refere-se ao ano de nascimento do participante.

filmeid: do tipo unmber, sendo validado se está vazio e se foi inserido o tipo correto. Esse id deve se referenciar ao ID do filme cadastrado.

A rota DELETE /participante/id está configurada para deletar os dados inseridos no id selecionado. Quando não encontrado o item pelo id, retornará xxxxxxxxxxxxxxxxxxxxxxx

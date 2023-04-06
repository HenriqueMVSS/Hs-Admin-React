<h1> HS Admin React</h1>

<section>

Como executar o projeto:

1 - Através de algum terminal execute o seguinte comando: `git clone https://github.com/HenriqueMVSS/Hs-Admin-React`

2 - Após o passo anterior, executa o comando `npm install` para instalar as dependências do projeto.

3 - Realizando os passos anteriores, somente executar o `npm run dev` para rodar a aplicação e tornar possível o acesso a ela através da url `http://127.0.0.1:5173/` em algum navegador de internet.

</section>
<br>
<section>
Sobre o projeto:

É basicamente uma dashboard administrativa de dados fictícios e contém também uma tela de contato, onde é possível entrar em contato através do preenchimento do formulário de dados, neste formulário possuem algumas validações para que ele possa ser enviado, o botão de enviar só irá aparecer caso todos os requisitos dos campos forem atingidos.
Ao acessar o sistema ele deverá aprensentar na página inicial uma dashboard e no cabeçalho deverá aprensentar o logo, o título da página e dois links com o nome `Home` que irá redirecionar para tela inicial no caso a da dashboard e outro com o nome `Contato` que irá direcionar para o formulário de contato, para composição da Dashboard foram criados alguns componentes.


</section>
<br>
<section>
Testes:

Nesta aplicação decidi realizar o teste em um `component` e em uma `página`.
Escolhi primeiramente o `component Header` pois ele é responsavel por exibir o link que irá direcionar o usuário para a página de contato onde contem o formulário.
Em seguida optei por testar a página de `contato` para verificar se o `formulário de contato` esta sendo renderizado e se seus `campos de preenchimento dos dados` também, afim de garantir que o usuário conseguirá entrar em contato caso desejar.
</section>
<br>
<section>
Uso do Redux na aplicação:

Neste projeto optei em não utiliza-lo por se tratar de uma aplicação simples e que não teria necessidade de utilizar estados que fossem ser acessados globalmente na aplicação.
</section>
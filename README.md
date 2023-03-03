# Mejor con salud

Site de buscas de artigos de saúde, faz uso da API Mejor con salud: https://api.beta.mejorconsalud.com/wp-json/mc/v1/;

## Como instalar e usar o projeto

Clone este repositório numa pasta de sua preferência, inicie com o comamdo abaixo para instalar as dependencias e bibliotecas auxiliares do projeto

```
npm i install
```

Após isso, digite o seguinte comando para executar o projeto:

```
npm start
```

O projeto deployado também se encontra em: https://mejor-con-salud.netlify.app/

### Home Page

<img src="/src/assets/images/home.png">

Ao abrir a Home contém um buscador de artigos para facilitar aos usuários encontrarem conteúdos personalizados sobre saúde e nutrição.
Ao apertar "Enter" o site faz as requisições a API, para o termo pesquisado
É possível filtrar os artigos por: "Mais Relevantes" no topo.

Ao ter o resultado, mostra:

- Paginação para navegar entre os resultados
- Buscador para realizar a busca novamente
- Se não obtém resposta nenhuma, exibe a mensagem: "Não existem artigos relacionados ao termo pesquisado!

### Tela de Artigo

Após pesquisar, é possível abrir o artigo, onde é exibido conteúdo do artigo.

E contém os elementos básicos do artigo: título, categoria, data de publicação, conteúdo(texto para leitura), tags, biografias e nome do autor.

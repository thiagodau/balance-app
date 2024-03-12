
# Relatório de Pesagem de Carcaça Bovina

Esse projeto realiza o registro de pesos de carcaças bovinas através de uma balança instalada em uma casa de carnes, para a conferência com o romaneio que vem do frigorifico, afim de verificar se as informações contidas no mesmo estão corretas.

## Demonstração

![image](https://github.com/thiagodau/balance-app/assets/26436413/614237e5-7e68-4c6c-a91a-24fb7f7f3766)

Acima a tela inicial da aplicação, nela temos a logomarca e nome da casa de carnes, um botão para iniciar o processo de pesagem e uma informação de como se inicia o processo.

### Como funciona

A balança modelo Toledo 9091 captura o peso da carcaça que fica pendurada por um gancho e envia esses dados para o receptor digital. A partir disso, conectamos o recptor digital ao Computador através de um cabo RS-232 para USB.

Depois de conectado o cabo ao computador, acessamos a aplicação através da web, uma vez que esta disponibilizado na internet. Então inicia-se o processo clicando no botão "conecar balança", a aplicação lista os dispositivos conectados e o usuário seleciona a balança. 

Logo de imediato, a aplicação já começa a capturar os dados do recptor em tempo real, mostrando ao usuário o peso que está na balança. Se o peso estiver estabilizado, então o mesmo se mostra em destaque verde na tela com uma mensagem abaixo dizendo "Estabilizado", caso contrário, se o gancho estiver balançando ou em processo de colocar a carcaça nele, o peso se mostra na aplicação com a cor laranja e acompanha a palavra "Sincronizando..." até que o peso se estabilize.

Então com a carcaça pendurada pelo gancho na balança, o usuário pode selecionar o tipo de carcaça que deseja registrar o peso, escolhendo entre "Dianteiro e Traseiro", após isso ele clica no botão Registrar, onde a aplicação registra abaixo em uma tabela o tipo de carcaça selecionada e o peso estabilizado. A tabela registra carcaça por carcaça e possibilita a exclusão individual daquele registro, caso o usuário ache necessário, por algum erro de peso. Isso se repete até que se finde a quantidade de carcaças a serem pesadas.

Ao final, exibe-se um resumo onde temos a quantidade total e separadas por carcaça e o total em KG referente a cada uma. Abaixo desse resumo, temos também 2 botões para se salvar os registros, podendo o usuário escolher entre salvar como pdf e imprimir o documento e um terceiro botão onde temos a possibilidade de excluir todos os registros feitos.


## Funcionalidades

- Conexão e Desconexão com a balança toledo
- Leitura de peso em tempo real
- Estabilidade da balança visualmente
- Registro de itens no Localstorage
- Exclusão de itens geral e individual
- Adição de registro de peso fora da balança opcional
- Impressão do Relatório


## Stack utilizada

**Front-end:** 
 
React 
- ![](https://shields.io/badge/react-black?logo=react&style=for-the-badge)

Google Web Serial
- ![](https://shields.io/badge/WEB%20SERIAL-black?logo=google)

Para isso nesse projeto utilizo React para desenvolvimento da aplicação e para a Conexão e Leitura dos dados utilizo a Api Web Serial do Chrome for Developers, onde a documentação se encontra no link abaixo:

- [WebSerialDocs](https://developer.chrome.com/docs/capabilities/serial?hl=pt-br)
- [AnotherWebSerialDocs](https://wicg.github.io/serial/)

A API Web Serial oferece aos sites uma maneira de ler e gravar em um dispositivo serial com JavaScript. Eles são conectados por uma porta serial no sistema do usuário(computador) ou por dispositivos USB e Bluetooth removíveis que emulam uma porta serial.

Em outras palavras, a API Web Serial conecta a Web e o mundo físico, permitindo que os sites se comuniquem com dispositivos seriais.
## Aprendizados

Nessa aplicação pude testar meus conhecimentos utilizando React onde trabalhei com componentes, hooks, usecontext entre outras ferramentas que o React nos proporciona.

Minha principal dificuldade foi desenvolver a parte da leitura em tempo real da balança, uma vez que o receptor digital envia dados em forma de Buffer através do cabo RS-232, até que através de pesquisa encontrei a biblioteca do Google Web Serial, e alguns videos de fora do brasil onde pude estudar e obter o conhecimento para chegar ao resultado esperado.

Na aba links, vou deixar alguns materiais e videos que utilizei nesta aplicação.


## Instalação

Instale aplicação com npm

```bash
  npm install balance-app
  cd balance-app
  npm run dev
```
    - Você obrigatoriamente precisa de uma porta virtual serial representando a balança.
## Usado por

Esse projeto é usado pela seguinte empresa:

[![empresa](https://img.shields.io/badge/casa%20de%20carnes%20sao%20francisco-0A66C2?style=for-the-badge&logo=link&logoColor=white)](https://www.instagram.com/casa_decarnesaofrancisco/)

## Autores

- [@thiagodau](https://www.github.com/thiagodau)


## Feedback

Se você tiver algum feedback, por favor fale comigo através do e-mail abaixo: [![Gmail Badge](https://img.shields.io/badge/-thiagorodriguesdau@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:thiagorodriguesdau@gmail.com)](mailto:thiagorodriguesdau@gmail.com)



## 🔗 Links Úteis
[![portfolio](https://img.shields.io/badge/confira%20a%20aplicação%20aqui-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://balanca.softhisolucoes.com.br/)

[![video](https://img.shields.io/badge/javascript%20webserial%20video%20aqui-FE2927?style=for-the-badge&logo=ko-fi&logoColor=white)](https://youtu.be/YXpXSfQkvuk?t=3798)

[![video](https://img.shields.io/badge/google%20for%20developers%20video%20aqui-FE2927?style=for-the-badge&logo=ko-fi&logoColor=white)](https://youtu.be/ZIZqmXfrRLI?t=299)

[![linkedin](https://img.shields.io/badge/thiagodau-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/thiagodau/)


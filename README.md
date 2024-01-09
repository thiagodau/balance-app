## Sistema de Registro de Pesagem 
#### React + Vite + WebSerial 

O Objetivo da aplicação é desenvolver um sistema onde possa selecionar o tipo da peça que será pesada (Traseiro ou Dianteiro), ler o peso em tempo real e através de um botão registrar essa informação em uma lista que ao final deve somar as quantidades e seus totais, separadamente e abaixo, os mesmos de todas as peças juntas, gerando assim um relatório a ser impresso.

A balança que envia os dados através de um cabo RS-232 para a USB do Computador, onde o sistema recebe e faz o tratamento desses dados, transformando os dados que chegam em Buffer para decimal onde podemos ler em Kilogramas (Kg).

Para isso nesse projeto utilizo React e Vite para desenvolvimento da aplicação e para a Conexão e Leitura dos dados utilizo a Api Web Serial do Chrome for Developers, onde a documentação se encontra no link abaixo:
- [WebSerialDocs](https://developer.chrome.com/docs/capabilities/serial?hl=pt-br)

A API Web Serial oferece aos sites uma maneira de ler e gravar em um dispositivo serial com JavaScript. Eles são conectados por uma porta serial no sistema do usuário(computador) ou por dispositivos USB e Bluetooth removíveis que emulam uma porta serial.

Em outras palavras, a API Web Serial conecta a Web e o mundo físico, permitindo que os sites se comuniquem com dispositivos seriais.



<br /> ✉️&nbsp; Contato comigo:  [![Gmail Badge](https://img.shields.io/badge/-thiagorodriguesdau@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:thiagorodriguesdau@gmail.com)](mailto:thiagorodriguesdau@gmail.com)
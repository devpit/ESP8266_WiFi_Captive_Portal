# ESP8266 WiFi Captive Portal

## Disclaimer

Este projeto é destinado **exclusivamente para fins educacionais e testes controlados**. Utilize-o **apenas em suas próprias redes e dispositivos**. Não me responsabilizo pelo uso indevido deste programa.

## Sobre este projeto

O **ESP8266 WiFi Captive Portal** é um projeto que cria um portal cativo para o módulo **NodeMCU (ESP8266)**, com funcionalidades de **spoofing de DNS**. Ele permite criar uma tela de cadastro personalizada que aparece para os visitantes ao se conectarem à rede WiFi. Ideal para fins educacionais e experimentos controlados.

## Funcionalidades

Aqui estão algumas das funcionalidades do projeto:

- **Portal Cativo**: Redireciona os usuários para uma página de autenticação personalizada.
- **DNS Spoofing**: Intercepta solicitações DNS e redireciona para um servidor local.
- **Configuração Fácil**: Pode ser instalado via **ESP8266 Flasher** ou **Arduino IDE**.
- **Coleta de Credenciais**: O projeto inclui páginas de login clonadas para **Facebook**, **Instagram**, **Twitch** e outras (mais telas de login serão adicionadas em breve).

## Capturas de Tela

![Tela de Cadastro](https://github.com/devpit/ESP8266_WiFi_Captive_Portal/raw/main/captive.jpg)

![Tela de Cadastro](https://github.com/devpit/ESP8266_WiFi_Captive_Portal/raw/main/facebook-captive.jpg)

![Tela de Cadastro](https://github.com/devpit/ESP8266_WiFi_Captive_Portal/raw/main/instagram-captive.jpg)

![Tela de Cadastro](https://github.com/devpit/ESP8266_WiFi_Captive_Portal/raw/main/twitch-captive.jpg)


## Instalação

### Método 1: ESP8266 Flasher

1. Baixe o firmware [aqui](https://github.com/adamff-dev/ESP8266-Captive-Portal/raw/master/WiFi_Captive_Portal.ino).
2. Use o **ESP8266 Flasher** para carregar o firmware no seu NodeMCU.

### Método 2: Arduino IDE

1. Abra o arquivo [WiFi_Captive_Portal.ino](https://github.com/adamff-dev/ESP8266-Captive-Portal/blob/master/WiFi_Captive_Portal.ino) no Arduino IDE.
2. Configure as opções de WiFi e senha no código.
3. Carregue o código no seu NodeMCU.

## Atenção

Lembre-se de usar essas páginas **apenas para fins educacionais e testes controlados**. Não é permitido o uso indevido ou ilegal dessas informações. 🚫🔒

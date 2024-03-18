# App Binancrypto (Desafio Pratico Senior)

O BinanCrypto é uma plataforma prática e intuitiva que criei para atender às necessidades de entusiastas e investidores de criptomoedas. Meu objetivo principal com este aplicativo é oferecer um recurso integrado que torne mais simples o monitoramento e a análise do mercado de criptomoedas em tempo real.

Utilizei APIs públicas fornecidas pela Coin Cap e pela Binance para garantir que o aplicativo forneça atualizações instantâneas das principais criptomoedas. Com uma interface descomplicada, o BinanCrypto revela informações detalhadas, facilitando para os usuários a visualização e interpretação das flutuações do mercado.

## Pré-Requisitos

Para configurar e executar o BinanCrypto, você precisará dos seguintes pré-requisitos instalados em sua máquina:

- [Node.js](https://nodejs.org/) (Versão 16 ou superior)
- [Yarn](https://yarnpkg.com/) (Versão 1.22.22 ou superior)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Android Studio](https://developer.android.com/studio) ou [Xcode](https://developer.apple.com/xcode/) (para simulação)


## Configuração do Ambiente

1. Instale o Expo CLI globalmente (se ainda não estiver instalado):
   ```bash
   npm install -g expo-cli
   ```

2. Clone o repositório do projeto:
   ```bash
    git clone https://github.com/leandro5g/binanCrypto.git
    cd binancrypto
   ```

3. Instale as dependências do projeto usando Yarn:
   ```bash
    yarn install
   ```

## Executando o Aplicativo

 Após configurar seu ambiente, você pode iniciar o aplicativo usando um dos seguintes comandos, dependendo da plataforma de sua escolha: 

### Android
   ```bash
   yarn android
   ```

### Android
   ```bash
   yarn ios
   ```

## Tecnologicas utilizadas:

- [Expo](https://expo.dev/) - Utilizado o expo bare workflow
- [TypeScript](https://www.typescriptlang.org/) 
- [@gorhom/bottom-sheet](https://github.com/gorhom/react-native-bottom-sheet) - Uma biblioteca performática e totalmente configurável para criar Bottom Sheets no React Native.
- [@tanstack/react-query](https://tanstack.com/query/v4) - Biblioteca para buscar dados das apis RESTFUL
- [Axios](https://axios-http.com/) - Cliente para realizar as request HTTP
- [styled-components](https://styled-components.com/) - Biblioteca para adicionar estilização e gerenciar
o design system do aplicativo
- [zustand](https://github.com/pmndrs/zustand) - Uma pequena, rápida e escalável solução de gerenciamento de estado.
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) e [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/) - Bibliotecas para animações e gestos no React Native.


## Recursos

### Listagem das Principais Criptomoedas

Através da API pública HTTP (`/assets/`) da Coin Cap, selecionei cuidadosamente as principais criptomoedas do mercado para incluir na lista.

![Simulator Screenshot - iPhone 15 Pro Max - 2024-03-18 at 10 50 23](https://github.com/leandro5g/binanCrypto/assets/100235332/3ca5b3a5-f1b9-47ba-8f88-120104a69bc9)


### Valores em Tempo Real

Após selecionar as principais criptomoedas, integrei a API WebSocket da CoinCap para fornecer atualizações contínuas e em tempo real. Este recurso permite que você acompanhe as alterações de preço instantaneamente, com cada mudança refletida em uma indicação percentual para ilustrar a variação no valor.

<img width="291" alt="Screenshot 2024-03-18 at 13 24 24" src="https://github.com/leandro5g/binanCrypto/assets/100235332/f70b19bb-8ba1-4ae1-9c45-6c7d0baca250">

Além disso, disponibilizei gráficos em tempo real para cada moeda, facilitando o monitoramento das tendências do mercado com um simples deslizar de dedo pelo gráfico.

https://github.com/leandro5g/binanCrypto/assets/100235332/24454f28-e7f8-4f00-ad2c-b713dbb3e8d5

### Análise detalhada da Crypto

Ao selecionar uma criptomoeda, um modal é aberto onde faço a junção de dois serviços diferentes para exibir novas informações.

Utilizo as informações provenientes da API de preço em tempo real da CoinCap para mostrar o valor atual da moeda. Além disso, exibo também dados de 'supply', representando a quantidade da moeda que está em circulação.

<img width="294" alt="Screenshot 2024-03-18 at 13 35 04" src="https://github.com/leandro5g/binanCrypto/assets/100235332/ff7dfb54-39e6-44a1-8a11-02ac2a653216">

Com base na criptomoeda selecionada, utilizei uma API de candle em tempo real da Binance. Esta API fornece informações em tempo real que utilizo para criar um novo gráfico de candle com detalhes da moeda. Pressionando e deslizando pelo gráfico, é possível obter uma visão mais detalhada dos valores da moeda.

https://github.com/leandro5g/binanCrypto/assets/100235332/7e68bc75-b75a-4ee3-8e76-1b846e325e80

**Observação:** O valor da moeda apresentado no modal vem diretamente da API em tempo real da CoinCap. No entanto, para construir o gráfico de candle, utilizo os dados fornecidos pela API de candle da Binance. É importante notar que pode ocorrer de o valor da moeda aumentar enquanto no gráfico de candle o valor diminui. Isso acontece porque utilizei dois serviços diferentes para fins de demonstração.



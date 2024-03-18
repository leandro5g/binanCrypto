# App Binancrypto (Desafio Pratico Sênior)

O BinanCrypto é uma plataforma prática e intuitiva que criei para atender às necessidades de entusiastas e investidores de criptomoedas. Meu objetivo principal com este aplicativo é oferecer um recurso integrado que torne mais simples o monitoramento e a análise do mercado de criptomoedas em tempo real.

Utilizei APIs públicas fornecidas pela Coin Cap e pela Binance para garantir que o aplicativo forneça atualizações instantâneas das principais criptomoedas. Com uma interface descomplicada, o BinanCrypto revela informações detalhadas, facilitando para os usuários a visualização e interpretação das flutuações do mercado.


https://github.com/leandro5g/binanCrypto/assets/100235332/536fdb0a-1155-4059-b677-3994abd8a5cb


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

<img src="https://raw.githubusercontent.com/leandro5g/binanCrypto/main/assets/100235332/3ca5b3a5-f1b9-47ba-8f88-120104a69bc9" width="300">


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

## Arquitetura Utilizada

No desenvolvimento deste aplicativo, adotei diversos conceitos e padrões de desenvolvimento, além de seguir as boas práticas.

### Padrões de Desenvolvimento

Implementei vários padrões de design, incluindo:

- **Clean Code**: Empreguei princípios de Clean Code para tornar o código mais legível, simples e compreensível. Isso inclui nomeação clara de variáveis e funções, redução de complexidade das funções e hooks.
- **DDD (Domain-Driven Design)**: Estruturei e separei o projeto em módulos seguindo conceitos do DDD. Cada módulo mantém seus próprios componentes, serviços, estados, páginas e regras específicas.
- **SOLID**: Princípios de design orientado a objetos adotados para melhorar a manutenção e extensão do código.
- **HOC (Higher-Order Components)**: Utilizei para reforçar a reutilização da lógica dos componentes, promovendo uma melhor abstração e separação de preocupações.
- **Composition Pattern**: Adotado para permitir uma composição de componentes mais flexível e clara, facilitando a reutilização e a manutenção do código.


### Estrutura do Módulo Home

O módulo Home é um exemplo da separação detalhada dentro do aplicativo:

- **Componentes**: Componentes específicos do módulo e não compartilhados com outros módulos.

<img width="268" alt="Screenshot 2024-03-18 at 15 29 53" src="https://github.com/leandro5g/binanCrypto/assets/100235332/5dfe45f3-e515-4f47-9a3f-68cd430b1644">

- **Models**: Definem as tipagens utilizadas no módulo.

<img width="268" alt="Screenshot 2024-03-18 at 15 30 05" src="https://github.com/leandro5g/binanCrypto/assets/100235332/30395ccf-c6b3-4167-bfee-a9a8efffba9d">

- **Services e Stores**: `Services` gerenciam lógicas e requests complexas. `Stores` mantêm as configurações e estados globais do módulo usando Zustand.
  
<img width="323" alt="Screenshot 2024-03-18 at 15 30 35" src="https://github.com/leandro5g/binanCrypto/assets/100235332/8a98fb2d-2c12-4cd2-9410-96a6d978ff43">

- **Utils**: Funções auxiliares usadas dentro do módulo.

### Shared: Componentes e Configurações Globais

O diretório `Shared` contém elementos usados em todo o aplicativo:

- **Design System**: Centralizado usando `styled-components`, permite um acesso uniforme e centralizado ao design system.
  <img width="210" alt="Screenshot 2024-03-18 at 15 36 28" src="https://github.com/leandro5g/binanCrypto/assets/100235332/521db20f-ab53-49de-8992-cc6b63e5052a">
  
- **Config**: Configurações gerais do aplicativo, como mapeamento de tab bars, lista pré-selecionada de criptomoedas e suas cores.

<img width="217" alt="Screenshot 2024-03-18 at 15 37 40" src="https://github.com/leandro5g/binanCrypto/assets/100235332/05b29a89-cb28-434c-9270-7eae46d44eb2">

- **Hooks**: Hooks personalizados para chamadas de serviços via protocolos HTTP e WebSocket.

  <img width="241" alt="Screenshot 2024-03-18 at 15 38 40" src="https://github.com/leandro5g/binanCrypto/assets/100235332/4aa45674-4baa-4cce-966e-d228adf08fc8">

- **Libs**: Configurações de bibliotecas externas, como `react-query` e `axios` para requests HTTP, e `react-native-responsive-font-size` para auxiliar na responsividade.
  <img width="241" alt="Screenshot 2024-03-18 at 15 40 07" src="https://github.com/leandro5g/binanCrypto/assets/100235332/97da21f7-76a6-43cb-9ece-e6ace2b720fb">

- **Providers**: Centraliza serviços e bibliotecas que funcionam como provedores no contexto do React.
<img width="598" alt="Screenshot 2024-03-18 at 15 42 13" src="https://github.com/leandro5g/binanCrypto/assets/100235332/571268a5-efe8-4bfe-9011-fa68a205dcc2">

- **Routes**: Configurações das rotas globais do aplicativo.





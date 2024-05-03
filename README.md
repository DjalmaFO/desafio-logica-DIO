# Desafio - Classificador de Nível de Herói

## Instruções para entrega

1️⃣ Desafio Classificador de nível de Herói

### O Que deve ser utilizado

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

### Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro  
Se XP for entre 1.001 e 2.000 = Bronze  
Se XP for entre 2.001 e 5.000 = Prata  
Se XP for entre 5.001 e 7.000 = Ouro  
Se XP for entre 7.001 e 8.000 = Platina  
Se XP for entre 8.001 e 9.000 = Ascendente  
Se XP for entre 9.001 e 10.000= Imortal  
Se XP for maior ou igual a 10.001 = Radiante

### Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

## Solução

Utilizei a função **_prompt_** do módulo **_prompt-sync_** do **_Node.js_** para receber o **_input_** (dados de entrada) do usuário e armazenar em váriaveis.

Para validar os inputs, utulizei o laço de repetição (**_looping_**) **_while_**.

Encontrei problema para validar o input da XP do herói, onde esperava-se a conversão da entrada para um número inteiro. Porém se o usuário não digitasse ou digitasse letras era aceito e saia do looping. Pesquisei e encontrei a solução de utilizar a função **_isNaN_** para verificar se de fato a variável era do tipo numérico.

### Referencia

- prompt-sync (Node):
[Stackoverflow](https://stackoverflow.com/questions/54486307/referenceerror-prompt-is-undefined-how-would-i-fix-this-in-javascript)
- isNaN Function JS: [W3Scools](https://www.w3schools.com/jsref/jsref_isnan.asp)
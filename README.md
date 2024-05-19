# Letras aleatórias

Foi um mini-projeto que fiz quando comecei a aprender o  
básico do front-end. Recentemente estou refazendo meus  
passos, para ver o quanto evolui, decide começar por este.  
Não foi o meu primeiro projeto mas revendo ele, notei o quão  
era mal feito.  

No diretório ```_old_version```, você pode encontrar a versão  
antiga da forma que foi finalizado na época.  

Tentei seguir a mesma linha da primeira versão, mas aplicando  
parte do meu conhecimento atual de uma forma que não  
complicasse muito o código do projeto.  

Pensei usar um sistema de cache para os argumentos da função  
```generate()``` para que não precisasse redefinir o grupo de letras e   
o comprimento da lista de letras, se os argumentos fossem os mesmos.  
Porém, iria fugir da simplicidade que eu esperava do código e o  
desempenho já estava bom, séria um pouco desnecessário.

O desempenho é um ponto a se notar, a primeira versão não somente  
é mal estruturada como também é mal otimizada não lidando bem com  
multiplos cliques consecutivos, um ponto que a nova versão lida bem.  

## Documentação 

* Gerar letrar: clique no botão "gerar" 
* Escolher grupo de letras: na opção 'De "\_" a "\_"' insira as letras   
nos campos respectivos, por exemplo:  
'De "A" a "Z"' com isso só ira gerar letras de 'a' até 'z'. 

### Documentação do código

* A função ```generate(lettersGroup)```, retorna um ```String``` contendo  
uma letra que pertence ao grupo passado para parâmetro o  
```lettersGroup``` que deve ser um ```String```.  
Exemplo:  
  ```console.log(generate("abc")) //-> alguma letra entre 'a' a 'c'```  

* A função ```splitLetters(start, end)```, retona um ```String``` contendo  
um grupo de letras que pode ser escolhido através dos argumentos  
passados para os parãmetros ```start``` e ```end```. Os argumentos devem  
ser do tipo ```String``` contendo um caractere de "A" a "Z".  
Quando não passado argumentos ou apenas um, a função retornarà  
todo o alfabeto latino.  
Exemplo: ```console.log(splitLetters('a', 'c')) //-> "abc"```
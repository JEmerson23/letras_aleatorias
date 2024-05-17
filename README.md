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

* A função ```generate(from, to)``` retorna uma ```String``` contendo uma  
letra que pertence a um grupo definido pelos parâmetros ```from``` e ```to```,  
ambos os argumentos (```String```) devem ser passados para ambos  
os parâmentros, passa apenas um não terar efeito.  
  Exemplo:  
  ```console.log(generate('a', 'c')) // -> alguma letra de 'a' a 'c'```  
Os parâmetros são opcionais e caso não seja passado nenhum argumento  
ou apenas um, a função retornará alguma letra do alfabeto latino.
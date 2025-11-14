programa
{
    funcao inicio()
    {
    		// 2 5 1 3 4 9 7 8 10 6

		inteiro vetor[10]
		inteiro i = 0, soma = 0, media = 0

		para (i = 0; i < 10; i++)
		{
			escreva("Infome o ", (i + 1), "ª número:\n")
			leia(vetor[i])
		}
		
		escreva("Elementos nos índices ímpares:\n")
		para (i = 0; i < 10; i++)
		{
			se (i % 2 != 0){
				escreva(vetor[i], " ")
			}
		}
		escreva("\n")

		escreva("Elementos pares:\n")
		para (i = 0; i < 10; i++)
		{
			se (vetor[i] % 2 == 0){
				escreva(vetor[i], " ")	
			}
		}
		escreva("\n")

		escreva("Soma:\n")
		para (i = 0; i < 10; i++)
		{
			soma = soma + vetor[i]
		}
		escreva(soma, "\n")

		escreva("Média:\n")
		media = soma / (i + 1)
		escreva(media)

    }
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 509; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */
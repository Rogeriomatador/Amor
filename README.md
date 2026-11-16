# Constelação de Nós

Jogo 3D para navegador e celular. Acesse https://rogeriomatador.github.io/Amor/ depois da publicação.

## Jogar e desenvolver

Requer navegador com WebGL 2. Abra com um servidor HTTP, por exemplo `python -m http.server 8000`, e visite `/dist/`. WASD/setas e espaço no computador; analógico e botões no celular. O áudio é opcional.

Seis atividades: estrela/espada, defesa do refúgio, coleta e esquiva, ritmo, restaurante e pesca. Progresso local: não sincroniza entre aparelhos. Não há multiplayer ou pagamentos automáticos.

## Verificação

`node --experimental-vm-modules qa3.mjs`

Os testes executam as regras e a geometria com renderização simulada. Não substituem testes em aparelhos físicos. GitHub Actions testa e publica `dist/` em Pages em cada push.

## Conteúdo e privacidade

Este repositório é público. As cartas são textos originais e editáveis em `dist/story3.js` e `dist/main3.js`. Não contém exportação de conversa, fotos pessoais, credenciais ou arquivos do WhatsApp. O jogo não coleta nem envia conversas. Cartões são compartilhados somente por ação de quem joga.

## Recursos

Three.js 0.187.0 incluído localmente, licença MIT em `dist/vendor/package/LICENSE`. Cenários, personagens, ícones e demais formas são construídos por código e não dependem de recursos do ChatGPT.

O Caminho dos Vagalumes agora é uma travessia escura até o companheiro: chama de 1,15 s, recarga de 1,65 s, três descansos, obstáculos e retorno sem perder vida. Luzes normais são restauradas ao sair do modo.

A floresta tem trilha de aproximadamente 80 unidades de jogo, vegetação instanciada, duas pontes, troncos e cinco descansos. As copas entre a câmera e a personagem são ocultadas para preservar visibilidade. Cair no riacho retorna ao último descanso.

Revisão de recompensas: ao vencer, os controles da atividade são encerrados e a exploração retorna. A conquista pendente é salva localmente antes do baú, com opção de resgate no menu após recarregar. A tampa abre antes de mostrar a carta. Testes cobrem o acesso ao baú nos seis modos.

## Preparo com gestos

No restaurante, cada pedido tem passos ilustrados. Abra o pão arrastando pela guia; selecione a faca e faça dois cortes para frango e vegetais; segure o frasco de molho; enrole e só então sirva. A câmera aproxima da bancada e o prazo pausa durante o gesto. Voltar cancela apenas o ingrediente atual. As imagens SVG originais estão em `dist/icons/`, e os modelos e validação de gestos em `dist/kitchen.js`.

A pesca tem retorno visual da tensão, linha curvada e animação de captura; as teclas do ritmo respondem ao toque e a prévia das torretas sinaliza posições inválidas.

## Orientação e pausas

As instruções completas aparecem na primeira entrada de cada atividade e podem ser reabertas no botão ?. A carga da chama fica junto ao botão de acender; mensagens contextuais desaparecem após alguns segundos. O modo leve reduz resolução e desativa sombras, mantendo as regras e o progresso.

As recompensas usam uma clareira separada. Casas, portas, torretas, vegetação e utensílios da atividade são removidos antes de colocar o baú numa área livre e alcançável.

Rabiscos é um espaço opcional sem nota, prazo ou pagamento. O desenho é salvo somente no navegador e pode ser desfeito ou exportado em PNG; nada é compartilhado automaticamente.

## Campanha com fim

São seis fases autorais, uma de cada atividade. Cada fase tem introdução, duas mensagens de percurso e uma conclusão própria, disponível em Mensagens da campanha. A sexta termina em uma tela de fim; não há repetição automática. Aventuras é treino livre e não avança a campanha nem distribui novas recompensas. Progresso anterior permanece salvo; quem já passou da sexta fase vê o encerramento.

Na pesca, pegue a vara no suporte, deslize para lançar (ou escolha o lançamento assistido), aguarde a boia, fisgue e controle a tensão. A vara acompanha a mão e a linha é animada. Os cortes do restaurante têm um exemplo visual e preservam cortes completos após interrupção do toque.

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

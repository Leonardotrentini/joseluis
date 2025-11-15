# Instruções para Geração de Imagens

Esta landing page requer 5 imagens específicas que devem ser geradas usando Leonardo AI, Midjourney ou similar.

## Imagem 01 - Hero Section (Velho + Cadeira Vazia)

**Localização:** Hero section no topo da página

**Prompt:**
```
old man in his 70s sitting alone at a small kitchen table, empty chair in front of him, soft afternoon light coming through the window, muted colors, cinematic, melancholic, realistic, slight grain, shallow depth of field
```

**Direção Visual:**
- Cena interna de casa simples
- Luz de fim de tarde entrando por uma janela
- Velho sentado à mesa, de costas ou 3/4, olhando para uma cadeira vazia
- Objetos simples: xícara, prato, talvez um rádio antigo
- Paleta: tons frios azulados + luz quente suave

**Dimensões recomendadas:** 1920x1080px

---

## Imagem 02 - Xícara (Antes da Carta)

**Localização:** Seção pré-carta

**Prompt:**
```
close up of an old ceramic coffee cup on a worn wooden table, soft window light, background softly blurred, subtle sadness, cinematic, muted warm and cool tones, realistic
```

**Direção Visual:**
- Close-up de uma xícara de café antiga
- Sobre uma mesa de madeira, talvez com uma pequena mancha ou marca de uso
- Fundo desfocado, com sugestão de um velho ao fundo, mas nada muito explícito
- Clima: silêncio, memória

**Dimensões recomendadas:** 800x600px

---

## Imagem 03 - Mãos Escrevendo

**Localização:** Dentro da carta, após o trecho sobre escrever

**Prompt:**
```
close up of old man's wrinkled hands writing in a notebook on a wooden desk, warm lamp light, paper slightly yellowed, intimate, cinematic, shallow depth of field, realistic
```

**Direção Visual:**
- Mãos envelhecidas escrevendo em um caderno ou folha de papel amarelada
- Caneta simples
- Talvez um abajur iluminando a mesa, ambiente meio escuro
- Paleta: sépia + luz quente

**Dimensões recomendadas:** 800x600px

---

## Imagem 04 - Livro + Foto Antiga

**Localização:** Seção "Sobre el Libro"

**Prompt:**
```
a simple book on a wooden table next to an old slightly blurred black and white photo of a couple, warm sepia tones, soft light, nostalgic, cinematic, realistic
```

**Direção Visual:**
- Livro simples sobre a mesa, aberto ou fechado
- Ao lado de uma foto antiga de casal (desfocada)
- Não precisa mostrar rostos, apenas sugestão
- Paleta: sépia, cara de foto antiga + papel

**Dimensões recomendadas:** 800x600px

---

## Imagem 05 - Velho Caminhando ao Entardecer

**Localização:** Seção de fechamento da página

**Prompt:**
```
silhouette of an old man walking slowly down a quiet street at sunset, warm light in the distance, long shadows, cinematic, bittersweet mood, realistic
```

**Direção Visual:**
- Silhueta do velho caminhando em uma rua ou corredor ao entardecer
- Luz ao fundo
- Ele sozinho, mas com luz suave na frente, dando ideia de continuidade
- Clima: melancolia + esperança

**Dimensões recomendadas:** 1920x1080px

---

## Como Substituir as Imagens

Após gerar as imagens, substitua as URLs no arquivo `index.html`:

1. **Imagem 01 (Hero):** Procure por `id="hero-image-01"` e substitua o `background-image` no CSS
2. **Imagem 02 (Xícara):** Procure por `id="image-02"` e substitua o `src`
3. **Imagem 03 (Mãos):** Procure por `id="image-03"` e substitua o `src`
4. **Imagem 04 (Livro):** Procure por `id="image-04"` e substitua o `src`
5. **Imagem 05 (Caminhando):** Procure por `id="image-05"` e substitua o `background-image` no CSS

**Nota:** As imagens atuais são placeholders do Unsplash. Substitua por suas imagens geradas para o melhor resultado visual.



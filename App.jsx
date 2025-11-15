import React from 'react';

function App() {
  return (
    <main className="bg-[#050814] text-slate-50 min-h-screen">
      {/* SEÇÃO 1 – HERO */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Lado esquerdo: texto */}
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-[#0B1220] rounded-full text-xs text-[#9CA3AF] tracking-wide">
                Historia real · Libro digital
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight">
                Un viejo esposo, un amor inmenso<br />
                <span className="text-[#D5B166]">y un libro para que ella no desaparezca en silencio.</span>
              </h1>
              
              <p className="text-lg text-[#9CA3AF] leading-relaxed">
                Me llamo José Luis, tengo 72 años y pasé los últimos 4 años escribiendo este libro para que el amor de mi vida no se pierda en silencio después de su partida.
              </p>
              
              <p className="text-sm text-[#9CA3AF]">
                Libro digital en PDF · Lectura corta · Acceso inmediato
              </p>
              
              <a 
                href="#carta" 
                className="inline-block px-8 py-4 bg-[#7A2E3A] hover:bg-[#8a3e4a] text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Quiero leer esta historia
              </a>
            </div>
            
            {/* Lado direito: imagem */}
            <div className="hero-image h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl bg-[#0B1220]">
              <img src="images/hero-hombre-mujer.jpg" alt="Hombre mayor sentado con mujer deitada al fondo" className="w-full h-full object-cover object-center" />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 – CARTA */}
      <section id="carta" className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0">
          {/* Imagem acima da carta */}
          <div className="mb-6 max-w-2xl mx-auto">
            <div className="h-64 rounded-xl overflow-hidden shadow-xl">
              <img src="images/manos-escribiendo.jpg" alt="Manos envelhecidas escrevendo" className="w-full h-full object-cover object-center grayscale" />
            </div>
          </div>

          {/* Card da carta */}
          <div className="bg-[#F5E8D8] text-slate-900 rounded-2xl shadow-2xl border border-[#E0D0C0] p-6 sm:p-8 max-w-3xl mx-auto">
            {/* Título pequeno */}
            <div className="mb-8 text-center">
              <p className="font-serif text-xs sm:text-sm text-[#8C5C3B] tracking-widest uppercase">
                UNA CARTA DE UN VIEJO ESPOSO A QUIEN DECIDE LEERLA
              </p>
            </div>

            {/* Texto da carta */}
            <div className="space-y-6 text-base sm:text-lg leading-relaxed">
              <p>
                Me llamo <strong>José Luis</strong> y tengo <strong>72 años</strong>.
              </p>
              
              <p>
                A esta altura de la vida, ya no sueño con tener más cosas, ni con grandes planes.
              </p>

              <p className="pain-line font-serif italic text-[#7A2E3A] text-xl sm:text-2xl leading-relaxed">
                La única cosa que todavía deseo de verdad es eternizar a la mujer que amé toda mi vida.
              </p>

              <p>
                Ella se fue hace <strong>4 años</strong>.
              </p>

              <p>
                Desde ese día, mi casa no volvió a sonar igual.
              </p>

              <p>
                La silla de al lado de la mesa quedó vacía, la cama se hizo demasiado grande y los silencios comenzaron a hablar más fuerte que la televisión encendida.
              </p>

              <p>
                El tiempo pasó, pero la ausencia no se hizo más ligera.
              </p>

              <p>
                Hay días en los que logro seguir la rutina…
              </p>

              <p>
                y hay otros en los que una simple taza que era de ella es suficiente para que todo dentro de mí se desarme.
              </p>

              <p>
                Durante estos <strong>4 años</strong>, tuve un único propósito: escribir para ella.
              </p>

              <p>
                Página por página, noche tras noche, fui dejando en este libro las escenas de nuestra vida juntos:
              </p>

              <p>
                las pequeñas costumbres, las frases que repetíamos sin darnos cuenta, las discusiones que hoy me parecen tontas, las risas que todavía escucho aunque ya no esté.
              </p>

              <p className="pain-line font-serif italic text-[#7A2E3A] text-xl sm:text-2xl leading-relaxed">
                Este libro es el resultado de ese tiempo: cuatro años escribiendo para que nuestro amor no desaparezca cuando yo también ya no esté.
              </p>

              <p>
                No lo escribí para ser famoso.
              </p>

              <p>
                No lo escribí para ganar dinero.
              </p>

              <p className="pain-line font-serif italic text-[#7A2E3A] text-xl sm:text-2xl leading-relaxed">
                Lo escribí porque me da miedo que un amor tan grande se pierda en silencio.
              </p>

              <p>
                Porque si nadie más conoce nuestra historia, siento que una parte de ella muere conmigo.
              </p>

              <p>
                Por eso decidí compartir este libro.
              </p>

              <p>
                Porque mientras alguien, en algún lugar, lea estas páginas…
              </p>

              <p className="pain-line font-serif italic text-[#7A2E3A] text-xl sm:text-2xl leading-relaxed text-center py-4">
                de alguna forma, <strong>ella sigue viva un poco más</strong>.
              </p>

              <div className="pt-8 text-right">
                <p className="mb-2">Con cariño,</p>
                <p className="font-serif text-2xl text-[#7A2E3A]">
                  <strong>José Luis</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 – DOR DO LEITOR */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="bg-[#0B1220] rounded-3xl p-6 sm:p-8 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Lado imagem */}
              <div className="h-64 sm:h-80 rounded-xl overflow-hidden shadow-xl">
                <img src="images/manos-entrelacadas.jpg" alt="Manos entrelaçadas com pessoa deitada ao fundo" className="w-full h-full object-cover object-center" />
              </div>

              {/* Lado texto */}
              <div className="space-y-8">
                <h2 className="font-serif text-3xl sm:text-4xl text-[#F9FAFB]">
                  Tal vez también tú has perdido a alguien…
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">🕯️</span>
                    <p className="text-[#9CA3AF] leading-relaxed">
                      Si alguna vez sentiste que el mundo siguió su ritmo mientras tú te quedaste detenido en el día de la pérdida.
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-2xl">💌</span>
                    <p className="text-[#9CA3AF] leading-relaxed">
                      Si guardas mensajes, fotos, tazas o pequeñas cosas de alguien que ya no está, solo para sentir que no desapareció del todo.
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-2xl">❤️</span>
                    <p className="text-[#9CA3AF] leading-relaxed">
                      Si todavía crees que amar vale la pena, incluso cuando duele, esta historia probablemente va a tocar algo dentro de ti.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 – SOBRE O LIVRO */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="mt-12 bg-[#0B1220] rounded-3xl p-6 sm:p-8">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F9FAFB] mb-6">
              Lo que vas a encontrar dentro de este libro
            </h2>

            <p className="text-lg text-[#9CA3AF] mb-8 leading-relaxed">
              No es una novela inventada en una oficina.<br />
              Es la historia real de un amor que empezó sencillo, creció entre días comunes y tuvo que aprender a convivir con la despedida.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Lista de capítulos */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-[#D5B166] mb-2">Capítulo 1 – Cuando la vi por primera vez</h3>
                  <p className="text-[#9CA3AF] text-sm">Cómo conocí a la mujer que cambió incluso mis días más simples.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#D5B166] mb-2">Capítulo 2 – Cartas que nunca envié</h3>
                  <p className="text-[#9CA3AF] text-sm">Pensamientos y sentimientos que guardé solo para mí y hoy comparto por primera vez.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#D5B166] mb-2">Capítulo 3 – El día que la vida cambió</h3>
                  <p className="text-[#9CA3AF] text-sm">Hospitales, silencios y palabras que no dije a tiempo.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#D5B166] mb-2">Capítulo 4 – Aprender a vivir con su ausencia</h3>
                  <p className="text-[#9CA3AF] text-sm">Pequeños rituales para seguir sintiéndola cerca, incluso después de su partida.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#D5B166] mb-2">Capítulo 5 – Por qué decidí escribir este libro</h3>
                  <p className="text-[#9CA3AF] text-sm">El verdadero motivo de estar ofreciéndotelo hoy, a ti.</p>
                </div>
              </div>

              {/* Imagem do livro */}
              <div className="h-80 rounded-xl bg-[#050814] flex items-center justify-center">
                {/* TODO: inserir imagen de un libro sencillo sobre una mesa, al lado de una foto antigua desenfocada de una pareja. Tonos sepia. */}
                <p className="text-[#9CA3AF] text-sm text-center px-4">Imagen: Libro + foto antigua</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 – PARA QUEM É */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="mt-12 text-center bg-transparent">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F9FAFB] mb-8">
              Este libro es para ti si…
            </h2>

            <div className="max-w-2xl mx-auto space-y-4 text-left">
              <p className="text-[#9CA3AF] leading-relaxed">
                • Has perdido a alguien y a veces sientes que el mundo siguió sin esperar tu corazón.
              </p>
              <p className="text-[#9CA3AF] leading-relaxed">
                • Guardas cosas de esa persona (una taza, una carta, una foto) porque te da miedo que su recuerdo se vuelva borroso.
              </p>
              <p className="text-[#9CA3AF] leading-relaxed">
                • No buscas un libro perfecto, sino una historia humana, honesta, que te acompañe en días silenciosos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 – PREÇO SIMBÓLICO */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="mt-12 bg-[#F5E8D8] text-slate-900 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl mb-6">
              ¿Por qué pido 4 dólares por esta historia?
            </h2>

            <p className="text-lg mb-6 leading-relaxed">
              Podría guardar este libro solo para mí, pero entonces moriría conmigo.<br />
              Decidí compartirlo como libro digital y ponerle un precio de <strong>solo 4 USD</strong> por dos motivos sencillos:
            </p>

            <ol className="list-decimal list-inside space-y-4 mb-8 text-lg">
              <li className="leading-relaxed">Honrar el tiempo, las lágrimas y el amor que hay en cada página.</li>
              <li className="leading-relaxed">Cubrir los costos para que esta historia pueda seguir viva y llegar a más personas.</li>
            </ol>

            <p className="text-xl font-semibold mb-8 text-center text-[#7A2E3A]">
              Cuesta menos que un café fuera de casa… pero puede acompañarte en muchos días en los que la ausencia aprieta un poco más.
            </p>

            {/* Destaque do preço */}
            <div className="bg-white rounded-xl p-6 mb-6 text-center shadow-lg">
              <p className="text-sm text-[#9CA3AF] mb-2">Libro digital (PDF) · Acceso inmediato</p>
              <p className="text-4xl font-bold text-[#7A2E3A] mb-2">4 USD</p>
              <p className="text-sm text-[#9CA3AF]">pago único</p>
            </div>

            <a 
              href="#checkout" 
              className="block w-full text-center px-8 py-4 bg-[#7A2E3A] hover:bg-[#8a3e4a] text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Quiero llevarme este libro por 4 USD
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO 7 – COMO FUNCIONA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="mt-12 bg-[#0B1220] rounded-3xl p-6 sm:p-8">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F9FAFB] mb-8 text-center">
              ¿Cómo vas a recibir el libro?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">1</div>
                <h3 className="font-semibold text-[#D5B166] mb-3">Pago seguro</h3>
                <p className="text-[#9CA3AF] text-sm">
                  Haces el pago de forma segura a través de [plataforma].
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">2</div>
                <h3 className="font-semibold text-[#D5B166] mb-3">Correo con enlace</h3>
                <p className="text-[#9CA3AF] text-sm">
                  Recibes un correo electrónico con el enlace de descarga del libro digital en PDF.
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">3</div>
                <h3 className="font-semibold text-[#D5B166] mb-3">Lectura en cualquier dispositivo</h3>
                <p className="text-[#9CA3AF] text-sm">
                  Abres el archivo en tu celular, tablet o computadora y lees a tu ritmo, cuando lo necesites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 8 – FECHAMENTO EMOCIONAL */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="relative h-96 rounded-3xl overflow-hidden bg-[#0B1220] flex items-center justify-center">
            {/* TODO: inserir imagen full width com overlay escuro */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
            <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F9FAFB] mb-6">
                Un último pedido de un viejo esposo
              </h2>

              <p className="text-lg text-[#9CA3AF] mb-4 leading-relaxed">
                Si alguna vez alguien hizo algo solo para verte feliz —te escribió una carta, te cocinó, te esperó despierto, te abrazó en silencio— sabes exactamente lo que estoy intentando preservar con este libro.
              </p>

              <p className="text-lg text-[#9CA3AF] mb-8 leading-relaxed">
                No sé quién eres, pero si decides llevarte esta historia, una parte del amor de mi vida también va a caminar contigo.
              </p>

              <a 
                href="#checkout" 
                className="inline-block px-8 py-4 bg-[#7A2E3A] hover:bg-[#8a3e4a] text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Quiero leer la historia de José Luis
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 9 – CHECKOUT */}
      <section id="checkout" className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="mt-12 mb-16 bg-[#0B1220] rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#F9FAFB] mb-4">
              Completa tu compra
            </h2>
            <p className="text-[#9CA3AF] mb-6">
              Aquí va el botón o formulario de pago de la plataforma que vamos a usar (Hotmart, Kiwify, Stripe, etc.).<br />
              Solo necesitas conectar este bloque con tu checkout.
            </p>
            <div className="bg-[#050814] rounded-xl p-8 border border-[#0B1220]">
              <p className="text-[#9CA3AF] text-sm">[Área de checkout]</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;


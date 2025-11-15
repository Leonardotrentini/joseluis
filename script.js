// Configuração inicial
document.addEventListener('DOMContentLoaded', function() {

    // Modal de compra
    const buyButton = document.getElementById('buyButton');
    const purchaseModal = document.getElementById('purchaseModal');
    const closeModal = document.getElementById('closeModal');
    const purchaseForm = document.getElementById('purchaseForm');

    // Abrir modal
    if (buyButton) {
        buyButton.addEventListener('click', function() {
            purchaseModal.classList.add('show');
            document.body.style.overflow = 'hidden';
            
            // Scroll suave para o topo do modal
            purchaseModal.scrollTop = 0;
        });
    }

    // Fechar modal
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            purchaseModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        });
    }

    // Fechar modal ao clicar fora
    if (purchaseModal) {
        purchaseModal.addEventListener('click', function(e) {
            if (e.target === purchaseModal) {
                purchaseModal.classList.remove('show');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Fechar modal com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && purchaseModal.classList.contains('show')) {
            purchaseModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });

    // Validação e envio do formulário
    if (purchaseForm) {
        purchaseForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const payment = document.querySelector('input[name="payment"]:checked').value;

            // Validações básicas
            if (!name || name.length < 3) {
                alert('Por favor, ingrese su nombre completo.');
                return;
            }

            if (!email || !isValidEmail(email)) {
                alert('Por favor, ingrese un e-mail válido.');
                return;
            }

            // Aqui você pode integrar com seu sistema de pagamento
            // Por exemplo: Mercado Pago, PagSeguro, Stripe, etc.
            processPurchase(name, email, phone, payment);
        });
    }

    // Máscara para telefone
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length <= 11) {
                if (value.length <= 10) {
                    value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
                } else {
                    value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
                }
                e.target.value = value;
            }
        });
    }

    // Efeito de scroll suave
    const smoothScroll = document.querySelectorAll('a[href^="#"]');
    smoothScroll.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animação de entrada para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animação
    const animatedElements = document.querySelectorAll('.couple-image-container, .testimonial, .cta-section');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Contador de urgência (opcional - pode ser usado para criar escassez)
    // Você pode adicionar um contador regressivo aqui se desejar
});

// Função para validar e-mail
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Função para processar a compra
function processPurchase(name, email, phone, paymentMethod) {
    // Mostrar loading
    const submitButton = document.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'PROCESSANDO...';
    submitButton.disabled = true;

    // Simular processamento (substitua por integração real com gateway de pagamento)
    setTimeout(() => {
        // Aqui você deve integrar com seu sistema de pagamento
        // Exemplos de integração:
        
        if (paymentMethod === 'pix') {
            // Integração com PIX
            // Exemplo: window.location.href = 'https://seu-sistema.com/pix?amount=4&email=' + email;
            console.log('Procesando pago PIX para:', email);
            alert('Redirigiendo al pago PIX...\n\nEn producción, será redirigido al gateway de pago.');
        } else if (paymentMethod === 'card') {
            // Integração com cartão
            // Exemplo: window.location.href = 'https://seu-sistema.com/card?amount=4&email=' + email;
            console.log('Procesando pago con tarjeta para:', email);
            alert('Redirigiendo al pago con tarjeta...\n\nEn producción, será redirigido al gateway de pago.');
        }

        // Guardar datos del cliente (opcional - para follow-up)
        saveCustomerData(name, email, phone);

        // Resetar botão
        submitButton.textContent = originalText;
        submitButton.disabled = false;

        // Fechar modal após alguns segundos (ou redirecionar)
        // setTimeout(() => {
        //     document.getElementById('purchaseModal').classList.remove('show');
        //     document.body.style.overflow = 'auto';
        // }, 2000);

    }, 1500);
}

// Função para salvar dados do cliente (opcional)
function saveCustomerData(name, email, phone) {
    // Aqui você pode salvar os dados em um banco de dados ou enviar para um CRM
    // Exemplo com fetch:
    /*
    fetch('/api/save-customer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            product: 'ebook-historia-amor',
            price: 4.00
        })
    })
    .then(response => response.json())
    .then(data => console.log('Cliente salvo:', data))
    .catch(error => console.error('Erro ao salvar:', error));
    */
    
    console.log('Datos del cliente:', { name, email, phone });
}

// Función para rastrear conversiones (Google Analytics, Facebook Pixel, etc.)
function trackConversion(eventName, value) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, {
            'value': value,
            'currency': 'USD'
        });
    }

    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Purchase', {
            value: value,
            currency: 'USD'
        });
    }

    console.log('Conversión rastreada:', eventName, value);
}

// Adicionar evento de clique no botão de compra para rastreamento
document.addEventListener('DOMContentLoaded', function() {
    const buyButton = document.getElementById('buyButton');
    if (buyButton) {
        buyButton.addEventListener('click', function() {
            trackConversion('begin_checkout', 4.00);
        });
    }

    // Contador de compradores (prova social dinâmica)
    const buyerCountElement = document.getElementById('buyer-count');
    if (buyerCountElement) {
        // Simular contador crescente (em produção, buscar do servidor)
        let baseCount = 127;
        const storedCount = localStorage.getItem('buyerCount');
        if (storedCount) {
            baseCount = parseInt(storedCount);
        } else {
            localStorage.setItem('buyerCount', baseCount.toString());
        }

        // Incrementar ocasionalmente para criar urgência
        setInterval(() => {
            if (Math.random() > 0.7) { // 30% de chance a cada intervalo
                baseCount += Math.floor(Math.random() * 3) + 1;
                localStorage.setItem('buyerCount', baseCount.toString());
                buyerCountElement.textContent = baseCount;
                
                // Efeito de destaque
                buyerCountElement.style.transform = 'scale(1.2)';
                buyerCountElement.style.color = '#8b4a3c';
                setTimeout(() => {
                    buyerCountElement.style.transform = 'scale(1)';
                    buyerCountElement.style.color = '#8b4a3c';
                }, 300);
            }
        }, 15000); // Verificar a cada 15 segundos

        buyerCountElement.textContent = baseCount;
    }
});

// Función para mostrar notificación de éxito (opcional)
function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <div class="success-content">
            <h3>✓ ¡Compra realizada con éxito!</h3>
            <p>Recibirá el ebook por e-mail en instantes.</p>
        </div>
    `;
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.style.opacity = '1';
    }, 100);
    
    setTimeout(() => {
        successDiv.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(successDiv);
        }, 300);
    }, 5000);
}


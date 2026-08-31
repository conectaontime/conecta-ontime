const coursesData = {
    excel: {
        title: "EXCEL",
        logo: "logo-excel.png",
        content: `
            <p><strong>Data:</strong> 06/07 a 19/08</p>
            <p><strong>Local:</strong> Auditório, 3º andar (Edifício NBC)</p>
            <p><strong>Horário:</strong> Segundas, quartas e sextas, das 17h30 às 19h00 (Sextas a partir de 10/08: 16h30 às 18h00).</p>
            <br>
            <strong>Regras e Orientações:</strong>
            <ul>
                <li>A participação na aula inaugural (06/07) é <strong>obrigatória</strong>.</li>
                <li>Notebook obrigatório. Aparelhos corporativos devem ser devolvidos ao escritório após cada aula.</li>
                <li>Proibido comer no auditório. Leve apenas garrafa de água.</li>
                <li>Formato online: liberado <strong>exclusivamente</strong> para casos excepcionais e justificados.</li>
            </ul>
            <div class="info-highlight">
                <i class="fas fa-info-circle"></i>
                Entre em contato com o RH para consultar a disponibilidade de turmas e as próximas oportunidades de capacitação.
            </div>
        `
    },
    powerbi: {
        title: "POWER BI",
        logo: "logo-powerbi.png",
        content: `
            <p><strong>Status:</strong> Em fase de estruturação.</p>
            <br>
            <p>Transforme dados em informações estratégicas com o Power BI. O curso abordará desde os conceitos fundamentais da ferramenta até a criação de dashboards interativos, modelagem de dados, visualizações e análise de indicadores, proporcionando mais eficiência na tomada de decisões.</p>
            <br>
            <p>Ao final, todos os participantes receberão certificado de conclusão.</p>
        `
    },
    seguranca: {
        title: "Segurança da Informação",
        logo: "logo-seguranca.png",
        content: `
            <p><strong>Status:</strong> Em fase de estruturação.</p>
            <br>
            <p>Treinamento corporativo focado em <strong>Boas Práticas e Compliance</strong>.</p>
            <p>O conteúdo irá abranger as políticas internas da On Time Log, prevenção contra ameaças digitais e as regras de proteção de dados e privacidade no ambiente corporativo.</p>
        `
    }
};

const policiesData = {
    diversidade: {
        title: "Política de Prevenção à Discriminação e Promoção da Diversidade",
        content: `
            <h4>Nosso compromisso</h4>
            <p>Na On Time, acreditamos que a diversidade fortalece as relações, amplia perspectivas e contribui para um ambiente de trabalho mais colaborativo, inovador e respeitoso. Temos o compromisso permanente de promover uma cultura organizacional baseada na igualdade de oportunidades, na valorização das diferenças e no respeito à dignidade de todas as pessoas.</p>
            <p>Esta política estabelece as diretrizes que orientam a prevenção de qualquer forma de discriminação no ambiente de trabalho, reforçando o compromisso da empresa com a inclusão, a equidade e o tratamento justo de todos os colaboradores.</p>
            
            <h4>Objetivo</h4>
            <p>Esta política tem como objetivo estabelecer princípios e diretrizes para prevenir qualquer forma de discriminação dentro da On Time, promovendo um ambiente organizacional fundamentado no respeito à diversidade, na equidade e na inclusão.</p>
            
            <h4>A quem esta política se aplica?</h4>
            <p>As diretrizes desta política são aplicáveis a: Colaboradores; Gestores e Diretores; Estagiários; Prestadores de serviços e Terceiros; Parceiros comerciais e demais pessoas que mantenham relacionamento profissional com a empresa.</p>
            <p>Todos possuem a responsabilidade de contribuir para um ambiente de trabalho respeitoso e livre de discriminação.</p>
            
            <h4>Compromissos da On Time</h4>
            <p>Como parte da nossa cultura organizacional, a On Time compromete-se a:</p>
            <ul>
                <li>Repudiar qualquer forma de discriminação motivada por raça, cor, etnia, sexo, identidade de gênero, orientação sexual, idade, estado civil, religião, nacionalidade, deficiência, condição de saúde, origem social, opinião política ou qualquer outro fator protegido por lei.</li>
                <li>Garantir que processos de contratação, promoção, desenvolvimento e reconhecimento sejam realizados com base no mérito, na competência e no desempenho profissional.</li>
                <li>Promover um ambiente inclusivo, onde todas as pessoas sejam tratadas com respeito, dignidade e igualdade.</li>
                <li>Desenvolver ações preventivas, educativas e corretivas sempre que identificadas situações incompatíveis com esta política.</li>
            </ul>
            
            <h4>Canal de denúncia</h4>
            <p>Qualquer situação que represente discriminação, preconceito ou tratamento desigual deve ser comunicada por meio do canal oficial e confidencial da empresa.</p>
            <p>E-mail do Canal de Denúncias: <span class="highlight-email">centraldedenuncia@ontimelogistica.com.br</span></p>
            <p>Todas as manifestações serão tratadas com responsabilidade, confidencialidade e imparcialidade.</p>
            
            <h4>Meta Institucional</h4>
            <p>A On Time busca manter permanentemente um ambiente de trabalho inclusivo, respeitoso e livre de qualquer forma de discriminação, fortalecendo uma cultura baseada na igualdade de oportunidades e no respeito às diferenças.</p>
            
            <h4>Descumprimento da Política</h4>
            <p>A violação desta política poderá resultar na aplicação de medidas disciplinares, incluindo advertência, suspensão ou rescisão contratual, sem prejuízo das demais sanções previstas na legislação aplicável.</p>
            
            <h4>Nosso compromisso com você</h4>
            <p>Construir um ambiente diverso e inclusivo é uma responsabilidade compartilhada. Esperamos que cada colaborador contribua diariamente para relações profissionais pautadas pelo respeito, pela empatia e pela valorização das diferenças, fortalecendo uma cultura organizacional ética e acolhedora.</p>
        `
    },
    assedio: {
        title: "Política de Prevenção e Combate ao Assédio Moral e Sexual",
        content: `
            <h4>Nosso compromisso</h4>
            <p>A On Time não tolera qualquer forma de assédio moral ou sexual. Promover um ambiente de trabalho seguro, ético, respeitoso e livre de constrangimentos é uma responsabilidade compartilhada por todos.</p>
            <p>Esta política estabelece diretrizes para prevenir, identificar e combater condutas inadequadas, protegendo a dignidade, a integridade física e emocional e o bem-estar de todos os colaboradores.</p>
            
            <h4>Objetivo</h4>
            <p>Esta política tem como finalidade prevenir, identificar e combater quaisquer formas de assédio moral e sexual no ambiente de trabalho, promovendo relações profissionais baseadas no respeito, na ética e na valorização das pessoas.</p>
            
            <h4>Abrangência</h4>
            <p>Esta política aplica-se a todos os Diretores, Gestores, Colaboradores, Estagiários, Terceirizados, Prestadores de serviços e Parceiros da empresa. Todos são responsáveis por manter um ambiente de trabalho saudável e respeitoso.</p>
            
            <h4>O que é Assédio Moral?</h4>
            <p>Considera-se assédio moral toda conduta abusiva, repetitiva ou frequente que tenha como objetivo ou consequência humilhar, constranger, desqualificar, intimidar ou desestabilizar emocionalmente uma pessoa durante suas atividades profissionais.</p>
            
            <h4>O que é Assédio Sexual?</h4>
            <p>Entende-se como assédio sexual qualquer comportamento de natureza sexual, físico ou verbal, não desejado pela vítima, que provoque constrangimento, intimidação ou viole sua dignidade.</p>
            
            <h4>Compromissos da On Time</h4>
            <p>Para garantir um ambiente de trabalho seguro, a empresa compromete-se a:</p>
            <ul>
                <li>Promover ações de conscientização e treinamentos sobre prevenção ao assédio.</li>
                <li>Garantir acolhimento, sigilo e proteção às pessoas envolvidas em denúncias.</li>
                <li>Investigar todas as denúncias com imparcialidade e responsabilidade.</li>
                <li>Adotar as medidas disciplinares cabíveis sempre que houver comprovação da infração.</li>
            </ul>
            
            <h4>Canal de Denúncia</h4>
            <p>Caso presencie ou seja vítima de qualquer situação de assédio, utilize o canal oficial de denúncias da empresa.</p>
            <p>E-mail do Canal de Denúncias: <span class="highlight-email">centraldedenuncia@ontimelogistica.com.br</span></p>
            <p>Todas as denúncias serão tratadas com confidencialidade, respeito e imparcialidade.</p>
            
            <h4>Meta Institucional e Sanções</h4>
            <p>Manter um ambiente de trabalho ético, saudável e completamente livre de qualquer forma de assédio moral ou sexual. O assédio constitui falta grave e poderá resultar em advertência, suspensão ou demissão por justa causa, além das sanções civis e penais previstas na legislação vigente.</p>
            
            <h4>Nosso compromisso com você</h4>
            <p>A construção de um ambiente de trabalho respeitoso depende da participação de todos. A On Time reforça diariamente seu compromisso com relações profissionais éticas, responsáveis e livres de qualquer forma de violência, intimidação ou constrangimento.</p>
        `
    },
    etica: {
        title: "Código de Ética e Conduta Administrativa",
        content: `
            <h4>Ética, Integridade e Responsabilidade em Todas as Nossas Ações</h4>
            <p>O Código de Ética e Conduta Administrativa da On Time foi desenvolvido para orientar a atuação de todos os colaboradores, gestores, parceiros e prestadores de serviços, estabelecendo os princípios que norteiam nossas decisões, comportamentos e relações profissionais.</p>
            <p>Mais do que um conjunto de regras, este Código representa o compromisso da empresa com a honestidade, a integridade, a transparência e o respeito às pessoas, fortalecendo uma cultura organizacional pautada pela responsabilidade, pelo cumprimento da legislação e pela excelência na prestação de serviços.</p>
            <p>Esperamos que todos os profissionais conheçam, compreendam e coloquem em prática os princípios aqui apresentados, contribuindo diariamente para um ambiente de trabalho seguro, ético e colaborativo.</p>
            
            <h4>Nosso Propósito e Valores</h4>
            <p>O Código de Ética tem como finalidade orientar a condução dos negócios da On Time e estabelecer padrões de comportamento compatíveis com nossos valores organizacionais, promovendo relações profissionais baseadas na confiança, no respeito mútuo e na responsabilidade.</p>
            <p>Os princípios que orientam nossas atividades são:</p>
            <ul>
                <li>Respeito e valorização das pessoas;</li>
                <li>Excelência na prestação de serviços com foco em resultados;</li>
                <li>Ética, integridade e conformidade com a legislação;</li>
                <li>Sustentabilidade econômica, social e ambiental.</li>
            </ul>
            
            <h4>Abrangência e Compromisso com a Legislação</h4>
            <p>Este Código aplica-se obrigatoriamente a todos os colaboradores, diretores, parceiros e prestadores de serviços. A On Time conduz seus negócios em conformidade com a legislação brasileira e repudia qualquer prática que viole os direitos humanos ou os princípios éticos da organização.</p>
            <p>Não são admitidas práticas relacionadas a discriminação, trabalho infantil ou em condições degradantes, corrupção, fraudes, assédio moral ou sexual, ou condutas que atentem contra a dignidade das pessoas.</p>
            
            <h4>Uso Responsável dos Recursos e Confidencialidade</h4>
            <p>Os equipamentos, sistemas, redes e demais recursos tecnológicos destinam-se exclusivamente às atividades profissionais. Espera-se que todos os colaboradores utilizem esses recursos com responsabilidade, segurança e zelo pelo patrimônio da empresa.</p>
            <p>A proteção das informações é responsabilidade de todos. Informações técnicas, operacionais, financeiras ou estratégicas devem permanecer sob absoluto sigilo durante e após o vínculo profissional.</p>
            
            <h4>Conflito de Interesses e Política Antissuborno</h4>
            <p>Os colaboradores devem atuar sempre em benefício dos interesses da empresa, evitando situações que possam comprometer sua imparcialidade (ex: favorecimentos pessoais, atividades paralelas incompatíveis).</p>
            <p>A On Time adota tolerância zero para qualquer prática de corrupção. É expressamente proibido oferecer, prometer, solicitar ou receber qualquer tipo de vantagem indevida, pagamento ilícito ou benefício que tenha como objetivo influenciar decisões comerciais ou administrativas.</p>
            
            <h4>Conduta no Ambiente de Trabalho</h4>
            <p>Espera-se que todos contribuam para um ambiente profissional organizado, seguro e respeitoso, cumprindo os procedimentos internos e respeitando colegas, clientes e parceiros. É proibido comercializar produtos nas dependências, consumir drogas ou bebidas alcoólicas, fumar em locais fechados e portar armas.</p>
            
            <h4>Responsabilidade com a Imagem da On Time</h4>
            <p>Cada colaborador representa a empresa dentro e fora do ambiente de trabalho. Por isso, espera-se comportamento ético também nas redes sociais e em demais espaços públicos, preservando a reputação institucional.</p>
            
            <h4>Comitê de Ética, Infrações e Canal de Comunicação</h4>
            <p>A aplicação deste Código é acompanhada pelo Comitê de Ética da On Time. O descumprimento poderá resultar em medidas disciplinares, incluindo advertências, suspensões ou rescisão de contrato por justa causa.</p>
            <p>Todos os colaboradores têm o dever de comunicar qualquer situação que represente violação através do Departamento de Recursos Humanos ou canais oficiais, garantindo tratamento responsável, imparcial e confidencial.</p>
        `
    },
    vestimenta: {
        title: "Código de Vestimenta e Apresentação Pessoal",
        content: `
            <h4>1. OBJETIVO</h4>
            <p>Estabelecer diretrizes mínimas de vestimenta e apresentação pessoal dos colaboradores, visando:</p>
            <ul>
                <li>Manter padrão de profissionalismo;</li>
                <li>Preservar a imagem institucional da empresa;</li>
                <li>Garantir segurança no ambiente de trabalho;</li>
                <li>Assegurar ambiente organizacional adequado e respeitoso.</li>
            </ul>

            <h4>2. APLICABILIDADE</h4>
            <p>Esta política aplica-se a: Empregados CLT; Prestadores de serviços; Terceiros que atuem nas dependências da empresa; Colaboradores em trabalho externo quando representarem a empresa.</p>

            <h4>3. DIRETRIZES GERAIS</h4>
            <p>Todos os colaboradores devem manter:</p>
            <ul>
                <li>Vestimenta limpa e em bom estado de conservação;</li>
                <li>Roupas compatíveis com o ambiente corporativo;</li>
                <li>Apresentação pessoal adequada ao exercício da função.</li>
            </ul>
            <p>O padrão adotado pela empresa é casual profissional (business casual), salvo quando exigido uniforme ou EPI específico.</p>

            <h4>4. ITENS NÃO PERMITIDOS</h4>
            <p>Fica expressamente vedado o uso de:</p>
            <ul>
                <li>Boné, gorro ou chapéu (salvo quando exigido por função operacional ou segurança);</li>
                <li>Chinelo nuvem de qualquer natureza;</li>
                <li>Roupas rasgadas ou excessivamente desgastadas;</li>
                <li>Regatas ou camisetas cavadas (masculino);</li>
                <li>Bermudas (salvo autorização expressa para atividades específicas);</li>
                <li>Roupas com estampas ofensivas, políticas ou inadequadas ao ambiente profissional;</li>
                <li>Vestimentas excessivamente curtas, transparentes ou incompatíveis com ambiente corporativo.</li>
            </ul>

            <h4>5. UNIFORMES E EPI’s</h4>
            <p>O uso de EPIs seguirá as normas de segurança do trabalho e deverá ser rigorosamente observado.</p>

            <h4>6. SITUAÇÕES ESPECIAIS</h4>
            <p>A empresa poderá: Flexibilizar o dress code em datas específicas; Determinar padrões específicos para eventos, visitas de clientes ou auditorias.</p>

            <h4>7. VEDAÇÃO E APLICAÇÃO NAS DEPENDÊNCIAS DA EMPRESA</h4>
            <p>Para fins desta política, considera-se dependência da empresa: Áreas internas administrativas; Áreas operacionais e logísticas; Pátios, estacionamentos e áreas externas pertencentes ou locadas pela empresa; Portarias e áreas de acesso controlado; Veículos corporativos; Qualquer local onde o colaborador esteja representando formalmente a empresa.</p>
        `
    }
};

window.openModal = function(courseId) {
    const course = coursesData[courseId];
    if (course) {
        document.getElementById('modalLogo').src = course.logo;
        document.getElementById('modalTitle').innerText = course.title;
        document.getElementById('modalContent').innerHTML = course.content;
        document.getElementById('courseModal').classList.add('active');
    }
}
window.closeModal = function() {
    const modal = document.getElementById('courseModal');
    if(modal) modal.classList.remove('active');
}

window.openPolicyModal = function(policyId) {
    const policy = policiesData[policyId];
    if (policy) {
        document.getElementById('policyModalTitle').innerText = policy.title;
        document.getElementById('policyModalContent').innerHTML = policy.content;
        document.getElementById('policyModal').classList.add('active');
    }
}
window.closePolicyModal = function() {
    const modal = document.getElementById('policyModal');
    if(modal) modal.classList.remove('active');
}

window.openCareersModal = function() {
    const modal = document.getElementById('careersModal');
    if(modal) modal.classList.add('active');
}
window.closeCareersModal = function() {
    const modal = document.getElementById('careersModal');
    if(modal) modal.classList.remove('active');
}

/* Nova função do Modal de Ideias (Programa de Engajamento) */
window.openIdeaModal = function() {
    const modal = document.getElementById('ideaModal');
    if(modal) modal.classList.add('active');
}
window.closeIdeaModal = function() {
    const modal = document.getElementById('ideaModal');
    if(modal) modal.classList.remove('active');
}

// =========================================
// LÓGICA DO GIRO ON TIME E CARROSSEL
// =========================================

let currentItems = [];
let currentIndex = 0;

window.openLightbox = function(element) {
    currentItems = Array.from(document.querySelectorAll('.gallery-item:not(.hide)'));
    currentIndex = currentItems.indexOf(element);
    updateLightboxContent();
    document.getElementById('lightboxOverlay').classList.add('active');
}

window.closeLightbox = function(e) {
    if (e && (e.target.tagName === 'IMG' || e.target.classList.contains('lightbox-nav') || e.target.tagName === 'P')) return; 
    document.getElementById('lightboxOverlay').classList.remove('active');
}

window.nextImage = function(e) {
    if(e) e.stopPropagation();
    if(currentItems.length === 0) return;
    currentIndex = (currentIndex + 1) % currentItems.length;
    updateLightboxContent();
}

window.prevImage = function(e) {
    if(e) e.stopPropagation();
    if(currentItems.length === 0) return;
    currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
    updateLightboxContent();
}

function updateLightboxContent() {
    const item = currentItems[currentIndex];
    const img = item.querySelector('img').src;
    const caption = item.querySelector('p').innerText;
    document.getElementById('lightboxImage').src = img;
    document.getElementById('lightboxCaption').innerText = caption;
}

let slideIndex = 0;
let slideTimer;

function startCarousel() {
    clearInterval(slideTimer);
    const track = document.getElementById('carouselTrack');
    const slides = document.querySelectorAll('.carousel-slide');
    if(!track || slides.length === 0) return;
    
    slideTimer = setInterval(() => {
        slideIndex++;
        if (slideIndex >= slides.length) { 
            slideIndex = 0; 
        }
        track.style.transform = `translateX(-${slideIndex * 100}%)`;
    }, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    
    const galleryItems = document.querySelectorAll('.gallery-item');
    const carouselTrack = document.getElementById('carouselTrack');
    
    if(carouselTrack && galleryItems.length > 0) {
        galleryItems.forEach(item => {
            const imgSrc = item.querySelector('img').src;
            const caption = item.querySelector('p').innerText;
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.innerHTML = `<img src="${imgSrc}" alt="On Time"><div class="carousel-caption">${caption}</div>`;
            carouselTrack.appendChild(slide);
        });
        startCarousel();
    }

    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryGrid = document.getElementById('mainGalleryGrid');
    const autoCarousel = document.getElementById('autoCarousel');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            if (filterValue === 'all') {
                if(autoCarousel) autoCarousel.style.display = 'block';
                if(galleryGrid) galleryGrid.style.display = 'none';
                startCarousel();
            } else {
                if(autoCarousel) autoCarousel.style.display = 'none';
                if(galleryGrid) galleryGrid.style.display = 'grid';
                clearInterval(slideTimer); 

                galleryItems.forEach(item => {
                    if (item.classList.contains(filterValue)) {
                        item.classList.remove('hide');
                    } else {
                        item.classList.add('hide');
                    }
                });
            }
        });
    });

    // Fechar modais ao clicar fora
    const modals = [
        { id: 'courseModal', closeFn: closeModal },
        { id: 'policyModal', closeFn: closePolicyModal },
        { id: 'careersModal', closeFn: closeCareersModal },
        { id: 'ideaModal', closeFn: closeIdeaModal }
    ];

    modals.forEach(modalData => {
        const modalElement = document.getElementById(modalData.id);
        if (modalElement) {
            modalElement.addEventListener('click', function(e) {
                if (e.target === this) {
                    modalData.closeFn();
                }
            });
        }
    });
});
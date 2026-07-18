const articles = [
  {
    tag: { pt: 'Medium · Artigo', en: 'Medium · Article', es: 'Medium · Artículo' },
    title: {
      pt: 'Inglaterra, a seleção embalada pelos seus ídolos.',
      en: 'England, the national team carried by its idols.',
      es: 'Inglaterra, la selección arropada por sus ídolos.',
    },
    excerpt: {
      pt: 'The Beatles, Oasis, Jude Bellingham, Harry Kane. Tudo, sob os olhos de David Beckham.',
      en: 'The Beatles, Oasis, Jude Bellingham, Harry Kane. All of it, under the eyes of David Beckham.',
      es: 'The Beatles, Oasis, Jude Bellingham, Harry Kane. Todo, bajo los ojos de David Beckham.',
    },
    date: 'Jul 13, 2026',
    url: 'https://medium.com/@oqueabahviu/inglaterra-a-sele%C3%A7%C3%A3o-embalada-pelos-seus-%C3%ADdolos-babeafae2c4b',
  },
  {
    tag: { pt: 'Medium · Artigo', en: 'Medium · Article', es: 'Medium · Artículo' },
    title: {
      pt: 'Acabou a Olimpíada e o foco agora é 2027. Mas qual caminho seguir?',
      en: 'The Olympics are over and the focus is now 2027. But which path to follow?',
      es: 'Terminaron los Juegos Olímpicos y el foco ahora es 2027. ¿Pero qué camino seguir?',
    },
    excerpt: {
      pt: 'A seleção brasileira feminina conseguiu, após 16 anos, chegar a uma final olímpica e ficou com a prata. A partir de agora, o foco muda, e a Copa do Mundo de 2027 passa a ser o grande objetivo, mas há pontos de atenção.',
      en: 'The Brazilian women\'s national team reached an Olympic final for the first time in 16 years and took silver. From now on, the focus shifts — the 2027 World Cup becomes the main goal, but there are key points to watch.',
      es: 'La selección femenina brasileña consiguió, tras 16 años, llegar a una final olímpica y se quedó con la plata. A partir de ahora, el foco cambia, y la Copa del Mundo de 2027 pasa a ser el gran objetivo, aunque hay puntos a tener en cuenta.',
    },
    date: 'Ago 20, 2024',
    url: 'https://medium.com/@barbaranunes_12459/acabou-a-olimp%C3%ADada-e-o-foco-agora-%C3%A9-2027-mas-qual-caminho-seguir-8fb42d705a81',
  },
  {
    tag: { pt: 'Medium · Artigo', en: 'Medium · Article', es: 'Medium · Artículo' },
    title: {
      pt: 'O espelho no meio de campo: o futebol reflete a sociedade que o assiste (2)',
      en: 'The mirror in midfield: football reflects the society that watches it (2)',
      es: 'El espejo en el mediocampo: el fútbol refleja la sociedad que lo observa (2)',
    },
    excerpt: {
      pt: 'Hoje, três dias após o dia da Consciência Negra, Rodrygo Goes (jogador da seleção brasileira e do Real Madrid) compartilhou em suas redes sociais que está sofrendo ataques racistas. Você pode ver a postagem aqui.',
      en: 'Three days after Black Awareness Day, Rodrygo Goes (Brazil and Real Madrid) shared on social media that he is suffering racist attacks. You can see the post here.',
      es: 'Hoy, tres días después del Día de la Consciencia Negra, Rodrygo Goes (jugador de la selección brasileña y del Real Madrid) compartió en sus redes sociales que está sufriendo ataques racistas. Puedes ver la publicación aquí.',
    },
    date: 'Nov 23, 2023',
    url: 'https://medium.com/@barbaranunes_12459/o-espelho-no-meio-de-campo-o-futebol-reflete-a-sociede-que-o-assiste-2-0df13d67c208',
  },
];

function renderArticles(lang) {
  const grid = document.getElementById('articles-grid');
  if (!grid) return;
  const readLabel = lang === 'en' ? 'Read on Medium →' : lang === 'es' ? 'Leer en Medium →' : 'Ler no Medium →';
  grid.innerHTML = articles.map(a => `
    <a class="article-card" href="${a.url}" target="_blank" rel="noopener">
      <span class="article-tag">${a.tag[lang] || a.tag.pt}</span>
      <h3>${a.title[lang] || a.title.pt}</h3>
      <p>${a.excerpt[lang] || a.excerpt.pt}</p>
      <div class="article-footer">
        <span class="article-date">${a.date}</span>
        <span class="article-link">${readLabel}</span>
      </div>
    </a>
  `).join('');
}

const translations = {
  pt: {
    'nav.sobre': 'Sobre',
    'nav.experiencia': 'Experiência',
    'nav.projetos': 'Projetos',
    'nav.contato': 'Contato',
    'hero.label': 'Jornalismo esportivo',
    'hero.h1': 'Eu uso <br/>o <em>futebol</em><br/>para contar histórias',
    'hero.p': 'Jornalista esportiva com foco em futebol masculino e feminino, criação de conteúdo, análise tática e produção audiovisual. Do campo à tela, com profundidade.',
    'hero.btn1': 'Ver projetos →',
    'hero.btn2': 'Entrar em contato',
    'hero.tag.label': 'Disponível para',
    'hero.tag.strong': 'Freelance & Projetos',
    'sobre.label': 'Sobre mim',
    'sobre.h2': 'Do esporte<br/>à narrativa.',
    'sobre.stat1': 'Participações como comentarista em jogos e programas esportivos',
    'sobre.stat2': 'Anos de experiência',
    'sobre.stat3': 'Plataformas de transmissão',
    'sobre.stat4': 'Projetos desenvolvidos',
    'sobre.p1': 'Natural de Recife, Pernambuco, Bárbara Nunes construiu uma relação intensa com o esporte - primeiro, praticando diversos esportes na infância e adolescência, depois como comentarista e analista apaixonada pela tática e pela história que cada jogo carrega.',
    'sobre.p2': 'Através do jornalismo, busca amplificar as histórias de atletas e oferecer análises aprofundadas que vão além do placar: o contexto, a estratégia, as pessoas por trás de cada conquista.',
    'sobre.p3': 'Com passagem por plataformas como SportyNet, LiveBasketball BR, OneFootball, DSports e CBFTv, atua em transmissões ao vivo, produção de documentários e conteúdos em redes sociais, VTs e séries analíticas, além de locuções publicitárias para eventos de boxe na emissora DAZN.',
    'sobre.p4': 'Hoje concentra sua energia no futebol masculino e feminino, em clubes e seleções, acompanhando de perto a evolução do esporte em ligas como Bundesliga, La Liga, Ligue 1, Premier League e Serie A.',
    'exp.label': 'Experiência',
    'exp.h2': 'Onde já atuei.',
    'exp.sportynet.h3': 'Transmissões Nacionais e Internacionais ao vivo',
    'exp.sportynet.p': 'Comentários e locução publicitária para campanhas institucionais da plataforma, cobrindo competições nacionais e internacionais.',
    'exp.onefootball.h3': 'Comentarista da Bundesliga',
    'exp.onefootball.p': 'Comentários em transmissões ao vivo da liga para a plataforma global de futebol.',
    'exp.dsports.h3': 'Competições Sul-americanas',
    'exp.dsports.p': 'Comentários em transmissões ao vivo da Copa Equador, Copa Argentina e Liga BetPlay Dimayor (Campeonato Colombiano).',
    'exp.livebasket.h3': 'Transmissão ao vivo - Basquete Nacional',
    'exp.livebasket.p': 'Reportagem de quadra em transmissões do basquete brasileiro feminino ao vivo no canal do Youtube, ajudando a ampliar o alcance do esporte.',
    'exp.dazn.h3': 'Narração - Eventos de Boxe',
    'exp.dazn.p': 'Responsável pela narração oficial das chamadas publicitárias para lutas em eventos de boxe transmitidos pela plataforma.',
    'exp.pff.h3': 'Futebol Feminino - Cobertura especial',
    'exp.pff.p': 'Participações como Comentarista e Apresentadora do PFF Debate, cobrindo o futebol feminino nacional e internacional, acompanhando a evolução do esporte e os preparativos para a Copa do Mundo em 2027.',
    'proj.label': 'Projetos',
    'proj.h2': 'O que já contei.',
    'proj.leoas.tag': 'Documentário · 2025',
    'proj.leoas.p': 'Documentário que acompanha o retorno do time feminino do Sport Club do Recife ao Campeonato Brasileiro A1. Uma história de superação, identidade e futebol nordestino.',
    'proj.rota.tag': 'Série · Copa 2027',
    'proj.rota.p': 'Em parceria com Amanda Viana, projeto especial que acompanha a preparação da seleção brasileira feminina para a Copa do Mundo de 2027, sediada no Brasil.',
    'proj.info.tag': 'YouTube · Análise',
    'proj.info.p': 'Série de vídeos no YouTube com análises estatísticas e desdobramentos táticos das principais competições do futebol masculino - para quem quer entender o jogo a fundo.',
    'badge.concluido': 'Concluído',
    'badge.andamento': 'Em andamento',
    'nav.artigos': 'Artigos',
    'artigos.label': 'Medium',
    'artigos.h2': 'O que escrevi.',
    'reels.label': 'No Instagram',
    'reels.h2': 'O jogo além<br/>do placar.',
    'contato.label': 'Contato',
    'contato.h2': 'Vamos<br/>trabalhar juntos.',
    'contato.p': 'Disponível para coberturas jornalísticas, comentários esportivos, análise tática, produção audiovisual e projetos especiais ligados ao futebol.',
    'contato.nome': 'Nome',
    'contato.assunto': 'Assunto',
    'contato.mensagem': 'Sua mensagem...',
    'contato.btn': 'Enviar mensagem →',
    'contato.success': 'Mensagem enviada ✓',
    'footer.copy': '© 2026 Bárbara Nunes - Jornalista Esportiva',
    'strip': ['Futebol Inglês', 'Futebol Alemão', 'Futebol Espanhol', 'Criação de Conteúdo', 'Análise Tática', 'Comentarista Esportiva'],
  },
  en: {
    'nav.sobre': 'About',
    'nav.experiencia': 'Experience',
    'nav.projetos': 'Projects',
    'nav.contato': 'Contact',
    'hero.label': 'Sports journalism',
    'hero.h1': 'I use <br/><em>football</em><br/>to tell stories',
    'hero.p': 'Sports journalist focused on men\'s and women\'s football, content creation, tactical analysis and audiovisual production. From the pitch to the screen, with depth.',
    'hero.btn1': 'See projects →',
    'hero.btn2': 'Get in touch',
    'hero.tag.label': 'Available for',
    'hero.tag.strong': 'Freelance & Projects',
    'sobre.label': 'About me',
    'sobre.h2': 'From sports<br/>to storytelling.',
    'sobre.stat1': 'Appearances as commentator in games and sports programs',
    'sobre.stat2': 'Years of experience',
    'sobre.stat3': 'Broadcast platforms',
    'sobre.stat4': 'Projects developed',
    'sobre.p1': 'From Recife, Pernambuco, Bárbara Nunes built an intense relationship with sport - first, practicing various sports in childhood and adolescence, then as a commentator and analyst passionate about tactics and the story each game carries.',
    'sobre.p2': 'Through journalism, she seeks to amplify athletes\' stories and offer in-depth analysis that goes beyond the scoreboard: the context, the strategy, the people behind each achievement.',
    'sobre.p3': 'With experience at platforms such as SportyNet, LiveBasketball BR, OneFootball, DSports and CBFTv, she works in live broadcasts, documentary production, social media content, VTs and analytical series, as well as voice-over work for boxing events on DAZN.',
    'sobre.p4': 'Today she focuses her energy on men\'s and women\'s football, clubs and national teams, following the evolution of the sport across leagues like the Bundesliga, La Liga, Ligue 1, Premier League and Serie A.',
    'exp.label': 'Experience',
    'exp.h2': 'Where I\'ve worked.',
    'exp.sportynet.h3': 'National & International Live Broadcasts',
    'exp.sportynet.p': 'Commentary and voice-over for institutional campaigns on the platform, covering national and international competitions.',
    'exp.onefootball.h3': 'Bundesliga Commentator',
    'exp.onefootball.p': 'Live match commentary for the global football platform.',
    'exp.dsports.h3': 'South American Competitions',
    'exp.dsports.p': 'Live commentary for Copa Ecuador, Copa Argentina and the Liga BetPlay Dimayor from Colombian football.',
    'exp.livebasket.h3': 'Live Broadcast - National Basketball',
    'exp.livebasket.p': 'Court-side reporting in live broadcasts of Brazilian women\'s basketball on YouTube, helping expand the sport\'s reach.',
    'exp.dazn.h3': 'Voice-over - Boxing Events',
    'exp.dazn.p': 'Responsible for the official voice-over of promotional announcements for boxing bouts broadcast on the platform.',
    'exp.pff.h3': 'Women\'s Football - Special Coverage',
    'exp.pff.p': 'Appearances as Commentator and Host of PFF Debate, covering national and international women\'s football and tracking the build-up to the 2027 World Cup.',
    'proj.label': 'Projects',
    'proj.h2': 'What I\'ve told.',
    'proj.leoas.tag': 'Documentary · 2025',
    'proj.leoas.p': 'Documentary following the return of Sport Club do Recife\'s women\'s team to the Brazilian Championship A1. A story of resilience, identity and northeastern football.',
    'proj.rota.tag': 'Series · World Cup 2027',
    'proj.rota.p': 'In partnership with Amanda Viana, a special project tracking the Brazilian women\'s national team\'s preparation for the 2027 World Cup, hosted in Brazil.',
    'proj.info.tag': 'YouTube · Analysis',
    'proj.info.p': 'YouTube video series featuring statistical analysis and tactical breakdowns of the main men\'s football competitions - for those who want to understand the game deeply.',
    'badge.concluido': 'Finished',
    'badge.andamento': 'In progress',
    'nav.artigos': 'Articles',
    'artigos.label': 'Medium',
    'artigos.h2': 'What I\'ve written.',
    'reels.label': 'On Instagram',
    'reels.h2': 'Beyond<br/>the scoreboard.',
    'contato.label': 'Contact',
    'contato.h2': 'Let\'s<br/>work together.',
    'contato.p': 'Available for journalistic coverage, sports commentary, tactical analysis, audiovisual production and special projects related to football.',
    'contato.nome': 'Name',
    'contato.assunto': 'Subject',
    'contato.mensagem': 'Your message...',
    'contato.btn': 'Send message →',
    'contato.success': 'Message sent ✓',
    'footer.copy': '© 2026 Bárbara Nunes - Sports Journalist',
    'strip': ['English Football', 'German Football', 'Spanish Football', 'Content Creation', 'Tactical Analysis', 'Sports Commentator'],
  },
  es: {
    'nav.sobre': 'Sobre mí',
    'nav.experiencia': 'Experiencia',
    'nav.projetos': 'Proyectos',
    'nav.contato': 'Contacto',
    'hero.label': 'Periodismo deportivo',
    'hero.h1': 'Uso el <br/><em>fútbol</em><br/>para contar historias',
    'hero.p': 'Periodista deportiva enfocada en el fútbol masculino y femenino, creación de contenido, análisis táctico y producción audiovisual. Del campo a la pantalla, con profundidad.',
    'hero.btn1': 'Ver proyectos →',
    'hero.btn2': 'Ponerse en contacto',
    'hero.tag.label': 'Disponible para',
    'hero.tag.strong': 'Freelance & Proyectos',
    'sobre.label': 'Sobre mí',
    'sobre.h2': 'Del deporte<br/>a la narrativa.',
    'sobre.stat1': 'Participaciones como comentarista en partidos y programas deportivos',
    'sobre.stat2': 'Años de experiencia',
    'sobre.stat3': 'Plataformas de transmisión',
    'sobre.stat4': 'Proyectos desarrollados',
    'sobre.p1': 'Natural de Recife, Pernambuco, Bárbara Nunes construyó una relación intensa con los deportes - antes que todo, practicándolos desde la niñez hasta la adolescencia, después, empezó a trabajar como comentarista y analista apasionada por la táctica y la historia que cada partido conlleva.',
    'sobre.p2': 'A través del periodismo, busca amplificar las historias de los atletas y ofrecer análisis profundizados que van más allá del marcador. Hablando acerca del contexto, de la estrategia y de las personas responsables por cada logro.',
    'sobre.p3': 'Con experiencia en plataformas como SportyNet, LiveBasketball BR, OneFootball, DSports y CBFTv, trabaja en transmisiones en vivo, producción de documentales y contenidos en redes sociales, VTs y series analíticas, además de locuciones publicitarias para eventos de boxeo en DAZN.',
    'sobre.p4': 'Hoy concentra su energía en el fútbol masculino y femenino, de equipos y selecciones, siguiendo de cerca la evolución del deporte en las ligas española, inglesa, alemana, italiana y francesa.',
    'exp.label': 'Experiencia',
    'exp.h2': 'Dónde he trabajado.',
    'exp.sportynet.h3': 'Transmisiones Nacionales e Internacionales en vivo',
    'exp.sportynet.p': 'Comentarios en competiciones nacionales e internacionales, además de locución publicitaria para campañas institucionales de la plataforma.',
    'exp.onefootball.h3': 'Comentarista de Bundesliga',
    'exp.onefootball.p': 'Comentarios en transmisiones en vivo para la plataforma global de fútbol.',
    'exp.dsports.h3': 'Competiciones Sudamericanas',
    'exp.dsports.p': 'Comentarios en transmisiones en vivo de la Copa Ecuador, Copa Argentina y la Liga BetPlay Dimayor (fútbol colombiano).',
    'exp.livebasket.h3': 'Transmisión en vivo - Baloncesto Nacional',
    'exp.livebasket.p': 'Reportera desde la cancha en transmisiones de baloncesto femenino brasileño en vivo en YouTube, ayudando a ampliar el alcance del deporte.',
    'exp.dazn.h3': 'Locución - Eventos de Boxeo',
    'exp.dazn.p': 'Responsable de la locución oficial de los anuncios promocionales para combates de boxeo transmitidos por la plataforma.',
    'exp.pff.h3': 'Fútbol Femenino - Cobertura especial',
    'exp.pff.p': 'Participaciones como Comentarista y Presentadora del PFF Debate, cubriendo el fútbol femenino nacional e internacional y los preparativos para el Mundial en 2027.',
    'proj.label': 'Proyectos',
    'proj.h2': 'Lo que ya he contado.',
    'proj.leoas.tag': 'Documental · 2025',
    'proj.leoas.p': 'Documental que sigue el regreso del equipo femenino del Sport Club do Recife al Campeonato Brasileño A1. Una historia de superación, identidad y fútbol brasileño.',
    'proj.rota.tag': 'Serie · Mundial 2027',
    'proj.rota.p': 'Proyecto especial que sigue la preparación de la selección femenina brasileña para la Copa del Mundo 2027, sede Brasil. Está hecho en asociación a Amanda Viana',
    'proj.info.tag': 'YouTube · Análisis',
    'proj.info.p': 'Serie de vídeos en YouTube con análisis estadísticos y desglose táctico de las principales competiciones del fútbol masculino - para quienes quieren entender el juego en profundidad.',
    'badge.concluido': 'Finalizado',
    'badge.andamento': 'En progreso',
    'nav.artigos': 'Artículos',
    'artigos.label': 'Medium',
    'artigos.h2': 'Lo que he escrito.',
    'reels.label': 'En Instagram',
    'reels.h2': 'Más allá<br/>del marcador.',
    'contato.label': 'Contacto',
    'contato.h2': 'Trabajemos<br/>juntos.',
    'contato.p': 'Disponible para coberturas periodísticas, comentarios deportivos, análisis táctico, producción audiovisual y proyectos especiales relacionados al fútbol.',
    'contato.nome': 'Nombre',
    'contato.assunto': 'Asunto',
    'contato.mensagem': 'Tu mensaje...',
    'contato.btn': 'Enviar mensaje →',
    'contato.success': 'Mensaje enviado ✓',
    'footer.copy': '© 2026 Bárbara Nunes - Periodista Deportiva',
    'strip': ['Fútbol Inglés', 'Fútbol Alemán', 'Fútbol Español', 'Creación de Contenido', 'Análisis Táctico', 'Comentarista Deportiva'],
  }
};

let currentLang = localStorage.getItem('lang') || 'pt';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;

  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent === lang.toUpperCase());
  });

  renderArticles(lang);

  const track = document.getElementById('strip-track');
  if (track && t['strip']) {
    const items = t['strip'];
    const half = items.map(item => `<span>${item}</span><span>·</span>`).join('');
    track.innerHTML = half + half;
  }
}

function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const t = translations[currentLang];
  btn.textContent = t['contato.success'];
  btn.style.background = '#2A7A4B';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = t['contato.btn'];
    btn.style.background = '';
    btn.disabled = false;
    e.target.reset();
  }, 3000);
}

setLang(currentLang);

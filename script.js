// ==============================
// CONFIGURAÇÕES DO SITE
// ==============================

// COLOQUE A DATA EM QUE VOCÊS COMEÇARAM A NAMORAR:
// Exemplo: new Date("2026-01-15T00:00:00")
const relationshipStart = new Date("2026-01-01T00:00:00");

// ==============================
// MENSAGENS
// ==============================
const messages = [
{title:"Bom dia, Amor!",subtitle:"Para começar o seu dia com um sorriso.",label:"MENSAGEM #01",icon:"☀",text:`Bom dia, meu amor. ❤️

Espero que quando você ler isso, seu coração fique um pouquinho mais quentinho.

Quero que você saiba que, mesmo nos dias comuns, existe alguém aqui pensando em você, torcendo pelo seu sorriso e agradecendo por ter você na minha vida.

Que seu dia seja lindo. E se ele não for, lembra que você sempre pode voltar aqui e encontrar um pedacinho do meu amor esperando por você.

Eu te amo.`},
{title:"Quando sentir saudade",subtitle:"Abra quando quiser sentir meu abraço.",label:"MENSAGEM #02",icon:"♡",text:`Se você abriu isso porque está sentindo saudade, então fecha os olhos por alguns segundos.

Imagina que eu estou aí, te abraçando bem forte e dizendo baixinho o quanto você é importante para mim.

A distância pode separar dois corpos por alguns momentos, mas nunca vai conseguir apagar tudo aquilo que construímos.

Eu estou aqui. Sempre. ❤️`},
{title:"Só para lembrar",subtitle:"Porque às vezes precisamos ouvir o óbvio.",label:"MENSAGEM #03",icon:"✦",text:`Você é importante para mim.

Não porque precisa ser perfeita.
Não porque precisa fazer tudo certo.
Não porque precisa estar feliz o tempo inteiro.

Você é importante simplesmente por ser você.

E eu espero que nunca se esqueça disso.`},
{title:"Eu escolheria você",subtitle:"Hoje, amanhã e todas as vezes.",label:"MENSAGEM #04",icon:"∞",text:`Entre tantas pessoas, histórias e caminhos possíveis, eu ainda escolheria você.

Escolheria suas risadas, seus abraços, nossas conversas e até aqueles momentos em que a gente não sabe o que dizer.

Porque amar você não é sobre encontrar alguém perfeito.

É sobre encontrar alguém que faz o meu coração querer ficar. ❤️`}
];

// ==============================
// LINHA DO TEMPO
// ==============================
const timeline = [
{date:"O começo",title:"Quando tudo começou",text:"Escreva aqui como vocês se conheceram e como tudo começou."},
{date:"Um dia especial",title:"Uma lembrança que guardo",text:"Coloque aqui um momento que marcou vocês."},
{date:"Hoje",title:"Nós dois",text:"E essa história continua sendo escrita, um dia de cada vez. ❤️"}
];

// ==============================
// MOTIVOS
// ==============================
const reasons = ["Seu sorriso","Seu abraço","Seu jeito","Sua risada","Seu carinho","Sua companhia","Sua voz","Sua sinceridade","Seus olhos","Você ser você"];

// ==============================
// OCASIÕES
// ==============================
const occasions = [
{title:"Boa noite",icon:"☾",subtitle:"Para terminar o dia lembrando dela.",text:`Boa noite, meu amor. ❤️

Antes de você dormir, eu só queria deixar uma certeza aqui: você é muito amada.

Descansa, meu amor. Amanhã tem mais um dia para a gente continuar nossa história.`},
{title:"Dia difícil",icon:"♡",subtitle:"Para quando tudo parecer pesado.",text:`Se hoje estiver sendo difícil, respira.

Você não precisa resolver tudo de uma vez. E você nunca precisa enfrentar tudo sozinha.

Lembra que existe alguém aqui que acredita em você e que te ama exatamente como você é.`},
{title:"Quando estiver feliz",icon:"✦",subtitle:"Para comemorar junto com você.",text:`Se você está feliz, então eu também estou.

Guarda esse sorriso. Ele é uma das minhas coisas favoritas no mundo.

Quero viver muitos momentos assim ao seu lado. ❤️`}
];

// Render mensagens
const grid=document.getElementById("messageGrid");
messages.forEach(m=>{
  const card=document.createElement("article");
  card.className="message-card";
  card.innerHTML=`<div class="card-number">${m.label}</div><div class="card-icon">${m.icon}</div><h3>${m.title}</h3><p>${m.subtitle}</p>`;
  card.onclick=()=>openModal(m);
  grid.appendChild(card);
});

// Render timeline
const timelineEl=document.getElementById("timeline");
timeline.forEach(t=>{
  const item=document.createElement("div");
  item.className="timeline-item";
  item.innerHTML=`<div class="timeline-date">${t.date}</div><h3>${t.title}</h3><p>${t.text}</p>`;
  timelineEl.appendChild(item);
});

// Render reasons
const reasonsEl=document.getElementById("reasons");
reasons.forEach((r,i)=>{
  const item=document.createElement("div");
  item.className="reason";
  item.innerHTML=`<span>${String(i+1).padStart(2,"0")}</span><p>${r}</p>`;
  reasonsEl.appendChild(item);
});

// Render occasions
const occasionsEl=document.getElementById("occasionGrid");
occasions.forEach(o=>{
  const item=document.createElement("article");
  item.className="occasion";
  item.innerHTML=`<div class="icon">${o.icon}</div><h3>${o.title}</h3><p>${o.subtitle}</p>`;
  item.onclick=()=>openModal({title:o.title,label:"PARA VOCÊ",text:o.text});
  occasionsEl.appendChild(item);
});

// Modal
function openModal(m){
  document.getElementById("modalLabel").textContent=m.label||"PARA VOCÊ";
  document.getElementById("modalTitle").textContent=m.title;
  document.getElementById("modalText").textContent=m.text;
  document.getElementById("modal").classList.add("active");
  document.getElementById("modal").setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
}
function closeModal(){
  document.getElementById("modal").classList.remove("active");
  document.getElementById("modal").setAttribute("aria-hidden","true");
  document.body.style.overflow="";
}
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

// Navegação
function goTo(id){document.getElementById(id).scrollIntoView({behavior:"smooth"})}

// Contador
function updateCounter(){
  let diff=Math.max(0,Date.now()-relationshipStart.getTime());
  let sec=Math.floor(diff/1000);
  let days=Math.floor(sec/86400);sec%=86400;
  let hours=Math.floor(sec/3600);sec%=3600;
  let minutes=Math.floor(sec/60);sec%=60;
  document.getElementById("days").textContent=days;
  document.getElementById("hours").textContent=hours;
  document.getElementById("minutes").textContent=minutes;
  document.getElementById("seconds").textContent=sec;
}
updateCounter();setInterval(updateCounter,1000);

// Música: basta configurar uma URL/arquivo quando quiser.
function toggleMusic(){
  showToast("Para colocar a música de vocês, veja a configuração no script.js 🎵");
}
function showToast(text){
  const t=document.getElementById("toast");t.textContent=text;t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"),3500);
}

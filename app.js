const cards = [
  {
    chapter: "Chapter 1: Nature of Geology",
    q: "What does geology study?",
    a: "Geology is the study of Earth itself, including its materials, surface, resources, hazards, history, and the processes that shape it."
  },
  {
    chapter: "Chapter 1: Nature of Geology",
    q: "Why does geology matter for society?",
    a: "It helps locate raw materials and energy resources, evaluate hazards, understand environmental change, and choose safer places to build."
  },
  {
    chapter: "Chapter 1: Nature of Geology",
    q: "Name Earth's three major concentric zones.",
    a: "Core, mantle, and crust."
  },
  {
    chapter: "Chapter 1: Nature of Geology",
    q: "How do the lithosphere and asthenosphere differ?",
    a: "The lithosphere is the rigid crust plus upper mantle. The asthenosphere is the softer, weaker mantle layer beneath it."
  },
  {
    chapter: "Chapter 1: Nature of Geology",
    q: "Compare continental crust and oceanic crust.",
    a: "Continental crust is thicker, less dense, often granitic, and commonly above sea level. Oceanic crust is thinner, denser, basaltic, and commonly below sea level."
  },
  {
    chapter: "Chapter 1: Nature of Geology",
    q: "What are the three major rock types?",
    a: "Igneous rocks form from cooled magma or lava, sedimentary rocks form from sediment, and metamorphic rocks form when existing rock changes through heat, pressure, or deformation."
  },
  {
    chapter: "Chapter 1: Nature of Geology",
    q: "What is lithification?",
    a: "Lithification is burial and compaction that turn loose sediment into sedimentary rock."
  },
  {
    chapter: "Chapter 1: Nature of Geology",
    q: "What is metamorphism?",
    a: "Metamorphism is the change of existing rock by heat, pressure, fluids, or deformation without fully melting it."
  },
  {
    chapter: "Chapter 1: Nature of Geology",
    q: "What are the main agents of transport that sculpt Earth's surface?",
    a: "Flowing water is the most important agent, with wind and ice also playing major roles."
  },
  {
    chapter: "Chapter 2: Geologic Questions",
    q: "What is relative age?",
    a: "Relative age is the order of events or rocks from older to younger, without assigning exact numeric ages."
  },
  {
    chapter: "Chapter 2: Geologic Questions",
    q: "Define elevation, depth, slope, and topographic relief.",
    a: "Elevation is height above sea level, depth is distance below sea level, slope is change in elevation across distance, and relief is the elevation difference between features."
  },
  {
    chapter: "Chapter 2: Geologic Questions",
    q: "What does a geologic map show?",
    a: "It uses colors and symbols to show the distribution of rock units and geologic features exposed at the surface."
  },
  {
    chapter: "Chapter 2: Geologic Questions",
    q: "What is a topographic profile?",
    a: "A side-view portrayal of the land surface along an imaginary slice through terrain."
  },
  {
    chapter: "Chapter 2: Geologic Questions",
    q: "How do block diagrams, cross sections, and stratigraphic sections differ?",
    a: "Block diagrams show 3-D land and subsurface relationships, cross sections show a 2-D slice through the land, and stratigraphic sections show a vertical profile of rock units."
  },
  {
    chapter: "Chapter 2: Geologic Questions",
    q: "What is density?",
    a: "Density equals mass divided by volume. The notes list water at 1.0 g/cm3, ice at 0.92, granite at 2.65, and basalt at 2.8."
  },
  {
    chapter: "Chapter 2: Geologic Questions",
    q: "How do observation and interpretation differ?",
    a: "An observation records information from a source. An interpretation is a logical inference based on observations, measurements, and prior knowledge."
  },
  {
    chapter: "Chapter 2: Geologic Questions",
    q: "Compare inductive, deductive, and abductive reasoning.",
    a: "Inductive reasoning builds a general rule from examples. Deductive reasoning applies a general rule to a case. Abductive reasoning chooses a reasonable explanation from incomplete information."
  },
  {
    chapter: "Chapter 3: Plate Tectonics",
    q: "What evidence supported Wegener's continental drift hypothesis?",
    a: "Matching fossils on separated continents, similar rocks and structures across South America, Africa, and Antarctica, puzzle-like continental fits, and glacial evidence near today's equator."
  },
  {
    chapter: "Chapter 3: Plate Tectonics",
    q: "What is tectonics?",
    a: "Tectonics is the study of processes that deform the crust and mantle."
  },
  {
    chapter: "Chapter 3: Plate Tectonics",
    q: "What are tectonic plates made of?",
    a: "Tectonic plates are made of lithosphere and move on top of the asthenosphere."
  },
  {
    chapter: "Chapter 3: Plate Tectonics",
    q: "Compare divergent, convergent, and transform plate boundaries.",
    a: "Divergent boundaries split apart, convergent boundaries come together, and transform boundaries slide horizontally past one another."
  },
  {
    chapter: "Chapter 3: Plate Tectonics",
    q: "Why does oceanic crust subduct beneath continental crust?",
    a: "Oceanic crust is denser than continental crust, so it sinks beneath it at subduction zones."
  },
  {
    chapter: "Chapter 3: Plate Tectonics",
    q: "Why do volcanoes form above subduction zones?",
    a: "Water released from the subducting plate lowers melting temperatures in the overlying mantle, producing magma."
  },
  {
    chapter: "Chapter 3: Plate Tectonics",
    q: "What are slab pull and ridge push?",
    a: "Slab pull is the force from dense subducting lithosphere sinking. Ridge push is movement away from elevated mid-ocean ridges."
  },
  {
    chapter: "Chapter 3: Plate Tectonics",
    q: "What is a triple junction?",
    a: "A place where three plate boundaries meet."
  },
  {
    chapter: "Chapter 4: Earth Materials",
    q: "What five conditions define a mineral?",
    a: "A mineral is solid, inorganic, naturally occurring, has a specific chemical composition, and has an ordered crystalline structure."
  },
  {
    chapter: "Chapter 4: Earth Materials",
    q: "What is rock texture?",
    a: "Texture is how grains and minerals are arranged in a rock, including grain size, shape, layering, and crystal or clast relationships."
  },
  {
    chapter: "Chapter 4: Earth Materials",
    q: "Name important mineral properties used for identification.",
    a: "Crystal shape, color, magnetism, hardness, streak, cleavage, luster, fracture, and effervescence with HCl."
  },
  {
    chapter: "Chapter 4: Earth Materials",
    q: "What is cleavage?",
    a: "Cleavage is the way minerals break along specific planes because of their internal atomic arrangement."
  },
  {
    chapter: "Chapter 4: Earth Materials",
    q: "What minerals have no cleavage but show conchoidal fracture in the notes?",
    a: "Quartz, olivine, and obsidian."
  },
  {
    chapter: "Chapter 4: Earth Materials",
    q: "What are the major mineral classes listed in the notes?",
    a: "Silicates, carbonates, oxides, halides, sulfates, sulfides, and native minerals."
  },
  {
    chapter: "Chapter 4: Earth Materials",
    q: "What are felsic and mafic silicate minerals?",
    a: "Felsic minerals are light colored and silica rich, such as quartz and feldspar. Mafic minerals are darker and rich in magnesium and iron, such as pyroxene and olivine."
  },
  {
    chapter: "Chapter 4: Earth Materials",
    q: "Compare ionic and covalent bonds.",
    a: "Ionic bonds form by attraction between oppositely charged ions after electron transfer. Covalent bonds form when atoms share electrons."
  },
  {
    chapter: "Chapter 5: Igneous Environments",
    q: "What is igneous rock?",
    a: "Rock formed by the cooling and solidification of magma or lava."
  },
  {
    chapter: "Chapter 5: Igneous Environments",
    q: "Compare phaneritic and aphanitic textures.",
    a: "Phaneritic rocks have visible crystals from slow cooling. Aphanitic rocks are fine-grained because magma cooled too quickly for visible crystals to grow."
  },
  {
    chapter: "Chapter 5: Igneous Environments",
    q: "What does porphyritic texture record?",
    a: "Two-stage cooling: slow cooling that grows large crystals, followed by rapid cooling near or at the surface that forms a fine-grained matrix."
  },
  {
    chapter: "Chapter 5: Igneous Environments",
    q: "Compare magma and lava.",
    a: "Magma is molten rock underground. Lava is molten rock at the surface."
  },
  {
    chapter: "Chapter 5: Igneous Environments",
    q: "What three factors control rock melting?",
    a: "Temperature, pressure, and water. Decompression and added water can promote melting."
  },
  {
    chapter: "Chapter 5: Igneous Environments",
    q: "What is partial melting?",
    a: "Partial melting happens because minerals with lower melting points melt before other minerals, changing magma composition."
  },
  {
    chapter: "Chapter 5: Igneous Environments",
    q: "What is a dike, sill, and laccolith?",
    a: "A dike cuts across layers, a sill intrudes parallel to layers, and a laccolith is an intrusion that can dome overlying rock."
  },
  {
    chapter: "Chapter 6: Volcanoes",
    q: "What is a volcano?",
    a: "A vent where magma, gases, and other rock material erupt onto Earth's surface."
  },
  {
    chapter: "Chapter 6: Volcanoes",
    q: "What controls volcanic eruption style?",
    a: "Magma chemistry, viscosity, temperature, and volatile gas content."
  },
  {
    chapter: "Chapter 6: Volcanoes",
    q: "Compare crater and caldera.",
    a: "A crater is a roughly circular depression near the top of a volcano. A caldera is a large basin-shaped depression formed when a volcano collapses."
  },
  {
    chapter: "Chapter 6: Volcanoes",
    q: "Name the four volcano types in the notes.",
    a: "Scoria or cinder cones, shield volcanoes, composite volcanoes, and domes."
  },
  {
    chapter: "Chapter 6: Volcanoes",
    q: "What is tephra?",
    a: "A mixture of pumice, rock fragments, and volcanic ash."
  },
  {
    chapter: "Chapter 6: Volcanoes",
    q: "Why are felsic magmas often more explosive?",
    a: "They contain more silica, making them more viscous. Gas is trapped more easily, so pressure builds until eruption."
  },
  {
    chapter: "Chapter 6: Volcanoes",
    q: "Compare aa and pahoehoe lava.",
    a: "Aa breaks into rough, jumbled rock fragments. Pahoehoe is smoother and has billowing folds on its surface."
  },
  {
    chapter: "Chapter 6: Volcanoes",
    q: "What is the difference between hazard and risk?",
    a: "A hazard is a potentially dangerous event or situation. Risk assesses whether it might affect people or society."
  },
  {
    chapter: "Chapter 6: Volcanoes",
    q: "What signs help predict volcanic eruptions?",
    a: "Ground deformation, gas output, ground shaking, heat flow, and water chemistry changes."
  },
  {
    chapter: "Chapter 7: Sedimentary Rocks",
    q: "What are clasts?",
    a: "Loose fragments of rocks and minerals formed by weathering and transportation."
  },
  {
    chapter: "Chapter 7: Sedimentary Rocks",
    q: "What are common sedimentary environments?",
    a: "Wetlands, sand dunes, streams, floodplains, glaciers, bodies of water, deltas, beaches, lagoons, reefs, barrier islands, and tidal flats."
  },
  {
    chapter: "Chapter 7: Sedimentary Rocks",
    q: "Compare physical and chemical weathering.",
    a: "Physical weathering breaks rock into pieces through fracturing, frost wedging, thermal expansion, or biology. Chemical weathering changes minerals through dissolution, oxidation, hydrolysis, or biological reactions."
  },
  {
    chapter: "Chapter 7: Sedimentary Rocks",
    q: "How are clastic sedimentary rocks classified?",
    a: "Mainly by sediment or clast size."
  },
  {
    chapter: "Chapter 7: Sedimentary Rocks",
    q: "What controls clast size, shape, and sorting?",
    a: "Transport distance, transport agent, slope steepness, current strength, and sediment supply."
  },
  {
    chapter: "Chapter 7: Sedimentary Rocks",
    q: "Compare compaction and cementation.",
    a: "Compaction squeezes buried sediment together and forces out water. Cementation precipitates minerals from water that glue sediment together."
  },
  {
    chapter: "Chapter 7: Sedimentary Rocks",
    q: "What are graded beds and cross beds?",
    a: "Graded beds form as a current slows and drops coarse material before finer sediment. Cross beds form from sand or silt moving over dunes and can show wind or water direction."
  },
  {
    chapter: "Chapter 7: Sedimentary Rocks",
    q: "Compare transgression and regression.",
    a: "Transgression happens when sea level rises or land lowers, so the sea covers more land and clast sizes decrease upward. Regression happens when sea level drops or land uplifts, so the sea retreats and clast sizes increase upward."
  },
  {
    chapter: "Chapter 8: Deformation and Metamorphism",
    q: "What is stress?",
    a: "Stress is force per unit area."
  },
  {
    chapter: "Chapter 8: Deformation and Metamorphism",
    q: "Compare confining pressure and differential stress.",
    a: "Confining pressure acts from all directions due to surrounding rock. Differential stress is greater in some directions than others."
  },
  {
    chapter: "Chapter 8: Deformation and Metamorphism",
    q: "What are the three types of differential stress?",
    a: "Compression, tension, and shear."
  },
  {
    chapter: "Chapter 8: Deformation and Metamorphism",
    q: "Compare faults and joints.",
    a: "Faults are fractures along which rock has slipped. Joints are cracks where rock has pulled apart with little or no slip."
  },
  {
    chapter: "Chapter 8: Deformation and Metamorphism",
    q: "Compare normal, reverse, and strike-slip faults.",
    a: "Normal faults form with tension and the hanging wall moves down. Reverse faults form with compression and the hanging wall moves up. Strike-slip faults move horizontally parallel to strike."
  },
  {
    chapter: "Chapter 8: Deformation and Metamorphism",
    q: "Compare anticline and syncline.",
    a: "An anticline folds upward like an A and exposes older rocks in the center. A syncline folds downward like a U or V and exposes younger rocks in the center."
  },
  {
    chapter: "Chapter 8: Deformation and Metamorphism",
    q: "What is foliation?",
    a: "Foliation is planar fabric formed by differential stress, often in rocks deformed at higher temperatures."
  },
  {
    chapter: "Chapter 8: Deformation and Metamorphism",
    q: "What is the metamorphic grade sequence listed in the notes?",
    a: "Shale, slate, phyllite, schist, gneiss, migmatite."
  },
  {
    chapter: "Chapter 8: Deformation and Metamorphism",
    q: "Compare contact and regional metamorphism.",
    a: "Contact metamorphism is local heating with little deformation, often near magma. Regional metamorphism affects large areas with heating and deformation, commonly during continental collision."
  },
  {
    chapter: "Chapter 9: Geologic Time",
    q: "Compare relative dating and isotopic dating.",
    a: "Relative dating orders geologic events. Isotopic dating assigns numeric ages using radioactive isotopes that decay over time."
  },
  {
    chapter: "Chapter 9: Geologic Time",
    q: "What are the key relative dating principles?",
    a: "Superposition, cross-cutting relations, original horizontality, inclusions, and contact effects."
  },
  {
    chapter: "Chapter 9: Geologic Time",
    q: "What is an unconformity?",
    a: "A buried erosion surface preserved beneath later deposits that represents a major gap in time."
  },
  {
    chapter: "Chapter 9: Geologic Time",
    q: "Compare angular unconformity, nonconformity, and disconformity.",
    a: "An angular unconformity has tilted layers eroded before burial. A nonconformity has sediment over eroded igneous or metamorphic rock. A disconformity has parallel sedimentary layers separated by erosion or nondeposition."
  },
  {
    chapter: "Chapter 9: Geologic Time",
    q: "What is a half-life?",
    a: "The time it takes for half of the parent atoms in a radioactive isotope to decay into daughter atoms."
  },
  {
    chapter: "Chapter 9: Geologic Time",
    q: "What are fossils?",
    a: "Evidence of ancient life in sedimentary rocks, including imprints, traces, and preserved remains of plants or animals."
  },
  {
    chapter: "Chapter 9: Geologic Time",
    q: "What is correlation in geology?",
    a: "Correlation is matching rock sections from different places according to time equivalence."
  },
  {
    chapter: "Chapter 9: Geologic Time",
    q: "What happened during the Cambrian explosion?",
    a: "Many new species appeared, diversity increased, evolutionary change accelerated, and organisms with more hard parts evolved."
  },
  {
    chapter: "Chapter 12: Earthquakes",
    q: "What is an earthquake?",
    a: "The sudden release of energy stored in rocks."
  },
  {
    chapter: "Chapter 12: Earthquakes",
    q: "Compare epicenter and hypocenter.",
    a: "The hypocenter, or focus, is where an earthquake is generated underground. The epicenter is the point on Earth's surface directly above it."
  },
  {
    chapter: "Chapter 12: Earthquakes",
    q: "What is a megathrust earthquake?",
    a: "An earthquake generated by subduction along a thrust fault."
  },
  {
    chapter: "Chapter 12: Earthquakes",
    q: "What is elastic behavior in rocks?",
    a: "Elastic behavior is when rocks return to their original shape after being strained."
  },
  {
    chapter: "Chapter 12: Earthquakes",
    q: "Compare body waves and surface waves.",
    a: "Body waves travel through Earth. Surface waves travel along Earth's surface, are slower, and often cause stronger shaking."
  },
  {
    chapter: "Chapter 12: Earthquakes",
    q: "Compare P-waves and S-waves.",
    a: "P-waves are fast primary waves that compress material in the direction they travel. S-waves are secondary waves that shear rock perpendicular to their direction of travel."
  },
  {
    chapter: "Chapter 12: Earthquakes",
    q: "What is the order of seismic wave detection?",
    a: "P-waves arrive first, then S-waves, then surface waves."
  },
  {
    chapter: "Chapter 12: Earthquakes",
    q: "Compare direct damage and secondary earthquake effects.",
    a: "Direct damage comes from seismic waves and structural collapse. Secondary effects happen afterward, such as fires, flooding, uplift, subsidence, landslides, tsunamis, liquefaction, and aftershocks."
  },
  {
    chapter: "Chapter 12: Earthquakes",
    q: "How does a tsunami form at a megathrust zone?",
    a: "A locked megathrust builds stress, ruptures, and changes the shape of the seafloor. Water above is lifted, producing waves that radiate outward and grow higher in shallow water."
  },
  {
    chapter: "Chapter 12: Earthquakes",
    q: "What is seismic tomography?",
    a: "Seismic tomography images Earth's interior using deviations in seismic wave arrival times to identify faster and slower materials."
  }
];

const storageKey = "geology-flashcard-progress-v1";
let visibleCards = [...cards];
let currentIndex = 0;
let flipped = false;
let mode = "study";
let quizIndex = 0;
let quizAnswered = false;

const progress = JSON.parse(localStorage.getItem(storageKey) || "{}");

const els = {
  searchInput: document.querySelector("#searchInput"),
  chapterFilter: document.querySelector("#chapterFilter"),
  studyMode: document.querySelector("#studyMode"),
  quizMode: document.querySelector("#quizMode"),
  cardCount: document.querySelector("#cardCount"),
  knownCount: document.querySelector("#knownCount"),
  missedCount: document.querySelector("#missedCount"),
  flashcard: document.querySelector("#flashcard"),
  cardChapter: document.querySelector("#cardChapter"),
  cardQuestion: document.querySelector("#cardQuestion"),
  cardAnswer: document.querySelector("#cardAnswer"),
  prevCard: document.querySelector("#prevCard"),
  nextCard: document.querySelector("#nextCard"),
  shuffleCards: document.querySelector("#shuffleCards"),
  markKnown: document.querySelector("#markKnown"),
  markMissed: document.querySelector("#markMissed"),
  studyPanel: document.querySelector("#studyPanel"),
  quizPanel: document.querySelector("#quizPanel"),
  quizQuestion: document.querySelector("#quizQuestion"),
  quizProgress: document.querySelector("#quizProgress"),
  quizOptions: document.querySelector("#quizOptions"),
  quizResult: document.querySelector("#quizResult"),
  nextQuiz: document.querySelector("#nextQuiz"),
  deckList: document.querySelector("#deckList"),
  resetProgress: document.querySelector("#resetProgress")
};

function cardId(card) {
  return `${card.chapter}-${card.q}`;
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(progress));
}

function setupChapters() {
  const chapters = [...new Set(cards.map((card) => card.chapter))];
  els.chapterFilter.innerHTML = [
    `<option value="all">All chapters</option>`,
    ...chapters.map((chapter) => `<option value="${chapter}">${chapter}</option>`)
  ].join("");
}

function filterCards() {
  const search = els.searchInput.value.trim().toLowerCase();
  const chapter = els.chapterFilter.value;
  visibleCards = cards.filter((card) => {
    const matchesChapter = chapter === "all" || card.chapter === chapter;
    const text = `${card.chapter} ${card.q} ${card.a}`.toLowerCase();
    return matchesChapter && text.includes(search);
  });
  currentIndex = 0;
  quizIndex = 0;
  flipped = false;
  render();
}

function render() {
  renderStats();
  renderStudyCard();
  renderDeckList();
  if (mode === "quiz") renderQuiz();
}

function renderStats() {
  const visibleIds = new Set(visibleCards.map(cardId));
  const known = Object.entries(progress).filter(
    ([id, status]) => visibleIds.has(id) && status === "known"
  ).length;
  const missed = Object.entries(progress).filter(
    ([id, status]) => visibleIds.has(id) && status === "missed"
  ).length;

  els.cardCount.textContent = visibleCards.length;
  els.knownCount.textContent = known;
  els.missedCount.textContent = missed;
}

function renderStudyCard() {
  if (!visibleCards.length) {
    els.cardChapter.textContent = "No matches";
    els.cardQuestion.textContent = "Try a different search or chapter filter.";
    els.cardAnswer.textContent = "";
    els.flashcard.classList.remove("flipped");
    return;
  }

  const card = visibleCards[currentIndex];
  els.cardChapter.textContent = `${card.chapter} - ${currentIndex + 1} of ${visibleCards.length}`;
  els.cardQuestion.textContent = card.q;
  els.cardAnswer.textContent = card.a;
  els.flashcard.classList.toggle("flipped", flipped);
}

function renderDeckList() {
  els.deckList.innerHTML = visibleCards
    .map((card, index) => {
      const status = progress[cardId(card)] || "";
      return `
        <button class="deck-item" type="button" data-index="${index}" data-status="${status}">
          <strong>${card.chapter.replace("Chapter ", "Ch. ")}</strong>
          <span>${card.q}</span>
        </button>
      `;
    })
    .join("");
}

function setMode(nextMode) {
  mode = nextMode;
  els.studyMode.classList.toggle("active", mode === "study");
  els.quizMode.classList.toggle("active", mode === "quiz");
  els.studyPanel.classList.toggle("hidden", mode !== "study");
  els.quizPanel.classList.toggle("hidden", mode !== "quiz");
  quizIndex = 0;
  quizAnswered = false;
  render();
}

function moveCard(direction) {
  if (!visibleCards.length) return;
  currentIndex = (currentIndex + direction + visibleCards.length) % visibleCards.length;
  flipped = false;
  renderStudyCard();
}

function markCurrent(status) {
  if (!visibleCards.length) return;
  progress[cardId(visibleCards[currentIndex])] = status;
  saveProgress();
  render();
}

function shuffleVisibleCards() {
  for (let i = visibleCards.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [visibleCards[i], visibleCards[j]] = [visibleCards[j], visibleCards[i]];
  }
  currentIndex = 0;
  flipped = false;
  render();
}

function renderQuiz() {
  if (!visibleCards.length) {
    els.quizQuestion.textContent = "No cards match the current filters.";
    els.quizProgress.textContent = "";
    els.quizOptions.innerHTML = "";
    els.quizResult.textContent = "";
    return;
  }

  quizAnswered = false;
  const card = visibleCards[quizIndex % visibleCards.length];
  const answers = buildAnswerOptions(card);
  els.quizQuestion.textContent = card.q;
  els.quizProgress.textContent = `${(quizIndex % visibleCards.length) + 1} of ${visibleCards.length}`;
  els.quizResult.textContent = "";
  els.quizOptions.innerHTML = answers
    .map((answer) => `<button type="button" data-answer="${escapeAttribute(answer)}">${answer}</button>`)
    .join("");
}

function buildAnswerOptions(card) {
  const pool = cards.filter((candidate) => candidate.a !== card.a);
  const distractors = [];
  while (distractors.length < 3 && pool.length) {
    const index = Math.floor(Math.random() * pool.length);
    distractors.push(pool.splice(index, 1)[0].a);
  }
  return shuffleArray([card.a, ...distractors]);
}

function shuffleArray(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function escapeAttribute(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;");
}

function handleQuizAnswer(event) {
  const button = event.target.closest("button");
  if (!button || quizAnswered || !visibleCards.length) return;

  quizAnswered = true;
  const card = visibleCards[quizIndex % visibleCards.length];
  const selected = button.dataset.answer;
  const isCorrect = selected === card.a;
  button.classList.add(isCorrect ? "correct" : "wrong");
  progress[cardId(card)] = isCorrect ? "known" : "missed";

  for (const option of els.quizOptions.querySelectorAll("button")) {
    option.disabled = true;
    if (option.dataset.answer === card.a) option.classList.add("correct");
  }

  els.quizResult.textContent = isCorrect
    ? "Correct. Nice."
    : `Review this one: ${card.a}`;
  saveProgress();
  renderStats();
  renderDeckList();
}

els.flashcard.addEventListener("click", () => {
  flipped = !flipped;
  renderStudyCard();
});

els.flashcard.addEventListener("keydown", (event) => {
  if (event.key === " " || event.key === "Enter") {
    event.preventDefault();
    flipped = !flipped;
    renderStudyCard();
  }
});

document.addEventListener("keydown", (event) => {
  if (mode !== "study") return;
  if (event.key === "ArrowLeft") moveCard(-1);
  if (event.key === "ArrowRight") moveCard(1);
});

els.prevCard.addEventListener("click", () => moveCard(-1));
els.nextCard.addEventListener("click", () => moveCard(1));
els.shuffleCards.addEventListener("click", shuffleVisibleCards);
els.markKnown.addEventListener("click", () => markCurrent("known"));
els.markMissed.addEventListener("click", () => markCurrent("missed"));
els.searchInput.addEventListener("input", filterCards);
els.chapterFilter.addEventListener("change", filterCards);
els.studyMode.addEventListener("click", () => setMode("study"));
els.quizMode.addEventListener("click", () => setMode("quiz"));
els.quizOptions.addEventListener("click", handleQuizAnswer);
els.nextQuiz.addEventListener("click", () => {
  quizIndex = (quizIndex + 1) % Math.max(visibleCards.length, 1);
  renderQuiz();
});
els.resetProgress.addEventListener("click", () => {
  for (const key of Object.keys(progress)) delete progress[key];
  saveProgress();
  render();
});
els.deckList.addEventListener("click", (event) => {
  const item = event.target.closest(".deck-item");
  if (!item) return;
  currentIndex = Number(item.dataset.index);
  flipped = false;
  setMode("study");
  els.flashcard.focus();
});

setupChapters();
render();

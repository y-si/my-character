// ==================== IMAGE DATA ====================
// Add your images here. Each entry represents one mosaic piece.
// size options: "1x1", "2x1", "1x2", "2x2", "3x2"
// supplemental: array of additional image paths (optional)

// Layout designed for perfect 6-column alignment
// Rows 1-2: 2+2+1+1 = 6 cols (all span 2 rows)
// Row 3: 2+2+1+1 = 6 cols
// Rows 4-5: 2+1+1+2 = 6 cols (all span 2 rows)
// Row 6: 1+1+2+2 = 6 cols
// Rows 7-8: 2+2+2 = 6 cols (all span 2 rows)
// Row 9: 2+2+1+1 = 6 cols

const mosaicData = [
  // === Rows 1-2 ===
  {
    id: 1,
    image: "images/mom&dad.jpg",
    title: "My Parents",
    description: "The two most important people in my life! My parents have largely shaped who I am today.",
    size: "2x2",
    supplemental: []
  },
  {
    id: 2,
    image: "images/pool masters.jpg",
    title: "My Friends",
    description: "My best friends from college!!",
    size: "2x2",
    supplemental: []
  },
  {
    id: 3,
    image: "images/scuba.jpg",
    title: "My Adventures",
    description: "My friends and I went scuba diving in Maui this past winter break, and our worlds have never been the same since. Our new goal for 2026 is to get officially scuba certified!",
    size: "1x2",
    supplemental: []
  },
  {
    id: 4,
    image: "images/photography.jpg",
    title: "Photography",
    description: "A new artistic pursuit that I began last semester, photography is a medium that I always had massive admiration for---I'm so excited to explore and challenge my creativity there.",
    size: "1x2",
    supplemental: []
  },
  // === Row 3 ===
  {
    id: 5,
    image: "images/jiin.jpg",
    title: "My Sister",
    description: "My younger sister Jiin (who's also in the College, class of '28) is someone who means so dearly much to me. Having a sister growing up has become one of more core parts of who I am.",
    size: "2x1",
    supplemental: []
  },
  {
    id: 6,
    image: "images/acadia.jpg",
    title: "My Adventures",
    description: "A photo from my friends and I at Acadia National Park this past fall.",
    size: "2x1",
    supplemental: []
  },
  {
    id: 7,
    image: "images/visual art.jpg",
    title: "Visual Art",
    description: "Visual art was one of the first art forms I've formally explored in my life, after piano. It brought me so much joy, but through my visual art career is how I began to notice the faltering and reduction in my creativity---specifically, the increasing fear and worry of exploring and sharing my creativity with the world.",
    size: "1x1",
    supplemental: []
  },
  {
    id: 8,
    image: "images/dance.jpg",
    title: "Dance",
    description: "I started dance in college, through AADT. For my final semester, I'll be performing with Eleganza!",
    size: "1x1",
    supplemental: []
  },
  // === Rows 4-5 ===
  {
    id: 9,
    image: "images/violin.jpg",
    title: "Violin",
    description: "The violin is probably one of my biggest core identities, although I haven't had much chance to pursue it in college. I've only been playing since I was 8 years old (which is a bit late) but it's been a constant presence in my life.",
    size: "2x2",
    supplemental: []
  },
  {
    id: 10,
    image: "images/paraglide.jpg",
    title: "My Adventures",
    description: "Trying to overcome my fear of heights.. but paragliding in Switzerland was one of the best things I've ever done.",
    size: "1x2",
    supplemental: []
  },
  {
    id: 11,
    image: "images/surf vertical.jpg",
    title: "My Adventures",
    description: "In Maui my friends and I also surfed. Currently eyeing a surf camp in Indonesia for our next trip...",
    size: "1x2",
    supplemental: []
  },
  {
    id: 12,
    image: "images/nyo.jpg",
    title: "Violin",
    description: "One of my most favorite moments of my violin career was being a part of the National Youth Orchestra of the USA.",
    size: "2x2",
    supplemental: []
  },
  // === Row 6 ===
  {
    id: 13,
    image: "images/picnic.jpg",
    title: "My Friends",
    description: "More photos of my friends, since they mean so much to me.",
    size: "1x1",
    supplemental: []
  },
  {
    id: 14,
    image: "images/surf still.jpg",
    title: "My Adventures",
    description: "More photos from surfing in Maui.",
    size: "1x1",
    supplemental: []
  },
  {
    id: 15,
    image: "images/laguna.jpg",
    title: "My Home",
    description: "Being from SoCal, I grew up loving the beach.",
    size: "2x1",
    supplemental: []
  },
  {
    id: 16,
    image: "images/cs50 four.jpg",
    title: "My Studies",
    description: "I discovered computer science in college, and soon quickly discovered my passion for it. CS felt so different from what I did with the arts, but I soon realized that there are so many creative and artistic elements to it. I also love teaching, so I've been TF-ing a couple CS courses for three years now.",
    size: "2x1",
    supplemental: []
  },
  // === Rows 7-8 ===
  {
    id: 17,
    image: "images/fdoc.jpeg",
    title: "My Friends",
    description: "My friends from our last fall FDOC.",
    size: "2x2",
    supplemental: []
  },
  {
    id: 18,
    image: "images/fam switzerland.jpg",
    title: "My Family",
    description: "A photo of my family.",
    size: "2x2",
    supplemental: []
  },
  {
    id: 19,
    image: "images/estherfrisbee.jpg",
    title: "Photography",
    description: "A photo I took of my friend (digital).",
    size: "2x2",
    supplemental: []
  },
  // === Row 9 ===
  // {
  //   id: 20,
  //   image: "images/placeholder20.jpg",
  //   title: "Placeholder",
  //   description: "Add your content here...",
  //   size: "2x1",
  //   supplemental: []
  // },
  // {
  //   id: 21,
  //   image: "images/placeholder21.jpg",
  //   title: "Placeholder",
  //   description: "Add your content here...",
  //   size: "2x1",
  //   supplemental: []
  // },
  // {
  //   id: 22,
  //   image: "images/placeholder22.jpg",
  //   title: "Placeholder",
  //   description: "Add your content here...",
  //   size: "1x1",
  //   supplemental: []
  // },
  // {
  //   id: 23,
  //   image: "images/placeholder23.jpg",
  //   title: "Placeholder",
  //   description: "Add your content here...",
  //   size: "1x1",
  //   supplemental: []
  // }
];

// ==================== TERMINAL LOGIC ====================
const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');
const terminalScreen = document.getElementById('terminal-screen');
const mosaicScreen = document.getElementById('mosaic-screen');

// Terminal messages sequence
const bootSequence = [
  { text: "Initializing system...", delay: 800, type: "system" },
  { text: "Loading Sein's character profile...", delay: 600, type: "system" },
  { text: "Access restricted.", delay: 400, type: "system" },
  { text: "", delay: 300, type: "system" },
  { text: "Would you like to unlock Sein's character?", delay: 0, type: "prompt-line" },
  { text: "(yes/no)", delay: 0, type: "system" }
];

let currentMessageIndex = 0;
let isTyping = false;

// Type out a single message with typewriter effect
function typeMessage(message, callback) {
  isTyping = true;
  const line = document.createElement('div');
  line.className = `terminal-line ${message.type}`;
  terminalOutput.appendChild(line);

  let charIndex = 0;
  const text = message.text;

  if (text.length === 0) {
    isTyping = false;
    if (callback) callback();
    return;
  }

  const typeInterval = setInterval(() => {
    line.textContent = text.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex >= text.length) {
      clearInterval(typeInterval);
      isTyping = false;
      if (callback) callback();
    }
  }, 30); // typing speed
}

// Run through the boot sequence
function runBootSequence() {
  if (currentMessageIndex >= bootSequence.length) {
    terminalInput.disabled = false;
    terminalInput.focus();
    return;
  }

  const message = bootSequence[currentMessageIndex];

  setTimeout(() => {
    typeMessage(message, () => {
      currentMessageIndex++;
      runBootSequence();
    });
  }, message.delay);
}

// Handle user input
function handleInput(input) {
  // Display user's input
  const userLine = document.createElement('div');
  userLine.className = 'terminal-line user-input';
  userLine.textContent = `→ ${input}`;
  terminalOutput.appendChild(userLine);

  const normalizedInput = input.toLowerCase().trim();

  if (normalizedInput === 'yes' || normalizedInput === 'y') {
    terminalInput.disabled = true;

    // Success sequence
    setTimeout(() => {
      typeMessage({ text: "", delay: 0, type: "system" }, () => {
        typeMessage({ text: "Access granted.", delay: 0, type: "prompt-line" }, () => {
          typeMessage({ text: "Unlocking character...", delay: 0, type: "system" }, () => {
            setTimeout(transitionToMosaic, 1000);
          });
        });
      });
    }, 300);

  } else if (normalizedInput === 'no' || normalizedInput === 'n') {
    typeMessage({ text: "Perhaps another time.", delay: 0, type: "system" }, null);
    setTimeout(() => {
      typeMessage({ text: "", delay: 0, type: "system" }, () => {
        typeMessage({ text: "Would you like to unlock this character?", delay: 0, type: "prompt-line" }, () => {
          typeMessage({ text: "(yes/no)", delay: 0, type: "system" }, null);
        });
      });
    }, 1500);
  } else {
    typeMessage({ text: "Command not recognized. Please enter yes or no.", delay: 0, type: "error" }, null);
  }
}

// Transition from terminal to mosaic
function transitionToMosaic() {
  terminalScreen.classList.remove('active');

  setTimeout(() => {
    mosaicScreen.classList.add('active');
    renderMosaic();
  }, 800);
}

// Event listener for terminal input
terminalInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !isTyping) {
    const input = terminalInput.value;
    terminalInput.value = '';
    if (input.trim()) {
      handleInput(input);
    }
  }
});

// ==================== MOSAIC LOGIC ====================
const mosaicGrid = document.querySelector('.mosaic-grid');
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalSupplemental = document.getElementById('modal-supplemental');
const modalClose = document.querySelector('.modal-close');

function renderMosaic() {
  mosaicGrid.innerHTML = '';

  mosaicData.forEach((item, index) => {
    const mosaicItem = document.createElement('div');
    mosaicItem.className = `mosaic-item size-${item.size}`;
    mosaicItem.style.animationDelay = `${index * 0.1}s`;

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.title;

    // Placeholder color for missing images
    img.onerror = () => {
      mosaicItem.style.background = getPlaceholderColor(index);
      img.style.display = 'none';
    };

    mosaicItem.appendChild(img);
    mosaicItem.addEventListener('click', () => openModal(item));
    mosaicGrid.appendChild(mosaicItem);
  });
}

// Generate placeholder colors for demo
function getPlaceholderColor(index) {
  const colors = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
    'linear-gradient(135deg, #cd9cf2 0%, #f6f3ff 100%)',
    'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)'
  ];
  return colors[index % colors.length];
}

function openModal(item) {
  modalImage.src = item.image;
  modalImage.alt = item.title;
  modalTitle.textContent = item.title;
  modalDescription.textContent = item.description;

  // Handle supplemental images
  modalSupplemental.innerHTML = '';
  if (item.supplemental && item.supplemental.length > 0) {
    item.supplemental.forEach(imgSrc => {
      const img = document.createElement('img');
      img.src = imgSrc;
      img.addEventListener('click', () => {
        modalImage.src = imgSrc;
      });
      modalSupplemental.appendChild(img);
    });
  }

  // Handle missing main image in modal
  modalImage.onerror = () => {
    modalImage.style.display = 'none';
  };
  modalImage.onload = () => {
    modalImage.style.display = 'block';
  };

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Modal event listeners
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', () => {
  terminalInput.disabled = true;
  setTimeout(runBootSequence, 500);
});

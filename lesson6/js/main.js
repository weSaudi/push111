let listVideo = document.querySelectorAll('.video-list .vid'); 
let mainVideo = document.querySelector('.main-video video');
let title = document.querySelector('.main-video .title');
const btnback = document.querySelector('.chat');

let videocheck =[];
let videosrc =[];
let level = 0;
let i = 0;


listVideo.forEach(video =>{
video.onclick = () =>{
listVideo.forEach(vid => vid.classList.remove('active')); 
video.classList.add('active');
if(video.classList.contains('active')){
let src = video.children[0].getAttribute('src');
let elename = video.children[0].tagName;
if(elename =="VIDEO")
{
  mainVideo.src = src;
  mainVideo.controls = true;
  mainVideo.autoplay=true;
  let text = video.children[1].innerHTML;   
  title.innerHTML = text;
  mainVideo.addEventListener("timeupdate", onTimeUpdate);
}

if(elename =="BUTTON")
{
  mainVideo.src = "vid/vidzero.mp4";
  mainVideo.controls = false;
  let text = video.children[0].innerHTML;
  title.innerHTML = text;
}
};};});


function onTimeUpdate() {
  const videoDuration = mainVideo.duration;
  if (mainVideo.currentTime >= videoDuration - 3) 
  {
    let vidname = mainVideo.getAttribute('src');;
    videosrc.push(vidname);
    var uniqueArray = [...new Set(videosrc)];
    videocheck = uniqueArray;
    mainVideo.removeEventListener("timeupdate", onTimeUpdate);
  } 
}

// Add the event listener

//-----------------------------------------------------------------------------------
//btnback.addEventListener('click', () => {window.open('chatbot/index.html', '_self');                                            })
//-----------------------------------------------------------------------------------
//*****************************************test***************************************************
//*****************************************test***************************************************
const quizData = [
      {question: "التصميم التعليمي هو مجرد عملية عشوائية لتطوير المواد التعليمية.",
        options: ["صح", "خطأ"],
        answer: "خطأ",
        feedback: " التصميم التعليمي هو عملية منهجية تهدف إلى تحسين جودة التعليم."},
      {question: "من أهداف التصميم التعليمي تحسين كفاءة العملية التعليمية وتوفير الوقت والجهد.",
        options: ["صح", "خطأ"],
        answer: "صح",
        feedback: "فهو يساهم في التنظيم المسبق واختيار استراتيجيات فعّالة."},
      {question: "نموذج ADDIE في التصميم التعليمي يقتصر على مرحلة التحليل فقط.",
        options: ["صح", "خطأ"],
        answer: "خطأ",
        feedback: "نموذج ADDIE يشمل مراحل التحليل، التصميم، التطوير، التنفيذ، والتقييم."},
      {question: "التصميم التعليمي لا يهتم بخصائص المتعلمين أو فروقهم الفردية.",
        options: ["صح", "خطأ"],
        answer: "خطأ",
        feedback: "التصميم التعليمي يراعي احتياجات المتعلمين المختلفة والفروق الفردية بينهم."},
      {question: "أحد مكونات التصميم التعليمي هو التقييم والتغذية الراجعة والتطوير المستمر.",
        options: ["صح", "خطأ"],
        answer: "صح",
        feedback: "فهذه المكونات ضرورية لتحسين جودة العملية التعليمية."},
      {question: "الهدف الرئيسي من التصميم التعليمي هو تحقيق أهداف تعليمية محددة بفعالية.",
        options: ["صح", "خطأ"],
        answer: "صح",
        feedback: "يساعد التصميم التعليمي على توجيه التعليم نحو أهداف واضحة."},
      {question: "التصميم التعليمي يعزز التفاعل بين المعلمين والمتعلمين من خلال دمج الأنشطة التفاعلية.",
        options: ["صح", "خطأ"],
        answer: "صح",
        feedback: "فهو يركز على تشجيع التفاعل والمشاركة النشطة."},
      {question: "التكنولوجيا التعليمية ليست جزءاً من مكونات التصميم التعليمي",
        options: ["صح", "خطأ"],
        answer: "خطأ",
        feedback: "التكنولوجيا التعليمية جزء أساسي من مكونات التصميم التعليمي."},
      {question: "التصميم التعليمي لا يتطلب تخطيطاً مسبقاً للعملية التعليمية.",
        options: ["صح", "خطأ"],
        answer: "خطأ",
        feedback: " التخطيط المسبق هو جزء أساسي في التصميم التعليمي لتهيئة العملية التعليمية بمرونة."},
      {question: "'التصميم التعليمي يعتمد على النظريات التربوية لتحقيق فعالية وكفاءة أكبر في التعليم.",
        options: ["صح", "خطأ"],
        answer: "صح",
        feedback: " فهو يستند إلى نظريات ونماذج تربوية لضمان تحقيق أهداف التعليم."}   
];
  
  let currentQuestionIndex = 0; // Track the current question
  let userAnswers = []; // Store user answers for review
  let correctAnswersCount = 0; // Count correct answers
  
  function loadQuiz() {
    shuffle(quizData);
    displayQuestion();
  }
  
  function displayQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';
  
    const item = quizData[currentQuestionIndex];
    const questionCard = document.createElement('div');
    questionCard.classList.add('mb-3');
  
    const questionTitle = document.createElement('h5');
    questionTitle.textContent = `س${currentQuestionIndex + 1}: ${item.question}`;
    questionCard.appendChild(questionTitle);
  
    shuffle(item.options); // Shuffle the options
  
    item.options.forEach((option) => {
      const optionLabel = document.createElement('label');
      optionLabel.classList.add('form-check-label');
  
      const optionInput = document.createElement('input');
      optionInput.classList.add('form-check-input');
      optionInput.setAttribute('type', 'radio');
      optionInput.setAttribute('name', 'question');
      optionInput.setAttribute('value', option);
      optionInput.onclick = () => handleAnswer(option); // Handle answer selection
  
      // Append input after the label text
      optionLabel.append(`${option} `); // Append the option text
      optionLabel.appendChild(optionInput); // Append the radio button
      const optionWrapper = document.createElement('div');
      optionWrapper.classList.add('form-check');
      optionWrapper.appendChild(optionLabel);
      questionCard.appendChild(optionWrapper);
    });
  
    quizContainer.appendChild(questionCard);
  
    // Update button text based on the current question
    document.getElementById('next-btn').textContent = currentQuestionIndex === quizData.length - 1 ? "إرسال" : "التالي";
  }
  
  function handleAnswer(selectedValue) {
    const item = quizData[currentQuestionIndex];
    userAnswers[currentQuestionIndex] = selectedValue; // Store user's answer
  
    // Highlight selected answer
    const selectedInput = document.querySelector('input[name="question"]:checked');
    const feedbackContainer = document.createElement('div');
    feedbackContainer.classList.add('feedback', 'alert');
  
    if (selectedValue === item.answer) {
      correctAnswersCount++; // Increment correct answers
      selectedInput.parentElement.classList.add('correct-answer');
      selectedInput.parentElement.innerHTML += '<span class="icon check-icon">✔</span>'; // Add check icon
      feedbackContainer.textContent = "صحيح! " + item.feedback; // Show feedback
      feedbackContainer.classList.add('alert-success');
    } else {
      selectedInput.parentElement.classList.add('wrong-answer');
      selectedInput.parentElement.innerHTML += '<span class="icon cross-icon">✘</span>'; // Add cross icon
      feedbackContainer.textContent = "خطأ! " + item.feedback; // Show feedback
      feedbackContainer.classList.add('alert-danger');
      const correctOption = [...document.getElementsByName('question')].find(input => input.value === item.answer);
      correctOption.parentElement.classList.add('correct-answer'); // Highlight correct option
      correctOption.parentElement.innerHTML += '<span class="icon check-icon">✔</span>'; // Add check icon
    }
  
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.appendChild(feedbackContainer);
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      displayQuestion();
    } else {
      document.getElementById('next-btn').classList.add('hidden'); // Hide the next button
      document.getElementById('review-btn').classList.remove('hidden'); // Show review button
      showResults();
    }
  }
  
  function showResults() {
    const resultContainer = document.getElementById('result');
    resultContainer.classList.remove('hidden');
    resultContainer.innerHTML = `لقد أجبت بشكل صحيح على ${correctAnswersCount} من ${quizData.length} أسئلة.`;
    giveRecommendations(correctAnswersCount);
    level = correctAnswersCount;
  }
  
  function giveRecommendations(correctCount) {
    const recommendationsContainer = document.getElementById('recommendations');
    recommendationsContainer.innerHTML = ''; // Clear previous recommendations
  
    let recommendations;
    if (correctCount >= quizData.length -2) {
      recommendations = "أحسنت! لقد تعلمت هذا الدرس بنجاح .";
    } else if (correctCount >= quizData.length - 4 && correctCount < quizData.length -2 ) {
      recommendations = "جيد، لكن يمكنك تحسين أدائك. حاول مراجعة المواد التي لم تجب عليها بشكل صحيح.";
    } 
    else if (correctCount >= quizData.length - 6 && correctCount < quizData.length -4) {
      recommendations = "ضعيف يجب عليك تحسين أدائك. حاول مراجعة المواد التي لم تجب عليها بشكل صحيح.";
    }
    else if (correctCount >= quizData.length - 8 && correctCount < quizData.length -6 ) {
      recommendations = "ضعيف جدا يجب عليك المذاكرة بجد. حاول التركيز على الموضوعات التي لم تفهمها جيدًا.";
    }
    else {
      recommendations = "يبدو أنك لم تدرس المحتوى من فضلك قم بدراسة المحتوى أولاً ثم قم بحل الاختبار.";
    }
  
    const recommendationText = document.createElement('p');
    recommendationText.textContent = recommendations;
    recommendationsContainer.appendChild(recommendationText);
  }
  
  function reviewQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';
  
    quizData.forEach((item, index) => {
      const reviewCard = document.createElement('div');
      reviewCard.classList.add('mb-3');
  
      const questionTitle = document.createElement('h5');
      questionTitle.textContent = `س${index + 1}: ${item.question}`;
      reviewCard.appendChild(questionTitle);
  
      const userAnswer = userAnswers[index] || "لم يتم اختيار إجابة"; // Get user's answer
      const resultText = document.createElement('p');
      resultText.classList.add(userAnswer === item.answer ? 'correct-answer' : 'wrong-answer');
      resultText.innerHTML = `إجابتك: <strong>${userAnswer}</strong>`;
      reviewCard.appendChild(resultText);
  
      const correctText = document.createElement('p');
      correctText.innerHTML = `الإجابة الصحيحة: <strong>${item.answer}</strong>`;
      correctText.classList.add('correct-answer');
      reviewCard.appendChild(correctText);
  
      quizContainer.appendChild(reviewCard);
    });
  
    // Hide the review button after reviewing
    document.getElementById('review-btn').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden'); // Hide the next button during review
  }
  
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  window.onload = loadQuiz;  

//-------------------------------------recommmandation----------------------------------------------
//-------------------------------------recommmandation----------------------------------------------
//-------------------------------------recommmandation----------------------------------------------
const chatContainer = document.querySelector(".chat-list");
const suggestions = document.querySelectorAll(".suggestion");

// State variables
let isResponseGenerating = false;

// API configuration
const API_KEY = "AIzaSyAEPxPctlQyWPhJklDf3fghNPQ1D_dECOI"; // Your API key here
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

// Create a new message element and return it
const createMessageElement = (content, ...classes) => {
  const div = document.createElement("div");
  div.classList.add("message", ...classes);
  div.innerHTML = content;
  return div;
}

// Show typing effect by displaying words one by one
const showTypingEffect = (text, textElement, incomingMessageDiv) => {
  const words = text.split(' ');
  let currentWordIndex = 0;
  const typingInterval = setInterval(() => {
    // Append each word to the text element with a space
    textElement.innerText += (currentWordIndex === 0 ? '' : ' ') + words[currentWordIndex++];
    incomingMessageDiv.querySelector(".icon").classList.add("hide");
    // If all words are displayed
    if (currentWordIndex === words.length) {
      clearInterval(typingInterval);
      isResponseGenerating = false;
      incomingMessageDiv.querySelector(".icon").classList.remove("hide");
    }
    chatContainer.scrollTo(0, chatContainer.scrollHeight); // Scroll to the bottom
  }, 75);
}

// Fetch response from the API based on user message
const generateAPIResponse = async (incomingMessageDiv) => {
  const textElement = incomingMessageDiv.querySelector(".text"); // Getting text element
  try {
    // Send a POST request to the API with the user's message
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        contents: [{ 
          role: "user", 
          parts: [{ text: userMessage}] 
        }] 
      }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error.message);
    // Get the API response text and remove asterisks from it
    const apiResponse = data?.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '$1');
    showTypingEffect(apiResponse, textElement, incomingMessageDiv); // Show typing effect
  } catch (error) { // Handle error
    isResponseGenerating = false;
    textElement.innerText = error.message;
    textElement.parentElement.closest(".message").classList.add("error");
  } finally {
    incomingMessageDiv.classList.remove("loading");
  }
}
// Show a loading animation while waiting for the API response
const showLoadingAnimation = () => {
  const html = `<div class="message-content">
                  <p class="text"></p>
                  <div class="loading-indicator">
                    <div class="loading-bar"></div>
                    <div class="loading-bar"></div>
                    <div class="loading-bar"></div>
                  </div>                 
                </div>
                <span onClick="copyMessage(this)" class="icon material-symbols-rounded">content_copy</span>`;

  const incomingMessageDiv = createMessageElement(html, "incoming", "loading");
  chatContainer.appendChild(incomingMessageDiv);
  chatContainer.scrollTo(0, chatContainer.scrollHeight); // Scroll to the bottom
  generateAPIResponse(incomingMessageDiv);
}

// Copy message text to the clipboard
const copyMessage = (copyButton) => {
  const messageText = copyButton.parentElement.querySelector(".text").innerText;

  navigator.clipboard.writeText(messageText);
  copyButton.innerText = "done"; // Show confirmation icon
  setTimeout(() => copyButton.innerText = "content_copy", 1000); // Revert icon after 1 second
}

// Handle sending outgoing chat messages
const handleOutgoingChat = () => {
  isResponseGenerating = true;
  //typingForm.reset(); // Clear input field
  chatContainer.scrollTo(0, chatContainer.scrollHeight); // Scroll to the bottom
  setTimeout(showLoadingAnimation, 500); // Show loading animation after a delay
}


const suggestionList = document.querySelector('.suggestion-list');
btnback.addEventListener('click', () => 
  {
    let totalnum = 15;
    let recnum = Math.ceil(((videocheck.length + level)/totalnum) *100);
    clearList(); 
    //addFirstListItem();
    if(recnum < 100)
      {
        addListItem('قم بدراسة المحتوى', '#');
        userMessage ="  انت مساعد في تعلم الطالب درس حول مفهوم التصميم التعليمي قم بكتابة عبارة واحدة توجه فيها الطالب نحو دراسة المحتوى تبدء بعبارة عليك دراسة مفهوم التصميم التعليمي";
      }

      handleOutgoingChat();
  })

  function clearList() {
    suggestionList.innerHTML = '';
  }

  function addListItem(label, link) {
    const newListItem = document.createElement('li');
    newListItem.className = 'suggestion';
  
    // Create a button with the specified label
    const button = document.createElement('button');
    button.textContent = label;
  
    // Add click event to open the link
    button.onclick = function() {
      window.open(link, '_blank'); // Opens link in a new tab
    };
    newListItem.appendChild(button);
    suggestionList.appendChild(newListItem);
  }
    


function addFirstListItem() {
  const newListItem = document.createElement('li');
  newListItem.className = 'suggestion';
  const heading = document.createElement('h4');
  heading.className = 'text';
  heading.textContent = 'توصية';
  newListItem.appendChild(heading);
  suggestionList.appendChild(newListItem);
}



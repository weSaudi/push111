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
  {question: "السيناريو التعليمي هو خطة تفصيلية تستخدم لتنظيم الدرس ومحتواه بشكل يحقق الأهداف التعليمية. ",
    options: ["صح", "خطأ"],
    answer: "صح",
    feedback: "السيناريو التعليمي هو أداة تخطيطية تُنظّم مراحل التدريس بدقة، وتساعد المعلم على توجيه الأنشطة وتحديد الأهداف التعليمية بشكل واضح. "},
  {question: " لا يشترط أن يحتوي السيناريو التعليمي على الأهداف التعليمية، حيث يُركز فقط على الأنشطة.",
    options: ["صح", "خطأ"],
    answer: "خطأ",
    feedback: "الأهداف التعليمية جزء أساسي من السيناريو، فهي توجه الأنشطة وتحدد النتائج المتوقعة من الطلاب. "},
  {question: "تتضمن كتابة السيناريو التعليمي اختيار الوسائل التعليمية المناسبة لتحقيق الأهداف. ",
    options: ["صح", "خطأ"],
    answer: "صح",
    feedback: "السيناريو التعليمي يشمل تخطيط واختيار الوسائل التعليمية التي تسهم في تحقيق الأهداف بطريقة فعالة وتدعم فهم الطلاب للمحتوى. "},
  {question: "السيناريو الخطي هو نوع من السيناريو التعليمي الذي يسمح بتفرعات واختيارات متعددة. ",
    options: ["صح", "خطأ"],
    answer: "خطأ",
    feedback: "السيناريو الخطي يسير بطريقة متسلسلة دون تفرعات، حيث يتبع تسلسلًا محددًا مسبقًا للأحداث والأنشطة التعليمية. "},
  {question: "يمكن استخدام التكنولوجيا الحديثة، مثل الفيديوهات التفاعلية، في السيناريوهات التعليمية لزيادة التفاعل. ",
    options: ["صح", "خطأ"],
    answer: "صح",
    feedback: "التكنولوجيا تُعزّز التفاعل في السيناريو التعليمي، مثل الفيديوهات التفاعلية التي تجعل التعلم أكثر جاذبية وفعالية. "},
  {question: " يجب أن تكون اللغة المستخدمة في السيناريو التعليمي واضحة ومباشرة لتسهيل فهمه وتطبيقه.",
    options: ["صح", "خطأ"],
    answer: "صح",
    feedback: " وضوح اللغة في السيناريو التعليمي يُسهل على المعلم والطلاب فهم الأنشطة والتعليمات، ويسهم في تحقيق الأهداف التعليمية بفعالية."},
  {question: "يمكن للسيناريو التعليمي أن يكون خاليًا من وسائل التقييم إذا كان الموضوع بسيطًا. ",
    options: ["صح", "خطأ"],
    answer: "خطأ",
    feedback: "وسائل التقييم مهمة في السيناريو التعليمي، حتى في المواضيع البسيطة، لأنها تُمكّن المعلم من قياس مدى فهم الطلاب للمحتوى."},
  {question: "يتضمن السيناريو التعليمي وصفًا لأساليب التدريس المستخدمة لتحقيق الأهداف التعليمية. ",
    options: ["صح", "خطأ"],
    answer: "صح",
    feedback: "يجب أن يتضمن السيناريو أساليب التدريس الملائمة لتحقيق الأهداف، مثل المناقشة أو العصف الذهني، بما يتناسب مع محتوى الدرس. "},
  {question: "التقييم المستمر أثناء الدرس ليس ضروريًا في السيناريو التعليمي، حيث يمكن تأجيله إلى نهاية الدرس. ",
    options: ["صح", "خطأ"],
    answer: "خطأ",
    feedback: "التقييم المستمر يساعد المعلم على تعديل الأنشطة خلال الدرس بناءً على تفاعل الطلاب، مما يجعل التعلم أكثر تفاعلية وفعالية."},
  {question: " يُمكن أن يحتوي السيناريو التعليمي على أنشطة تفاعلية لتعزيز فهم الطلاب ومشاركتهم.",
    options: ["صح", "خطأ"],
    answer: "صح",
    feedback: " الأنشطة التفاعلية في السيناريو التعليمي تُعزز من تفاعل الطلاب مع المادة، وتدعم فهمهم للمفاهيم بشكل أعمق"}   
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
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

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


let totalnum = 17;
let recnum = Math.ceil(((videocheck.length + level)/totalnum) *100);
console.log(recnum);

const suggestionList = document.querySelector('.suggestion-list');
btnback.addEventListener('click', () => 
  {
    clearList(); 
    //addFirstListItem();
    if(recnum >= 0  && recnum < 20)
      {
        addListItem('قم بدراسة المحتوى', 'https://www.youtube.com/watch?v=Pm0v3EcTxLU&t=1347s');
        userMessage ="  انت مساعد في تعلم الطالب درس حول كتابة السيناريو التعليمي قم بكتابة عبارة واحدة توجه فيها الطالب نحو دراسة المحتوى تبدء بعبارة عليك دراسة مفهوم كتابة السيناريو التعليمي";
      }
    if(recnum >= 20  && recnum < 40)
      {
        addListItem('قم بدراسة المحتوى', 'https://www.youtube.com/watch?v=Pm0v3EcTxLU&t=1347s');
        addListItem('قم بدراسة المحتوى', 'https://www.youtube.com/watch?v=z_KGHTC-o2M');
        userMessage ="  انت مساعد في تعلم الطالب درس حول كتابة السيناريو التعليمي قم بكتابة عبارة واحدة توجه فيها الطالب نحو دراسة المحتوى تبدء بعبارة عليك دراسة كتابة السيناريو التعليمي";
      }
    if(recnum >= 40  && recnum < 60)
      {
        addListItem('قم بدراسة المحتوى', 'https://www.youtube.com/watch?v=-1NjrI-DZDs');
        addListItem('قم بدراسة المحتوى', 'https://www.youtube.com/watch?v=M_iIjM7Va7w');
        addListItem('قم بدراسة المحتوى', 'https://www.youtube.com/watch?v=VCXSwWyTOyw');
        userMessage =" انت مساعد في تعلم الطالب درس حول كتابة السيناريو التعليمي قم بكتابة عبارة واحدة توجه فيها الطالب نحو دراسة المحتوى تبدء بعبارة عليك دراسة طرق ومراحل كتابة السيناريو التعليمي";
      }
    if(recnum >= 60  && recnum < 80)
      {
        addListItem('قم بدراسة المحتوى', 'https://www.youtube.com/watch?v=uBFX7OYwn6M&t=1s');
        addListItem('قم بدراسة المحتوى', 'https://www.youtube.com/watch?v=Pm0v3EcTxLU&list=PPSV');
        userMessage ="  انت مساعد في تعلم الطالب درس حول كتابة السيناريو التعليمي قم بكتابة عبارة واحدة توجه فيها الطالب نحو دراسة المحتوى تبدء بعبارة عليك دراسة تصنيف كتابة السيناريو التعليمي";
      }
    if(recnum >= 80  && recnum < 100)
      {
        addListItem('قم بدراسة المحتوى', 'https://www.youtube.com/watch?v=zStfxkkv8sc&list=PPSV');
        addListItem('قم بدراسة المحتوى', 'https://www.youtube.com/watch?v=tuw-2qYMszM&list=PPSV');
        userMessage ="  انت مساعد في تعلم الطالب درس حول كتابة السيناريو التعليمي قم بكتابة عبارة واحدة توجه فيها الطالب نحو دراسة المحتوى تبدء بعبارة عليك دراسة التطبيقات العملية لكتابة السيناريو التعليمي";
      }
    if(recnum == 100 )
      {
        addListItem('قم بدراسة المحتوى', 'https://www.youtube.com/watch?v=hZMLSUao0Gg');
        userMessage ="  انت مساعد في تعلم الطالب درس حول كتابة السيناريو التعليمي  قم بكتابة عبارة واحدة توجه فيها الطالب نحو دراسة المحتوى تبدء بعبارة عليك دراسة الدرس التالي";
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



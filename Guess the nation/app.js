document.addEventListener('DOMContentLoaded', () => {
    const easyQuestions = [
        {src: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png", 
        hint: "The number one country in the world.", 
        answers:[{ text: 'China' , correct: false},
        { text: 'Gremany' , correct: false},
        { text: 'United States of America' , correct: true },
        { text: 'United Kingdom' , correct: false}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png",
        hint: "Its capital is Paris.", 
        answers:[{ text: 'India' , correct: false},
        { text: 'Spain' , correct: false},
        { text: 'Russia' , correct: false },
        { text: 'France' , correct: true}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/188px-Flag_of_India.svg.png", 
        hint: "Is has the second largest population in the world with over 1.3 billion people.", 
        answers:[{ text: 'India' , correct: true},
        { text: 'Brazil' , correct: false},
        { text: 'Pakistan' , correct: false },
        { text: 'Indonesia' , correct: false}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1024px-Flag_of_Germany.svg.png", 
        hint: "The winner of 2014 World Cup.", 
        answers:[{ text: 'Italy' , correct: false},
        { text: 'Germany' , correct: true},
        { text: 'England' , correct: false },
        { text: 'Netherland' , correct: false}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg", 
        hint: "It is famous for its own creation of cartoon, sometimes refered as anime.", 
        answers:[{ text: 'Japan' , correct: true},
        { text: 'Myanmar' , correct: false},
        { text: 'China' , correct: false },
        { text: 'Koera' , correct: false}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1024px-Flag_of_South_Korea.svg.png", 
        hint: "This country is famous for its own kind of entertainement.", 
        answers:[{ text: 'Laos' , correct: false},
        { text: 'Japan' , correct: false},
        { text: 'Thailand' , correct: false },
        { text: 'Koera' , correct: true}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1024px-Flag_of_Russia.svg.png", 
        hint: "This country has largest land area in the world and it is bigger than the pluto.", 
        answers:[{ text: 'Soviet Union' , correct: false},
        { text: 'Russia' , correct: true},
        { text: 'United Kingdom' , correct: false },
        { text: 'Austria' , correct: false}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1125px-Bandera_de_Espa%C3%B1a.svg.png", 
        hint: "Hola...", 
        answers:[{ text: 'Italy' , correct: false},
        { text: 'Greece' , correct: false},
        { text: 'Spain' , correct: true },
        { text: 'Hungary' , correct: false}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png", 
        hint: "Pizza and Spaghetti are originated from this country.", 
        answers:[{ text: 'Canada' , correct: false},
        { text: 'China' , correct: false},
        { text: 'Italy' , correct: true },
        { text: 'Isreal' , correct: false}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/1200px-Flag_of_Myanmar.svg.png", 
        hint: "You know this country.", 
        answers:[{ text: 'Iraq' , correct: false},
        { text: 'Syria' , correct: false},
        { text: 'Myanmar' , correct: true },
        { text: 'Iran' , correct: false}]
        }

        
    ]
    const normalQuestions = [
        {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/768px-Flag_of_Switzerland.svg.png", 
        hint: "A rich coutry famous for its expensive watches.", 
        answers:[{ text: 'Switzerlan' , correct: true},
        { text: 'Spain' , correct: false},
        { text: 'Sweden' , correct: false },
        { text: 'Scotlan' , correct: false}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
        hint: "A huge islamic country with an enormous cultural diversity and traditions.", 
        answers:[{ text: 'Portugal' , correct: false},
        { text: 'Egypt' , correct: false},
        { text: 'Saudi Arabia' , correct: false },
        { text: 'Turkey' , correct: true}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1280px-Flag_of_Canada_%28Pantone%29.svg.png", 
        hint: "It is the second largest country on the world with 6.1% of world landmass.", 
        answers:[{ text: 'Pakistan' , correct: false},
        { text: 'Brazil' , correct: false},
        { text: 'Canada' , correct: true },
        { text: 'Malaysia' , correct: false}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/1200px-Flag_of_the_Philippines.svg.png", 
        hint: "It is the nation with roughly 7,640 islands comprising.", 
        answers:[{ text: 'Indonesia' , correct: false},
        { text: 'Philippines' , correct: true},
        { text: 'Malaysia' , correct: false },
        { text: 'Japan' , correct: false}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/1024px-Flag_of_Thailand.svg.png", 
        hint: "Its capital is Bangkok.", 
        answers:[{ text: 'Myanmar' , correct: false},
        { text: 'Thailand' , correct: true},
        { text: 'Laos' , correct: false },
        { text: 'Cambodia' , correct: false}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/800px-Flag_of_Denmark.svg.png", 
        hint: "A Scandinavian country comprising the Jutland Peninsula and numerous islands.", 
        answers:[{ text: 'Sweden' , correct: false},
        { text: 'Belgium' , correct: false},
        { text: 'Thailand' , correct: false },
        { text: 'Denmark' , correct: true}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1024px-Flag_of_Poland.svg.png", 
        hint: "Its capital is Warsaw.", 
        answers:[{ text: 'Poland' , correct: true},
        { text: 'Romania' , correct: false},
        { text: 'Indonesia' , correct: false },
        { text: 'Netherland' , correct: false}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png", 
        hint: " It is bordered to the north by the United States.", 
        answers:[{ text: 'Canada' , correct: false},
        { text: 'Cuba' , correct: false},
        { text: 'Mexico' , correct: true },
        { text: 'Columbia' , correct: false}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/800px-Flag_of_Israel.svg.png", 
        hint: "The only Jewish state in the Middle East.", 
        answers:[{ text: 'Lebanon' , correct: false},
        { text: 'Greece' , correct: false},
        { text: 'Israel' , correct: true },
        { text: 'Vatican City' , correct: false}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/900px-Flag_of_Greece.svg.png",
        hint: "Mount Olympus is located in this country.", 
        answers:[{ text: 'Cyprus' , correct: false},
        { text: 'Italy' , correct: false},
        { text: 'Greece' , correct: true },
        { text: 'Iran' , correct: false}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/1024px-Flag_of_Paraguay.svg.png",
        hint: "It is a country in South America.", 
        answers:[{ text: 'Brazil' , correct: false},
        { text: 'Uruguay' , correct: false},
        { text: 'Paraguay' , correct: true },
        { text: 'Bolivia' , correct: false}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/1200px-Flag_of_Uruguay.svg.png",
        hint: "It is a country in South America.", 
        answers:[{ text: 'Argentina' , correct: false},
        { text: 'Boliva' , correct: false},
        { text: 'Ecaudor' , correct: false },
        { text: 'Uruguay' , correct: true}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/1024px-Flag_of_Singapore.svg.png",
        hint: "It is a sovereign island city-state in maritime Southeast Asia." ,
        answers:[{ text: 'Indonesia' , correct: false},
        { text: 'Bhutan' , correct: false},
        { text: 'China' , correct: false },
        { text: 'Singpore' , correct: true}]
        },
    ]
    const hardQuestions = [
        {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/1024px-Flag_of_Hong_Kong.svg.png", 
        hint: "It is a metropolitan area and special administrative region of China.", 
        answers:[{ text: 'Tibet' , correct: false},
        { text: 'Nepal' , correct: false},
        { text: 'Hong Kong' , correct: true },
        { text: 'Taiwan' , correct: false}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/1280px-Flag_of_Nigeria.svg.png",
        hint:"It is a country in West Africa.", 
        answers:[{ text: 'Zimbabwe' , correct: false},
        { text: 'Angola' , correct: false},
        { text: 'Chad' , correct: false },
        { text: 'Nigeria' , correct: true}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/1024px-Flag_of_Luxembourg.svg.png", 
        hint: "It is a landlocked country in Western Europe.", 
        answers:[{ text: 'Luxembourg' , correct: true},
        { text: 'Netherland' , correct: false},
        { text: 'Belgium' , correct: false },
        { text: 'Austria' , correct: false}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/1024px-Flag_of_Bulgaria.svg.png", 
        hint: "It is a landlocked country in Central Europe.", 
        answers:[{ text: 'Bulgaria' , correct: false},
        { text: 'Hungary' , correct: true},
        { text: 'Serbia' , correct: false },
        { text: 'Romania' , correct: false}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/900px-Flag_of_Romania.svg.png", 
        hint: "It is a country in Central and Eastern Europe.", 
        answers:[{ text: 'Romania' , correct: true},
        { text: 'Serbia' , correct: false},
        { text:'Lithunia', correct: false },
        { text: 'Slovenia' , correct: false}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/1024px-Flag_of_Kenya.svg.png", 
        hint: "It is a country in Eastern Africa.", 
        answers:[{ text: 'Sudan' , correct: false},
        { text: 'Somalia' , correct: false},
        { text: 'Ethiopia' , correct: false },
        { text: 'Kenya' , correct: true}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg?download", 
        hint: "It is a landlocked country in East-Central Africa.", 
        answers:[{ text: 'Ethiopia' , correct: false},
        { text: 'Uganda' , correct: true},
        { text: 'Rwanda' , correct: false },
        { text: 'Congo' , correct: false}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/1024px-Flag_of_Cambodia.svg.png", 
        hint: "It is a country located in the southern portion of the Indochinese Peninsula in Southeast Asia.", 
        answers:[{ text: 'Laos' , correct: false},
        { text: 'Malaysia' , correct: false},
        { text: 'Cambodia' , correct: true },
        { text: 'Sri Lenka' , correct: false}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/1024px-Flag_of_Ecuador.svg.png",
        hint: "It is a country in northwestern South America", 
        answers:[{ text: 'Bolivia' , correct: false},
        { text: 'Chile' , correct: false},
        { text: 'Ecuador' , correct: true },
        { text: 'Brazil' , correct: false}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/1200px-Flag_of_Venezuela.svg.png", 
        hint: "is a country on the northern coast of South America", 
        answers:[{ text: 'Uruguay' , correct: false},
        { text: 'Colombia' , correct: false},
        { text: 'Venezuela' , correct: true },
        { text: 'Argentina' , correct: false}]
        },

        
    ]
    const extremeQuestions = [
        {src: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png", 
        hint: "The number one country in the world.", 
        answers:[{ text: 'China' , correct: false},
        { text: 'Gremany' , correct: false},
        { text: 'United States of America' , correct: true },
        { text: 'United Kingdom' , correct: false}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png",
        hint: "Its capital is Paris.", 
        answers:[{ text: 'India' , correct: false},
        { text: 'Spain' , correct: false},
        { text: 'Russia' , correct: false },
        { text: 'France' , correct: true}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/188px-Flag_of_India.svg.png", 
        hint: "Is has the second largest population in the world with over 1.3 billion people.", 
        answers:[{ text: 'India' , correct: true},
        { text: 'Brazil' , correct: false},
        { text: 'Pakistan' , correct: false },
        { text: 'Indonesia' , correct: false}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1024px-Flag_of_Germany.svg.png", 
        hint: "The winner of 2014 World Cup.", 
        answers:[{ text: 'Italy' , correct: false},
        { text: 'Germany' , correct: true},
        { text: 'England' , correct: false },
        { text: 'Netherland' , correct: false}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg", 
        hint: "It is famous for its own creation of cartoon, sometimes refered as anime.", 
        answers:[{ text: 'Japan' , correct: true},
        { text: 'Myanmar' , correct: false},
        { text: 'China' , correct: false },
        { text: 'Koera' , correct: false}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1024px-Flag_of_South_Korea.svg.png", 
        hint: "This country is famous for its own kind of entertainement.", 
        answers:[{ text: 'Laos' , correct: false},
        { text: 'Japan' , correct: false},
        { text: 'Thailand' , correct: false },
        { text: 'Koera' , correct: true}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1024px-Flag_of_Russia.svg.png", 
        hint: "This country has largest land area in the world and it is bigger than the pluto.", 
        answers:[{ text: 'Soviet Union' , correct: false},
        { text: 'Russia' , correct: true},
        { text: 'United Kingdom' , correct: false },
        { text: 'Austria' , correct: false}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1125px-Bandera_de_Espa%C3%B1a.svg.png", 
        hint: "Hola...", 
        answers:[{ text: 'Italy' , correct: false},
        { text: 'Greece' , correct: false},
        { text: 'Spain' , correct: true },
        { text: 'Hungary' , correct: false}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png", 
        hint: "Pizza and Spaghetti are originated from this country.", 
        answers:[{ text: 'Canada' , correct: false},
        { text: 'China' , correct: false},
        { text: 'Italy' , correct: true },
        { text: 'Isreal' , correct: false}]
        },
        {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/1200px-Flag_of_Myanmar.svg.png", 
        hint: "You know this country.", 
        answers:[{ text: 'Iraq' , correct: false},
        { text: 'Syria' , correct: false},
        { text: 'Myanmar' , correct: true },
        { text: 'Iran' , correct: false}]
        }
    ]
    function shuffled(array) {
        let j,x;
        let len = array.length;
        for(let i=0;i<len; i++){
            j = Math.floor(Math.random() * len); //1
            x = array[i];
            array[i] = array[j];
            array[j] = x;
        }
        return array;
    }
    
    const diffContainerElement = document.querySelector('.diff-container');
    const heartsElement = document.querySelector('.hearts');
    const gradeElement = document.querySelector('.grade');
    const closeElement = document.querySelector('.close');
    const resultContainerElement = document.querySelector('.result-container');
    const scoreElement = document.querySelector('.score');
    const containerElement = document.querySelector('.container');
    const headerElement = document.querySelector('.header');
    const mainContainerElement = document.querySelector('.main-container')
    const startElement = document.getElementById('start');
    const questionContainerElement = document.querySelector('.question-container');
    const menuElement = document.querySelector('.menu');
    const answerElement = document.querySelector('.answer-buttons');
    const imgElement = document.querySelector('#image');
    const hintElement = document.querySelector('#hint');
    let shuffledQuestions;
    let currentQuestionIndex;
    let score;
    let myHeartRainSetInterval;

    closeElement.addEventListener('click', () => {
        resultContainerElement.style.display = 'none';
        questionContainerElement.classList.add('hide');
        containerElement.classList.remove('cut');
        menuElement.classList.remove('hide');
        headerElement.classList.remove('hide');
        stopHeartRain();
    });

    startElement.addEventListener('click', () => {
        
        diffContainerElement.classList.remove('hide');
        containerElement.classList.add('cut');
        menuElement.classList.add('hide');
        headerElement.classList.add('hide');
        chooseDifficulty()
    })

    function chooseDifficulty() {
        const diffArray = document.querySelectorAll('.diff-btn');
        diffArray.forEach(e => {
            e.addEventListener('click', () => {
                const selectedArray = e.classList[0];
                assignDifficultyArray(selectedArray);
            })
            
        })
    };

    function assignDifficultyArray(e) {
        console.log(e)
        if(e === 'normal'){
            shuffledQuestions = shuffled(normalQuestions);
        }else if(e === 'hard'){
            shuffledQuestions = shuffled(hardQuestions);
        }else if(e === 'extreme'){
            shuffledQuestions = shuffled(extremeQuestions);
        }else{
            shuffledQuestions = shuffled(easyQuestions);
        }
        console.log(shuffledQuestions)
        currentQuestionIndex = 0;
        score = 0;
        questionContainerElement.classList.remove('hide');
        diffContainerElement.classList.add('hide');
        setNextQuestion();
    }

    function setNextQuestion(){
        resetState();
        showQuestion(shuffledQuestions[currentQuestionIndex]);
        
    }

    function resetState() {
        while(answerElement.firstChild){
            answerElement.removeChild(answerElement.firstChild);
        };
        mainContainerElement.classList.remove('correct');
        mainContainerElement.classList.remove('wrong');
    }

    function showQuestion(question) {
        imgElement.src = question.src;
        hintElement.textContent = question.hint;
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.dataset.correct = answer.correct;
            button.classList.add('btn')
            answerElement.appendChild(button);
            button.addEventListener('click', selectAnswer);
        });
    };
    
    function selectAnswer(e){
        const selectedButton = e.target;
        const correct = selectedButton.dataset.correct;
        setStatus( mainContainerElement, correct);
        Array.from(answerElement.children).forEach(button => {
            button.removeEventListener('click', selectAnswer);
            setStatus(button, button.dataset.correct);
        });
        currentQuestionIndex++;
        totalScore(correct);
        if(currentQuestionIndex >= 10){
            resetState();
            resultContainerElement.style.display = 'flex';
            gradeSystem(score);
            scoreElement.innerText = score;
            myHeartRainSetInterval = setInterval(heartRain, 300);

        }else{
            setTimeout(setNextQuestion, 2000);
        }
    };

    function gradeSystem(e){
        if(e >= 10){
            gradeElement.innerText = 'Perfect!';
        }else if(e >= 7){
            gradeElement.innerText = 'Well Done!';
        }else if(e >= 5){
            gradeElement.innerText = 'Not Bad!';
        }else if(e >= 3){
            gradeElement.innerText = 'Learn Geography or History!';
        }else{
            gradeElement.innerText = 'Worst!';
        }
    }

    function totalScore(correct) {
        if(correct === 'true'){
            score++;
        }
    }

    function setStatus(e, correct){
        clearStatus(e);
        if(correct === 'true'){
            e.classList.add('correct')
        }else{
            e.classList.add('wrong');
        }
    }

    function clearStatus(e){
        e.classList.remove('correct');
        e.classList.remove('wrong');
    }

    function heartRain(){
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = '❤️';
        heart.style.left = Math.random()* 90 + '%';
        heart.style.fontSize = Math.random() * 10 + 15 + "px";
        heart.style.animationDuration = Math.random() * 1 + 3 + "s";
        heartsElement.append(heart);
        setTimeout(() => {
            heart.remove();
        },5000)
    }
    

    function stopHeartRain () {
        clearInterval(myHeartRainSetInterval);
      }

    
  










    
    
});


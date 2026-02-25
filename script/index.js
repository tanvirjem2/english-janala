const loadLessons = () => {
    const url = 'https://openapi.programming-hero.com/api/levels/all';
    fetch(url)
        .then(res => res.json())
        .then(data => displayLesson(data.data))
}

const loadLevelWord = level_no => {
    const url = `https://openapi.programming-hero.com/api/level/${level_no}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayLevelWords(data.data))
}

const displayLevelWords = words => {
    // 1. Get the container & empty the container;
    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = '';

    // 2. Get into Every word
    words.forEach(word => {

        // 3. Create one one element for every word
        const card = document.createElement('div');
        card.innerHTML = `
                <div class="card
            h-full
            flex flex-col justify-between
            bg-white 
            border border-gray-200 
            rounded-2xl 
            shadow-sm 
            hover:shadow-lg 
            hover:-translate-y-1
            transition duration-300 
            p-6 sm:p-8 md:p-10">

            <!-- Content -->
            <div class="text-center space-y-4 sm:space-y-6">

                <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                    ${word.word}
                </h2>

                <p class="text-base sm:text-lg font-medium text-gray-500">
                    Meaning / Pronunciation
                </p>

                <p class="font-bangla text-2xl sm:text-3xl font-bold text-primary">
                    "${word.meaning} / ${word.pronunciation}"
                </p>

            </div>

            <!-- Buttons -->
            <div class="flex justify-between items-center mt-8 sm:mt-10">

                <button class="btn btn-sm sm:btn-md btn-soft btn-info 
                       hover:scale-105 transition duration-200">
                    <i class="fa-solid fa-circle-info"></i>
                </button>

                <button class="btn btn-sm sm:btn-md btn-soft btn-info 
                       hover:scale-105 transition duration-200">
                    <i class="fa-solid fa-volume-high"></i>
                </button>

            </div>
        </div>
        `;

        // 4. Append the element to the container
        wordContainer.append(card);
    });
}

const displayLesson = lessons => {
    // 1. Get the container & empty the container;
    const lessonContainer = document.getElementById('lesson-container');
    lessonContainer.innerHTML = '';

    // 2. Get into Every lesson
    lessons.forEach(lesson => {

        // 3. Create one one element for every lesson
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `
        <button onclick="loadLevelWord(${lesson.level_no})" 
            class="btn btn-outline btn-primary w-full">
            <i class="fa-solid fa-book-open"></i>
            <p>Lesson - ${lesson.level_no}</p>
        </button>
        `;

        // 4. Append the element to the container
        lessonContainer.append(btnDiv);

    });
}

loadLessons();

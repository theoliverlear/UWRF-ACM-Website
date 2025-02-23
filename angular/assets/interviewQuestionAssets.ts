export interface InterviewQuestionAsset {
    question: string;
    hint: string;
}
export const tellMeAboutYourselfQuestionAsset: InterviewQuestionAsset = {
    question: "Tell me about yourself.",
    hint: "Explain your relevant hobbies. Mention your temperament and " +
        "extra-curricular activities. Humanize yourself with a relatable " +
        "aspect of yourself."
};

export const yourExperienceQuestionAsset: InterviewQuestionAsset = {
    question: "What is your relevant experience?",
    hint: "If you have experience, that's great, and try to speak to it." +
        " Try to take that experience and tailor it to the job you're" +
        " applying for. If you don't have experience, try to relate any" +
        " classwork or extra-curricular activities to relevant experience."
};

export const yourStrengthsQuestionAsset: InterviewQuestionAsset = {
    question: "What are your strengths?",
    hint: "Be honest, but tailored in your response. Try to relate how your" +
        " strength will benefit your potential employer. Try to be unique" +
        " in your response."
};

export const yourBiggestWeaknessQuestionAsset: InterviewQuestionAsset = {
    question: "What is your biggest weakness?",
    hint: "Don't kill your interview here. But, don't lie. Share your " +
        "weakness, but more importantly, how you are working to improve it." +
        " For example, I have trouble getting places on time, and so I set " +
        "up a calendar remind myself."
};

export const learnedFromFailureQuestionAsset: InterviewQuestionAsset = {
    question: "Describe a time you failed. What did you learn from it?",
    hint: "Accountability and resolution are key here. Try to find any" +
        " relevant situation where you failed. Almost always, your can" +
        " spin this story into something positive. Show humility and" +
        " ability to change."
};

export const whyThisCompanyQuestionAsset: InterviewQuestionAsset = {
    question: "Why do you want to work for this company? (Use Google)",
    hint: "Research the company. Find something salient that your can" +
        " connect to your resume or personal life. Look up company values," +
        " mission statement, and recent news."
};

export const walkMeThroughResumeQuestionAsset: InterviewQuestionAsset = {
    question: "Walk me through your resume.",
    hint: "It's your life, so you should know this. What matters most is " +
        "what you choose to focus on. This is the sales pitch, so pick the" +
        " best parts. For different people, it may different things from " +
        "schooling to work experience to independent projects."
};

export const handleConflictQuestionAsset: InterviewQuestionAsset = {
    question: "How do you handle conflict?",
    hint: "Conflict can be a big word. You can take this word as lightly" +
        " as you need to answer the question. You need to show you don't" +
        " crumble or blow up under pressure. Find a situation where you" +
        " were calm, fair, confident, and ready to listen and compromise." +
        " They want to know if you will do what they want you to do."
};

export const prioritizeDeadlinesQuestionAsset: InterviewQuestionAsset = {
    question: "How do you prioritize deadlines?",
    hint: "Work experience is great here, but school experience can also " +
        "work. They need to know you can handle multiple tasks at once." +
        " Generally, focus on how you invest your time into quality versus " +
        "quantity depending on the task."
};

export const questionsForUsQuestionAsset: InterviewQuestionAsset = {
    question: "Do you have any questions for us? (Use Google)",
    hint: "This is likely the last impression you can leave an interviewer" +
        " with. A sloggy middle can sometimes by aided by sticking the " +
        "landing. Ask unique questions. They have been asked the same ones " +
        "all day, so be the one to surprise them."
}

export const interviewQuestions: InterviewQuestionAsset[] = [
    tellMeAboutYourselfQuestionAsset,
    yourExperienceQuestionAsset,
    yourStrengthsQuestionAsset,
    yourBiggestWeaknessQuestionAsset,
    learnedFromFailureQuestionAsset,
    whyThisCompanyQuestionAsset,
    walkMeThroughResumeQuestionAsset,
    handleConflictQuestionAsset,
    prioritizeDeadlinesQuestionAsset,
    questionsForUsQuestionAsset
];

export const getSurveyInputQuestionAsset: InterviewQuestionAsset = {
    question: "Write a program to get input for a survey.",
    hint: "Think ahead. They asked a general survey input. Make sure your" +
        " input can be changed easily. This is relatively simple, so find" +
       " ways to make your code more unique, efficient, or readable. There" +
        " are many possible ways a user can cause errors, so set yourself" +
        " apart by handling these."
};

export const bubbleSortQuestionAsset: InterviewQuestionAsset = {
    question: "Write a program to bubble sort an array.",
    hint: "If you don't know bubble sort is, that's not great in the" +
        " interview, but it's much better to ask than do it wrong. Once " +
        "you know, think about readability and efficiency. Most people will" +
        " go for efficiency, so make yourself stand out with other ways if " +
        "you can. Other options include durability, maintainability, and " +
        "modularity."
};

export const palindromeQuestionAsset: InterviewQuestionAsset = {
    question: "Write a program to determine if a string is a palindrome.",
    hint: "This is a classic question. If you don't know what a palindrome " +
        "is, you can ask, and it wouldn't hurt you too much. Keep in mind " +
        "efficiency. This algorithm can be done in really inefficient ways" +
        " and really efficient ways. Try to be unique in your approach," +
        " perhaps using data structures or other algorithms you know."
};

export const anagramQuestionAsset: InterviewQuestionAsset = {
    question: "Write a program to determine if two strings are anagrams.",
    hint: "This question is a major way for interviewers to see what level" +
        " programmer you are. If you get this question, think about the data" +
        " structures needed. Ask yourself, what is the minimum amount of " +
        "data needed to know if something is an anagram. Mind you, a major" +
        " data structure is key here."
};

export const fizzBuzzQuestionAsset: InterviewQuestionAsset = {
    question: "Write a program that plays FizzBuzz.",
    hint: "Forwards, backwards, upside down, inside out you should know" +
        " this question. What you can do is alter how you do it based on" +
        " the company your interviewing for. If they value maintainability," +
        " make sure your code is readable and applicable to many types. If" +
        " they value efficiency, make sure your code minimizes the" +
        " operations."
};

export const factorialQuestionAsset: InterviewQuestionAsset = {
    question: "Write a program to find the factorial of a number.",
    hint: "This question uses math, but you don't need to know the math. " +
        "This is a question of edge cases. If you miss these, they may not " +
        "think you pay attention to detail. Ask yourself, when does a " +
        "factorial stop? This is a major part of the problem."
};

export const binarySearchQuestionAsset: InterviewQuestionAsset = {
    question: "Write a program to binary search an array.",
    hint: "You should know binary search. If you don't, you have no choice" +
        " but to ask. It's a smell test. Get this question right more than " +
        "do it well. Remember, the key parts of binary search are when to " +
        "go left or right, and when to stop."
};

export const removeDuplicatesQuestionAsset: InterviewQuestionAsset = {
    question: "Write a program to remove duplicates from a sorted array.",
    hint: "Visualize. Write an example on the board. Even if you know what " +
        "to code, this can aid in showing why your code works to the" +
        " interviewer. Efficiency is key here. Don't make a new array." +
        " Figure out a way to have your code think ahead."
};

export const uniqueCharactersQuestionAsset: InterviewQuestionAsset = {
    question: "Write a program to determine if a string has all unique characters.",
    hint: "There are a lot of ways to ways to do this. Find the most" +
        " important word (it's 'unique'). If something happens more than" +
        " once, it's not unique. Remember this. Be efficient, but also keep" +
        " in mind readability. This question can often be a smell test."
};

export const flattenArrayQuestionAsset: InterviewQuestionAsset = {
    question: "Write a program to flatten a multi-dimensional array.",
    hint: "This is a major question to test your syntax knowledge. Get this " +
        "right. Helper methods may prove useful here. Remember, the array" +
        " should be flattened, which also means in order. Make sure to pass" +
        " your arrays in the right order. Think of a piece of twine wrapping" +
        " this array and how you'd straighten it out."
}

export const codingQuestions: InterviewQuestionAsset[] = [
    getSurveyInputQuestionAsset,
    bubbleSortQuestionAsset,
    palindromeQuestionAsset,
    anagramQuestionAsset,
    fizzBuzzQuestionAsset,
    factorialQuestionAsset,
    binarySearchQuestionAsset,
    removeDuplicatesQuestionAsset,
    uniqueCharactersQuestionAsset,
    flattenArrayQuestionAsset
];
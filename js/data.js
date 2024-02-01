let currentQuestion = 0;
let correctAnswers = 0;

const AUDIO_correct = new Audio('./src/audio/right.mp3');
const AUDIO_wrong = new Audio('./src/audio/buzzer-wrong.mp3');


let questions = [

    {
        'question': 'Wer hat HTML erfunden?',
        'answer_1': 'Robbie Williams',
        'answer_2': 'Lady Gaga',
        'answer_3': 'Tim Berners-Lee',
        'answer_4': 'Justin Bieber',
        'right_answer': 3,
    },

    {
        'question': 'Was bedeutet das HTML Tag &lt;a&gt;?',
        'answer_1': 'Text Fett',
        'answer_2': 'Container',
        'answer_3': 'Ein Link',
        'answer_4': 'Kursiv',
        'right_answer': 3,
    },

    {
        'question': 'Wie bindet man eine Webseite in einer Webseite ein?',
        'answer_1': '&lt;iframe&gt;, &lt;frame&gt;, and &lt;frameset&gt;',
        'answer_2': '&lt;iframe&gt;',
        'answer_3': '&lt;frame&gt;',
        'answer_4': '&lt;iframeset&gt;',
        'right_answer': 2,
    },

    {
        'question': 'Welches Attribut kann man NICHT für Textarea verwenden?',
        'answer_1': 'readonly',
        'answer_2': 'max',
        'answer_3': 'from',
        'answer_4': 'spellcheck',
        'right_answer': 1,
    },

    {
        'question': 'Wie wählst Du alle Elemente vom Typ &lt;a&gt; mit dem Attribut title aus?',
        'answer_1': 'a[title]{...}',
        'answer_2': 'a > title {...}',
        'answer_3': 'a.title {...}',
        'answer_4': 'a=title {...}',
        'right_answer': 1,
    },

    {
        'question': 'Wie definiert man in JavaScript eine Variable?',
        'answer_1': 'let 100 = rate;',
        'answer_2': '100 = let rate;',
        'answer_3': 'rate = 100;',
        'answer_4': 'let rate = 100;',
        'right_answer': 4,
    },

    {
        'question': 'Welcher JavaScript Variablentyp darf im Programmverlauf nicht mehr verändert werden?',
        'answer_1': 'const',
        'answer_2': 'var',
        'answer_3': 'let',
        'answer_4': 'konst',
        'right_answer': 1,
    },

    {
        'question': 'Wie nennt man folgendes Zeichen: `',
        'answer_1': 'backslash',
        'answer_2': 'backtick',
        'answer_3': 'back-o-troph',
        'answer_4': 'back-comma',
        'right_answer': 2,
    },

];




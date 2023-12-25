let generateBtn =  document.querySelector('#newquote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


const quotes = [{
    quote:`"Life is 10% what happens to you and 90% how you react to it."`,
    person:`-Charles R. Swindoll`
,},
{
    quote:`“Change your thoughts, and you change your world.”`,
    person:`-Vincent Peale`
},
{
    quote:`"All our dreams can come true if we have the courage to pursue them.”`,
    person:`-Walt Disney`
},
{
    quote:`"Success is a journey not a destination."`,
    person:`-Ben Sweetland`
},
{
    quote:`"What you get by achieving your goals is not as important as what you become by achieving your goals."`,
    person:`-Zig Ziglar`
},
{
    quote:`"It always seems impossible until it's done."`,
    person:`-Nelson Mandela`
},
{
    quote:`“Success is liking yourself, liking what you do, and liking how you do it.”`,
    person:`-Maya Angelou`
},
{
    quote:`"Aim for the moon. If you miss, you may hit a star."`,
    person:`-W. Clement Stone`
},
{
    quote:`"If you cannot do great things, do small things in a great way."`,
    person:`-Napoleon Hill`
},
{
    quote:`“Success only comes to those who dare to attempt.”`,
    person:`- Mallika Tripathi`
},
{
    quote:`“I never dreamed about success. I worked for it.”`,
    person:`-Estée Lauder`
},
{
    quote:`"If opportunity doesn't knock, build a door."`,
    person:`-Milton Berle`
},
];

generateBtn.addEventListener('click',function(){
    
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
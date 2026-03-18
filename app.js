/**
 * Represents an artist with their profile information
 * @class
 */
class artist{
    /**
     * Creates an instance of artist.
     * @param {string} imagepath - The path to the artist's profile image
     * @param {string} name - The artist's full name
     * @param {string} job - The artist's profession/title
     * @param {string} description - A detailed description of the artist's career and achievements
     * @param {string} song - The SoundCloud embed URL for one of the artist's songs
     */
    constructor(imagepath, name, job, description, song){
        this.imagepath = imagepath;
        this.name = name;
        this.job = job;
        this.description = description;
        this.song = song;
    }
    
}

// Create artist instances with their profile information
// Each artist object contains image path, name, job title, career description, and a SoundCloud song embed URL
const ayra = new artist("images/ayra.jpeg", "Ayra Starr", "Singer & Songwriter",
    `Ayra Starr is a Grammy-nominated Nigerian singer and Mavin Records artist
    who has become a global face of Afrobeats with her signature "Afrosoul" sound. 
    Since her 2021 debut, the "Celestial Being" has dominated charts with viral hits like "Rush" 
    and "Commas," making history as a leading female voice in African music through her 2024 album
    The Year I Turned 21 and major 2025 award wins. Known for her Y2K fashion sense and empowering
    lyrics, she remains a powerhouse in 2026 with her latest soulful releases.`, 
    `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2025429324&color=%238a2be2&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false`);

const beyonce = new artist("images/bey.jpg", "Beyonce Knowles", "Singer, Producer, Actor & Entrepreneur",
    `Beyoncé is a global icon, business mogul, and the most decorated artist in Grammy history. 
    As of early 2026, her influence has only expanded: she officially joined the billionaire's club 
    following the massive success of her genre-bending trilogy project, which includes the house-inspired
    Renaissance (2022) and the country-rooted Cowboy Carter (2024).
    In a historic moment at the 2025 Grammy Awards, she finally won her first Album 
    of the Year trophy for Cowboy Carter, bringing her career total to a record-breaking 35 wins.
    Currently, she is serving as a co-chair for the 2026 Met Gala and is heavily rumored to be preparing 
    "Act III" of her trilogy—speculated by fans to be a rock-inspired era—while continuing to manage her
    empire, which includes her haircare brand Cécred and SirDavis whisky.`,
`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1786307313&color=%238a2be2&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false`);


const fave = new artist("images/fave.jpg", "Fave", "Singer & Songwriter",
    `Fave (born Chidozie Godsfavour Ugochinyere) is a rising Nigerian singer and songwriter
    who became a breakout star in the Afropop and Alté scenes. She first gained massive attention 
    in 2020 through a viral freestyle on Twitter, which quickly transitioned into a professional 
    career under her own terms as an independent-leaning artist.She is best known for her 2021
    hit "Baby Riddim," which dominated charts across Africa and showcased her signature "riddim" 
    style—a blend of soulful vocals, catchy melodies, and Caribbean-influenced beats. 
    Following the success of her debut EP, Riddim 5 (2022), she has continued to solidify 
    her place in the industry through high-profile collaborations, most notably with Nigerian 
    heavyweight Olamide on tracks like "PonPon." In 2025 and early 2026, she has remained a 
    consistent force with soulful singles like "Controlla" and "Dutty Love," maintaining her 
    reputation for "vulnerable yet vibe-heavy" songwriting.`,
    `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2218086896&color=%238a2be2&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false`);

const jazmine = new artist("images/Jazmine.webp", "Jazmine Sullivan", "Singer & Songwriter", 
    `Jazmine Sullivan is a powerhouse American R&B singer-songwriter celebrated for her raspy, 
    multi-octave range and deeply storytelling lyrics. Since her 2008 breakout with "Bust Your Windows,"
    she has become a "vocalist's vocalist", most recently reaching a career peak with her 2021 
    Grammy-winning project Heaux Tales and the multi-platinum anthem "Pick Up Your Feelings."
    In 2026, she remains a gold standard in soul music, recently achieving new RIAA milestones and 
    continuing to influence the next generation of R&B and Afrosoul artists with her technical mastery
    and emotional honesty.`,
    `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A959309827&color=%238a2be2&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false`);
const libianca = new artist("images/libianca.jpg", "Libianca", "Singer & Songwriter", 
    `Libianca (Libianca Kenzonkinboum Fonji) is a Cameroonian-American singer who became a global
    sensation with her 2022 breakout hit "People" a soulful Afrobeats anthem that explores her personal
    struggles with cyclothymia and mental health. After gaining initial notice on The Voice in 2021,
    she made history as the first Cameroonian artist to win a BET Award (Best International New Act) 
    and a Headies Award. In 2025 and early 2026, she has solidified her "Afrosoul" status with 
    successful singles like "No Water" and the 2026 collaboration "Nobody," continuing to blend R&B
    and gospel influences with her signature healing, "sultry and sweet" vocal style.`,
    `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1527832186&color=%238a2be2&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false`);

const riri = new artist("images/riri.webp", "Riahanna", "Singer, Producer & Entrepreneur", 
    `Rihanna is a Barbadian singer, billionaire businesswoman, and global cultural icon who has
    spent the last decade redefining the bridge between music and entrepreneurship. While she remains 
    one of the best-selling artists of all time, her primary focus since 2016 has been her $1.4 billion
    Fenty empire, comprising Fenty Beauty, Savage X Fenty, and Fenty Hair—brands that revolutionized 
    the industry through radical inclusivity. As of March 2026, the "Rihanna Navy" is in a frenzy
    following several confirmed late-night recording sessions in New York, marking the strongest signs 
    yet that her long-awaited ninth album (R9) is finally nearing completion. Now a mother of three 
    with partner A$AP Rocky, she continues to balance her role as a beauty mogul with her status as 
    a fashion powerhouse, recently being named a co-chair for the 2026 Met Gala.`,
    `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1371713119&color=%238a2be2&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false`);

const tems = new artist("images/tems.jpeg", "Tems", "Singer, Songwriter  & Producer", 
    `Tems (Temilade Openiyi) is a Nigerian singer, songwriter, and producer whose deep,
    velvety voice has made her a global face of the "Alté" and Afrobeats movements. 
    After her 2020 breakout with "Essence" alongside Wizkid, she made history as the first
    Nigerian female artist to win multiple Grammys, recently taking home the 2025 award for
    Best African Music Performance for her hit "Love Me JeJe." As of early 2026, she is celebrating
    the massive success of her debut studio album Born in the Wild and her 2025 EP Love Is a Kingdom,
    while currently co-headlining major international festivals like London's All Points East.`,
    `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A895314484&color=%238a2be2&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false`);
const tiwa = new artist("images/tiwa.jpg", "Tiwa Savage", "Singer, Songwriter, Actor  & Producer", 
    `Known as the "Queen of Afrobeats," Tiwa Savage is a trailblazing Nigerian singer and actress 
    who has spent over a decade defining the sound of modern African pop. After early years as a backup 
    vocalist for icons like Whitney Houston, she returned to Nigeria to release era-defining hits like
    "Eminado" and "Koroba," eventually becoming the first woman to win Best African Act at the MTV EMAs.
    In 2026, she is firmly in her "mogul era," recently launching the Tiwa Savage Music Foundation in
    partnership with Berklee College of Music to train emerging African talent, while continuing
    to dominate the stage with a headline performance at the 2026 MOBO Awards following her vulnerable 
    2025 album, This One Is Personal.`,
    `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A881626702&color=%238a2be2&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false`);

// Array containing all artist objects for easy navigation
const artists = [ ayra, tems, tiwa, libianca, fave, jazmine, riri, beyonce];

// DOM element references for dynamic content updates
let picture = document.querySelector(".profilepicture");
let name = document.getElementById("name");
let job = document.getElementById("job");
let description = document.getElementById("description");
let audio = document.getElementById("audio");
let left = document.getElementById("left");
let right = document.getElementById("right");
let btn = document.getElementById("btn");

// Counter to track current artist index
let count = 0;

/**
 * Updates the DOM elements to display the selected artist's information
 * @param {artist} artist - The artist object to display
 */
function displayArtist(artist){
    picture.src = artist.imagepath;
    name.innerHTML = artist.name;
    job.innerHTML = artist.job;
    description.innerHTML = artist.description;
    audio.src = artist.song;
}

/**
 * Calculates the correct array index, handling negative values and wrap-around
 * @returns {number} The valid index within the artists array bounds
 */
function computeIndex(){
    if(count>=0){
        return count%artists.length;
    } 
    else{
        return artists.length + count%artists.length;
    }
}

// Event listener for left arrow navigation (previous artist)
left.addEventListener("click", function(){
    count--;
    let index = computeIndex();
    displayArtist(artists[index]);
})

// Event listener for right arrow navigation (next artist)
right.addEventListener("click", function(){
    count++;
    let index = computeIndex();
    displayArtist(artists[index]);
})

// Event listener for surprise me button (random artist selection)
btn.addEventListener("click", function(){
    count = Math.floor(Math.random()*artists.length);
    displayArtist(artists[count]);
})
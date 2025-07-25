
// Detect DNS-based ad blocking
fetch("https://fpyf8.com/88/tag.min.js", { method: 'HEAD', mode: 'no-cors' })
  .then(() => {
    // Script is accessible
  })
  .catch(() => {
    document.body.innerHTML = `
      <div style="text-align:center;padding:50px;color:red;font-family:sans-serif;">
        <h1>🚫 Access Denied</h1>
        <p>This service is not available while Private DNS or AdBlockers are enabled.</p>
        <p>Please disable them to continue.</p>
      </div>
    `;
  });

const links = [
  { url: "http://wanicelife.com:8880", username: "DAANM2777", password: "Xvd4eLMM7m" },
  { url: "http://map.royal8080.com:8080", username: "Martin7463", password: "aaaM2Ay" },
  { url: "http://593zona.live", username: "Usergiocamarillo1909", password: "RvrZn5kzyQ" },
  { url: "http://massiveletal.xyz:8080", username: "JoaoXureta", password: "JoaoXureta2020" },
  { url: "http://ssliste.simpsongroups.com:80", username: "zikojelica", password: "E845P2V9ae" },
  { url: "http://ugeen.live:8080", username: "exskypeleoshare-jordansat4u", password: "50" },
  { url: "http://pjn2210.xyz:8080", username: "Necohoroz", password: "847476ret36754" },
  { url: "http://dreamtv22.info:25461", username: "7775", password: "7775" },
  { url: "http://dreamtv22.info:25461", username: "334455", password: "334455" },
  { url: "http://195.66.215.133:8080", username: "UsAGnKQo2K", password: "nalmefiWEh" },
  { url: "http://gqdns.com:8080", username: "ilirbilalli", password: "7KR42eQy" },
  { url: "http://89.36.95.204:8080", username: "Laurentiu83", password: "rSElkwxUeDL0pZuaIjUXCgxvugQyBR" },
  { url: "http://tv.nstvlatino.com:8080", username: "eduardoyrosario", password: "eduardo2019" },  
  { url: "http://wanicelife.com:8880", username: "DAANM2966", password: "JE9FZj7ve5" },
    { url: "http://nodns1.top:8080", username: "8901727706765182", password: "dc74de0c2475" },
  { url: "http://nodns1.top:8080", username: "55173314969399", password: "21739881082885" },
  { url: "http://nodns1.top:8080", username: "7891733910053632", password: "e9670051c05a" },
  { url: "http://nodns1.top:8080", username: "3961741122286691", password: "1e2a9bf2e776" },
  { url: "http://nodns1.top:8080", username: "5421727201012181", password: "bcc0387604d0" },
  { url: "http://nodns1.top:8080", username: "27172979093034", password: "41737393581292" },
  { url: "http://nodns1.top:8080", username: "5561742308873698", password: "8057ea9d1165" },
  { url: "http://nodns1.top:8080", username: "5171739454173681", password: "74c651a557c4" },
  { url: "http://nodns1.top:8080", username: "8951732454602621", password: "f24c469df332" },
  { url: "http://nodns1.top:8080", username: "78171448822165", password: "21743254793197" },
  { url: "http://cord-cutter.net:8080", username: "5ZK2w7aJNy", password: "J3ddWZD9Ww" },
  { url: "http://1tv41.icu:8080", username: "ggct0Q", password: "809783" },
  { url: "http://1tv41.icu:8080", username: "ahx4CN", password: "815233" },
  { url: "http://ultra-premium-pro.xyz:8080", username: "993104162tv", password: "d6jb6tz" },
  { url: "http://xxip25.top:8080", username: "m1pA6E", password: "285356" },
  { url: "http://xxip25.top:8080", username: "25220837", password: "51659469" },
  { url: "http://xxip25.top:8080", username: "1yNyea", password: "123956" },
  { url: "http://line.nourpro.xyz", username: "abderrahimsahbyousefnova", password: "NOVA12ff" },
  { url: "http://vipsinotv.com", username: "F66R65V292080729", password: "" },
  { url: "http://mynetworks.info:80", username: "farouq2024", password: "farouq2025" },
  { url: "http://privastreet.com", username: "28534rde1709", password: "arX6AZQ" },
  { url: "http://teslaiptv.com:2095", username: "dawoodxgaza", password: "rnEyHqzj9eG" },
  { url: "http://tprohd.net:8080", username: "8461984835882", password: "27978122934" },
  { url: "http://071024.com:880", username: "2059033142332", password: "ByAPuUzTYVV3eSu" },
  { url: "http://tera4k.com:8880", username: "arab1one2aa", password: "2222537032122927373" },
  { url: "http://test.unionsmartservice.com:8080", username: "ahmed5555", password: "ali44401228090505mmzz" },
  { url: "http://istarpro.xyz:80", username: "D0504995393", password: "eAe112233" },
  { url: "http://a6.lion.wine", username: "Mr8t1530", password: "GUKY3467" },
  { url: "http://atv-pro.net", username: "ACV716544171097", password: "6663781" },
  { url: "http://yshoots.com:80", username: "arab1onea22225", password: "1613967109" },
  { url: "http://200.26.188.66:80", username: "sknym3", password: "ZnbtQFPRh" },
  { url: "http://skyglass.vip:8080", username: "098764346755444801", password: "679" },
  { url: "http://cc20.xyz:2082", username: "6WQsDWIQm0in3EjMB", password: "vNhN9ZG" },
  { url: "http://ktvs.xyz", username: "4204884570089", password: "204529517210" },
  { url: "http://allone8k.info", username: "Abdallah123", password: "123" },
  { url: "http://skyglass.vip:8080", username: "098764346755444801", password: "679" }
];

function generateLink() {
  const random = links[Math.floor(Math.random() * links.length)];
  document.getElementById('urlText').textContent = random.url;
  document.getElementById('userText').textContent = random.username;
  document.getElementById('passText').textContent = random.password;
}

function copyText(id) {
  const text = document.getElementById(id).textContent;
  const temp = document.createElement("textarea");
  temp.value = text;
  document.body.appendChild(temp);
  temp.select();
  document.execCommand("copy");
  document.body.removeChild(temp);
  alert("📋 Copied: " + text);
}

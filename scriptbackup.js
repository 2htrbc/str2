
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
  { url: "http://wanicelife.com:8880", username: "DAANM2966", password: "JE9FZj7ve5" }  
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


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
  { url: "http://wanicelife.com:8880", username: "3ca7083n03", password: "asdf32e32" },
  { url: "http://wanicelife.com:8880", username: "kg12m082354", password: "sdfsdfwe323" },
  { url: "http://wanicelife.com:8880", username: "kg14m3n1116", password: "sfdsdrgr2334" },
  { url: "http://wanicelife.com:8880", username: "D12m4026", password: "25722489" },
  { url: "http://wanicelife.com:8880", username: "D12m3650", password: "59376158" },
  { url: "http://wanicelife.com:8880", username: "D12m4642", password: "92337733" },
  { url: "http://wanicelife.com:8880", username: "D48m4019", password: "43509358" },
  { url: "http://wanicelife.com:8880", username: "12mx040087", password: "74325187" },
  { url: "http://wanicelife.com:8880", username: "29us03273n14", password: "wefrw323" },
  { url: "http://wanicelife.com:8880", username: "60mx020025", password: "12919677" },
  { url: "http://wanicelife.com:8880", username: "D12m2000001", password: "81455863" },
  { url: "http://wanicelife.com:8880", username: "DAALM3875", password: "yjcUhTxJnn" },
  { url: "http://wanicelife.com:8880", username: "29us03173n03", password: "asdf23e23" },
  { url: "http://wanicelife.com:8880", username: "6mk050013", password: "88559261" },
  { url: "http://wanicelife.com:8880", username: "6mkk030005", password: "76339525" },
  { url: "http://wanicelife.com:8880", username: "DAANM2922", password: "DTgrhK7yrc" },
  { url: "http://wanicelife.com:8880", username: "D12m4067", password: "13397246" },
  { url: "http://wanicelife.com:8880", username: "D12m4264", password: "28853258" },
  { url: "http://wanicelife.com:8880", username: "D12m4443", password: "60388279" },
  { url: "http://wanicelife.com:8880", username: "D12m3565", password: "86176145" },
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

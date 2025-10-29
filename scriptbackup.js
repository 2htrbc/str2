
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
  { url: "http://tv.psmarters.xyz:8080", username: "BeratAkyol", password: "mXUpRNw" },
  { url: "http://tv.psmarters.xyz:8080", username: "abone2779.01", password: "tS6YBCZhbqqY" },
  { url: "http://tv.psmarters.xyz:8080", username: "2a6WheHvCvuK", password: "CNjkjcYxS2mb" },
  { url: "http://ip96.uk:8080/", username: "H645668DH", password: "7565848DHY" },
  { url: "http://ip96.uk:8080/", username: "patelnetiptv", password: "TUxpd3YptKcg" },
  { url: "http://live.lynxiptv.xyz", username: "357897605647", password: "hGwhvnV1Yb" },
  { url: "http://v3-support.it.com:2082", username: "yas012_738032", password: "QkPA9wAz&output=mpegts" },
  { url: "http://mair360.com", username: "cassannorbert9911", password: "qfcektfb" },
  { url: "http://mair360.com", username: "919297", password: "tqpeaaEG" },
  { url: "http://xott.live:8080", username: "999999", password: "222222" },
  { url: "http://xott.live:8080", username: "456712", password: "456713" },
  { url: "http://pedro8k.world:88", username: "PONTESANPIETRO2603", password: "OFGYQDEDZTZQLBE" },
  { url: "http://app.skyglass.asia", username: "Del", password: "Del12345" },
  { url: "http://app.skyglass.asia", username: "Lou123", password: "Lou123" },
  { url: "http://600600.org:8080", username: "kGCgrxxxcV0yR4n", password: "KFBUpt1eVWZamVb" },
  { url: "http://fenixplay.info:8080", username: "carloshuala", password: "4cQauTMwAHaH" },
  { url: "http://aptg.xyz:8080", username: "b70xhPez", password: "kg1EPDqj" },
  { url: "http://8pdrac65.g2afdo.xyz:80", username: "vit42573", password: "CnQcgV@tyTC" },
  { url: "http://premium2.ottpro2.org:8789", username: "robotic", password: "6236153" },
  { url: "http://cms-portals.com:80", username: "Marin2", password: "fRxZTMIHL7" },
  { url: "http://xxip25.top:8080", username: "28148830", password: "68208395" },
  { url: "http://xxip25.top:8080", username: "glenn1963@start.ca", password: "vhCgTd2S3K" },
  { url: "http://english-uk.xyz:8000", username: "mar884cr", password: "toprak321" },
  { url: "http://english-uk.xyz:8000", username: "armut", password: "cikis" },
  { url: "http://tv14s.xyz:8080", username: "15564292", password: "15564292" },
  { url: "http://1tv41.icu:8080", username: "tx77044@yahoo.com", password: "tx77044@2023" },
  { url: "http://client.canifer.com:81", username: "@AlbaMaX@", password: "AlbaExchange" },
  { url: "http://2.magmas5.com:8000", username: "elpuma1212", password: "NAVI51J17J" },
  { url: "http://fomo.re:80", username: "3SWxAHL2sQQCPWZF", password: "9W3inJ6jgJL6Wxx9" },
  { url: "http://cdn1host.online:8080", username: "juanv", password: "04bodwaga0" },
  { url: "http://23682-alone.oot-mx.me", username: "7281824b88", password: "2c0ba3f499da" }
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

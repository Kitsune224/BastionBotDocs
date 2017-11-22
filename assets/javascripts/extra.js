function invLink(element) {
  let clientID = document.getElementById('clientID').value;
  document.getElementById('inviteLink').innerHTML = `https://discordapp.com/oauth2/authorize?client_id=${clientID}&amp;scope=bot&amp;permissions=2146958463`;
}

function openInvLink(element) {
  let clientID = document.getElementById('clientID').value;
  let url = `https://discordapp.com/oauth2/authorize?client_id=${clientID}&scope=bot&permissions=2146958463`;
  window.open(url);
}

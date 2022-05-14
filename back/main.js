const puppeteer = require('puppeteer');
const fs = require('fs');
let counter = 1;
console.log('LinkeBot Iniciado, abra o arquivo Index.HTML 🤖🔎')

async function pupper() {
  
    
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.linkedin.com/jobs/front-end-jobs-brasil?geoId=106057199&countryRedirected=1&position=1&pageNum=0');
  await console.log("Atualizando vagas...🔎")

  const list = await page.evaluate(() => {
      const nodeList = document.querySelectorAll('a[data-tracking-control-name="public_jobs_jserp-result_search-card"]');
      const textArray = [...nodeList]
      const list = textArray.map( ({href, innerText}) => ({
          href, innerText
      }));
      return list
  }); 


  fs.writeFile('./back/data.json', JSON.stringify(list, null, 2), err => {
      if (err) throw new Error('Alguma coisa deu errada')

      console.log(`Vagas atualizadas 👌🏻${counter ++} vezes`);
  })

 
  await browser.close();
};

function runBot (){
    setInterval(pupper, 19000)
}

runBot();

const fs = require('fs').promises;
const { v4: uuidv4 } = require('uuid');

class Url {
  async listUrl() {
    try {
      const { urls } = JSON.parse(await fs.readFile('./data/urls.json', "utf8"));
      
      if (urls.length === 0)
        return [];

      return urls;
    } catch (error) {
      return [];
    }

  };

  async addUrl({ url }) {
        
      const urlsJSON = JSON.parse(await fs.readFile('./data/urls.json', "utf8"));
      const { urls, urlsId } = urlsJSON;
      let id = urlsId;
      const lessUrl = `https://cutt.ly/` + uuidv4().slice(0, 7);

      urls.push({id, url, lessUrl});

      const list = {
        urlsId: ++id,
        urls
      }

      await fs.writeFile('./data/urls.json', JSON.stringify(list));          

  };

  async updateUrl({id, url }) {

        
      const urlsJSON = JSON.parse(await fs.readFile('./data/urls.json', "utf8"));
      const { urls, urlsId } = urlsJSON;
      const lessUrl = `https://cutt.ly/` + uuidv4().slice(0, 7);

      let newUrls = urls.map((currentUrl) => (currentUrl.id === parseInt(id)) ?
          {id: parseInt(id), url, lessUrl } :
          currentUrl);
      
      const list = {
        urlsId,
        urls: newUrls
      }

      await fs.writeFile('./data/urls.json', JSON.stringify(list));          
  };

  async deleteUrl(id) {
    try {
      const { urls, urlsId } = JSON.parse(await fs.readFile('./data/urls.json', "utf8"));
      const urlsFilter = urls.filter(url => url.id !== parseInt(id));
      const list = {
        urlsId,
        urls: urlsFilter
      }

      await fs.writeFile('./data/urls.json', JSON.stringify(list));

    } catch (error) {
        console.log(error);
    }
  };
}

module.exports = Url;
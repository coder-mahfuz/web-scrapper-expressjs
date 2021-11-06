const express = require("express")
const cheerio = require("cheerio")
const axios = require("axios")


const PORT = 5000;
const url = "https://dev.to/";
const app = express();

axios(url)
  .then(res => {
    const html = res.data;
    const $ = cheerio.load(html) // can be named anything
    const blogs = []

    $('.crayons-story__title', html).each(function () {
      const title = $(this).text()
      const url = $(this).find('a').attr('href')
      blogs.push({
        title,
        url
      })
    })
    console.log(blogs);
  }).catch(err => console.log(err))


app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
})
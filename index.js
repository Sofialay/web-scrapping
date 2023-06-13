const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const PORT = '8000'

const app = express()

const url = 'https://www.bocajuniors.com.ar/'

axios(url).then((response) => {
    const data = response.data
    const $ = cheerio.load(data)
    const titles = []
    $('.no-gutters', data).each(function() {
        const title = $(this).find('span')
        const text = title.text()
        titles.push(text)
    })
    console.log(titles)
}).catch(err => console.log(err))

app.listen(PORT, () => {
    console.log('serve working in port 8000')
})
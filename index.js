const cheerio = require("cheerio")
const request = require("request")
const cities = [
    "서울",
    "부산",
    "대구",
    "인천",
    "광주",
    "대전",
    "울산",
    "세종",
    "경기",
    "강원",
    "충북",
    "충남",
    "전북",
    "전남",
    "경북",
    "경남",
    "제주"
] 

let url = "http://ncov.mohw.go.kr/" //코로나바이러스감염증-19(COVID-19)
exports.getTotal = (str) => {
    let Array = []
    let value = cities.indexOf(str)
    return new Promise(resolve => {
        request(url, function(error, response, body) {
            const $ = cheerio.load(body)
            if(!str) {
                const colArr = $(".num")
    
                let confirm = colArr[0].children[0].next.data
                let cure = colArr[1].children[0].data
                let curing = colArr[2].children[0].data
                let dead = colArr[3].children[0].data
                let accumlate = colArr[4].children[0].data
    
                Array.push({ confirm, cure, curing, dead, accumlate })
                resolve(Array)
            } else if(value != -1) {
                corona_cities = $(".num")
                value = 5 * value
                let passnum = 30+value

                let confirm = corona_cities[passnum].children[0].data
                let cure = corona_cities[passnum+1].children[0].data
                let curing = corona_cities[passnum+2].children[0].data
                let dead = corona_cities[passnum+3].children[0].data
                let incidence = corona_cities[passnum+4].children[0].data

                Array.push({ confirm, cure, curing, dead, incidence })
                resolve(Array)
            } else {
                throw new Error("없는 지역을 검색할 수 없습니다.")
            }
        })
    })
}


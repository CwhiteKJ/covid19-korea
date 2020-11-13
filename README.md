# COVID-19 [ KOREA ]

웹 크롤링 없이 간단하게 대한민국의 코로나19 현황을 가져오세요.     

## 대한민국 전체 통계 구하기    
INPUT: 
```js
const covid19 = require("covid19-korea")

(async () => {
    let corona = await covid19.getTotal()
    console.log(corona)
})()

/* 또 다른 방법으로는... */

const covid19 = require("covid19-korea")

covid19.getTotal().then(result => {
    console.log(result)
})
```    
OUTPUT:
```js
[
  {
    confirm: '14,175',
    cure: '12,905',
    curing: '971',
    dead: '299',
    accumlate: '1,526,974 건'
  }
]
```    
## 특정 도시의 통계 구하기    
INPUT:
```js
const covid19 = require("covid19-korea")

(async () => {
    let corona = await covid19.getTotal("서울") // 서울말고도 여러 도시가 가능합니다.
    console.log(corona)
})()
```    
OUTPUT:
```js
[
  {
    confirm: '1,574',
    cure: '179',
    curing: '1,384',
    dead: '11',
    incidence: '16.17'
  }
]
```

## 반환되는 정보
|confirm|cure|curing|dead|accumlate|incidence|
|-------|----|------|----|---------|---------|
|확진자|완치|치료 중|사망|누적 검사 수|10만명 당 발생률|

### Discord.js 와 같이 사용하기 
```js
const Discord = require("discord.js")
const client = new Discord.Client()
const covid19 = require("covid19-korea")

client.on("ready", () => {
    console.log("ready!")
}

client.on('message', async message => { // async 사용 해야합니다.
    if(message.content.startsWith("코로나")) {
        let corona = await covid19.getTotal()
        message.channel.send(corona[0].confirm + "명")
    }
})

client.login('token')
```

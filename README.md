# covid19-korea
웹크롤링이 힘든분을 위해 간단하게 대한민국 코로나19 현황을 가져올 수 있는 모듈입니다.


# 사용법
> 전국 통계 구하기        

입력 :     
```js
const covid19 = require("covid19-korea");

(async () => {
    let corona = await covid19.getTotal()
    console.log(corona)
})()

// 혹은...
const covid19 = require("covid19-korea")

covid19.getTotal().then(result => {
    console.log(result)
})
```
결과 :      
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

> 특정 도시 통계 구하기   
    
! 조회가능한 도시 목록 :    
서울, 부산, 대구, 인천, 광주, 대전, 울산, 세종, 경기, 강원, 충북, 충남, 전북, 전남, 경북, 경남, 제주

입력 : 
```js
const covid19 = require("covid19-korea");

(async () => {
    let corona = await covid19.getTotal("서울") // 서울말고도 여러 도시가 가능합니다
    console.log(corona)
})()
```

결과 : 
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

> 반환되는 정보 (공통)        
confirm - 확진자     
cure - 완치   
curing - 치료(격리) 중    
dead - 사망    

> 반환되는 정보 (전체)          
accumlate - 누적 검사수   

> 반환되는 정보 (특정 도시)           
incidence - 10만명당 발생률 (퍼센트)   

# Discord.js 랑 같이 쓰기
```js
const Discord = require("discord.js")
const client = new Discord.Client()
const covid19 = require("covid19-korea")

client.on("ready", () => {
    console.log("ready!")
}

client.on('message', async message => { // async 쓰셔야합니다!
    if(message.content.startsWith("코로나")) {
        let corona = await covid19.getTotal()
        message.channel.send(corona[0].confirm + "명")
    }
})

client.login('token')
```

# 문제가 있으면 이슈로 알려주세요.

const covid19 = require("../index");

(async () => {
    let corona = await covid19.getTotal("서울")
    console.log(corona)
})()
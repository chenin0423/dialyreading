function updatePointContent(element, title, content, link){
    $(element).text(title)
    $(element).append(content)// add content
    element = element + ' > a'
    $(element).attr('href', link)
}

function addContentAndLink(element, content, link){
    $(element).append(content)// add content
    element = element + ' > a'
    $(element).attr('href', link)
}

const title = "本周(9.15.2024 - 9.21.2024)晨兴与读经进度"
const morning_revival_book_title = "借着在基督耶稣里的恩典上得着加力，成为贵重的器皿，装备齐全的神人，好在神经纶的唯一职事中尽我们的职事 (2024年春季长老负责弟兄训练)"
const morning_revival_this_week = "<a>第六周 作贵重的器皿，同那清心呼求主的人，竭力追求公义、信、爱、和平</a>"
const morning_revival_link = "https://stemofjesse.org/doku/doku.php/%E6%99%A8%E5%85%B4%E5%9C%A3%E8%A8%80:2024:2024.02.%E6%98%A5%E5%AD%A3%E9%95%BF%E8%80%81%E8%B4%9F%E8%B4%A3%E5%BC%9F%E5%85%84%E8%AE%AD%E7%BB%83:%E7%AC%AC%E5%85%AD%E5%91%A8"
const youtube = `<br><br><iframe width="400" height="225" src="https://www.youtube.com/embed/w6ebX8q4EzE?si=UfFVnBm-WBtgV-su" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`

const old_test1 = "申命记" 
const old_test2 = "约书亚记" 
const new_test1 = "帖撒罗尼迦前书"
const new_test2 = "帖撒罗尼迦后书"

var ti = title
$('title').text(ti)
$('h1').text(ti)
//Morning Revival
$('.div1 > .sub').text("晨兴圣言")
var book = "书目：" + morning_revival_book_title
$('.div1 > h3 > ul > .p1').text(book)
ti = "进度："
var content = morning_revival_this_week
var link = morning_revival_link
var elem = '.div1 > h3 > ul > .p2'
updatePointContent(elem, ti, content, link)
elem = '.div1 > h3 > ul > .p3'
$(elem).text("晨兴圣言申言示范")
$(elem).append(youtube)

//Bible
$('.div2 > .sub').text("圣经")

ti = "旧约：" + old_test1
content = " <a>第33~34章</a>" //<------ update here every week
link = "https://www.recoveryversion.com.tw/Style0A/026/read_List.php?f_BookNo=5&f_ChapterNo=33"
elem = 'body > div.div2 > h3 > ul > li:nth-child(1) > .p1'
updatePointContent(elem, ti, content, link)
ti = "旧约：" + old_test2
content = " <a>第1~3章</a>" //<------ update here every week
link = "https://www.recoveryversion.com.tw/Style0A/026/read_List.php?f_BookNo=6&f_ChapterNo=1"
elem = 'body > div.div2 > h3 > ul > li:nth-child(1) > .p2'
updatePointContent(elem, ti, content, link)

var newTest = "帖撒罗尼迦前书"
ti = "新约：" + new_test1
content = " <a>第4~5章</a>" //<------ update here every week
link = "https://www.recoveryversion.com.tw/Style0A/026/read_List.php?f_BookNo=52&f_ChapterNo=4"
elem = 'body > div.div2 > h3 > ul > li:nth-child(2) > .p1'
updatePointContent(elem, ti, content, link)
ti = "新约：" + new_test2
content = " <a>第1~3章</a>" //<------ update here every week
link = "https://www.recoveryversion.com.tw/Style0A/026/read_List.php?f_BookNo=53&f_ChapterNo=1"
elem = 'body > div.div2 > h3 > ul > li:nth-child(2) > .p2'
updatePointContent(elem, ti, content, link)


//Life Study
newTest = "歌罗西书生命读经"
$('.div3 > .sub').text("生命读经")
ti = "进度："
content = "<a>" + newTest + "</a>"
link = "http://www.life-study1984.org/schedule/schedule.php?bookno=51-Y"
elem = '.div3 > h3 > ul > .p1'
updatePointContent(elem, ti, content, link)
ti = "展览日期: 10/17/2024"
$('.div3 > h3 > ul > .p2').text(ti)
ti = "展览范围：歌罗西书生命读经第17至24篇 (歌罗西书章二1~22节)"
$('.div3 > h3 > ul > .p3').text(ti)

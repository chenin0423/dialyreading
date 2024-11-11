function updatePointContent(element, title, content, link){
    $(element).text(title)
    $(element).append(content)// add content
    element = element + ' > a'
    $(element).attr('href', link)
}

const title = "本周(11.10.2024 - 11.16.2024)晨兴与读经进度"
const morning_revival_book_title = "2024年国殇节特会 基督徒的生活"
const morning_revival_this_week = `<a>第六周 三一神在基督里借着照在我们心里而作我们的生命</a>`
const morning_revival_link = "https://stemofjesse.org/doku/doku.php/%E6%99%A8%E5%85%B4%E5%9C%A3%E8%A8%80:2024:2024.03.%E5%9B%BD%E6%AE%87%E8%8A%82%E7%89%B9%E4%BC%9A:%E7%AC%AC%E5%85%AD%E5%91%A8"
const youtubeSrc = "https://www.youtube.com/embed/Ywj0NOX-RTY?si=1NGT__cWvh8Wu0Km"
const youtube = `<br><iframe width="350" height="197" src=${youtubeSrc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
 


const old_test1 = "士师记" 
const new_test1 = "彼得前书"
const new_test2 = "彼得后书"


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
content = " <a>第15~19章</a>" //<------ update here every week
link = "https://www.recoveryversion.com.tw/Style0A/026/read_List.php?f_BookNo=7&f_ChapterNo=15"
elem = 'body > div.div2 > h3 > ul > li:nth-child(1) > .p1'
updatePointContent(elem, ti, content, link)

ti = "新约：" + new_test1
content = " <a>第4~5章</a>" //<------ update here every week
link = "https://www.recoveryversion.com.tw/Style0A/026/read_List.php?f_BookNo=60&f_ChapterNo=4"
elem = 'body > div.div2 > h3 > ul > li:nth-child(2) > .p1'
updatePointContent(elem, ti, content, link)

ti = "新约：" + new_test2
content = " <a>第1~3章</a>" //<------ update here every week
link = "https://www.recoveryversion.com.tw/Style0A/026/read_List.php?f_BookNo=61&f_ChapterNo=1"
elem = 'body > div.div2 > h3 > ul > li:nth-child(2) > .p2'
updatePointContent(elem, ti, content, link)


//Life Study
newTest = "歌罗西书生命读经"
$('.div3 > .sub').text("生命读经")
ti = "进度："
content = "<a>" + newTest + "</a>"
link = 'https://simplified.lsmchinese.org/lifestudy/col-idx.html'
elem = '.div3 > h3 > ul > .p1'
updatePointContent(elem, ti, content, link)
ti = "展览日期: 11/14/2024"
$('.div3 > h3 > ul > .p2').text(ti)
ti = '展览范围：<a href="./Lifestudy.html">歌罗西书生命读经第25至32篇</a> <a href="https://www.recoveryversion.com.tw/Style0A/026/read_List.php?f_BookNo=51&f_ChapterNo=2">(歌罗西书第二~四章)</a>'
$('.div3 > h3 > ul > .p3').html(ti)

function updatePointContent(element, title, content, link){
    $(element).html(title)
    $(element).append(content)// add content
    element = element + ' > a'
    $(element).attr('href', link)
}

const title = "本周(11.24.2024 - 11.30.2024)晨兴与读经进度"
const morning_revival_book_title = "2024年夏季训练 经历、享受并彰显基督（一）"
const morning_revival_this_week = `<a>第二周 基督作为那行为受属天管治者、我们的牧人、我们的安息以及那撒种者</a>`
const morning_revival_link = "https://stemofjesse.org/doku/doku.php/%E6%99%A8%E5%85%B4%E5%9C%A3%E8%A8%80:2024:2024.04.%E5%A4%8F%E5%AD%A3%E8%AE%AD%E7%BB%83:%E7%AC%AC%E4%BA%8C%E5%91%A8"
const youtubeSrc = "https://www.youtube.com/embed/gZ_G2Y_idNk?si=o-XLmwaOCRz-pNfW"
const youtube = `<br><iframe width="350" height="197" src=${youtubeSrc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
 
const old_test1 = "路得记"
const old_test2 = "撒母耳记上" 
const new_test1 = `约翰二书 约翰三书 犹大书 启示录`
const new_test2 = "启示录"
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
content = " <a>第4章</a>" //<------ update here every week
link = "https://www.recoveryversion.com.tw/Style0A/026/read_List.php?f_BookNo=8&f_ChapterNo=4"
elem = 'body > div.div2 > h3 > ul > li:nth-child(1) > .p1'
updatePointContent(elem, ti, content, link)

ti = "旧约：" + old_test2
content = " <a>第1~4章</a>" //<------ update here every week
link = "https://www.recoveryversion.com.tw/Style0A/026/read_List.php?f_BookNo=9&f_ChapterNo=1"
elem = 'body > div.div2 > h3 > ul > li:nth-child(1) > .p2'
updatePointContent(elem, ti, content, link)

ti = "新约：" + new_test1
content = " <a>第1~2章</a>" //<------ update here every week
link = "https://www.recoveryversion.com.tw/Style0A/026/read_List.php?f_BookNo=66&f_ChapterNo=1"
elem = 'body > div.div2 > h3 > ul > li:nth-child(2) > .p1'
updatePointContent(elem, ti, content, link)


//Life Study
newTest = "罗马书生命读经"
$('.div3 > .sub').text("生命读经")
ti = "进度："
content = "<a>" + newTest + "</a>"
link = 'https://simplified.lsmchinese.org/lifestudy/roma-idx.html'
elem = '.div3 > h3 > ul > .p1'
updatePointContent(elem, ti, content, link)
ti = "展览日期: 12/12/2024"
$('.div3 > h3 > ul > .p2').text(ti)
ti = '展览范围：<a href="./Lifestudy.html">罗马书生命读经第1至8篇</a> <a href="https://www.recoveryversion.com.tw/Style0A/026/read_List.php?f_BookNo=45&f_ChapterNo=1">(罗马书 第一章)</a>'
$('.div3 > h3 > ul > .p3').html(ti)

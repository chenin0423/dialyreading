function updatePointContent(element, title, content, link){
    $(element).text(title)
    $(element).append(content)// add content
    element = element + ' > a'
    $(element).attr('href', link)
}

var ti = "本周(9.1.2024 - 9.7.2024)晨兴与读经进度"
$('title').text(ti)
$('h1').text(ti)
//Morning Revival
$('.div1 > .sub').text("晨兴圣言")
var book = "书目：" + "借着在基督耶稣里的恩典上得着加力，成为贵重的器皿，装备齐全的神人，好在神经纶的唯一职事中尽我们的职事 (2024年春季长老负责弟兄训练)"
$('.div1 > h3 > ul > .p1').text(book)
ti = "进度："
var content = "<a>第四周 基督把死废掉，将生命和不朽坏照耀出来，以及我们记念大卫的后裔耶稣基督从死人中得复活</a>"
var link = "https://stemofjesse.org/doku/doku.php/%E6%99%A8%E5%85%B4%E5%9C%A3%E8%A8%80:2024:2024.02.%E6%98%A5%E5%AD%A3%E9%95%BF%E8%80%81%E8%B4%9F%E8%B4%A3%E5%BC%9F%E5%85%84%E8%AE%AD%E7%BB%83:%E7%AC%AC%E5%9B%9B%E5%91%A8"
var elem = '.div1 > h3 > ul > .p2'
updatePointContent(elem, ti, content, link)
//Bible
var oldTest = "申命记"
$('.div2 > .sub').text("圣经")
ti = "旧约：" + oldTest
content = " <a>23~27章</a>" //<------ update here every week
link = "https://www.recoveryversion.com.tw/Style0A/026/read_List.php?f_BookNo=5&f_ChapterNo=23"
elem = 'body > div.div2 > h3 > ul > li:nth-child(1) > p'
updatePointContent(elem, ti, content, link)
ti = "认识基督系列："
content = "<a>" + oldTest + "</a>"
link = "https://substantial-baboon-a7f.notion.site/439cb75f4cc1495692f9d678c7080a85"
elem = 'body > div.div2 > h3 > ul > li:nth-child(1) > ul > li:nth-child(1) > p'
updatePointContent(elem, ti, content, link)
var newTest = "腓立比书"
ti = "新约：" + newTest
content = " <a>第2~4章</a>" //<------ update here every week
link = "https://www.recoveryversion.com.tw/Style0A/026/read_List.php?f_BookNo=50&f_ChapterNo=2"
elem = '.div2 > h3 > ul > li > .p2'
updatePointContent(elem, ti, content, link)
ti = "认识基督系列："
content = "<a>" + newTest + "</a>"
link = "https://shard-desk-771.notion.site/4fcaddc450f949c58793a08095c92fbd"
elem = 'body > div.div2 > h3 > ul > li:nth-child(2) > ul > li:nth-child(1) > p'
updatePointContent(elem, ti, content, link)
ti = "新约圣经导读："
content = "<a>" + newTest + "</a>"
link = "https://xinrenfuyin.org/?page_id=11091"
elem = 'body > div.div2 > h3 > ul > li:nth-child(2) > ul > li:nth-child(2) > p'
updatePointContent(elem, ti, content, link)
newTest = "歌罗西书"
ti = "新约：" + newTest
content = " <a>第1~2章</a>" //<------ update here every week
link = "https://www.recoveryversion.com.tw/Style0A/026/read_List.php?f_BookNo=51&f_ChapterNo=1"
elem = '.div2 > h3 > ul > li > .p3'
updatePointContent(elem, ti, content, link)
ti = "认识基督系列："
content = "<a>" + newTest + "</a>"
link = "https://shard-desk-771.notion.site/a4fe0637669d48c2848eac37703e4883"
elem = 'body > div.div2 > h3 > ul > li:nth-child(3) > ul > li:nth-child(1) > p'
updatePointContent(elem, ti, content, link)
ti = "新约圣经导读："
content = "<a>" + newTest + "</a>"
link = "https://xinrenfuyin.org/?p=11193"
elem = 'body > div.div2 > h3 > ul > li:nth-child(3) > ul > li:nth-child(2) > p'
updatePointContent(elem, ti, content, link)
//Life Study
newTest = "歌罗西书生命读经"
$('.div3 > .sub').text("生命读经")
ti = "进度："
content = "<a>" + newTest + "</a>"
link = "http://www.life-study1984.org/schedule/schedule.php?bookno=51-Y"
elem = '.div3 > h3 > ul > .p1'
updatePointContent(elem, ti, content, link)
ti = "展览日期: 9/12/2024"
$('.div3 > h3 > ul > .p2').text(ti)
ti = "展览范围：歌罗西书生命读经第9至16篇 (歌罗西书一章15~29节)"
$('.div3 > h3 > ul > .p3').text(ti)
// for new one
$('.div4 > .sub').text("新人喂养")
ti = "初信喂养系列："
content = "<a>" + "第1~12周" + "</a>"
link = "https://e-shepherding.org/%e5%88%9d%e4%bf%a1%e5%96%82%e5%85%bb%e7%b3%bb%e5%88%97%ef%bc%88%e7%ac%ac1-12%e5%91%a8%ef%bc%89/"
elem = '.div4 > h3 > ul > .p1'
updatePointContent(elem, ti, content, link)
ti = "初信喂养系列："
content = "<a>" + "第13~24周" + "</a>"
link = "https://e-shepherding.org/%e5%88%9d%e4%bf%a1%e5%96%82%e5%85%bb%e7%b3%bb%e5%88%97%ef%bc%88%e7%ac%ac1324%e5%91%a8%ef%bc%89/"
elem = '.div4 > h3 > ul > .p2'
updatePointContent(elem, ti, content, link)
ti = "召会生活系列："
content = "<a>" + "第25~36周" + "</a>"
link = "https://e-shepherding.org/%e5%8f%ac%e4%bc%9a%e7%94%9f%e6%b4%bb%e7%b3%bb%e5%88%97%ef%bc%88%e7%ac%ac2536%e5%91%a8%ef%bc%89/"
elem = '.div4 > h3 > ul > .p3'
updatePointContent(elem, ti, content, link)
ti = "福音生活系列："
content = "<a>" + "第37~48周" + "</a>"
link = "https://e-shepherding.org/%e7%a6%8f%e9%9f%b3%e7%94%9f%e6%b4%bb%e7%b3%bb%e5%88%97%ef%bc%88%e7%ac%ac3748%e5%91%a8%ef%bc%89/"
elem = '.div4 > h3 > ul > .p4'
updatePointContent(elem, ti, content, link)
ti = "新人喂养："
content = "<a>" + "牧养材料96题" + "</a>"
link = "https://e-shepherding.org/%E7%89%A7%E5%85%BB%E6%9D%90%E6%96%9996%E9%A2%98/"
elem = '.div4 > h3 > ul > .p5'
updatePointContent(elem, ti, content, link)
// others
$('.div5 > .sub').text("其他")
ti = ""
content = "<a>" + "诗歌集" + "</a>"
link = "https://rosemeaddistrict.github.io/myhymns/"
elem = '.div5 > h3 > ul > .p1'
updatePointContent(elem, ti, content, link)
ti = ""
content = "<a>" + "2024北美华语圣徒成全训练" + "</a>"
link = "https://na-csw.org/cn/training/2024-nacsspt-audio/"
elem = '.div5 > h3 > ul > .p2'
updatePointContent(elem, ti, content, link)


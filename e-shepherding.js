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

// for new one
$('.div1 > .sub').text("新人喂养")
var ti = "初信喂养系列："
var content = "<a>" + "第1~12周" + "</a>"
var link = "https://e-shepherding.org/%e5%88%9d%e4%bf%a1%e5%96%82%e5%85%bb%e7%b3%bb%e5%88%97%ef%bc%88%e7%ac%ac1-12%e5%91%a8%ef%bc%89/"
var elem = '.div1 > h3 > ul > .p1'
updatePointContent(elem, ti, content, link)
ti = "初信喂养系列："
content = "<a>" + "第13~24周" + "</a>"
link = "https://e-shepherding.org/%e5%88%9d%e4%bf%a1%e5%96%82%e5%85%bb%e7%b3%bb%e5%88%97%ef%bc%88%e7%ac%ac1324%e5%91%a8%ef%bc%89/"
elem = '.div1 > h3 > ul > .p2'
updatePointContent(elem, ti, content, link)
ti = "召会生活系列："
content = "<a>" + "第25~36周" + "</a>"
link = "https://e-shepherding.org/%e5%8f%ac%e4%bc%9a%e7%94%9f%e6%b4%bb%e7%b3%bb%e5%88%97%ef%bc%88%e7%ac%ac2536%e5%91%a8%ef%bc%89/"
elem = '.div1 > h3 > ul > .p3'
updatePointContent(elem, ti, content, link)
ti = "福音生活系列："
content = "<a>" + "第37~48周" + "</a>"
link = "https://e-shepherding.org/%e7%a6%8f%e9%9f%b3%e7%94%9f%e6%b4%bb%e7%b3%bb%e5%88%97%ef%bc%88%e7%ac%ac3748%e5%91%a8%ef%bc%89/"
elem = '.div1 > h3 > ul > .p4'
updatePointContent(elem, ti, content, link)
ti = "新人喂养："
content = "<a>" + "牧养材料96题" + "</a>"
link = "https://e-shepherding.org/%E7%89%A7%E5%85%BB%E6%9D%90%E6%96%9996%E9%A2%98/"
elem = '.div1 > h3 > ul > .p5'
updatePointContent(elem, ti, content, link)
ti = "约翰福音圣经伴读："
content = "<a>" + "约翰福音圣经伴读" + "</a>"
link = "./John_ch_1202.html"
elem = '.div1 > h3 > ul > .p6'
updatePointContent(elem, ti, content, link)





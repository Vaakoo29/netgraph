const width = window.innerWidth
const height = window.innerHeight
const svg = d3.select('svg')
  .attr('width', width)
  .attr('height', height)
  .style("background", "#132343")
  .attr("fill","white")
  .attr("font","Gill Sans");

 var graphData = {
   nodes: [
       {name: "Строительство угледобывающего комплекса на Межегейском месторождении Улуг-Хемского угольного бассейна", id: 1, amount:1100000000, area:"Республика Тыва"},
       {name: "Строительство железной дороги Элегест — Кызыл — Курагино", id: 2, amount:36040000000, area:"Республика Тыва"},
       {name: "Освоение Улуг-Хемского месторождения каменного угля", id: 3, amount:7900000000, area:"Республика Тыва"},
       {name: "Автотуристский кластер «Гостеприимная Тыва»", id: 4, amount:615000000, area:"Республика Тыва"},
       {name: "Освоение Кызыл-Таштыгского месторождения полиметаллических руд", id: 5, amount:1000000000, area:"Республика Тыва"},
       {name: "Освоение Ак-Сугского медно-порфирового месторождения в Тоджинском районе", id: 6, amount:360000000, area:"Республика Тыва"},
       {name: "Освоение Тарданского золоторудного месторождения", id: 7, amount:290000000, area:"Республика Тыва"},
       {name: "Создание предприятия по добыче золота на Кара-Бельдирском золоторудном месторождении", id: 8, amount:610000000, area:"Республика Тыва"},
       {name: "Создание трансграничного автомобильного коридора Красноярск — Абакан — Кызыл — Хандагайты — Улангом — Ховд — Урумчи", id: 9, amount:1780000000, area:"Республика Тыва"},
       {name: "Создание в Республике Хакасия оператора парка инновационных вагонов для отгрузки угля с Бейского месторождения", id: 10, amount:5100000000, area:"Республика Хакасия"},
       {name: "Строительство автомобильной дороги (транспортного коридора) Абакан — Бийск", id: 11, amount:4720000000, area:"Республика Хакасия"},
       {name: "Развитие и модернизация завода АО «РУСАЛ САЯНАЛ»", id: 12, amount:140000000, area:"Республика Хакасия"},
       {name: "Освоение Бейского каменноугольного месторождения, в том числе первоочередных участков Юго-Восточный Кирбинский и Северо-Западный Кирбинский", id: 13, amount:832000000, area:"Республика Хакасия"},
       {name: "Развитие участков Майрыхский и Бейский-Западный Бейского каменноугольного месторождения со строительством обогатительного комплекса", id: 14, amount:9100000000, area:"Республика Хакасия"},
       {name: "Строительство железнодорожного перехода Бейское каменноугольное месторождение – Хоных – Кирба со строительством железнодорожного моста через реку Абакан", id: 15, amount:8200000000, area:"Республика Хакасия"},
       {name: "Повышение производственной мощности разреза «Черногорский» и участка «Абаканский»", id: 16, amount:1100000000, area:"Республика Хакасия"},
       {name: "Строительство новых добывающих мощностей и модернизация шахты «Заполярная» («Южный кластер»)", id: 17, amount:71600000000, area:"Красноярский край"},
       {name: "Модернизация деревообрабатывающего производства на базе Ангаро-Енисейского экономического района", id: 18, amount:760000000, area:"Красноярский край"},
       {name: "Агропромышленный парк «Сибирь»", id: 19, amount:38410000000, area:"Красноярский край"},
       {name: "Создание международного транспортно-логистического и производственного хаба на базе аэропортов Красноярск и Черемшанка", id: 20, amount:60000000000, area:"Красноярский край"},
       {name: "Строительство Нижнебогучанской ГЭС", id: 21, amount:116810000000, area:"Красноярский край"},
       {name: "Строительство лесопромышленного комплекса и сопутствующих объектов железнодорожной инфраструктуры в Богучанском районе Красноярского края", id: 22, amount:131000000000, area:"Красноярский край"},
       {name: "Западно-Таймырский промышленный кластер по производству угольных концентратов из коксующихся углей", id: 23, amount:49950000000, area:"Красноярский край"},
       {name: "Разработка и обустройство Пайяхской группы месторождений и строительство морского терминала «Порт бухта Север»", id: 24, amount:330000000000, area:"Красноярский край"},
       {name: "Увеличение пропускной способности участка Артышта — Междуреченск — Тайшет", id: 25, amount:22960000000, area:"Красноярский край"},
       {name: "Придание аэропорту г. Кызыла статуса международного и открытие в нем международного пункта пропуска через государственную границу Российской Федерации", id: 26, amount:400000000, area:"Республика Тыва"},
       {name: "Создание молочно-товарного комплекса «Первомайский» в Боградском районе Республики Хакасия", id: 27, amount:6600000000, area:"Республика Хакасия"},
       {name: "Создание в непосредственной близости от АПП Хандагайты таможенно-логистического терминала, склада временного хранения, топливно-заправочного склада, гостиницы, элеватора, предприятия по переработке шерсти и производству мясных полуфабрикатов", id: 28, amount:3000000000, area:"Республика Тыва"},
       {name: "Развитие золотодобывающих компаний (АО «Полюс Красноярск»)", id: 29, amount:23900000000, area:"Красноярский край"},
       {name: "Освоение Боголюбовского, Удерейского и Горевского месторождений", id: 30, amount:22960000000, area:"Красноярский край"},
       {name: "Строительство биотехнологического комплекса в г. Лесосибирске Красноярского края", id: 31, amount:90000000000, area:"Красноярский край"},
       {name: "Развитие золотодобывающих компаний (ООО ГРК «Амикан»)", id: 32, amount:9840000000, area:"Красноярский край"},
       {name: "Cтроительство магистрального нефтепровода «Куюмба-Тайшет»", id: 33, amount:96300000000, area:"Красноярский край"},
       {name: "Строительство Богучанского алюминиевого завода", id: 34, amount:60000000000, area:"Красноярский край"},
       {name: "Организация переработки древесины в Кежемском районе", id: 35, amount:1570000000, area:"Красноярский край"},
       {name: "Строительство Тайшетского алюминиевого завода", id: 36, amount: 60000000000, area: "Иркутская область"},
       {name: "Развитие производства строительной извести", id: 37, amount: 285000000, area: "Красноярский край"},
       {name: "Модернизация производства аморфного графита", id: 38, amount: 1800000000, area: "Красноярский край"},
       {name: "Троицкий солеваренный завод", id: 39, amount: 1795000000, area: "Красноярский край"},
       {name: "Медицинский центр 'Первый меридиан'", id: 40, amount: 738000000, area: "Красноярский край"},
       {name: "Сеть футбольных манежей", id: 41, amount: 228000000, area: "Красноярский край"},
       {name: "Производство сублимированных ягод и функциональных напитков", id: 42, amount: 50000000, area: "Красноярский край"},
       {name: "Глэмпинг 'Кузнецово'", id: 43, amount: 53000000, area: "Красноярский край"},
       {name: "Производство терефталевой кислоты", id: 44, amount: 3000000000, area: "Красноярский край"},
       {name: "Плодово-ягодный сад", id: 45, amount: 1000000000, area: "Республика Хакасия"},
       {name: "Сеть доставок готового здорового питания Tasty Day", id: 47, amount: 250000000, area: "Республика Хакасия"},
       {name: "ТРК 'Горный' Деревянный Глэмпинг", id: 48, amount: 29000000, area: "Республика Хакасия"},
       {name: "ТРК 'Горный' Инвестплощадка 'Остров любви'", id: 49, amount: 36000000, area: "Республика Хакасия"},
       {name: "ТРК 'Горный' Инвестплощадка 'Этнодеревня'", id: 50, amount: 45900000, area: "Республика Хакасия"},
       {name: "ТРК 'Горный' Инвестплощадка 'Эко-отель'", id: 51, amount: 81500000, area: "Республика Хакасия"},
       {name: "ТРК 'Горный' Инвестплощадка 'Кедровый рай'", id: 52, amount: 145600000, area: "Республика Хакасия"},
       {name: "Многопрофильная стоматологическая поликлиника в г.Кызыле", id: 53, amount: 276000000, area: "Республика Тыва"},
       {name: "Горнолыжный туркомплекс 'Тайга'", id: 54, amount: 850000000, area: "Республика Тыва"},
       {name: "Санаторно-курортный и лечебно-оздоровительный туркомплекс 'Чедер-Kinezi'", id: 55, amount: 1645000000, area: "Республика Тыва"},
       {name: "Строительство сети придорожных объектов на автодороге Р257 'Енисей'", id: 56, amount: 118000000, area: "Республика Тыва"},
       {name: "Производство по шоковой заморозке плодов и ягод", id: 57, amount: 85000000, area: "Республика Тыва"},
       {name: "Глубая переработка льна", id: 58, amount: 175000000, area: "Республика Хакасия"},
       {name: "Производство модицифицированного крахмала из картофеля", id: 59, amount: 177000000, area: "Республика Хакасия"},
       {name: "Производство водоугольного топлива", id: 60, amount: 77000000, area: "Республика Тыва"},
       {name: "Производство углеродных сорбентов", id: 61, amount: 183000000, area: "Красноярский край"},
       {name: "Производство удобрений из апатитов и фосфоритов", id: 62, amount: 13500000000, area: "Красноярский край"},
       {name: "Создание производства стеновых панелей по технологии Massiv-Holz-Mauer", id: 63, amount: 450000000, area: "Красноярский край"},
       {name: "Производство ОСП плит из неделовой древесины", id: 64, amount: 1100000000, area: "Красноярский край"},
       {name: "Производство древесно-полимерных композитов", id: 65, amount: 935000000, area: "Красноярский край"},
       {name: "Строительство завода по производству сухих строительных смесей", id: 66, amount: 291000000, area: "Республика Хакасия"},
       {name: "Производство одноразовой медицинской продукции", id: 67, amount: 125000000, area: "Красноярский край"},
       {name: "Производство косметических средств из дикорастущего сырья", id: 68, amount: 482000000, area: "Красноярский край"},
       {name: "Освоение Ванкорской группы месторождений", id: 69, amount: 900000000000, area: "Красноярский край"},
       {name: "Полномасштабная разработка Верхнечонского месторождения", id: 70, amount: 152000000000, area: "Иркутская область"},
       {name: "Освоение нефтегазовых месторождений Юрубченко-Тохомской группы на юге Эвенкии", id: 71, amount: 300000000000, area: "Красноярский край"},
       {name: "Реконструкция Талнахской обогатительной фабрики 'Южный кластер'", id: 72, amount: 100000000000, area: "Красноярский край"},
       {name: "Серный проект", id:73, amount: 148000000000, area: "Красноярский край"},
       {name: "Строительство Богучанского ЛПК и сопутствующих объектов ж/д инфаструктуры", id:74, amount: 131000000000, area: "Красноярский край"},
       {name: "Создание и развитие особой экономической зоны 'Красноярская технологическая долина'", id:75, amount: 23100000000, area: "Красноярский край"},
       {name: "Строительство завода по производству полимеров в Иркутской области", id:76, amount: 168000000000, area: "Иркутская область"},
       {name: "Разработка месторождений Сухой Лог и создание крупного производства по добыче 80-90 т золота и 20-25 т серебра в год", id:77, amount: 407000000000, area: "Иркутская область"}
   ],
   links: [
       {source:2, target:1},
       {source:1, target:3},
       {source:2, target:3},
       {source:2, target:4},
       {source:2, target:5},
       {source:2, target:6},
       {source:2, target:7},
       {source:8, target:2},
       {source:9, target:2},
       {source:10, target:2},
       {source:11, target:2},
       {source:12, target:2},
       {source:12, target:11},
       {source:13, target:11},
      //  {source:13, target:16},
       {source:14, target:11},
       {source:14, target:13},
       {source:7, target:12},
       {source:15, target:14},
       {source:15, target:13},
       {source:15, target:10},
       {source:16, target:14},
       {source:17, target:16},
       {source:18, target:9},
       {source:18, target:31},
       {source:18, target:35},
       {source:19, target:9},
       {source:20, target:9},
       {source:21, target:9},
       {source:22, target:18},
       {source:25, target:9},
       {source:25, target:11},
       {source:28, target:9},
       {source:33, target:25},
       {source:26, target:4},
       {source:26, target:20},
       {source:23, target:24},
       {source:27, target:19},
       {source:34, target:21},
       {source:36, target:21},
       {source:12, target:34},
       {source:37, target:9},
       {source:37, target:34},
       {source:37, target:36},
       {source:37, target:17},
       {source:37, target:15},
       {source:37, target:8},
       {source:37, target:21},
       {source:37, target:24}, // соединяем Север
       {source:37, target:11},
       {source:38, target:11},
       {source:38, target:9},
       {source:39, target:11},
       {source:39, target:9},
       {source:42, target:19},
       {source:43, target:9},
       {source:44, target:9},
       {source:44, target:11},
       {source:45, target:9},
       {source:48, target:9},
       {source:48, target:49},
       {source:48, target:50},
       {source:48, target:51},
       {source:48, target:52},
       {source:54, target:9},
       {source:55, target:9},
       {source:56, target:9},
       {source:57, target:9},
       {source:57, target:45},
       {source:57, target:42},
       {source:45, target:42},
       {source:58, target:9},
       {source:59, target:9},
       {source:59, target:11},
       {source:59, target:19},
       {source:57, target:19},
       {source:45, target:19},
       {source:60, target:9},
       {source:60, target:2},
       {source:61, target:9},
       {source:62, target:19},
       {source:62, target:9},
       {source:63, target:18},
       {source:63, target:9},
       {source:64, target:18},
       {source:64, target:9},
       {source:65, target:18},
       {source:66, target:9},
       {source:67, target:53},
       {source:67, target:40},
       {source:67, target:9},
       {source:68, target:19},
       {source:69, target:24},
       {source:70, target:33},
       {source:71, target:33},
       {source:74, target:21},
       {source:75, target:41},
       {source:75, target:40},
       {source:75, target:20},
       {source:76, target:25},
       {source:77, target:25},
       {source:47, target:9}
   ]
};

 function sizeNode(size) {
    if (size < 50000000 || size == 50000000) {
      return 3;
    } else if (size > 50000000 && size <= 500000000) {
      return 6;
    } else if (size > 500000000 && size <= 1000000000) {
      return 10;
    } else if (size > 1000000000 && size <= 50000000000) {
      return 13;
    } else if (size > 50000000000) {
      return 18;
    }
      return 10;
    } 
  
  function areaColour(area) {
    if (area == "Красноярский край") {
      return "#FE3838";
    } else if (area == "Республика Хакасия") {
      return "#20B920";
    } else if (area == "Республика Тыва") {
      return "#4985FE";
    } else if (area == "Иркутская область") {
      return "#FEF965";
    }
    return "white";
  }

 var simulation = d3
   .forceSimulation(graphData.nodes)
   .force("charge", d3.forceManyBody().strength(-50))
   .force("center", d3.forceCenter(width / 2, height / 2))
   .force("link", d3.forceLink(graphData.links).id(d => d.id))
   .on("tick", ticked);

 var links = svg
   .append("g")
   .selectAll("line")
   .data(graphData.links)
   .enter()
   .append("line")
   .attr("stroke-width", 1.5)
   .style("stroke", "orange");

 links.append("text").text(d => d.name);

 var tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .style("background", "rgba(0, 0, 255, 0.3)")
    .style("font-family", "Tahoma")
    .style("font-size", "13px")
    .style("color", "white")
    .text("a simple tooltip");

 var nodes = svg
   .append("g")
   .selectAll("circle")
   .data(graphData.nodes)
   .enter()
   .append("circle")
   .attr("r", function(d) {return sizeNode(d.amount);})
  //  .attr("r", 3)
   .attr("fill", function(d) {return areaColour(d.area);})
//    .text(function(d) { return d.name; })
   .text(d => d.name)
   .on("mouseover", function(d){tooltip.text(d.name); return tooltip.style("visibility", "visible");})
   .on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
   .on("mouseout", function(){return tooltip.style("visibility", "hidden");});;
 

  var drag = d3
   .drag()
   .on("start", dragstarted)
   .on("drag", dragged)
   .on("end", dragended);

  nodes.call(drag);

  var titleNet = svg
    .append("text")
    .attr("x", 100)
    .attr("y", 60)
    .text("СЕТЕВОЙ ГРАФ ПО ИНВЕСТИЦИОННЫМ ПРОЕКТАМ")
    .attr("alignment-baseline", "middle")
    .style("color", "#FFF")
    .style("font-family", "Tahoma")
    .style("font-weight", "bold")
    .style("font-size", "25px");

  svg.append("circle").attr("cx", 200).attr("cy", 130).attr("r", 6).style("fill", "#FE3838");
  svg.append("circle").attr("cx",200).attr("cy",160).attr("r", 6).style("fill", "#20B920");
  svg.append("circle").attr("cx",200).attr("cy",190).attr("r", 6).style("fill", "#4985FE");
  svg.append("circle").attr("cx", 200).attr("cy",220).attr("r", 6).style("fill", "#FEF965");
  svg.append("text").attr("x", 220).attr("y", 130).text("КРАСНОЯРСКИЙ КРАЙ").style("font-size", "13px").attr("alignment-baseline","middle").style("color", "white");
  svg.append("text").attr("x", 220).attr("y", 160).text("РЕСПУБЛИКА ХАКАСИЯ").style("font-size", "13px").attr("alignment-baseline","middle").style("color", "white");
  svg.append("text").attr("x", 220).attr("y", 190).text("РЕСПУБЛИКА ТЫВА").style("font-size", "13px").attr("alignment-baseline","middle").style("color", "white");
  svg.append("text").attr("x", 220).attr("y", 220).text("ИРКУТСКАЯ ОБЛАСТЬ").style("font-size", "13px").attr("alignment-baseline","middle").style("color", "white");

  svg.append("text").attr("x", 200).attr("y", 275).text("<= 50 млн руб.").style("font-size", "10px").attr("alignment-baseline","middle").style("color", "white");
  svg.append("text").attr("x", 310).attr("y", 275).text("> 50 млрд руб.").style("font-size", "10px").attr("alignment-baseline","middle").style("color", "white");

  svg.append("circle").attr("cx", 250).attr("cy",300).attr("r", 3).style("fill", "white");
  svg.append("circle").attr("cx", 270).attr("cy",300).attr("r", 6).style("fill", "white");
  svg.append("circle").attr("cx", 300).attr("cy",300).attr("r", 10).style("fill", "white");
  svg.append("circle").attr("cx", 330).attr("cy",300).attr("r", 12).style("fill", "white");


 function ticked() {

   nodes
     .attr("cx", function(d) {
       return d.x;
     })
     .attr("cy", function(d) {
       return d.y;
     });

   links
     .attr("x1", function(d) {
       return d.source.x;
     })
     .attr("y1", function(d) {
       return d.source.y;
     })
     .attr("x2", function(d) {
       return d.target.x;
     })
     .attr("y2", function(d) {
       return d.target.y;
     });
//    console.log(simulation.alpha());
 }

 function dragstarted(d) {
   simulation.alphaTarget(0.3).restart();
   d.fx = d3.event.x;
   d.fy = d3.event.y;
 }
 function dragged(d) {
   d.fx = d3.event.x;
   d.fy = d3.event.y;
 }

 function dragended(d) {
   simulation.alphaTarget(0);
   d.fx = null;
   d.fy = null;
 }
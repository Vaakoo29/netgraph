const width = window.innerWidth
const height = window.innerHeight
const svg = d3.select('svg')
  .attr('width', width)
  .attr('height', height)
  .style("background", "#1E90FF");

 var graphData = {
   nodes: [
       {name: "Строительство угледобывающего комплекса на Межегейском месторождении Улуг-Хемского угольного бассейна", id: 1, amount:1.1, area:"Республика Тыва"},
       {name: "Строительство железной дороги Элегест — Кызыл — Курагино", id: 2, amount:36.04, area:"Республика Тыва"},
       {name: "Освоение Улуг-Хемского месторождения каменного угля", id: 3, amount:7.9, area:"Республика Тыва"},
       {name: "Автотуристский кластер «Гостеприимная Тыва»", id: 4, amount:0.615, area:"Республика Тыва"},
       {name: "Освоение Кызыл-Таштыгского месторождения полиметаллических руд", id: 5, amount:1, area:"Республика Тыва"},
       {name: "Освоение Ак-Сугского медно-порфирового месторождения в Тоджинском районе", id: 6, amount:0.36, area:"Республика Тыва"},
       {name: "Освоение Тарданского золоторудного месторождения", id: 7, amount:0.29, area:"Республика Тыва"},
       {name: "Создание предприятия по добыче золота на Кара-Бельдирском золоторудном месторождении", id: 8, amount:0.61, area:"Республика Тыва"},
       {name: "Создание трансграничного автомобильного коридора Красноярск — Абакан — Кызыл — Хандагайты — Улангом — Ховд — Урумчи", id: 9, amount:1.78, area:"Республика Тыва"},
       {name: "Создание в Республике Хакасия оператора парка инновационных вагонов для отгрузки угля с Бейского месторождения", id: 10, amount:5.1, area:"Республика Хакасия"},
       {name: "Строительство автомобильной дороги (транспортного коридора) Абакан — Бийск", id: 11, amount:4.72, area:"Республика Хакасия"},
       {name: "Развитие и модернизация завода АО «РУСАЛ САЯНАЛ»", id: 12, amount:0.14, area:"Республика Хакасия"},
       {name: "Освоение Бейского каменноугольного месторождения, в том числе первоочередных участков Юго-Восточный Кирбинский и Северо-Западный Кирбинский", id: 13, amount:0.832, area:"Республика Хакасия"},
       {name: "Развитие участков Майрыхский и Бейский-Западный Бейского каменноугольного месторождения со строительством обогатительного комплекса", id: 14, amount:9.1, area:"Республика Хакасия"},
       {name: "Строительство железнодорожного перехода Бейское каменноугольное месторождение – Хоных – Кирба со строительством железнодорожного моста через реку Абакан", id: 15, amount:8.2, area:"Республика Хакасия"},
       {name: "Повышение производственной мощности разреза «Черногорский» и участка «Абаканский»", id: 16, amount:1.1, area:"Республика Хакасия"},
       {name: "Строительство новых добывающих мощностей и модернизация шахты «Заполярная» («Южный кластер»)", id: 17, amount:71.6, area:"Красноярский край"},
       {name: "Модернизация деревообрабатывающего производства на базе Ангаро-Енисейского экономического района", id: 18, amount:0.76, area:"Красноярский край"},
       {name: "Агропромышленный парк «Сибирь»", id: 19, amount:38.41, area:"Красноярский край"},
       {name: "Создание международного транспортно-логистического и производственного хаба на базе аэропортов Красноярск и Черемшанка", id: 20, amount:60, area:"Красноярский край"},
       {name: "Строительство Нижнебогучанской ГЭС", id: 21, amount:116.81, area:"Красноярский край"},
       {name: "Строительство лесопромышленного комплекса и сопутствующих объектов железнодорожной инфраструктуры в Богучанском районе Красноярского края", id: 22, amount:131, area:"Красноярский край"},
       {name: "Западно-Таймырский промышленный кластер по производству угольных концентратов из коксующихся углей", id: 23, amount:49.95, area:"Красноярский край"},
       {name: "Разработка и обустройство Пайяхской группы месторождений и строительство морского терминала «Порт бухта Север»", id: 24, amount:330, area:"Красноярский край"},
       {name: "Увеличение пропускной способности участка Артышта — Междуреченск — Тайшет", id: 25, amount:22.96, area:"Красноярский край"},
       {name: "Придание аэропорту г. Кызыла статуса международного и открытие в нем международного пункта пропуска через государственную границу Российской Федерации", id: 26, amount:0.4, area:"Республика Тыва"},
       {name: "Создание молочно-товарного комплекса «Первомайский» в Боградском районе Республики Хакасия", id: 27, amount:6.6, area:"Республика Хакасия"},
       {name: "Создание в непосредственной близости от АПП Хандагайты таможенно-логистического терминала, склада временного хранения, топливно-заправочного склада, гостиницы, элеватора, предприятия по переработке шерсти и производству мясных полуфабрикатов", id: 28, amount:3, area:"Республика Тыва"},
       {name: "Развитие золотодобывающих компаний (АО «Полюс Красноярск»)", id: 29, amount:23.9, area:"Красноярский край"},
       {name: "Освоение Боголюбовского, Удерейского и Горевского месторождений", id: 30, amount:22.96, area:"Красноярский край"},
       {name: "Строительство биотехнологического комплекса в г. Лесосибирске Красноярского края", id: 31, amount:90, area:"Красноярский край"},
       {name: "Развитие золотодобывающих компаний (ООО ГРК «Амикан»)", id: 32, amount:9.84, area:"Красноярский край"},
       {name: "Cтроительство магистрального нефтепровода «Куюмба-Тайшет»", id: 33, amount:96.3, area:"Красноярский край"},
       {name: "Строительство Богучанского алюминиевого завода", id: 34, amount:60, area:"Красноярский край"},
       {name: "Организация переработки древесины в Кежемском районе", id: 35, amount:1.57, area:"Красноярский край"},
       {name: "Строительство Тайшетского алюминиевого завода", id: 36, amount: 60, area: "Иркутская область"}
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
       {source:12, target:34}
   ]
};

 function sizeNode(size) {
    if (size < 1 || size == 1) {
      return 3;
    } else if (size > 1 && size <= 50) {
      return 6;
    } else if (size > 50 && size <= 100) {
      return 10;
    } else if (size > 100 && size <= 500) {
      return 12;
    }
      return 10;
    } 
  
  function areaColour(area) {
    if (area == "Красноярский край") {
      return "red";
    } else if (area == "Республика Хакасия") {
      return "green";
    } else if (area == "Республика Тыва") {
      return "blue";
    } else if (area == "Иркутская область") {
      return "yellow";
    }
    return "white";
  }

 var simulation = d3
   .forceSimulation(graphData.nodes)
   .force("charge", d3.forceManyBody().strength(-30))
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
    .text("Сетевой граф по инвестиционным проектам")
    .attr("alignment-baseline", "middle")
    .style("color", "#FFF")
    .style("font-family", "Tahoma")
    .style("font-weight", "bold")
    .style("font-size", "25px");

  svg.append("circle").attr("cx", 200).attr("cy", 130).attr("r", 6).style("fill", "red");
  svg.append("circle").attr("cx",200).attr("cy",160).attr("r", 6).style("fill", "green");
  svg.append("circle").attr("cx",200).attr("cy",190).attr("r", 6).style("fill", "blue");
  svg.append("circle").attr("cx", 200).attr("cy",220).attr("r", 6).style("fill", "yellow");
  svg.append("text").attr("x", 220).attr("y", 130).text("Красноярский край").style("font-size", "15px").attr("alignment-baseline","middle").style("color", "white");
  svg.append("text").attr("x", 220).attr("y", 160).text("Республика Хакасия").style("font-size", "15px").attr("alignment-baseline","middle").style("color", "white");
  svg.append("text").attr("x", 220).attr("y", 190).text("Республика Тыва").style("font-size", "15px").attr("alignment-baseline","middle").style("color", "white");
  svg.append("text").attr("x", 220).attr("y", 220).text("Иркутская область").style("font-size", "15px").attr("alignment-baseline","middle").style("color", "white");

  svg.append("text").attr("x", 200).attr("y", 275).text("<= 1 млрд руб.").style("font-size", "10px").attr("alignment-baseline","middle").style("color", "white");
  svg.append("text").attr("x", 310).attr("y", 275).text("100-350 млрд руб.").style("font-size", "10px").attr("alignment-baseline","middle").style("color", "white");

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
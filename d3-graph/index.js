const width = window.innerWidth
const height = window.innerHeight
const svg = d3.select('svg')
  .attr('width', width)
  .attr('height', height)

 var graphData = {
   nodes: [
       {name: "Строительство угледобывающего комплекса на Межегейском месторождении Улуг-Хемского угольного бассейна", id: 1, amount:1.1},
       {name: "Строительство железной дороги Элегест — Кызыл — Курагино", id: 2, amount:36.04},
       {name: "Освоение Улуг-Хемского месторождения каменного угля", id: 3, amount:7.9},
       {name: "Автотуристский кластер «Гостеприимная Тыва»", id: 4, amount:0.615},
       {name: "Освоение Кызыл-Таштыгского месторождения полиметаллических руд", id: 5, amount:1},
       {name: "Освоение Ак-Сугского медно-порфирового месторождения в Тоджинском районе", id: 6, amount:0.36},
       {name: "Освоение Тарданского золоторудного месторождения", id: 7, amount:0.29},
       {name: "Создание предприятия по добыче золота на Кара-Бельдирском золоторудном месторождении", id: 8, amount:0.61},
       {name: "Создание трансграничного автомобильного коридора Красноярск — Абакан — Кызыл — Хандагайты — Улангом — Ховд — Урумчи", id: 9, amount:1.78},
       {name: "Создание в Республике Хакасия оператора парка инновационных вагонов для отгрузки угля с Бейского месторождения", id: 10, amount:5.1},
       {name: "Строительство автомобильной дороги (транспортного коридора) Абакан — Бийск", id: 11, amount:4.72},
       {name: "Развитие и модернизация завода АО «РУСАЛ САЯНАЛ»", id: 12, amount:0.14},
       {name: "Освоение Бейского каменноугольного месторождения, в том числе первоочередных участков Юго-Восточный Кирбинский и Северо-Западный Кирбинский", id: 13, amount:0.832},
       {name: "Развитие участков Майрыхский и Бейский-Западный Бейского каменноугольного месторождения со строительством обогатительного комплекса", id: 14, amount:9.1}
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
       {source:14, target:11},
       {source:14, target:13},
       {source:7, target:12}
   ]
};


 var simulation = d3
   .forceSimulation(graphData.nodes)
   .force("charge", d3.forceManyBody().strength(-300))
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
    .style("background", "white")
    .style("font-family", "Tahoma")
    .text("a simple tooltip");

 var nodes = svg
   .append("g")
   .selectAll("circle")
   .data(graphData.nodes)
   .enter()
   .append("circle")
   .attr("r", d => d.amount)
   .attr("fill", "red")
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
import{$ as c,C as i,M as m}from"./main.4b11e5ee.js";import{e as p}from"../echarts.common.d914953d.js";const u={"#solves-graph":{data:()=>i.api.get_challenge_solve_statistics(),format:o=>{const t=o.data,r=[],a=[],s={};for(let n=0;n<t.length;n++)s[t[n].id]={name:t[n].name,solves:t[n].solves};const e=Object.keys(s).sort(function(n,l){return s[l].solves-s[n].solves});return c.each(e,function(n,l){r.push(s[l].name),a.push(s[l].solves)}),{title:{left:"center",text:"Solve Counts"},tooltip:{trigger:"item"},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},xAxis:{name:"Solve Count",nameLocation:"middle",type:"value"},yAxis:{name:"Challenge Name",nameLocation:"middle",nameGap:60,type:"category",data:r,axisLabel:{interval:0,rotate:0}},dataZoom:[{show:!1,start:0,end:100},{type:"inside",yAxisIndex:0,show:!0,width:20},{fillerColor:"rgba(233, 236, 241, 0.4)",show:!0,yAxisIndex:0,width:20}],series:[{itemStyle:{normal:{color:"#1f76b4"}},data:a,type:"bar"}]}}},"#keys-pie-graph":{data:()=>i.api.get_submission_property_counts({column:"type"}),format:o=>{const t=o.data,r=t.correct,a=t.incorrect;return{title:{left:"center",text:"Submission Percentages"},tooltip:{trigger:"item"},toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!1},saveAsImage:{}}},legend:{orient:"vertical",top:"middle",right:0,data:["Fails","Solves"]},series:[{name:"Submission Percentages",type:"pie",radius:["30%","50%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},itemStyle:{normal:{label:{show:!0,formatter:function(e){return`${e.name} - ${e.value} (${e.percent}%)`}},labelLine:{show:!0}},emphasis:{label:{show:!0,position:"center",textStyle:{fontSize:"14",fontWeight:"normal"}}}},emphasis:{label:{show:!0,fontSize:"30",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:a,name:"Fails",itemStyle:{color:"rgb(207, 38, 0)"}},{value:r,name:"Solves",itemStyle:{color:"rgb(0, 209, 64)"}}]}]}}},"#categories-pie-graph":{data:()=>i.api.get_challenge_property_counts({column:"category"}),format:o=>{const t=o.data,r=[],a=[];for(let e in t)Object.hasOwn(t,e)&&(r.push(e),a.push(t[e]));for(let e=0;e<t.length;e++)r.push(t[e].category),a.push(t[e].count);let s={title:{left:"center",text:"Category Breakdown"},tooltip:{trigger:"item"},toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!1},saveAsImage:{}}},legend:{type:"scroll",orient:"vertical",top:"middle",right:10,data:[]},series:[{name:"Category Breakdown",type:"pie",radius:["30%","50%"],label:{show:!1,position:"center"},itemStyle:{normal:{label:{show:!0,formatter:function(e){return`${e.percent}% (${e.value})`}},labelLine:{show:!0}},emphasis:{label:{show:!0,position:"center",textStyle:{fontSize:"14",fontWeight:"normal"}}}},emphasis:{label:{show:!0,fontSize:"30",fontWeight:"bold"}},data:[]}]};return r.forEach((e,h)=>{s.legend.data.push(e),s.series[0].data.push({value:a[h],name:e,itemStyle:{color:m(e)}})}),s}},"#solve-percentages-graph":{layout:o=>({title:"Solve Percentages per Challenge",xaxis:{title:"Challenge Name"},yaxis:{title:`Percentage of ${i.config.userMode.charAt(0).toUpperCase()+i.config.userMode.slice(1)} (%)`,range:[0,100]},annotations:o}),data:()=>i.api.get_challenge_solve_percentages(),format:o=>{const t=o.data,r=[],a=[];for(let e in t)r.push(t[e].name),a.push(t[e].percentage*100),t[e].name,t[e].percentage*100,Math.round(t[e].percentage*100)+"";return{title:{left:"center",text:"Solve Percentages per Challenge"},tooltip:{trigger:"item",formatter:function(e){return`${e.name} - ${(Math.round(e.value*10)/10).toFixed(1)}%`}},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},xAxis:{name:"Challenge Name",nameGap:40,nameLocation:"middle",type:"category",data:r,axisLabel:{interval:0,rotate:50}},yAxis:{name:`"Percentage of ${i.config.userMode.charAt(0).toUpperCase()+i.config.userMode.slice(1)} (%)`,nameGap:50,nameLocation:"middle",type:"value",min:0,max:100},dataZoom:[{show:!1,start:0,end:100},{type:"inside",show:!0,start:0,end:100},{fillerColor:"rgba(233, 236, 241, 0.4)",show:!0,right:60,yAxisIndex:0,width:20},{type:"slider",fillerColor:"rgba(233, 236, 241, 0.4)",top:35,height:20,show:!0,start:0,end:100}],series:[{itemStyle:{normal:{color:"#1f76b4"}},data:a,type:"bar"}]}}},"#score-distribution-graph":{layout:o=>({title:"Score Distribution",xaxis:{title:"Score Bracket",showticklabels:!0,type:"category"},yaxis:{title:`Number of ${i.config.userMode.charAt(0).toUpperCase()+i.config.userMode.slice(1)}`},annotations:o}),data:()=>i.fetch("/api/v1/statistics/scores/distribution").then(function(o){return o.json()}),format:o=>{const t=o.data.brackets,r=[],a=[],s=[];for(let n in t)r.push(parseInt(n));r.sort((n,l)=>n-l);let e="<0";return r.map(n=>{a.push(`${e} - ${n}`),s.push(t[n]),e=n}),{title:{left:"center",text:"Score Distribution"},tooltip:{trigger:"item"},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},xAxis:{name:"Score Bracket",nameGap:40,nameLocation:"middle",type:"category",data:a},yAxis:{name:`Number of ${i.config.userMode.charAt(0).toUpperCase()+i.config.userMode.slice(1)}`,nameGap:50,nameLocation:"middle",type:"value"},dataZoom:[{show:!1,start:0,end:100},{type:"inside",show:!0,start:0,end:100},{fillerColor:"rgba(233, 236, 241, 0.4)",show:!0,right:60,yAxisIndex:0,width:20},{type:"slider",fillerColor:"rgba(233, 236, 241, 0.4)",top:35,height:20,show:!0,start:0,end:100}],series:[{itemStyle:{normal:{color:"#1f76b4"}},data:s,type:"bar"}]}}}},d=()=>{for(let o in u){const t=u[o];c(o).empty();let a=p.init(document.querySelector(o));t.data().then(t.format).then(s=>{a.setOption(s),c(window).on("resize",function(){a!=null&&a!=null&&a.resize()})})}};function g(){for(let o in u){const t=u[o];let r=p.init(document.querySelector(o));t.data().then(t.format).then(a=>{r.setOption(a)})}}c(()=>{d(),setInterval(g,3e5)});

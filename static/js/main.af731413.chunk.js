(this["webpackJsonpreact-practice-1"]=this["webpackJsonpreact-practice-1"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(1),r=n.n(a),i=n(8),l=n.n(i),s=n(3),h=n(4),d=n(6),c=n(5),u=(n(14),n(2)),m=function(e){Object(d.a)(n,e);var t=Object(c.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).randomColor=function(){var e=Math.floor(Math.random()*b.length);return b[e]},o.randomQuote=function(){var e=Math.floor(Math.random()*f.length),t=f[e].text,n=f[e].name;o.setState({quote:t,author:n})},o.nextQuote=function(){document.body.style.backgroundColor=o.randomColor(),o.randomQuote()},o.handleClick=function(){document.body.style.backgroundColor=o.randomColor(),o.randomQuote(),clearInterval(o.timerID),o.timerID=setInterval(o.nextQuote,4e3)},o.state={quote:"",author:""},o.randomColor=o.randomColor.bind(Object(u.a)(o)),o.randomQuote=o.randomQuote.bind(Object(u.a)(o)),o.handleClick=o.handleClick.bind(Object(u.a)(o)),o.nextQuote=o.nextQuote.bind(Object(u.a)(o)),o}return Object(h.a)(n,[{key:"componentDidMount",value:function(){document.body.style.backgroundColor=this.randomColor(),this.randomQuote(),this.timerID=setInterval(this.nextQuote,4e3)}},{key:"render",value:function(){return Object(o.jsxs)("div",{className:"card",id:"quote-box",children:[Object(o.jsx)("p",{id:"text",children:this.state.quote}),Object(o.jsxs)("h3",{id:"author",children:["-",this.state.author]}),Object(o.jsx)("button",{onClick:this.handleClick,id:"new-quote"})]})}}]),n}(a.Component),b=["#39A8A6","#637575","#61DB93","#E09AAD","#A8398E","#F0EA78","#84D0F0","#F0D06D","#8C54F0","#845ec2","#d65db1","#ff6f91","#ff9671","#ffc75f","#f9f871","#def4fe","#318eab","#fefedf","#9b89b3","#ff8066"],f=[{text:"Love all, trust a few, do wrong to none.",name:"William Shakespeare"},{text:"The greatest glory in living lies not in never falling, but in rising every time we fall.",name:"Nelson Mandela"},{text:"The way to get started is to quit talking and begin doing.",name:"Walt Disney"},{text:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma \u2013 which is living with the results of other people's thinking.",name:"Steve Jobs"},{text:"If life were predictable it would cease to be life, and be without flavor.",name:"Eleanor Roosevelt"},{text:"Do not go where the path may lead, go instead where there is no path and leave a trail.",name:"Ralph Waldo Emerson"},{text:"Whoever is happy will make others happy too.",name:"Anne Frank"},{text:"It is during our darkest moments that we must focus to see the light.",name:"Aristotle"},{text:"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",name:"Helen Keller"},{text:"Tell me and I forget. Teach me and I remember. Involve me and I learn.",name:"Benjamin Franklin"},{text:"We all make choices in life, but in the end our choices make us.",name:"Andrew Ryan"},{text:"Get over here!",name:"Scorpion"},{text:"What is better? To be born good or to overcome your evil nature through great effort?",name:"Paarthurnax"},{text:"The right man in the wrong place can make all the difference in the world.",name:"G-Man"},{text:"Stand in the ashes of a trillion dead souls, and asks the ghosts if honor matters. The silence is your answer.",name:"Javik"},{text:"Bring me a bucket, and I'll show you a bucket!",name:"Psycho"}],g=function(e){Object(d.a)(n,e);var t=Object(c.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(o.jsx)(m,{})}}]),n}(a.Component);l.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.af731413.chunk.js.map
	var date = new Date();
	var _month = date.getMonth();
	var _year = date.getFullYear();
	calendar(date)
	function calendar(setDate) {
		// 星期几部分
		var week_day = document.getElementsByClassName('week_day')[0];
		var days = week_day.getElementsByTagName('td');
		var date = new Date(setDate);
		var y = date.getFullYear();
		document.getElementsByClassName('time1')[0].innerHTML = y;
		//console.log(document.getElementsByClassName('time1'))
		var m = date.getMonth();
		document.getElementsByClassName('time2')[0].innerHTML = m + 1;
		var today = date.getDate();
		//console.log(today)
		var d = date.getDate();
		//console.log(d)
		// 本月
		// 该月的第一天是星期几
		var firstDay = new Date(y, m, 1).getDay();
		//console.log(firstDay);
		// 该月一共多少天
		var lastData = new Date(y, m + 1, 0).getDate();
		//console.log(lastData)
		// 该月的最后一天是星期几
		var lastDay = new Date(y, m + 1, 0).getDay();
		//console.log(lastDay)
		var calendar_date = document.getElementsByClassName('calendar_date')[0];
		var tds = calendar_date.getElementsByTagName('td');
		var spans = calendar_date.getElementsByTagName('span');
		for(var x = 0;x<spans.length-1;x++){
			spans[x].innerHTML = '';
			//console.log(spans[x].nextSibling);
			if(spans[x].nextSibling){
				tds[x].removeChild(spans[x].nextSibling)
			}
		}
	
		for(var i = firstDay; i < lastData + firstDay; i++) {
			//console.log(i - firstDay + 1)
			var date2 =  new Date();
			if(date2.getMonth() == _month && i - firstDay + 1 == date.getDate()){
				tds[i].style.background = '#fef8e5'
			}else{
				tds[i].style.background = '#fff'
			}
			spans[i].innerHTML = i - firstDay + 1;
			var _div = document.createElement('div')
			_div.setAttribute('class', '_moodimg ')
			
			tds[i].appendChild(_div);
			
			
			tds[i].onclick = function(e) {
				e = e || window.event;
				e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
				document.getElementsByClassName('clickBox')[0].style.visibility = 'visible';
				document.getElementById('bg_back').style.visibility = 'visible';
			}
			
			
			/*tds[i].on('tap',function(e){
				e = e || window.event;
				e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
				document.getElementsByClassName('clickBox')[0].style.visibility = 'visible';
				document.getElementById('bg_back').style.visibility = 'visible';
			}*/
			
	
		}
	}
	//上个月
	document.getElementsByClassName('old')[0].onclick = function(e){
		
		e = e || window.event;
		e.stopPropagation?e.stopPropagation():e.cancelBubble = true;
		_month--;
		if(_month<0){
			_month = 11;
			date.setFullYear(date.getFullYear()-1);
		}
		date.setMonth(_month);
		calendar(date);
	};
	//下个月
	document.getElementsByClassName('next')[0].onclick = function(e){
		e = e || window.event;
		e.stopPropagation?e.stopPropagation():e.cancelBubble = true;
		_month++;
		if(_month>11){
			_month = 0;
			date.setFullYear(date.getFullYear()+1);
		}
		date.setMonth(_month);
		calendar(date);
	}
	document.getElementById('bg_back').onclick = function() {
		document.getElementsByClassName('clickBox')[0].style.visibility = 'hidden';
		document.getElementById('bg_back').style.visibility = 'hidden';
	}
				
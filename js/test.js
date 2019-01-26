/* Массив вопросов и ответов */
var data_array = [
];

var plus = 0;
var time = 0;
var cur_answer = 0;
var count_answer = data_array.length;
  
function sec() {
    time ++;	
    document.getElementById('time').innerHTML = 'Затрачено времени: ' + time + ' секунд';
}
  
function check(num) {
    if (num == 0) { 
        document.getElementById('option1').style.display = 'block';
        document.getElementById('option2').style.display = 'block';
        document.getElementById('option3').style.display = 'block';
        document.getElementById('option4').style.display = 'block';
        document.getElementById('question').style.display = 'block';

        document.getElementById('option1').innerHTML = data_array[cur_answer][1];
        document.getElementById('option2').innerHTML = data_array[cur_answer][2];
        document.getElementById('option3').innerHTML = data_array[cur_answer][3];
        document.getElementById('option4').innerHTML = data_array[cur_answer][4];
        document.getElementById('question').innerHTML = data_array[cur_answer][0];
          
        document.getElementById('start').style.display = 'none';
        document.getElementById('end').style.display = 'inline';
          
        var intervalID = setInterval(sec, 1000);
    } else {
        if (num == data_array[cur_answer][5]) {
            plus ++;
            document.getElementById('result').innerHTML = 'Молодец!';
        } else {
            document.getElementById('result').innerHTML = 'Ошибка! Правильный ответ: ' + data_array[cur_answer][data_array[cur_answer][5]];
        }
              
        cur_answer ++;
        if (cur_answer < count_answer) {
            document.getElementById('option1').innerHTML = data_array[cur_answer][1];
            document.getElementById('option2').innerHTML = data_array[cur_answer][2];
            document.getElementById('option3').innerHTML = data_array[cur_answer][3];
            document.getElementById('option4').innerHTML = data_array[cur_answer][4];
            document.getElementById('question').innerHTML = data_array[cur_answer][0];
        } else {
            document.getElementById('time').id = 'stop';
            document.getElementById('option1').style.display = 'none';
            document.getElementById('option2').style.display = 'none';
            document.getElementById('option3').style.display = 'none';
            document.getElementById('option4').style.display = 'none';
            document.getElementById('question').style.display = 'none';
            document.getElementById('end').style.display = 'inline';
              
            var percent = Math.round(plus / count_answer * 100);				
            var res = 'Не очень хорошо...';
            if (percent > 70) res = 'Хорошо!';
            if (percent == 100) res = 'Отлично!';
              
            document.getElementById('result').innerHTML = 'Правильных ответов: ' + plus + ' из ' + count_answer + ' (' + percent + '%)<br>' + res;
        }
    }
}
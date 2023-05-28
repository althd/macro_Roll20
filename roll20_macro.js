//문단입력시 엔터 단위로 히스토리 올려서 
//0.5초 단위로 자동 출력 -> 초 단위 설정할 수 있게
//(히스토리 보이게) -> 보내기 전까지 삭제 가능

var con = document.createElement('div');
var text = null;
let timer_desc;
con.id = 'auto_desc_total';  //id 지정
var desc_input_index = 0;   //입력용 인덱스
var desc_array = new Array();   //입력값 저장용 Array

var desc_output_index = 0;   //출력용 인덱스
var output_array = new Array();   //출력값 저장용 Array


//이미 있으면 삭제하고 다시 만든다
if ($('#auto_desc_total').length != 0) {
    $('#auto_desc_total').remove();
}
$('.no-touch').prepend(con); 

$('#auto_desc_total').css('z-index', '99999999')
    .css('position', 'absolute')
    .css('width', '350px')
    .css('height', '127px')
    .css('background-color', 'white')
    .css('border', '1px solid black')
    .css('top', '357px')
    .css('left', '60px')    //임시. 내보낼 때 아래에 위치
    .css('text-align', 'center')
    .css('border-radius', '6px')
    .css('box-shadow', 'rgb(0 0 0 / 36%) 3px 3px 10px');

//html 추가
text = '';

text += '<div id = "auto_desc_con">';
text += '<div id = "auto_desc_con_body">';

text +=     '<div id = "auto_desc_left">';
text +=         '<input id = "auto_desc_txt" type = "text" onkeyup = "if(event.keyCode == 13){console.log(\'엔터키 작동!\'); sendDesc();}">';
text +=         '</input>';
text +=     '</div>';   // end auto_desc_left

text +=     '<div id = "auto_desc_right">';
text +=         '<div style = "text-align: left;">';
text +=             '<button id = "play" type = "button" title = "재생">▶</button>';
text +=             '<button id = "pause" type = "button" title = "중지">∥</button>';
text +=             '<button id = "clear" type = "button" title = "초기화">■</button>';
text +=         '</div>';
text +=         '<button type = "button" id = "auto_desc_btn">전송</button>'; //전송 버튼
text +=         '<select id = "auto_sec_select">';   //보낼 초 단위 선택
text +=             '<option value = "0">즉시</option>';
text +=             '<option value = "500">0.5초</option>';
text +=             '<option value = "1000">1초</option>';
text +=             '<option value = "1500">1.5초</option>';
text +=             '<option value = "2000">2초</option>';
text +=             '<option value = "5000">5초</option>';
text +=         '</select>';
text +=     '</div>';   // end auto_desc_right

text += '</div>';   // end auto_desc_con_body
text += '</div>'; //end auto_desc_con
$('#auto_desc_total').append(text);   //textarea 추가
$('#auto_sec_select').val('1000');    //처음 1초로 초기화

//히스토리 div
var text2 = '';
text2 += '<div id = "auto_desc_top">';
text2 += '<div id = "auto_desc_text_area">';
text2 += '<table><tbody>';
text2 += '</tbody></table>';
text2 += '</div>';
text2 += '</div>';
$('#auto_desc_total').prepend(text2);

text2 = '';
text2 += '<div id = "auto_desc_header">';
text2 += '<button id = "close_btn" name = "do_off">×</button>'
text2 += '<button id = "move_btn">Move</button>'
text2 += '</div>';
$('#auto_desc_top').prepend(text2);

//상단 히스토리 header css
$('#auto_desc_header').css('background-color', '#555')
    .css('height', '32px')
    .css('width', '100%')
    .css('position', 'absolute')
    .css('top', '0px')
    .css('border-top-left-radius', '6px')
    .css('border-top-right-radius', '6px')
    .css('text-align', 'left')
    .css('bottom', '0px');
    //닫기 버튼 css
    $('#close_btn').css('background-color', 'blue');
    //move 버튼 css
    $('#move_btn').css('background-color', 'yellow')
        .css('position', 'absolute')
        .css('right', '0');
    
//상단 히스토리 con css
$('#auto_desc_top').css('background-color', 'rgb(0, 0, 0, 0.2)')
    .css('height', '350px')
    .css('width', '100%')
    .css('position', 'absolute')
    .css('top', '-351px')
    .css('border-radius', '6px')
    .css('bottom', '0px');
//상단 입력 히스토리 감싸는 div css
$('#auto_desc_text_area').css('position', 'absolute')
    .css('bottom', '0')
    .css('width','100%')
    .css('max-height', '318px')
    .css('overflow-y', 'auto');

$('#pause').css('font-weight', 'bolder');

$('#auto_desc_con').css('height', '100%');

//auto_desc_con_body css
$('#auto_desc_con_body').css('display', 'flex')
    .css('height', '100%')
    .css('flex-direction', 'row')
    .css('align-items', 'center');

//left box css
$('#auto_desc_left').css('flex', '1')
    .css('height', '100%');

//right box css
$('#auto_desc_right').css('flex', '0.35');

//text area css
$('#auto_desc_txt').css('color', '#333333')
    .css('font-size', '14px')
    .css('position', 'relative')
    .css('top', '10px')
    .css('width', '220px')
    .css('height', '95px')
    .css('max-width', '380px')
    .css('max-height', '114px')
    .css('resize', 'none');

//submit 버튼 css
$('#auto_desc_btn').css('position', 'relative')
    .css('width', '60px')
    .css('height', '24px')
    .css('border-radius', '6px')
    .css('color', '#333333')
    .css('font-size', '14px')
    .css('font-weight', 'bold')
    .css('margin-top', '10px')
    .css('border', '2px solid rgb(139 139 139)')
    .css('display', 'block');

//select box css
$('#auto_sec_select').css('display', 'block')
    .css('width', '75px')
    .css('margin-top' ,'15px');


//전송 버튼 클릭 시 => 입력 배열 저장까지만
function sendDesc(){
    //입력값 저장 배열
    var auto_desc_txt_val = $('#auto_desc_txt').val().replaceAll('\n', ''); //입력 값

    //입력어 비어있으면 return false
    if(auto_desc_txt_val == ''){
        return false;
    }
    else{
        //입력값 입력리스트에 append
        $('#auto_desc_text_area').append('<div class = "desc_history" onclick = "remove_each(this);">'+auto_desc_txt_val+'</div>');

        //스크롤 맨 아래로
        $('#auto_desc_text_area').scrollTop($('#auto_desc_text_area')[0].scrollHeight);

        desc_array[desc_input_index] = auto_desc_txt_val;
        //개별 제거를 위한 click event 깔아주기
        $('#auto_desc_text_area .desc_history')[desc_input_index].addEventListener("click", function(){
            remove_each(this); 
        });

        desc_input_index += 1;
        $('#auto_desc_txt').val("");



        //포커스 다시 가져오기
        $('#auto_desc_txt').focus();

        //히스토리 div css
        $('#auto_desc_text_area .desc_history').css('background', 'white')
            .css('border', 'solid 1px black')
            .css('word-break', 'break-all')
            .css('padding', '5px 10px')
            .css('border-radius', '6px')
            .css('font-size', '13px')
            .css('font-style', 'italic')
            .css('font-weight', 'bolder');
    }
};

$('#play').click(function(){
    console.log("★★★★★");
    play(desc_output_index);
});

function play(index){

    var auto_sec = $('#auto_sec_select').val();     //전송 지연 초 
    console.log("전송을 시작합니다");

    if(desc_array.length == 0){
        alert("재생할 나레이션이 없습니다.");
        return false;
    }

    for(var i=0;i<desc_array.length;i++){
        output_array[i] = desc_array[i];
    }
    
    timer_desc = setInterval(() => {
        console.log(desc_array);
        output_array = desc_array;
        console.log('[ ' + (index+1) + ' / ' + output_array.length + ' ]');

        var txt = '';
        txt += '/desc [';
        txt += output_array[index];
        txt += '](#"style="text-decoration: none;text-align: center;display: block; padding: 2px;';
        txt += ')';

        $('#textchat-input .ui-autocomplete-input').val(txt);
        $('#textchat-input .btn').trigger('click');
        
        index+=1;

        desc_output_index = index;

        console.log("desc output index : " +desc_output_index);
        console.log("index : " + index);
        console.log("desc array length : " + desc_array.length);

        if(desc_array.length == index){
            alert("끝");
            clearInterval(timer_desc);

            //모두 출력했으니 초기화
            desc_input_index = 0;   //입력용 인덱스
            desc_array = [];   //입력값 저장용 Array

            desc_output_index = 0;   //출력용 인덱스
            output_array = [];   //출력값 저장용 Array

            console.log("재생이 끝나 모두 초기화 했습니다.");
            

            //히스토리도 다 초기화
            $('#auto_desc_text_area').children().remove();
        }
    }, auto_sec);
}

//txt 엔터키 작동
$('#auto_desc_txt').keyup(function(e){
    if(e.keyCode == 13){
        sendDesc();
    }
});

//전송 버튼 클릭
$('#auto_desc_btn').click(function(){
    sendDesc();
});
//일시정지 버튼 클릭
$("#pause").click(function(){
    /*중단 기능*/
    clearInterval(timer_desc);
});
//초기화 버튼 클릭
$('#clear').click(function(){
    /*중단 기능*/ 
    clearInterval(timer_desc);
    //중단 및 히스토리 모두 삭제
    if(confirm("히스토리를 모두 삭제하시겠습니까? ")){
        console.log("히스토리 모두 삭제");

        //히스토리 모두 삭제
        desc_input_index = 0;   //입력용 인덱스
        desc_array = [];   //입력값 저장용 Array

        desc_output_index = 0;   //출력용 인덱스
        output_array = [];   //출력값 저장용 Array

        $('#auto_desc_text_area').children().remove();
    }
})
//개별로 지우기
function remove_each(ele){
    console.log($(ele).text());
}

$('#move_btn').css('cursor', 'grab');

//진행중
//move 버튼 마우스 event
$('#move_btn').mousedown(function(){
    $('#move_btn').css('background-color', 'white');
    $('#move_btn').css('cursor', 'grabbing');

    move_bool = true;
    //마우스 위치에 따라 div 이동
    if(move_bool){
        window.onmousemove = move;
        function move(e){
            console.log(e.clientX + ', ' + e.clientY);
        }
    }
    else{

    }
   
});
//진행중
function draggable(){
    var target = $('#auto_desc_total');

    let isPress = false, 
        prevPosX = 0,
        prevPosY = 0;

    //https://gurtn.tistory.com/171 참고

}



var move_bool = false;

$('#move_btn').mouseup(function(){
    $('#move_btn').css('background-color', 'black');
    $('#move_btn').css('cursor', 'grab');
    move_bool = false;
});
$(document).mouseup(function(){
    $('#move_btn').css('cursor', 'grab');
});

//닫기 기능 (_req : do_off(창 닫음))
$('#close_btn').click(function(){
    var _req = $('#close_btn').attr('name');
    if(_req == 'do_off'){   //창 닫기 
        $('#auto_desc_total').remove();
    }
});




/*
개발자 메모

- 배열에서 내보낸 건 삭제하고 
내보낼 때마다 배열에서 삭제하고
내보낼 때마다 배열 개수를 세어야함 
내보내면서 동시에 입력할 수 있도록
- 

* 더 해야할 일
  - 입력한 문구 클릭해서 그것만 아카이브에서 지울 것
  - 출력된 문구 실시간으로 아카이브에서 지워지기
  - div 이동 --> 하는 중이었음
  - div 열었다 닫기 


*/
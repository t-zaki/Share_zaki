$(function(){
    $('#greet').click(function(){
    	if(!$('#user').val() || !$('#message').val()) return;
        $.get('bbs.php', {
        	user: $('#user').val(),
        	message: $('#message').val(),
        	mode: "0" // ��������
        }, function(data){
        	$('#result').html(data);
        	// scTarget();
        });
    });
    loadLog();
    logAll();
});

// ���O�����[�h����
function loadLog(){
	$.get('bbs.php', {
		mode: "1" // �ǂݍ���
    }, function(data){
    	$('#result').html(data);
    	// scTarget();
    });
}

// ���Ԋu�Ń��O�������[�h����
function logAll(){
	setTimeout(function(){
		loadLog();
		logAll();
	},5000); //�����[�h���Ԃ͂����Œ���
}

/*
 * ��ʂ��ŉ����ֈړ�������
 */
function scTarget(){
	var pos = $("#end").offset().top; 
	$("#talkField").animate({ 
		scrollTop:pos
	}, 0, "swing"); //swing��0���ǂ�����
	return false;
}
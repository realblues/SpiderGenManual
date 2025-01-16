
/**
Constructor
Do not call Function in Constructor.
*/
MainView = class MainView extends AView
{
    constructor()
    {
        super()
		
	
		//TODO:edit here
	
	

    }
}



MainView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

MainView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

MainView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

MainView.prototype.onBtnAddClick = function(comp, info, e)
{

 var txt = this.txt001.getText(); 

    if(!txt || txt.length < 1){ 
       alert('추가할 내용을 입력하세요.');         
        return; 
    } 

    //기존의 텍스트에 새 텍스트 추가 
    this.txtArea001.setText( 
        this.txtArea001.getText() + '\n' + this.txt001.getText() 
    ); 

    //사용자 함수 
    this.initText(); 


};

MainView.prototype.initText = function()
{

	//입력 텍스트 초기화 
	this.txt001.setText('');

};

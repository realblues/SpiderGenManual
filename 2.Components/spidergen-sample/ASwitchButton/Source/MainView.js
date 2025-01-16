
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

MainView.prototype.onBtnOkClick = function(comp, info, e)
{

	   //스위치 버튼의 선택 결과를 확인한다. 
    if(!this.switch.getValue()) 
    { 
       alert('이용약관에 동의 해주세요.'); 
    } 
    else 
    { 
       alert('이용약관에 동의 하셨습니다.'); 
    } 

};

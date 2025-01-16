
/**
Constructor
Do not call Function in Constructor.
*/
RightView = class RightView extends AView
{
    constructor()
    {
        super()
		
	
		
		this.mainView = null;     
		this.leftView = null;  
	
	

    }
}



RightView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

RightView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	this.mainView = this.getContainer().getView();     
	this.leftView = this.mainView.splitView.getSplitView(0);  

};

RightView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

RightView.prototype.onSendBtnClick = function(comp, info, e)
{

	 var sendTxt = this.txtRight.getText(); 

    if(!sendTxt || sendTxt.length < 1){ 
        alert('전송할 내용을 입력하세요.'); 
        return; 
    } 

    this.leftView.lblLabel.setText(sendTxt); 

};

RightView.prototype.ongetBtnClick = function(comp, info, e)
{

	 var getTxt = this.leftView.txtLeft.getText(); 

    if(!getTxt || getTxt.length < 1){ 
        alert('입력된 내용이 없습니다.'); 
        return; 
    } 

    this.lblRight.setText(getTxt); 

};

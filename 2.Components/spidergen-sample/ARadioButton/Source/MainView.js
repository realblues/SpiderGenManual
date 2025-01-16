
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

MainView.prototype.onARadioButtonClick = function(comp, info, e)
{
	/** 
        comp : 클릭 이벤트가 발생한 객체 
        info : 컴포넌트마다 다른 정보가 전달됨. 컴포넌트 api 참조 
        e : 오리지널 이벤트 객체 
    */ 

    //선택되었을 경우 
    if(comp.getSelect()) 
    { 
        this.labelID.setText(comp.getText() + ':' + comp.getValue());     
    }     

};

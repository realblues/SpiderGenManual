
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
	
    //Label 컴포넌트에 ID가 부여되었으면 
    //this.컴포넌트아이디 형태로 바로 접근이 가능합니다. 
	
	this.LabelID.setText('라벨 테스트');  

};

MainView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};


/**
Constructor
Do not call Function in Constructor.
*/
MainView = class MainView extends AView
{
    constructor()
    {
        super()
		
	
		this.leftView =  null; 
	    this.rightView = null;
	
	

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

	this.splitView.createSplit(2, [400, -1], 'row'); 

    //스플릿에 뷰 설정  
    this.leftView = this.splitView.setSplitView(0, 'Source/Views/LeftView.lay');     
    this.rightView = this.splitView.setSplitView(1, 'Source/Views/RightView.lay');  

};

MainView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

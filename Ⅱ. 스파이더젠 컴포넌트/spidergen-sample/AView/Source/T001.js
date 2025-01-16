
/**
Constructor
Do not call Function in Constructor.
*/
T001 = class T001 extends AView
{
    constructor()
    {
        super()
		
	
		//TODO:edit here
	
	

    }
}



T001.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

T001.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

T001.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

T001.prototype.onAButton1Click = function(comp, info, e)
{

	alert('T001 뷰 입니다.'); 

};


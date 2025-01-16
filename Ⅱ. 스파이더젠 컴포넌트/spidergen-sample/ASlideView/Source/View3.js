
/**
Constructor
Do not call Function in Constructor.
*/
View3 = class View3 extends AView
{
    constructor()
    {
        super()
		
	
		//TODO:edit here
	
	

    }
}



View3.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

View3.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

View3.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

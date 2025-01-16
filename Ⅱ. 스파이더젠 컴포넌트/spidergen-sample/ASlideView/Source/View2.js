
/**
Constructor
Do not call Function in Constructor.
*/
View2 = class View2 extends AView
{
    constructor()
    {
        super()
		
	
		//TODO:edit here
	
	

    }
}



View2.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

View2.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

View2.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

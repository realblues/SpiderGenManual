
/**
Constructor
Do not call Function in Constructor.
*/
View1 = class View1 extends AView
{
    constructor()
    {
        super()
		
	
		//TODO:edit here
	
	

    }
}



View1.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

View1.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

View1.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

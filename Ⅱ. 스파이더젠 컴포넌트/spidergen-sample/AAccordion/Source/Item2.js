
/**
Constructor
Do not call Function in Constructor.
*/
Item2 = class Item2 extends AView
{
    constructor()
    {
        super()
		
	
		//TODO:edit here
	
	

    }
}



Item2.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

Item2.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

Item2.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

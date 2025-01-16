
/**
Constructor
Do not call Function in Constructor.
*/
InnerView2 = class InnerView2 extends AView
{
    constructor()
    {
        super()
		
	
		//TODO:edit here
	
	

    }
}



InnerView2.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

InnerView2.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

InnerView2.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

InnerView2.prototype.onAButton1Click = function(comp, info, e)
{

	alert(this.lbl001.getText()); 

};

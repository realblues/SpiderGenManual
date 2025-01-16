
/**
Constructor
Do not call Function in Constructor.
*/
InnerView1 = class InnerView1 extends AView
{
    constructor()
    {
        super()
		
	
		//TODO:edit here
	
	

    }
}



InnerView1.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

InnerView1.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

InnerView1.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

InnerView1.prototype.onAButton1Click = function(comp, info, e)
{

	alert(this.lbl001.getText()); 

};

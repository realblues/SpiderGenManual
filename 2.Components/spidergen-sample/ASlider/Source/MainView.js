
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

	this.doSetValue(this.slider.getValue()); 

};

MainView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

MainView.prototype.doSetValue = function(val) 
{          
    this.labelID.setText(val); 
    this.prog.setValue(val); 
};

MainView.prototype.onSliderChange = function(comp, info, e)
{
	 this.doSetValue(comp.getValue()); 
};

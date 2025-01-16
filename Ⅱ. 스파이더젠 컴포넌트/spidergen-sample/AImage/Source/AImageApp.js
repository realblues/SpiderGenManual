
/**
Constructor
Do not call Function in Constructor.
*/
AImageApp = class AImageApp extends AApplication
{
    constructor()
    {
        super()
		
	
		//TODO:edit here
	
	

    }
}



AImageApp.prototype.onReady = function()
{
	AApplication.prototype.onReady.call(this);

	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');

	//TODO:edit here

};

AImageApp.prototype.unitTest = function(unitUrl)
{
	//TODO:edit here

	this.onReady();

	AApplication.prototype.unitTest.call(this, unitUrl);
};


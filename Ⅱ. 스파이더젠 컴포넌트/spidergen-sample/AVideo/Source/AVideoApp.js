
/**
Constructor
Do not call Function in Constructor.
*/
AVideoApp = class AVideoApp extends AApplication
{
    constructor()
    {
        super()
		
	
		//TODO:edit here
	
	

    }
}



AVideoApp.prototype.onReady = function()
{
	AApplication.prototype.onReady.call(this);

	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');

	//TODO:edit here

};

AVideoApp.prototype.unitTest = function(unitUrl)
{
	//TODO:edit here

	this.onReady();

	AApplication.prototype.unitTest.call(this, unitUrl);
};


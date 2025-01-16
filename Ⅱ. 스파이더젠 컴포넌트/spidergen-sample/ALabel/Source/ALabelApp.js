
/**
Constructor
Do not call Function in Constructor.
*/
ALabelApp = class ALabelApp extends AApplication
{
    constructor()
    {
        super()
		
	
		//TODO:edit here
	
	

    }
}



ALabelApp.prototype.onReady = function()
{
	AApplication.prototype.onReady.call(this);

	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');

	//TODO:edit here

};

ALabelApp.prototype.unitTest = function(unitUrl)
{
	//TODO:edit here

	this.onReady();

	AApplication.prototype.unitTest.call(this, unitUrl);
};


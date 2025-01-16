
/**
Constructor
Do not call Function in Constructor.
*/
class AButtonApp()
{
	super();

	//TODO:edit here

}
extends AApplication;


function AButtonApp*onReady()
{
	super.onReady();

	this.setMainContainer(new APage('main'));
	this.mainContainer.open('Source/MainView.lay');

	//TODO:edit here

};

function AButtonApp*unitTest(unitUrl)
{
	//TODO:edit here

	this.onReady();

	super.unitTest(unitUrl);
};

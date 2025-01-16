
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

	//TODO:edit here

};

MainView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

MainView.prototype.onAButton1Click = function(comp, info, e)
{

	 //this.캔버스아이디.ctx 으로 캔버스 컨텍스트에 접근한다.

	this.CanvasID.ctx.strokeStyle = "red";
	this.CanvasID.ctx.lineWidth = "20";
	this.CanvasID.ctx.fillStyle = "#c1c1c1";
	
	this.CanvasID.ctx.rect(20,20,200,200);
	this.CanvasID.ctx.stroke();
	this.CanvasID.ctx.fill();

};

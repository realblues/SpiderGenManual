
/**
Constructor
Do not call Function in Constructor.
*/
ItemView = class ItemView extends AView
{
    constructor()
    {
        super()
		
	
		 this.data = null; 
	
	
	

    }
}



ItemView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

ItemView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

ItemView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

ItemView.prototype.setData = function(data)
{
	 this.data = data; 

    this.img001.setImage(this.data.img); 
    this.lbl001.setText(this.data.title); 
};

ItemView.prototype.onBtn001Click = function(comp, info, e)
{

    //아이템의 상위객체 리스트뷰에 정의 함수 호출 
    this.owner.removeItem(this._item); 
};



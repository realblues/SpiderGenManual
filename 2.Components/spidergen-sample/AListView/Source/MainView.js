
/**
Constructor
Do not call Function in Constructor.
*/
MainView = class MainView extends AView
{
    constructor()
    {
        super()
			//리스트 데이터 배열 입니다.  
        this.listData = [ 
            { 
                img : 'Assets/img/img1.png',  
                title : 'List Content Title 1' 
            }, 
            {    img : 'Assets/img/img2.png',  
                title : 'List Content Title 2' 
            }, 
            {    img : 'Assets/img/img3.png',  
                title : 'List Content Title 3' 
            }, 
            {    img : 'Assets/img/img4.png',  
                title : 'List Content Title 4' 
            }, 
            {    img : 'Assets/img/img5.png',  
                title : 'List Content Title 5' 
            }, 
        ];
	

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
	// this.listView.setDelegator(this); 
	// 리스트뷰에 데이터만큼의 아이템뷰를 추가한다.
	
	this.listView.addItem('Source/Items/ItemView.lay', this.listData);
};

MainView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

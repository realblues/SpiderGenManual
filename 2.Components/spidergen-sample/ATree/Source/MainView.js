
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

	this.tree.setOption({
			isSingleSelect: true,		//ctrl 키를 누르고 선택해도 하나만 선택된다. 
			isFullSelect: false,        //아이템 선택시 선택표시가 라인 전체로 표시된다.
			isDraggable: true,   	    //트리 드래그 여부
			dragIcon: './Source/img/drag.png'	//드래그 아이콘
		});
		this.tree.initTree(); //(iconMap);
		this.initTreeData();

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

MainView.prototype.onAddBtnClick = function(comp, info, e)
{

	var name = this.nameTxf.getText();
		if(name) {
			this.insertItemInfo({
				pItem: this.tree.getSelectedItems()[0],
				pos: null, 
				name: name,
				//data: data,
				//icon: 0
			});
		}
		this.nameTxf.reset();

};

MainView.prototype.initTreeData = function(comp, info, e)
{

	var data = {
			name: '식품',
			sub: [{
				name: '유기농/친환경 전문관',
				sub: [{
					name: '음료',
					sub: [{
						name: '차음료'
					}]
				},{
					name: '유제품/두유',
				},{
					name: '가루/조미료/오일',
				},{
					name: '어린이식품',
				}]
			}, {
				name: '과일'
			}, {
				name: '견과/건과'
			}]
		};
		this.insertItemInfo(data);

};

MainView.prototype.onTreeSelect = function(comp, info, e)
{

	console.log(info);
	console.log(info.name);

};

MainView.prototype.insertItemInfo = function(info)
	{
		const item = this.tree.insertItemObj(info, true);
		//this.tree.insertItemObj(itemInfo, isExpand, mergeHistory)
		//this.tree.insertItem(pItem, pos, name, data, icon, isExpand, mergeHistory)
		if(info.sub) {
			info.sub.forEach(subInfo => {
				subInfo.pItem = item;
				this.insertItemInfo(subInfo, item);
			});
		}
		
		return item;
	};

 

MainView.prototype.onDelBtnClick = function(comp, info, e)
{

		const item = this.tree.getSelectedItems()[0];
		if(item) this.tree.deleteItem(item);

};

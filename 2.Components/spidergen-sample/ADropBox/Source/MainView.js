
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

    let data = 
    [
        {text : '사과' , data : ['서울', '경기', '강원']}, 
        {text : '포도' , data : ['경북', '경남', '충북', '충남']}, 
        {text : '오렌지', data : ['전남', '전북', '제주']} 
    ];

    data.forEach(ele => {

        this.dropBox.addItem(ele.text, ele.data); //드롭박스에 데이터를 추가합니다. 
    })

    this.dropBox.selectItem(0)

};

MainView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

MainView.prototype.onBtnAddDataClick = function(comp, info, e)
{
    //입력 텍스트와 데이터 값을 저장합니다. 
    var iTxt = this.txtText.getText(), 
        iData = this.txtValue.getText();

    if(iTxt.trim()=='' || iData.trim()=='') 
    { 
        alert('텍스트와 데이터 내용을 입력하세요.');         
    } 
    else 
    {         
        this.dropBox.addItem(iTxt, iData); //드롭박스에 데이터를 추가합니다.

        //입력 초기화 
        this.txtText.setText(''); 
        this.txtValue.setText('');
	}

};

MainView.prototype.onDropSelect = function(comp, info, e)
{
    AToast.show(comp.getSelectedItemText() + ':' + comp.getSelectedItemData())
};

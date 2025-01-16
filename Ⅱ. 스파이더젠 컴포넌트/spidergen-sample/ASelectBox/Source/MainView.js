

MainView = class MainView extends AView
{

    constructor()
    {
        super()
		
        this.data = 
        [
            {text : '사과' , items : ['서울', '경기', '강원']}, 
            {text : '포도' , items : ['경북', '경남', '충북', '충남']}, 
            {text : '오렌지', items : ['전남', '전북', '제주']} 
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

	//레이블 초기화 
    this.labelID.setText('선택내용'); 

    //셀렉트박스 초기화(아이템 모두 삭제) 
    this.select1.removeAll();     

    //첫번째 셀렉트박스 데이터 초기화     
    var i=0, imax = this.data.length; 
    for(i=0; i < imax; i++){ 
        //addItem(text, value, data)     
        this.select1.addItem(this.data[i].text, i, this.data[i].items); 
    } 

};

MainView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

		
    //value가 0인 아이템을 기본 셀렉트 되게 
    this.select1.selectItem(this.select1.indexOfValue('0'));     

    //선택되어서 변경된 이벤트 발생시키기 
    this.select1.reportEvent('change'); 

};

MainView.prototype.onSelect1Change = function(comp, info, e)
{

	 //현재 셀렉트된 아이템의 data
    var selItemData = comp.getSelectedItemData();


    //두번째 셀렉트박스 아이템 초기화(모두 삭제)
    this.select2.removeAll(); 


    //선택아이템
    this.select2.addItem('지역선택', '');

    var i=0, imax = selItemData.length, 
        selitem = null;

    for(i=0; i < imax; i++)
    {
        selitem = selItemData[i];
        this.select2.addItem(selitem, selitem);
    }

};

MainView.prototype.onSelect2Change = function(comp, info, e)
{
 //지역선택 아이템을 선택했을 경우 토스트 알림
    if(!info)
    {
       alert('지역을 선택하세요.');
        return;
    }

    //배열의 join 기능을 이용한 텍스트 결합
    this.labelID.setText([
        this.select1.getSelectedItem().text,
        ' > ',
        this.select2.getSelectedItem().text
    ].join(''));

};

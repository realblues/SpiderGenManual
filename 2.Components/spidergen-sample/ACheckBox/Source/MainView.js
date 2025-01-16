
/**
Constructor
Do not call Function in Constructor.
*/
MainView = class MainView extends AView
{
    constructor()
    {
        super()
		
	
		  this.chks = null; // 체크박스 배열 변수  
	
	

    }
}



MainView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	this.chks = this.findCompByGroup('checks');    

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

MainView.prototype.onBtnIDClick = function(comp, info, e)
{

	var chkValue = ''; 

    for(var chk in this.chks) 
    { 
        var currChk = this.chks[chk]; 

        //체크된 체크박스일 경우 
        if(currChk.isChecked){ 
            chkValue += currChk.getValue() + ' '; 
        } 
	} 

    this.labelID.setText(chkValue); //레이블에 출력 

};

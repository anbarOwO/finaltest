var app = new Vue({
    el:'#app',
    data:{
        itemList:[
            {
                id:'1',
                itemName:'劇毒藥水',
                imgUrl:'assets/image/mask/S__12681247.jpg',
                price:'800',
                count:'2'
              },
              {
                id:'2',
                itemName:'龜仙藥水',
                imgUrl:'assets/image/smell/smell-blue.png',
                price:'650',
                count:'1'
              },
              {
                id:'3',
                itemName:'解毒劑',
                imgUrl:'assets/image/cover/cover-4.png',
                price:'600',
                count:'1'
              },
              {
                id:'4',
                itemName:'虛弱藥水',
                imgUrl:'assets/image/wash/wash-3.png',
                price:'500',
                count:'2'
              },
    ]
    },
    methods:{
        handlePlus: function(item){
            item.count++;
        },
        handleSub: function(item){
            if(item.count>1){
            item.count--;                
            }
        },
        handledelete: function(index){
            console.log(this);
            this.itemList.splice(index,1);
        }
    },
    computed:{
        totalPrice:function(){
          var totalPrice=0;
          for(let i=0;i<this.itemList.length;i++){
            totalPrice+=this.itemList[i].price*this.itemList[i].count;
          }
          return totalPrice;
        }
    }
})

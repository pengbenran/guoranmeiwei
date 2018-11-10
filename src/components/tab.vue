<template>
  <div class="tab">
    <ul class="find_item" scroll="no">
   		<li class="find_item_list" v-for="(item, index) in find_item" :index="index" :key="key" :class="{'select':item.selected}" v-on:click="changTab(index)">
   			<span>{{item.name}}</span>
   		</li>
   	</ul>
  </div>
</template>

<script>
export default {
  props: ['find_item'],
  data () {
    return {
    	
    }
    },
    methods: {
  		changTab:function(index){
		  	var that=this;
	      	for(var i=0;i<that.find_item.length;i++){
	      		that.find_item[i].selected=false;
	      	}
	      	that.find_item[index].selected=true;
	    }
    }
}
</script>

<style>
.tab{
	height: 50px;
	overflow: hidden;
}
.find_item{
	/*border-bottom: 1px solid #FEFEFE;*/
	width:100%;
	white-space: nowrap;
	overflow-x:scroll; 
	height: 70px;
}
.find_item li{
	display: inline-block;
	text-align: center;
	height: 40px;
	line-height: 35px;
	font-size: 16px;
	min-width: 25%;
	
}
.select{
	font-weight: bold;
	font-size: 22px;
	color: #fc9632;
	border-bottom: 2rpx solid #fc9632;
}
</style>

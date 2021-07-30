<template>
  <div id="">

      <!-- <font-awesome-icon icon="spinner" />
      <font-awesome-icon :icon="['fas', 'caret-down']" />
      <font-awesome-icon :icon="['fas', 'angle-double-right']" fixed-width />

      <font-awesome-icon icon="spinner" size="xs" />
      <font-awesome-icon icon="spinner" size="lg" />
      <font-awesome-icon icon="spinner" size="6x" />

      <font-awesome-icon icon="spinner" rotation="270" />

      <font-awesome-icon icon="spinner" flip="horizontal" />
      <font-awesome-icon icon="spinner" flip="vertical" />
      <font-awesome-icon icon="spinner" flip="both" /> -->

      <img src="../assets/top.jpg">

      <h3>全球新冠疫情</h3>
      <p class="txt">来源：各国权威数据每日发布</p>
      <p class="txt">更新：{{ nowDate }}  {{ nowTime }}(北京时间)</p>

      <!--<div class="flexbox">
         <div class="item">
          <div class="red bold">2357</div>
          <div >现存确诊</div>
          <div>
              <!--用span标签可以在一行中同时对两个元素进行属性设置 --
              <span class="gray little">昨日</span>
              <span class="red little">40</span>
          </div>
        </div>

        <div class="item">
          <div class="orange bold">88</div>
          <div>现存疑似</div>
        </div>
        <div class="item">
          <div class=" brown bold">265</div>
          <div>现存重症</div>
        </div>
      </div> -->

      <!-- <div class="flexbox">

        <!-- <div class="item">
          <div class=" gray bold">3340{{addCount}}</div>
          <div>新增确诊</div>
        </div> --

        <div class="item">
          <div class="red bold">{{confirmCount}}</div>
          <div >累计确诊</div>
          <div>
              <!--用span标签可以在一行中同时对两个元素进行属性设置 --
              <span class="gray little">新增</span>
              <span class="red little">{{addCount}}</span>
          </div>
        </div>

        <div class="item">
          <div class="orange bold">{{healCount}}</div>
          <div>累计治愈</div>
          <!-- <div>
              <!--用span标签可以在一行中同时对两个元素进行属性设置 --
              <span class="gray little">昨日</span>
              <span class="red little">+24</span>
          </div> --
        </div>

        <div class="item">
          <div class=" gray bold">{{deadCount}}</div>
          <div>累计死亡</div>
        </div>


      </div> -->


      <!-- 中国疫情地图-->
      <!-- <div id="map" style="width: 100%; height: 450px;"></div> -->


      <!-- 表格-->
     <!-- <div :class="[flag ? classA : '']">
          <div class="row">
            <div class="column">地区</div>
            <div class="column orange">新增确诊</div>
            <div class="column red">累计确诊</div>
            <div class="column">死亡</div>
            <div class="column green">治愈</div>
          </div>

          <div class="row bggray" @click="togglecity">
            <div class="column">湖北</div>
            <div class="column ">1520</div>
            <div class="column ">67803</div>
            <div class="column">3212</div>
            <div class="column ">64014
              <font-awesome-icon :icon="['fas', 'caret-down']" v-if="!expanded"/>
              <font-awesome-icon :icon="['fas', 'caret-up']" v-if="expanded"/>
            </div>
          </div>

          <!-- 写子表格-——城市 --><!-- 用兄弟写即可 ,不需用父子--
          <div class="cities">
                <div class="row">
                  <div class="column">武汉</div>
                  <div class="column ">50008</div>
                  <div class="column">2571</div>
                  <div class="column ">46863</div>
                </div>
          </div>
      </div> -->

      <!-- <div id="msg" @click="toggledata">
        {{msg}}<font-awesome-icon :icon="['fas', 'caret-down']" v-if="!expanded"/>
              <font-awesome-icon :icon="['fas', 'caret-up']" v-if="expanded"/>
      </div> -->

      <!-- <div id="country" @click="selectcountry">
        <font-awesome-icon :icon="['fas', 'caret-down']" v-if="!expanded"/>
        <font-awesome-icon :icon="['fas', 'caret-up']" v-if="expanded"/>
      </div> -->


      <!-- 多国家搜索框 -->

      <!-- 多国家搜索框 -->
      <div id="containerDouble">
          <div class="search bar6">
                  <!-- <input id="Text" type="text" placeholder="请输入国家名字" name="cname"></input>-->

              <select id="doubleCountryname1" ><!--  multiple="multiple" size="185" -->
                   <option value="请输入多个国家名字">请选择多个国家名字</option>
                   <option  v-for="item in dataTest">{{item.name}}</option>
              </select>
          </div>
          <div class="search bar6">
                  <!-- <input id="Text" type="text" placeholder="请输入国家名字" name="cname"></input>-->
              <select id="doubleCountryname2" ><!--  multiple="multiple" size="185" -->
                   <option value="请输入多个国家名字">请选择多个国家名字</option>
                   <option  v-for="item in dataTest">{{item.name}}</option>
              </select>
          </div>

          <div class="search bar6">
                    <!-- <input id="Text" type="text" placeholder="请输入国家名字" name="cname"></input>-->
                <select id="doubleCountryname3" ><!--  multiple="multiple" size="185" -->
                     <option value="请输入多个国家名字">请选择多个国家名字</option>
                     <option  v-for="item in dataTest">{{item.name}}</option>
                </select>
                <button type="submit" @click="selectdataDouble">国家疫情对比</button>
          </div>



      </div>



      <!--柱状图 第一步 先设置一个容器 -->
      <div id="bar" style="width: 100%; height: 450px;"> </div>
      <!-- <div id="world" style="width:100%; height:800px;"></div> -->

      <!-- 搜索框 -->
      <div id="container">
          <div class="search bar6">
                  <!-- <input id="Text" type="text" placeholder="请输入国家名字" name="cname"></input>-->
              <select id="countryname" >
                   <option value="请输入国家名字">请选择单个国家名字</option>
                   <option v-for="item in dataTest">{{item.name}}</option>
              </select>
          </div>

          <div class="selectTime">
            <el-form  :inline="true" >
                <el-form-item >
                  <el-date-picker style="margin-left: 10px;margin-top: 20px; border:2px solid #c5464a;" v-model="dateRange.startTime" type="datetime" placeholder="选择开始日期" value-format="yyyy.MM.dd">
                  </el-date-picker>

                </el-form-item>
            </el-form>
          </div>

          <div class="selectTime">
            <el-form  :inline="true" >
                <el-form-item  >
                  <el-date-picker style="margin-top: 20px; border:2px solid #c5464a;"  v-model="dateRange.endTime" type="datetime" placeholder="选择结束日期" value-format="yyyy.MM.dd">
                  </el-date-picker>
                </el-form-item>
            </el-form>
          </div>
                <!-- <el-form-item>
                  <el-button type="primary" @click="loadData()" style="width: 100px;">查询</el-button>
                </el-form-item> -->
           <div class="selectCountryAndTime">
              <button type="submit" @click="selectdata">搜索国家疫情</button>
           </div>

      </div>




      <!--画图 -->
      <div id="dailyCountry" style="width: 100%; height: 550px;"> </div>


      <div id="world" style="width: 100%; height: 550px;"> </div>

      <!-- 表格-->
      <div>
          <div class="row">
            <div class="column">地区</div>
            <div class="column orange">新增确诊</div>
            <div class="column red">累计确诊</div>
            <div class="column">死亡</div>
            <div class="column green">治愈</div>
          </div>

        <div  v-for="item in showlist">
            <div class="row bggray" ><!-- @click="togglecity" -->
              <div class="column">{{item.name}}</div>
              <div class="column">{{item.confirmAdd}}</div>
              <div class="column ">{{item.confirm}}</div>
              <div class="column">{{item.dead}}</div>
              <div class="column">{{item.heal}}
                <font-awesome-icon :icon="['fas', 'caret-down']" v-if="!expanded"/>
                <font-awesome-icon :icon="['fas', 'caret-up']" v-if="expanded"/>
              </div>
            </div>
            <!-- <div class="cities">
                  <div class="row">
                    <div class="column">武汉</div>
                    <div class="column ">50008</div>
                    <div class="column">2571</div>
                    <div class="column ">46863</div>
                  </div>
            </div> -->

        </div>

        <div id="msg" @click="toggledata">
          {{msg}}<font-awesome-icon :icon="['fas', 'caret-down']" v-if="!expanded"/>
              <font-awesome-icon :icon="['fas', 'caret-up']" v-if="expanded"/>
        </div>

      </div>
  </div>
</template>

<script>
/*
  import "../../build/china.js";
  import "../../build/world.js"; */


/* 注意： 这是vue中的echarts的引用方式 */
var echartsmin = require("../../node_modules/echarts/lib/echarts.min.js");
var echarts = require("../../node_modules/echarts/lib/echarts.js");



  //有动态数据时，要用expor default
  export default {
    name: 'Main',
    data () {
      return {
        msg: "查看更多地区",
        flag:true,
        classA:'container',
        expanded:false,
        dataTest:[],
        countryTest:[],
        showlist:[],

        dailyTest:[],//时间范围返回数据


        /* addCount: "",//新增确诊
        confirmCount: "",//累计确诊
        healCount: "",//治愈
        deadCount: "",//死亡 */



        nowDate:null,    //存放年月日变量
        nowTime:null,   //存放时分秒变量
        timer: "",           //定义一个定时器的变量
        currentTime: new Date(),       // 获取当前时间

        dateRange: {
                  startTime: '',
                  endTime: ''
        }

      }
    },

    created()
    {
        //this.$axios.get('https://api.inews.qq.com/newsqa/v1/automation/foreign/country/ranklist')
        this.$axios.get('http://37psqn.natappfree.cc/test')
        .then(res=>{
          console.log(res);
         //this.dataTest = res.data.data;
         this.dataTest = res.data;
         this.showlist = this.dataTest.slice(0,6);




         /* var add = 0;
         var confirm = 0;
         var heal = 0;
         var dead = 0;
         for(var i=0; i<this.dataTest.length; i++)
          {
              heal = heal + this.dataTest[i].heal;
              dead = dead + this.dataTest[i].dead;
              if(this.dataTest[i].comfirmAdd.isNaN())
              {
                add = add + this.dataTest[i].comfirmAdd;
              }

              if(this.dataTest[i].comfirm.isNaN())
              {
                confirm = confirm + this.dataTest[i].comfirm;
              }
          }
          console.log(add);
          console.log(confirm);
          /* this.addCount = add.toString();
          this.confirmCount = confirm.toString(); *

          this.healCount = heal.toString();
          this.deadCount = dead.toString();
 */





         //获取当前时间并打印
         /* var _this = this;
     　　let yy = new Date().getFullYear();
     　　let mm = new Date().getMonth()+1;
     　　let dd = new Date().getDate();
     　　let hh = new Date().getHours();
     　　let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
     　　let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
     　　_this.gettime = yy+'/'+mm+'/'+dd+' '+hh+':'+mf+':'+ss;
     　　console.log(_this.gettime);
         console.log(msgTime);*/
         this.timer = setInterval(this.getTime(), 1000);



        var xAxis = [];
        var series1 = [];
        var series2 = [];
        var series3 = [];
        var series4 = [];
        for(var i=0; i<3; i++)
        {
            xAxis.push(this.dataTest[i].name);
            series1.push(this.dataTest[i].confirmAdd);
            series2.push(this.dataTest[i].confirm);
            series3.push(this.dataTest[i].dead);
            series4.push(this.dataTest[i].heal);
        }

        var maplist = [];
         for(var i=0; i<this.dataTest.length; i++)
         {
             var obj = {};
             obj.name = this.dataTest[i].name;
             obj.value = this.dataTest[i].confirmAdd;
             maplist.push(obj);
             /* maplist.push({
               name:this.dataTest[i].name,
               value:this.dataTest[i].confirmAdd
               }); */
         }



         //世界地图
         // 第二步 ：基于准备好的dom，初始化echarts实例
         var myChart3 = echarts.init(document.getElementById("world"));

         var nameMap = {
                          'Canada': '加拿大',
                          'Turkmenistan': '土库曼斯坦',
                          'Saint Helena': '圣赫勒拿',
                          'Lao PDR': '老挝',
                          'Lithuania': '立陶宛',
                          'Cambodia': '柬埔寨',
                          'Ethiopia': '埃塞俄比亚',
                          'Faeroe Is.': '法罗群岛',
                          'Swaziland': '斯威士兰',
                          'Palestine': '巴勒斯坦',
                          'Belize': '伯利兹',
                          'Argentina': '阿根廷',
                          'Bolivia': '玻利维亚',
                          'Cameroon': '喀麦隆',
                          'Burkina Faso': '布基纳法索',
                          'Aland': '奥兰群岛',
                          'Bahrain': '巴林',
                          'Saudi Arabia': '沙特阿拉伯',
                          'Fr. Polynesia': '法属波利尼西亚',
                          'Cape Verde': '佛得角',
                          'W. Sahara': '西撒哈拉',
                          'Slovenia': '斯洛文尼亚',
                          'Guatemala': '危地马拉',
                          'Guinea': '几内亚',
                          'Dem. Rep. Congo': '刚果（金）',
                          'Germany': '德国',
                          'Spain': '西班牙',
                          'Liberia': '利比里亚',
                          'Netherlands': '荷兰',
                          'Jamaica': '牙买加',
                          'Solomon Is.': '所罗门群岛',
                          'Oman': '阿曼',
                          'Tanzania': '坦桑尼亚',
                          'Costa Rica': '哥斯达黎加',
                          'Isle of Man': '曼岛',
                          'Gabon': '加蓬',
                          'Niue': '纽埃',
                          'Bahamas': '巴哈马',
                          'New Zealand': '新西兰',
                          'Yemen': '也门',
                          'Jersey': '泽西岛',
                          'Pakistan': '巴基斯坦',
                          'Albania': '阿尔巴尼亚',
                          'Samoa': '萨摩亚',
                          'Czech Rep.': '捷克',
                          'United Arab Emirates': '阿拉伯联合酋长国',
                          'Guam': '关岛',
                          'India': '印度',
                          'Azerbaijan': '阿塞拜疆',
                          'N. Mariana Is.': '北马里亚纳群岛',
                          'Lesotho': '莱索托',
                          'Kenya': '肯尼亚',
                          'Belarus': '白俄罗斯',
                          'Tajikistan': '塔吉克斯坦',
                          'Turkey': '土耳其',
                          'Afghanistan': '阿富汗',
                          'Bangladesh': '孟加拉国',
                          'Mauritania': '毛里塔尼亚',
                          'Dem. Rep. Korea': '朝鲜',
                          'Saint Lucia': '圣卢西亚',
                          'Br. Indian Ocean Ter.': '英属印度洋领地',
                          'Mongolia': '蒙古',
                          'France': '法国',
                          'Cura?ao': '库拉索岛',
                          'S. Sudan': '南苏丹',
                          'Rwanda': '卢旺达',
                          'Slovakia': '斯洛伐克',
                          'Somalia': '索马里',
                          'Peru': '秘鲁',
                          'Vanuatu': '瓦努阿图',
                          'Norway': '挪威',
                          'Malawi': '马拉维',
                          'Benin': '贝宁',
                          'St. Vin. and Gren.': '圣文森特和格林纳丁斯',
                          'Korea': '韩国',
                          'Singapore': '新加坡',
                          'Montenegro': '黑山共和国',
                          'Cayman Is.': '开曼群岛',
                          'Togo': '多哥',
                          'China': '中国',
                          'Heard I. and McDonald Is.': '赫德岛和麦克唐纳群岛',
                          'Armenia': '亚美尼亚',
                          'Falkland Is.': '马尔维纳斯群岛（福克兰）',
                          'Ukraine': '乌克兰',
                          'Ghana': '加纳',
                          'Tonga': '汤加',
                          'Finland': '芬兰',
                          'Libya': '利比亚',
                          'Dominican Rep.': '多米尼加',
                          'Indonesia': '印度尼西亚',
                          'Mauritius': '毛里求斯',
                          'Eq. Guinea': '赤道几内亚',
                          'Sweden': '瑞典',
                          'Vietnam': '越南',
                          'Mali': '马里',
                          'Russia': '俄罗斯',
                          'Bulgaria': '保加利亚',
                          'United States': '美国',
                          'Romania': '罗马尼亚',
                          'Angola': '安哥拉',
                          'Chad': '乍得',
                          'South Africa': '南非',
                          'Fiji': '斐济',
                          'Liechtenstein': '列支敦士登',
                          'Malaysia': '马来西亚',
                          'Austria': '奥地利',
                          'Mozambique': '莫桑比克',
                          'Uganda': '乌干达',
                          'Japan': '日本',
                          'Niger': '尼日尔',
                          'Brazil': '巴西',
                          'Kuwait': '科威特',
                          'Panama': '巴拿马',
                          'Guyana': '圭亚那',
                          'Madagascar': '马达加斯加',
                          'Luxembourg': '卢森堡',
                          'American Samoa': '美属萨摩亚',
                          'Andorra': '安道尔',
                          'Ireland': '爱尔兰',
                          'Italy': '意大利',
                          'Nigeria': '尼日利亚',
                          'Turks and Caicos Is.': '特克斯和凯科斯群岛',
                          'Ecuador': '厄瓜多尔',
                          'U.S. Virgin Is.': '美属维尔京群岛',
                          'Brunei': '文莱',
                          'Australia': '澳大利亚',
                          'Iran': '伊朗',
                          'Algeria': '阿尔及利亚',
                          'El Salvador': '萨尔瓦多',
                          "C?te d'Ivoire": '科特迪瓦',
                          'Chile': '智利',
                          'Puerto Rico': '波多黎各',
                          'Belgium': '比利时',
                          'Thailand': '泰国',
                          'Haiti': '海地',
                          'Iraq': '伊拉克',
                          'S?o Tomé and Principe': '圣多美和普林西比',
                          'Sierra Leone': '塞拉利昂',
                          'Georgia': '格鲁吉亚',
                          'Denmark': '丹麦',
                          'Philippines': '菲律宾',
                          'S. Geo. and S. Sandw. Is.': '南乔治亚岛和南桑威奇群岛',
                          'Moldova': '摩尔多瓦',
                          'Morocco': '摩洛哥',
                          'Namibia': '纳米比亚',
                          'Malta': '马耳他',
                          'Guinea-Bissau': '几内亚比绍',
                          'Kiribati': '基里巴斯',
                          'Switzerland': '瑞士',
                          'Grenada': '格林纳达',
                          'Seychelles': '塞舌尔',
                          'Portugal': '葡萄牙',
                          'Estonia': '爱沙尼亚',
                          'Uruguay': '乌拉圭',
                          'Antigua and Barb.': '安提瓜和巴布达',
                          'Lebanon': '黎巴嫩',
                          'Uzbekistan': '乌兹别克斯坦',
                          'Tunisia': '突尼斯',
                          'Djibouti': '吉布提',
                          'Greenland': '格陵兰',
                          'Timor-Leste': '东帝汶',
                          'Dominica': '多米尼克',
                          'Colombia': '哥伦比亚',
                          'Burundi': '布隆迪',
                          'Bosnia and Herz.': '波斯尼亚和黑塞哥维那',
                          'Cyprus': '塞浦路斯',
                          'Barbados': '巴巴多斯',
                          'Qatar': '卡塔尔',
                          'Palau': '帕劳',
                          'Bhutan': '不丹',
                          'Sudan': '苏丹',
                          'Nepal': '尼泊尔',
                          'Micronesia': '密克罗尼西亚',
                          'Bermuda': '百慕大',
                          'Suriname': '苏里南',
                          'Venezuela': '委内瑞拉',
                          'Israel': '以色列',
                          'St. Pierre and Miquelon': '圣皮埃尔和密克隆群岛',
                          'Central African Rep.': '中非',
                          'Iceland': '冰岛',
                          'Zambia': '赞比亚',
                          'Senegal': '塞内加尔',
                          'Papua New Guinea': '巴布亚新几内亚',
                          'Trinidad and Tobago': '特立尼达和多巴哥',
                          'Zimbabwe': '津巴布韦',
                          'Jordan': '约旦',
                          'Gambia': '冈比亚',
                          'Kazakhstan': '哈萨克斯坦',
                          'Poland': '波兰',
                          'Eritrea': '厄立特里亚',
                          'Kyrgyzstan': '吉尔吉斯斯坦',
                          'Montserrat': '蒙特塞拉特',
                          'New Caledonia': '新喀里多尼亚',
                          'Macedonia': '马其顿',
                          'Paraguay': '巴拉圭',
                          'Latvia': '拉脱维亚',
                          'Hungary': '匈牙利',
                          'Syria': '叙利亚',
                          'Honduras': '洪都拉斯',
                          'Myanmar': '缅甸',
                          'Mexico': '墨西哥',
                          'Egypt': '埃及',
                          'Nicaragua': '尼加拉瓜',
                          'Cuba': '古巴',
                          'Serbia': '塞尔维亚',
                          'Comoros': '科摩罗',
                          'United Kingdom': '英国',
                          'Fr. S. Antarctic Lands': '南极洲',
                          'Congo': '刚果（布）',
                          'Greece': '希腊',
                          'Sri Lanka': '斯里兰卡',
                          'Croatia': '克罗地亚',
                          'Botswana': '博茨瓦纳',
                          'Siachen Glacier': '锡亚琴冰川地区'
                 };
         //console.log(mydata);
         var dataworld = [];
         var convertData = function (data) {
             var res = [];
             for (var i = 0; i < data.length; i++) {
                 res.push({
                     name: data[i].name,
                     value: data[i].value
                 });
             }
             return res;
         };


         var optionWorld = {
                title:{
                  text:'世界疫情地图',
                  x: 'center',
                  y: '15px',
                  textStyle: {
                      color: '#d59d6d',
                      fontSize: 26
                  },

                },
         				tooltip:{
         					trigger:'item'	/* 光标悬浮在上面，有提示*/
         				},
         				//左侧小导航图标
         				visualMap: {
         					show : true,
         					x: 'left',
         					y: 'bottom',
         					textStyle:{
                      fontSize: 14
         					}
         					/* splitList: [
         						/* {start: 10000000},{start: 1000000, end: 10000000},{start: 100000, end: 999999},
         						{start: 10000, end: 99999},{start: 1, end: 9999} *
                    {start: 10000},{start: 1000, end: 9999},{start: 100, end: 999},
                    {start: 10, end: 99},{start: 1, end: 9}
         					],
         					color: ['#cc0000', '#ff4d4d', '#ff9999','#ffe5e5'] */
         				},
                 dataRange: {
                        min: 0,
                        max: 10000,
                        text: ['High', 'Low'],
                        realtime: false,
                        calculable: true,
                        color: ['orangered', 'yellow', 'lightskyblue'],
                    },
                series:[{
                      name:'全球疫情每日新增数据',
                      type:'map',
                      mapType:'world',
                      /* roam: true, */
                      itemStyle:{
                         emphasis:{label:{show:true}}
                      },

                      label:{
                          normal:{
                            show: false, //国家名称
                            fontsize: 14
                          },
                          emphasis:{
                            show:true
                          }
                      },

                      data: maplist,////立即执行函数
                      nameMap: nameMap
                }]
            };
            console.log("世界地图数据是：");
            console.log(maplist);

           //第四步： 使用刚指定的配置项和数据显示图表。
           myChart3.setOption(optionWorld);




         /* 柱状图*/

         // 第二步 ：基于准备好的dom，初始化echarts实例
         var myChart2 = echartsmin.init(document.getElementById('bar'));

         //第三步：  指定图表的配置项和数据
         var posList = [
             'left', 'right', 'top', 'bottom',
             'inside',
             'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
             'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
         ];

         var app = {} ;
         app.configParameters = {
             rotate: {
                 min: -90,
                 max: 90
             },
             align: {
                 options: {
                     left: 'left',
                     center: 'center',
                     right: 'right'
                 }
             },
             verticalAlign: {
                 options: {
                     top: 'top',
                     middle: 'middle',
                     bottom: 'bottom'
                 }
             },
             position: {
                 options: posList.reduce(function (map, pos) {
                     map[pos] = pos;
                     return map;
                 }, {})
             },
             distance: {
                 min: 0,
                 max: 100
             }
         };

         app.config = {
             rotate: 90,
             align: 'left',
             verticalAlign: 'middle',
             position: 'insideBottom',
             distance: 15,
             onChange: function () {
                 var labelOption = {
                     normal: {
                         rotate: app.config.rotate,
                         align: app.config.align,
                         verticalAlign: app.config.verticalAlign,
                         position: app.config.position,
                         distance: app.config.distance
                     }
                 };
                 myChart.setOption({
                     series: [{
                         label: labelOption
                     }, {
                         label: labelOption
                     }, {
                         label: labelOption
                     }, {
                         label: labelOption
                     }]
                 });
             }
         };


         var labelOption = {
             show: true,
             position: app.config.position,
             distance: app.config.distance,
             align: app.config.align,
             verticalAlign: app.config.verticalAlign,
             rotate: app.config.rotate,
             formatter: '{c}  {name|{a}}',
             fontSize: 16,
             rich: {
                 name: {
                 }
             }
         };

         var optionBar = {
             tooltip: {
                 trigger: 'axis',
                 axisPointer: {
                     type: 'shadow'
                 }
             },
             legend: {
                 /* data: ['Forest', 'Steppe', 'Desert', 'Wetland'] */
             },
             toolbox: {
                 show: true,
                 orient: 'vertical',
                 left: 'right',
                 top: 'center',
                 feature: {
                     mark: {show: true},
                     dataView: {show: true, readOnly: false},
                     magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                     restore: {show: true},
                     saveAsImage: {show: true}
                 }
             },
             xAxis: [
                 {
                     type: 'category',
                     axisTick: {show: false},
                     data: xAxis
                 }
             ],
             yAxis: [
                 {
                     type: 'value'
                 }
             ],
             series: [
                 {
                     name: '新增',
                     type: 'bar',
                     label: labelOption,
                     emphasis: {
                         focus: 'series'
                     },
                     data: series1
                 },
                 {
                     name: '确诊',
                     type: 'bar',
                     barGap: 0,
                     label: labelOption,
                     emphasis: {
                         focus: 'series'
                     },
                     data: series2
                 },
                 {
                     name: '死亡',
                     type: 'bar',
                     label: labelOption,
                     emphasis: {
                         focus: 'series'
                     },
                     data: series3
                 },
                 {
                     name: '治愈',
                     type: 'bar',
                     label: labelOption,
                     emphasis: {
                         focus: 'series'
                     },
                     data: series4
                 }

             ]
         };

         //第四步： 使用刚指定的配置项和数据显示图表。
         myChart2.setOption(optionBar);



      //国家疫情柱状图
      // 第二步 ：基于准备好的dom，初始化echarts实例
      var myChart4 = echarts.init(document.getElementById("dailyCountry"));

      //console.log(mydata);
      /* var optionCountry = {
          xAxis: {
              type: 'category',
              data: [
                '新增人数',
                {
                  value: '累计确诊',
                  itemStyle: {
                      fontSize: 40
                  }
              },
                '死亡', '治愈']
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: [0, {
                  value: 0,
                  itemStyle: {
                      color: '#a90000',
                  }
              }, 0, 0],
              type: 'bar'
          }]
      }; */
      var dailyoption = {
          title: {
              text: '疫情数据折线图',
              x: '75px',
              y: '7px',
              textStyle: {
                  color: '#3A7BD5',
                  fontSize: 20
              }
          },
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross',
                  label: {
                      backgroundColor: '#6a7985'
                  }
              }
          },
          legend: {
                /* ['新增确诊', '累计确诊', '死亡', '治愈'] */
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis: [
              {
                  type: 'category',
                  boundaryGap: false,
                  data: ['一', '二', '三', '四', '五', '六', '七']
              }
          ],
          yAxis: [
              {
                  type: 'value'
              }
          ],
          series: [
              {
                  name: '新增确诊',
                  type: 'line',
                  stack: '总量',
                  areaStyle: {},
                  emphasis: {
                      focus: 'series'
                  },
                  data: [120, 132, 101, 134, 90, 230, 210]
              },
              {
                  name: '累计确诊',
                  type: 'line',
                  stack: '总量',
                  areaStyle: {},
                  emphasis: {
                      focus: 'series'
                  },
                  data: [220, 182, 191, 234, 290, 330, 310]
              },
              {
                  name: '死亡',
                  type: 'line',
                  stack: '总量',
                  areaStyle: {},
                  emphasis: {
                      focus: 'series'
                  },
                  data: [150, 232, 201, 154, 190, 330, 410]
              },
              {
                  name: '治愈',
                  type: 'line',
                  stack: '总量',
                  areaStyle: {},
                  emphasis: {
                      focus: 'series'
                  },
                  data: [320, 332, 301, 334, 390, 330, 320]
              }
          ]
      };

      //第四步： 使用刚指定的配置项和数据显示图表。
      myChart4.setOption(dailyoption);





        })
        .catch(res=>{

        });




        /* this.$http.jsonp('https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5')
        .then(res=>{
          console.log(res);
        /* this.dataTest = res.data.data;
         this.showlist = this.dataTest.slice(0,6);
        })  */


    },
    mounted(){
        /* // 第二步 ：基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById("map"));

        //第三步：  指定图表的配置项和数据
        var mydata = [
        	{name:'天津',value:'69'},{name:'上海',value:'243'},
        	{name:'重庆',value:'376'},{name:'河北',value:'135'},
        	{name:'河南',value:'764'},{name:'云南',value:'124'},
        	{name:'辽宁',value:'89'},{name:'黑龙江',value:'19'},
        	{name:'湖南',value:'661'},{name:'安徽',value:'536'},
        	{name:'山东',value:'307'},{name:'新疆',value:'99'},
        	{name:'江苏',value:'341'},{name:'浙江',value:'895'},
        	{name:'江西',value:'548'},{name:'湖北',value:'16678'},
        	{name:'广西',value:'156'},{name:'甘肃',value:'57'},
        	{name:'山西',value:'81'},{name:'内蒙古',value:'42'},
        	{name:'陕西',value:'165'},
        	{name:'吉林',value:'54'},{name:'福建',value:'205'},
        	{name:'贵州',value:'64'},{name:'广东',value:'895'},
        	{name:'青海',value:'172'},{name:'西藏',value:'1'},
        	{name:'四川',value:'301'},{name:'宁夏',value:'34'},
        	{name:'海南',value:'99'},{name:'台湾',value:'99'},
        	{name:'香港',value:'21'},{name:'澳门',value:'18'}
        ];
        var optionMap = {
        				tooltip:{
        					trigger:'item'		/* 光标悬浮在上面，有提示
        				},
        				//左侧小导航图标
        				visualMap: {
        					show : true,
        					x: 'left',
        					y: 'bottom',
        					textStyle:{

        					},
        					splitList: [
        						{start: 1000},{start: 500, end: 999},{start: 100, end: 499},
        						{start: 10, end: 99},{start: 1, end: 9},
        					],
        					color: ['#cc0000', '#ff4d4d', '#ff9999','#ffe5e5']
        				},
                        series:[{
        							name:'中国疫情地图',
        							type:'map',
        							mapType:'china',
        							label:{
        								normal:{
        									show: true, //省份名称
        									fontsize: 14
        								},
        								emphasis:{
        									show:true
        								}
        							},
        							data:mydata
        				}]
                    };

        //第四步： 使用刚指定的配置项和数据显示图表。
        myChart.setOption(optionMap);

 */
    },
    methods:{
      /* togglecity(e){
            // console.log(e);/* 通过target(列)找父亲节点，再通过父亲节点找兄弟节点，即城市的列表
            var column = e.target;
            var row = column.parentElement;
            console.log(row);
            var cities = row.nextElementSibling;/* 找下面的兄弟节点   sibling：兄弟姐妹
            console.log(cities);
            //设置元素的display属性= "block"，以块的方式显示
            if(cities.style.display == "block" )
            {
              cities.style.display = "none";
            }
            else
            {
              cities.style.display = "block";
            }
            this.expanded = !this.expanded;
      }, */
      getTime(){
                const date = new Date();
                const year = date.getFullYear();
                const month = date.getMonth() + 1;
                const day = date.getDate();
                const hour= date.getHours();
                const minute = date.getMinutes();
                const second = date.getSeconds();
                const str = ''
                // if(this.hour>12)
                // {
                //    this.hour -= 12;
                //    this.str = " AM";
                // }else
                // {
                //     this.str = " PM";
                //  }
                this.month=check(month);
                this.day=check(day);
                this.hour=check(hour);
                this.minute=check(minute);
                this.second=check(second);
                function check(i)
                {
                   const num = (i<10)?("0"+i) : i;
                   return num;
                }
                this.nowDate = year + "年" + this.month + "月" + this.day+"日";
                this.nowTime = this.hour + ":" + this.minute + ":" + this.second /* + this.str */;
      },
      toggledata()
      {
          if(this.flag)
          {
            this.msg = "收起更多地区";
            this.showlist = this.dataTest;
          }
          else
          {
            this.msg = "查看更多地区";
            this.showlist = this.dataTest.slice(0,6);
          }
          this.flag = !this.flag;
          this.expanded = !this.expanded;     /* 控制小箭头指向*/
      },
      selectdata(e)
      {
        console.log(document.getElementById("countryname").value);

        // 先定义传参函数
       /* function changeCost(document.getElementById("countryname").value)
        {
        　　return request({
        　　　　url: 'http://localhost:8080/getCountry',
        　　　　method: 'POST',
        　　　　data: document.getElementById("countryname").value
        　　　　/* headers: {
        　　　　　　'Content-Type': 'application/json;charset=UTF-8'
        　　　　}
        　　})
        }


        changeCost(document.getElementById("countryname").value) */

        /* var a=[
          {value:document.getElementById("countryname").value}
          ]; */

          console.log(this.dateRange.startTime);
          console.log(this.dateRange.startTime.slice(0,4));
          console.log(this.dateRange.startTime.slice(6,10));
          console.log(this.dateRange.endTime);
          console.log(this.dateRange.endTime.slice(0,4));
          console.log(this.dateRange.endTime.slice(6,10));

          var myDaily = [
            {
            name:document.getElementById("countryname").value,
            confirm:0,confirm_add:0,dead:0,heal:0,
            y:this.dateRange.startTime.slice(0,4),
            date:this.dateRange.startTime.slice(6,10)
            },
            {
              name:document.getElementById("countryname").value,
              confirm:0,confirm_add:0,dead:0,heal:0,
              y:this.dateRange.endTime.slice(0,4),
              date:this.dateRange.endTime.slice(6,10)
            }
          ];
        this.$axios({
              url: 'http://37psqn.natappfree.cc/getCountry',
              method: 'POST',
              data: myDaily,
              dataType : "text",
               // url拼接参数params:
               // 数据包参数      data: {},
              // 请求头参数    	headers: {}
           })
        .then(res => {
        　　/* alert({
        　　　　message: '成功',
        　　　　type: 'success'
        　　}) */

          console.log(res);
          this.dailyTest = res.data;


          //国家疫情折线图
          // 第二步 ：基于准备好的dom，初始化echarts实例
          var myChart4 = echarts.init(document.getElementById("dailyCountry"));

          var xAxis = [];
          var series1 = [];
          var series2 = [];
          var series3 = [];
          var series4 = [];
          for(var i=0; i<this.dailyTest.length; i++)
          {
              xAxis.push(this.dailyTest[i].y+"."+this.dailyTest[i].date);
              series1.push(this.dailyTest[i].confirm_add);
              series2.push(this.dailyTest[i].confirm);
              series3.push(this.dailyTest[i].dead);
              series4.push(this.dailyTest[i].heal);
          }

          var dailyoption = {

              title: {
                  text: this.dailyTest[0].name+'疫情数据折线图',
                  x: '45px',
                   y: '7px',
                   textStyle: {
                       color: '#3A7BD5',
                       fontSize: 26
                   }
              },
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                      type: 'cross',
                      label: {
                          backgroundColor: '#6a7985'
                      }
                  }
              },
              legend: {
                   /* ['新增确诊', '累计确诊', '死亡', '治愈'] */
              },
              toolbox: {
                  feature: {
                      saveAsImage: {}
                  }
              },
              grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
              },
              xAxis: [
                  {
                      type: 'category',
                      boundaryGap: false,
                      data: xAxis
                  }
              ],
              yAxis: [
                  {
                      type: 'value'
                  }
              ],
              series: [
                  {
                      name: '新增确诊',
                      type: 'line',
                      stack: '总量',
                      areaStyle: {},
                      emphasis: {
                          focus: 'series'
                      },
                      data: series2
                  },
                  {
                      name: '累计确诊',
                      type: 'line',
                      stack: '总量',
                      areaStyle: {},
                      emphasis: {
                          focus: 'series'
                      },
                      data: series1
                  },
                  {
                      name: '死亡',
                      type: 'line',
                      stack: '总量',
                      areaStyle: {},
                      emphasis: {
                          focus: 'series'
                      },
                      data: series3
                  },
                  {
                      name: '治愈',
                      type: 'line',
                      stack: '总量',
                      areaStyle: {},
                      emphasis: {
                          focus: 'series'
                      },
                      data: series4
                  },
              ]
          };

          myChart4.setOption(dailyoption);








        /* this.dialogFormVisible = false
        this.$refs['formParams'].resetFields();
        　　this.queryData() */
        })

      },
      selectdataDouble(){
        console.log(document.getElementById("doubleCountryname1").value);
        var myname = [
          {name: document.getElementById("doubleCountryname1").value,confirm:0,confirmAdd:0,dead:0,heal:0},
          {name: document.getElementById("doubleCountryname2").value,confirm:0,confirmAdd:0,dead:0,heal:0},
          {name: document.getElementById("doubleCountryname3").value,confirm:0,confirmAdd:0,dead:0,heal:0}
        ];

        this.$axios({
               url: 'http://37psqn.natappfree.cc/getDoubleCountry',
               method: 'POST',
               data: [
               {name:document.getElementById("doubleCountryname1").value},
               {name:document.getElementById("doubleCountryname2").value},
               {name:document.getElementById("doubleCountryname3").value}
               ],
               dataType : "text",
                // url拼接参数params:
                // 数据包参数      data: {},
               // 请求头参数    	headers: {}
            })
         .then(res => {
         　　/* alert({
         　　　　message: '成功',
         　　　　type: 'success'
         　　})*/

         console.log(res);

         //在头部定义的
         this.countryTest = res.data;

         console.log(this.countryTest);

          /* countrySelect[0].confirmAdd,
          countrySelect[0].confirm,
          countrySelect[0].dead,
          countrySelect[0].heal */

          /* 柱状图*/

          // 第二步 ：基于准备好的dom，初始化echarts实例
          var myChart2 = echartsmin.init(document.getElementById('bar'));

          //第三步：  指定图表的配置项和数据
          var xAxis = [];
          var series1 = [];
          var series2 = [];
          var series3 = [];
          var series4 = [];

          for(var i=0; i<3; i++)
          {
              xAxis.push(this.countryTest[i].name);
              series1.push(this.countryTest[i].confirmAdd);
              series2.push(this.countryTest[i].confirm);
              series3.push(this.countryTest[i].dead);
              series4.push(this.countryTest[i].heal);
          }


          var posList = [
              'left', 'right', 'top', 'bottom',
              'inside',
              'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
              'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
          ];

          var app = {} ;
          app.configParameters = {
              rotate: {
                  min: -90,
                  max: 90
              },
              align: {
                  options: {
                      left: 'left',
                      center: 'center',
                      right: 'right'
                  }
              },
              verticalAlign: {
                  options: {
                      top: 'top',
                      middle: 'middle',
                      bottom: 'bottom'
                  }
              },
              position: {
                  options: posList.reduce(function (map, pos) {
                      map[pos] = pos;
                      return map;
                  }, {})
              },
              distance: {
                  min: 0,
                  max: 100
              }
          };

          app.config = {
              rotate: 90,
              align: 'left',
              verticalAlign: 'middle',
              position: 'insideBottom',
              distance: 15,
              onChange: function () {
                  var labelOption = {
                      normal: {
                          rotate: app.config.rotate,
                          align: app.config.align,
                          verticalAlign: app.config.verticalAlign,
                          position: app.config.position,
                          distance: app.config.distance
                      }
                  };
                  myChart.setOption({
                      series: [{
                          label: labelOption
                      }, {
                          label: labelOption
                      }, {
                          label: labelOption
                      }, {
                          label: labelOption
                      }]
                  });
              }
          };


          var labelOption = {
              show: true,
              position: app.config.position,
              distance: app.config.distance,
              align: app.config.align,
              verticalAlign: app.config.verticalAlign,
              rotate: app.config.rotate,
              formatter: '{c}  {name|{a}}',
              fontSize: 16,
              rich: {
                  name: {
                  }
              }
          };

          var optionBar = {
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                      type: 'shadow'
                  }
              },
              legend: {
                  /* data: ['Forest', 'Steppe', 'Desert', 'Wetland'] */
              },
              toolbox: {
                  show: true,
                  orient: 'vertical',
                  left: 'right',
                  top: 'center',
                  feature: {
                      mark: {show: true},
                      dataView: {show: true, readOnly: false},
                      magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                      restore: {show: true},
                      saveAsImage: {show: true}
                  }
              },
              xAxis: [
                  {
                      type: 'category',
                      axisTick: {show: false},
                      data: xAxis
                  }
              ],
              yAxis: [
                  {
                      type: 'value'
                  }
              ],
              series: [
                  {
                      name: '新增',
                      type: 'bar',
                      label: labelOption,
                      emphasis: {
                          focus: 'series'
                      },
                      data: series1
                  },
                  {
                      name: '确诊',
                      type: 'bar',
                      barGap: 0,
                      label: labelOption,
                      emphasis: {
                          focus: 'series'
                      },
                      data: series2
                  },
                  {
                      name: '死亡',
                      type: 'bar',
                      label: labelOption,
                      emphasis: {
                          focus: 'series'
                      },
                      data: series3
                  },
                  {
                      name: '治愈',
                      type: 'bar',
                      label: labelOption,
                      emphasis: {
                          focus: 'series'
                      },
                      data: series4
                  }

              ]
          };

          //第四步： 使用刚指定的配置项和数据显示图表。
          myChart2.setOption(optionBar);

         })


      }
}


}







</script>

<style scoped>
  /* //scoped用来表示只对当前页面生效*/
  img{
    width: 100%;
    height:250px;
  }
  .cities{
    display: none;
  }
  .container{
    height: 110px;
    overflow: hidden; /* 多出的部分进行隐藏*/
  }
    #msg{
      text-align: center;
      height: 60px;
      line-height: 60px; /* 行高 = 容器高 ，即垂直居中*/
    }
    .row{
      height: 55px;
      display: flex;  /* 弹性盒子 默认横向排列 */
      margin-bottom: 5px;
      border-radius: 20px;

      /* justify-content: space-around;  /* justify-content: space-around内部元素间隔均匀分布 */  /* 但是因为数据长度差异，不可以用这个*/
      /* align-items: center;  /* 元素纵向排列居中*/
    }
    .column{
       width: 20%;
       text-align: center;/* 水平居中因为全是文本，所以用text-align即可 */
       line-height: 55px; /* 垂直居中：垂直的高度等于容器高度，即可居中*/
    }
    .bggray{
      background-color: #ececec;/* 更浅的灰色 */
    }

    .little{
      font-size: 14px;
    }
    .gray{
      color: gray;
    }
    .red{
      color: red;
    }
    .green{
      color: #42B983;
    }

    .orange{
      color: orange;
    }
    .brown{
      color: brown;
    }
    .bold{
      font-weight: bold;
      font-size: 18px;
    }
    .txt{
      font-size: 14px;
      color: gray;
    }
    .flexbox{
      width: 100%;
      height: 90px;
      background-color: lightgray;
      border-radius: 10px;
      display: flex;  /* 弹性盒子 横排放 */
      justify-content: center;  /* 主轴方向居中*/
      align-items: center;  /* 纵轴也居中*/
      margin-bottom: 9px;
    }
    .item{
      width: 120px;
      height: 80px;
      border:  1px solid red;
      margin:0 50px; /* 先上下  后左右*/ /* 使盒子左右分开*/

      display: flex;/* 将item里的3个元素也设置为 弹性盒子  */
      flex-direction: column; /* 弹性盒子里默认是主轴横向，这里要改成主轴纵向*/
      justify-content: center;
      align-items: center; /* 相对于主轴的纵轴也要 center*/
    }


    #Time{

    }



   .layui-input-inline{
     float:left;
     width:190px;
     height: 30px;
     margin-right:10px;
     }
     #containerDouble {
       display: flex;  /* 弹性盒子 横排放 */
       justify-content: center;  /* 主轴方向居中*/
       align-items: center;  /* 纵轴也居中*/

     	width:600px;
     	height:65px;
     	margin:0 auto;
      position:relative;
     }
    #container {
    	width:100%;
    	height:75px;
    	margin:0 auto;/* 上右下左 */
      position:relative;

      display: flex;  /* 弹性盒子 横排放 */
      /* flex-direction: column; */
      justify-content: center;  /* 主轴方向居中*/
      align-items: center;  /* 纵轴也居中*/

    }
    div.search {
    	padding:10px 0;
    }

    input,button {
    	border:none;
    	outline:none;
    }
    input {
    	width:100%;
    	height:42px;
    	padding-left:13px;
    }
    #containerDouble select {
    	width:200px;
      border:2px solid #c5464a;
      background:transparent;
    	height:43px;
    	padding-left:13px;
    }
    #container select {
    	width:100%;
      border:2px solid #c5464a;
      background:transparent;
    	height:43px;
    	padding-left:5px;
      margin-right: 100px;
    }
    #container el-form{

      /* height:43px;
      padding-left:13px; */
    }
    button {
    	height:42px;
    	width:42px;
    	cursor:pointer;
    	position:absolute;
    }

    .selectCountryAndTime button {

    	/* position:absolute; */
    }

    .timeRow{
      display: flex;  /* 弹性盒子 横排放 */
      justify-content: center;  /* 主轴方向居中*/
      align-items: center;  /* 纵轴也居中*/
    }


    /*搜索框6*/

    /* .bar6 input {
    	border:2px solid #c5464a;
    	border-radius:5px;
    	background:transparent;
    	top:0;
    	right:0;
    } */
    .bar6 select{
      border:2px solid #c5464a;
      border-radius:5px;
      background:transparent;
      top:0;
      right:0;
    }


    .bar6 button {
      /* content:"国家疫情" */
    	background:#c5464a;
    	border-radius:0 5px 5px 0;
    	width:105px;
      /* height: 100%; */
    	top:10px;

    }
    .bar6 button:before{
    	font-size:13px;
    	color:#F9F0DA;
    }
    .selectTime{


    }
    .selectTime el-form{

    }

    .selectCountryAndTime button {
      /* content:"国家疫情" */
    	background:#c5464a;
    	border-radius:0 5px 5px 0;
    	width:105px;
      height:42px;
      cursor:pointer;
      /* height: 100%; */
    	top:10px;

    }
    .selectCountryAndTime button:before{
    	font-size:13px;
    	color:#F9F0DA;
    }

    /*搜索框7*/
    /* .bar7 form {
    	height:42px;
    }
    .bar7 input {
    	width:250px;
    	border-radius:42px;
    	border:2px solid #324B4E;
    	background:#F9F0DA;
    	transition:.3s linear;
    	float:right;
    }
    .bar7 input:focus {
    	width:300px;
    }
    .bar7 button {
    	background:none;
    	top:-2px;
    	right:20px;
    }
    .bar7 button:before {
    	content:"Search";
    	font-family:FontAwesome;
    	color:#324b4e;
    } */
</style>

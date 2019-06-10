var uid=0;

/**
 * 动态获取 JSON 串
 *   活动详情 activityDetailUrl
 *   参与记录 activityRecord
 *     HTTP GET JSON
 */
const activityDetailUrl = 'https://randomuser.me/api/?results=10';

var app = new Vue({
    data(){
        return{
            joined: true,
            unjoined: false,
            buyAmount: ''
        }
    },
    methods:{
        goToBuy: function(a, b) {
            console.log(this.buyAmount);
            return this.buyAmount;
        },
        /**
          * 活动信息
          *   动态获取：JSON
          *   缺省：
          *     活动图片 activityImage
          *       在线：
          *         "https://i1.mifile.cn/f/i/2019/mi9/index/index2.jpg?v=1"
          *         "https://i1.mifile.cn/f/i/2019/mi9/index/index3.jpg?v=1"
          *       本地：
          *         "photo/xiaomi9.jpg"
          *     活动名称 activityTitle
          *       小米9免费送
          *     活动描述 activityDescription
          *       盘点智能手机历代经典机型，哪一代没有骁龙 800 系的强大引擎！骁龙855不仅在性能上全面飞跃，更有再次突破的 7nm - 领先芯片工艺加持。这一切已被我们首次应用于小米9，让你快人一步领略科技魅力。
          *     开奖时间 activityLotteryStrattime
          *       2019年6月15日 11:00:00
          *     抽奖码 lotteryCodes
          *       1111
          *       2222
          *     商品价格 buyAmount
          *       12.00
          */
        loadActivityDetail: async function(activityID, userID) {
            const image        = document.getElementById('activityImage');
            const title        = document.getElementById('activityTitle');
            const description  = document.getElementById('activityDescription');
            const time         = document.getElementById('activityLotteryStrattime');
            const lotteryCodes = document.getElementById('lotteryCodes');
            const amount       = document.getElementById('buyAmount');
            var that = this;
            fetch(activityDetailUrl)
                .then((resp) => resp.json())
                .then(function(data) {
                    let authors = data.results;
                    var sampText = '您的抽奖码：<br/>';
                    authors.map(function(author){
                        sampText = sampText.concat(author.name.first, "<br/>");
                    });
                    image.src = 'https://i1.mifile.cn/f/i/2019/mi9/index/index2.jpg?v=1';
                    title.innerHTML = '小米9免费送';
                    description.innerHTML = '盘点智能手机历代经典机型，哪一代没有骁龙 800 系的强大引擎！骁龙855不仅在性能上全面飞跃，更有再次突破的 7nm - 领先芯片工艺加持。这一切已被我们首次应用于小米9，让你快人一步领略科技魅力。';
                    time.innerHTML = '开奖时间：2019年6月6日 11:00:00';
                    that.buyAmount = '12.00';
                    amount.innerHTML = that.buyAmount;
                    lotteryCodes.innerHTML = sampText;
                    console.log(that.buyAmount);
                })
                .catch(function(error){
                    console.log(error);
                });
        }
    },
    mounted: function(){
//       var activityID = window.hello.getActivityID();
//       var userID = window.hello.getUserID();
//       this.loadActivityDetail(activityID, userID);
        this.loadActivityDetail(null, null);
        window.goToBuy = this.goToBuy;
        window.loadActivityDetail = this.loadActivityDetail;
    }
});

app.$mount('.main');

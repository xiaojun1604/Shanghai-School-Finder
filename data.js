// Minhang Second-Tier Schools and Housing Data
const SCHOOL_DATA = [
    {
        name: "闵行实验小学 (春城校区)",
        type: "小学",
        tier: "2",
        district: "春申",
        middleSchool: "莘松中学",
        contact: "021-33580172 转 2141",
        pros: "闵行最强公办小学之一，二梯队顶尖，对口初中极强。",
        cons: "学位紧张，入户年限要求高 (建议3年以上)。",
        housing: "500万可买 60-70平 2室 (如：上海春城、万科假日风景的小型户型)。",
        coord: [31.11, 121.39]
    },
    {
        name: "莘松小学",
        type: "小学",
        tier: "2",
        district: "莘庄",
        middleSchool: "莘松中学",
        contact: "021-54888118 转 803",
        pros: "老牌二梯队，学风扎实，直升莘松中学，稳定性高。",
        cons: "校园设施相对老旧。",
        housing: "500万可买 莘松一村/二村 70-80平 2-3室 (房龄较老但单价友好)。",
        coord: [31.11, 121.37]
    },
    {
        name: "莘城学校",
        type: "九年一贯制",
        tier: "2",
        district: "莘庄",
        middleSchool: "直升",
        contact: "021-64602078 / 8004",
        pros: "九年一贯制，省去小升初烦恼，科技/体育特色。",
        cons: "对口房产房龄普遍在2000年初。",
        housing: "500万可买 80平左右 2室 (如：莘城公寓、名都新城)。",
        coord: [31.10, 121.38]
    },
    {
        name: "莘光学校",
        type: "九年一贯制",
        tier: "2",
        district: "莘庄",
        middleSchool: "直升",
        contact: "021-64120799",
        pros: "老牌名校，初中部表现抢眼，是区域内家长首选之一。",
        cons: "招生压力大，入户政策可能紧缩。",
        housing: "500万可买 水清嘉苑等 60-70平 2室。",
        coord: [31.11, 121.38]
    },
    {
        name: "航华第一小学",
        type: "小学",
        tier: "2",
        district: "航华/紫藤",
        middleSchool: "航华中学",
        contact: "021-64209222 转 8018",
        pros: "离紫藤社区极近，方便就近转学，性价比高。",
        cons: "初中相对小学稍弱。",
        housing: "500万可买 80-90平 3室 (如：航华新村、丹桂花园)。",
        coord: [31.17, 121.36]
    },
    {
        name: "平阳小学",
        type: "小学",
        tier: "2",
        district: "古美",
        middleSchool: "实验西校",
        contact: "021-54157077",
        pros: "古美核心区，环境好，对口初中实验西校口碑极佳。",
        cons: "对口小区多为老公房，车位紧张。",
        housing: "500万可买 70平 2室 (如：平阳新村、古美西路沿线小区)。",
        coord: [31.14, 121.39]
    },
    {
        name: "晶城中学",
        type: "初中",
        tier: "2",
        district: "梅陇",
        middleSchool: "N/A",
        contact: "021-33586968",
        pros: "闵行公办初中新锐，上升势头极猛，中考平均分靠前。",
        cons: "对口生源日益增多，可能面临入户年限限制。",
        housing: "500万可买 晶城晶采坊 80平左右 2室。",
        coord: [31.14, 121.41]
    },
    {
        name: "上海实验学校西校",
        type: "初中",
        tier: "2",
        district: "古美",
        middleSchool: "N/A",
        contact: "021-34223395",
        pros: "名校背景，教学管理严格，是古美板块最热门的初中。",
        cons: "学区房价格波动较大。",
        housing: "500万可买 平南新村或万源城部分小户型 60-70平 2室。",
        coord: [31.14, 121.39]
    },
    {
        name: "七宝二中",
        type: "初中",
        tier: "2",
        district: "七宝",
        middleSchool: "N/A",
        contact: "021-64781491",
        pros: "闵行公办初中前列，师资雄厚，适合追求升学质量的家庭。",
        cons: "由于是纯初中，转学名额通常极少。",
        housing: "500万可买 宝仪花苑等 60平左右 2室。",
        coord: [31.15, 121.35]
    },
    {
        name: "颛桥中学",
        type: "初中",
        tier: "2",
        district: "颛桥",
        middleSchool: "N/A",
        contact: "021-64890301 转 821",
        pros: "老牌公办，生源平稳，无五年一户严控，随买随落户，统筹风险极低。",
        cons: "相比名校光环略弱，属于稳妥保底之选。",
        housing: "500万可买 颛桥新村、好世凤凰城 等 70-90平 2-3室。",
        coord: [31.06, 121.40]
    },
    {
        name: "七宝附属鑫都实验中学",
        type: "九年一贯制 / 初中",
        tier: "1/2梯队",
        district: "鑫都",
        middleSchool: "N/A",
        contact: "需咨询区教育局 021-34972602",
        pros: "七宝系名校光环，上升势头极猛的公办强校，关注度极高。",
        cons: "🔴极度爆满！严格实行‘五年一户’，人户一致仅1年面临极大统筹风险！",
        housing: "500万可买 鑫都城等 80-90平 2室 (前提必须核实近5年无学位占用)。",
        coord: [31.08, 121.36]
    }
];

const POLICY_RULES = {
    district: "闵行",
    bureauContact: "021-64923651 (小学) / 021-34972602 (初中)",
    collectiveHukou: {
        status: "参照居住地登记入学 (统筹)",
        action: "购买房产并将户口迁入后，即可实现'人户一致'，优先级最高。",
        warning: "紫藤社区集体户若不买房，大概率被统筹到生源不满的普通学校。"
    },
    fiveYearsOneHouse: "闵行部分热门学校执行'五年一户'，购房前必须确认。",
    transferWindow: "寒假/暑假开学前一周办理。"
};

export { SCHOOL_DATA, POLICY_RULES };

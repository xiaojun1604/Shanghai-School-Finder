// Minhang Second-Tier Schools and Housing Data
const SCHOOL_DATA = [
    {
        name: "闵行实验小学 (春城校区)",
        type: "小学",
        tier: "2",
        district: "春申",
        middleSchool: "莘松中学",
        pros: "闵行最强公办小学之一，二梯队顶尖，对口初中极强。",
        cons: "学位紧张，入户年限要求高 (建议3年以上)。",
        housing: "500万可买 60-70平 2室 (如：上海春城、万科假日风景的小型户型)。",
        coord: [31.11, 121.39]
    },
    {
        name: "莘城学校",
        type: "九年一贯制",
        tier: "2",
        district: "莘庄",
        middleSchool: "直升",
        pros: "九年一贯制，省去小升初烦恼，科技/体育特色。",
        cons: "对口房产房龄普遍在2000年初。",
        housing: "500万可买 80平左右 2室 (如：莘城公寓、名都新城)。",
        coord: [31.10, 121.38]
    },
    {
        name: "航华第一小学",
        type: "小学",
        tier: "2",
        district: "航华/紫藤",
        middleSchool: "航华中学",
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
        pros: "古美核心区，环境好，对口初中实验西校口碑极佳。",
        cons: "对口小区多为老公房，车位紧张。",
        housing: "500万可买 70平 2室 (如：平阳新村、古美西路沿线小区)。",
        coord: [31.14, 121.39]
    },
    {
        name: "田园外语实验小学",
        type: "小学",
        tier: "2",
        district: "颛桥",
        middleSchool: "田园外国语中学",
        pros: "外语特色，上升势头快，性价比极高。",
        cons: "地理位置相对靠南。",
        housing: "500万可买 90平左右 3室 (如：贵都路周边次新小区)。",
        coord: [31.08, 121.40]
    }
];

const POLICY_RULES = {
    district: "闵行",
    collectiveHukou: {
        status: "参照居住地登记入学 (统筹)",
        action: "购买房产并将户口迁入后，即可实现'人户一致'，优先级最高。",
        warning: "紫藤社区集体户若不买房，大概率被统筹到生源不满的普通学校。"
    },
    fiveYearsOneHouse: "闵行部分热门学校执行'五年一户'，购房前必须确认。",
    transferWindow: "寒假/暑假开学前一周办理。"
};

export { SCHOOL_DATA, POLICY_RULES };

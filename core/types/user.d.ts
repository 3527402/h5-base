/** 用户 */
export interface User {
  id: number;
  mobilePhone?: string;
  picture?: string;
  shortName?: string;
  showName?: string;
  status?: number;
  /** 以id为主 */
  userId?: number;
  userName?: string;

  required?: boolean;
  checked?: boolean;
}

export interface EnterpriseConfig {
  id: number;
  groupId: number; // 企业id
  groupName: string;
  signScope: number; // 签到范围（100m 300m 500m）
  videoResolution: string; // 视频分辨率
  bitRate: number; // 比特率
  frameRate: number; // 帧率
  keyframeInterval: number; // 关键帧间隔
  siteTour: number; // 现场巡店是否上传本地图片  0:不允许 1：允许
  remoteTour: number; // 远程巡店   0:不允许 1：允许
  roundInterval: number; // 轮训间隔
  subtitlePosition: number; //字幕位置(左上 左下 右上  右下)
  videoRes: number; //视频分辨率 (高清 超清)
  passwordLevel: number; //密码强度 （低 中 高）
  verifyWay: number; //验证方式 （单次  双重）
  posWay: number; //pos对接方式
  pages: number; //广告页面是否加入广告链接
  pageUrl: string; //广告页面链接
  validityPeriod: number; //现场巡店有效期
  photoSign: number; //是否开启拍照签到 0：不开启  1：开启
  isConfigScore: number; //是否开启自定义检查项分数(开启不合格检查项修改分数)
  isConfigScoreRight: number; //是否开启自定义检查项分数(开启 合格检查项修改分数)
  isConfigMoney: number; //是否开启自定义检查项奖惩金额(开启不合格自定义奖惩金额) 0：不开启  1：开启
  isConfigMoneyRight: number; //是否开启自定义检查项奖惩金额(开启 合格自定义奖惩金额)
  isOnlyLivePhoto: number; //是否图片仅支持实时、拍摄水印拍照上传
  autoAlarmConfig: number; //是否自动配置设备告警

  isFacepicture: number; //是否允许人脸签到

  isEffectiveRange: number; //是否上传范围标识  0:默认 1:上传
  isStorePhotoSign: number; //是否允许执行任务时候拍照 0:不允许 1:允许
  isStoreForceCommit: number; //超出执行范围是否允许强制提交 0:不允许 1:允许
  isStoreRange: number; //允许打卡的范围
  isStoreOrganizeStatisticLevel: number; //计划巡店组织架构统计层级
  isQualified: number; //远程巡店默认合格,默认为0 关闭状态，1代表开启
  isUploadPic: number; //整改是否必须上传图片，默认0代表不上传，1代表上传
  isRuleBased: number; //点检项合格时是否可以修改分值，0关闭，1开启

  isOpenPicMark: number; // 图片显示水印内容

  isOpenTasksubmitCc: number; //巡店提交开启抄送人，默认0关闭,1开启 现场巡店
  /**
   * 检查项模板权限 0不开启 1开启, 开启后只能选择模板，不能选择分类
   */
  isTemplatePrivilege: number;
  /**
   * 是否有总结栏 1有，2没 巡店总结
   */
  isSummary: number;

  /**
   * 问题不合格时，描述是否必填 0 不必填 1必填
   * 问题描述 是否必填：不合格时必填
   */
  isDescRequired: number;
  /**
   * 问题描述 是否必填：合格时必填 默认0
   */
  isDescRequiredQualified: number;

  /**
   * 是否开启 模板通知 0-否 1-是
   */
  isTemplateNotice: number;

  /**
   * 企业巡店时是否需要提交签名
   * 0-否 1-是
   */
  isSign: number;
  /**
   * 企业巡店报告时是否需要审批
   * 0-否 1-是
   */
  isApproval: number;
  /**
   * 是否自动审核 0 否 1是   远程巡店是否自动审核   // 0 自动失效 1 自动审核
   */
  isApprovalAuto: number;
  /**
   * 自动审核的天数  远程巡店自动审核时间
   */
  approvalDays: number;
  /**
   * 审核方式 0-上级审核 1-自己修改
   */
  approvalType: number;
  /**
   * 企业巡店报告角色 时是否需要审批 不再使用
   * 0-否 1-是
   */
  isApprovalRole: number;

  /**
   * 按照角色审核    0-上级审核 1-自己修改 2-按照角色
   */
  approvalTypeRole: number;
  /**
   * 按照角色审核 是否自动审核 0 否 1是   门店自检是否自动审核
   */
  isApprovalAutoRole: number;
  //门店自检是否自动审核
  approvalDaysRole: number;
  /**
   *  按照角色审核  角色 id
   */
  approvalRoleId: number;

  /**
   * 导出审核报告PDF时，是否包含合格检查项
   * 1-包含 0-不包含
   */
  isContainQualifiedItem: number;
  /**
   * 是否开启小视频上传
   * 0否 1是
   */
  isVideoAllowed: number;
  /**
   * 是否开启小视频上传
   * 0否 1是
   */
  isVideoViewLimited: number;
  /**
   * 是否开启 维度配置
   */
  isCollection: number;
  /**
   * 是否支持巡店详情表图片直接展示(1直接展示，0点击链接展示)
   */
  isShowImageExcel: number;
  /**
   * 巡店记录失效时间 （1-3天，默认1天）
   */
  invalidTime: number;

  /**
   * 巡店提交检查项时 是否必须添加图文
   */
  isPictureNecessary: number;

  /**
   * 是否开启 根据门店营业时间自动抓拍
   */
  isAutoSnapshot: number;
  /**
   * 是否开启门店场景配置
   */
  isOpenDepScene: number;

  /**
   * 配置跳转url
   */
  loginUrl: string;

  needSms: number; //登录是否需要短信验证（0未配置1已配置）

  warningYun: number;

  /**
   * 是否开启 设备映射 0否 1是
   */
  isDeviceMapping: number;

  /**
   * 点检任务，超过最后一条执行时间几分钟之后，提醒点检人点检,单位分钟
   */
  remindCheckTime: number;

  /**
   * 点检任务，超过最后一条执行时间几分钟之后，不允许补拍,单位分钟，若为空，则始终允许补拍
   */
  reshootCheckTime: number;

  /**
   * 设置水印
   * @return
   */
  needWaterMark: string;
  /**
   * 巡店配置下‘当含有细则的点检项不合格，必须对细则进行评定’开关，默认0关闭,1开启'; -- 已废弃
   */
  // checkDetail: number;
  /**
   * 待办单下‘当点检项含有细则，必须选择到细则’开关，默认0关闭,1开启';
   */
  problemDetail: number;

  //签到是否必须有图片
  signPicture: boolean;
  //临时属性,保险公司电话
  insurancePhone: string;
  isSelfie: number;

  //过期执行
  expireExecute: string;
  //全局评论
  globalComment: string;
  //陪同人员开关
  entourage: number;
  //门店签到
  depSignIn: number;
  //门店定位
  depLocation: number;
  //门店允许本地上传图片
  depLocalUpload: number;

  //定时更改密码
  changePassword: number;
  //定时更改密码的 日期
  changePasswordDate: string;
  //定时更改 密码的 天数
  changePasswordDay: number;
  // 定时更改 密码 或者 日期 是否 修改
  changePasswordBoolean: boolean;
  //允许批量复检
  isProblemBatchCheck: number;
  //巡店报告详情展示标识：0：打印版，1：基础班
  reportFlag: number;
  // 允许设置门店执行次数
  allowTimes: number;
  //门店报备配置（0 个人 1 角色）
  storeConfig: number;
  //门店报备配置 个人或者角色 id
  storeConfigUserOrRoleId: number;
  //门店列表显示门店上级领导(0 否 1 是)
  showLeader: number;
  //问题过期允许整改，默认允许，即开关开启(默认1,0)
  isAllowReform: number;

  //允许超出门店范围提交(默认允许1 )  现场巡店
  beyondStore: number;
  //允许超出门店范围提交(默认允许1 )  门店自检
  storeCheckBeyondStore: number;

  //巡店总时长未超过n 分钟 ，不允许提交  修改名称  is_submit_overtime
  isSubmitOverTime: number;

  //巡店总时长未超过n 分钟 ，不允许提交   修改名称  is_submit_overtime_time
  isSubmitOverTimeTime: number;

  //开启拍照签退
  photosSignOut: number;

  //巡店图片/视频查看权限(0 所有人  1 角色 2 人)
  videoViewingPermissionType: number;

  //允许点检项选择"不适用"选项(0 否 1 允许) 默认允许1
  checkAllowedNone: number;

  //企业账号过期提醒人 默认打开1
  expirationReminder: number;

  //是否开启巡店报表展示未检查人 默认不开
  showUncheckedPerson: number;

  //巡店提交时可选择现场责任人
  siteResponsiblePerson: number;

  //设备 告警规则 (0 掉线即告警 1 设备持续多少分钟告警)
  equipmentAlarmRules: number;

  //设备 告警规则 设备持续多少分钟告警
  equipmentAlarmRulesTime: number;
  //申诉审批流 模板id
  appealModelId: number;
  //申诉审批流 默认0 关闭
  appeal: number;

  //相互巡店 默认关闭0 打开1
  mutualTour: number;
  //相互巡店 审核规则类型 0 指定人员 1指定角色
  mutualTourRuleType: number;
  //相互巡店 审核规则对应的人员 或者角色 id
  mutualTourRuleId: number;
  //相互巡店 审核时间 默认24小时
  mutualTourTime: number;
  //相互巡店 次数 默认1此
  mutualTourNumber: number;
  //下载的图片按门店生成文件夹，默认关闭（0），打开开关后生效；
  imagesFoldersStore: number;
  //巡店总结  默认是关掉 默认0 关闭  现场巡店 = isSummary
  tourSummary: number;

  //巡店总结   默认是关掉 默认0 关闭 远程巡店
  remoteIsSummary: number;
  //巡店总结   默认是关掉 默认0 关闭 门店自检
  storeIsSummary: number;

  //巡店记录&巡店报告抄送 巡店提交开启抄送人，默认0关闭,1开启 远程巡店
  remoteIsOpenTasksubmitCc: number;
  //巡店记录&巡店报告抄送 巡店提交开启抄送人，默认0关闭,1开启 门店自检
  storeIsOpenTasksubmitCc: number;
  //  默认0关闭,1开启 远程巡店 巡店总时长超过n 不允许提交
  remoteIsSubmitOverTime: number;
  //  默认0关闭,1开启 门店自检 巡店总时长超过n 不允许提交
  storeIsSubmitOverTime: number;

  // 门店分档 默认 100 开始分档分数
  storeScoreFirst: number;
  // 门店分档 默认 80 分档分数第二节点
  storeScoreSecond: number;
  //门店报备（0 角色 1 个人）重复字段 同 storeConfig
  storeReporte: number;
  //门店报备 用户或者角色 id  重复字段 同 storeConfigUserOrRoleId
  storeReporteUserRoleId: number;
  //订阅点检项分类或点检项常用模板提示  删除字段
  commonTemplateTips: number;

  //巡检计划
  //允许门店多选 默认0 关闭 1 打开
  depChose: number;
  //允许添加抄送人 默认0 关闭 1 打开
  addCopy: number;
  //问题标签 默认1 打开 0关闭
  questionTag: number;
  //问题描述 默认1 打开 0关闭
  questionDes: number;
  // 门店上级（店长上级）作为复检人默认0 关闭 1 打开
  shopownerReinspector: number;

  //批量整改  默认0 关闭 1 打开
  rectifyReform: number;
  //待办单状态为待整改时“不予整改”按钮隐藏
  agentListNotRectified: number;

  freezeSwitch: number;
  //冻结周期
  freezeWeek: number;
  //冻结 角色列表
  freezeRoles: string;
  //巡店结果评价 默认关闭 0 开启 1
  shopEvaluation: number;
  //视频巡店6画面 默认关闭 0 开启 1
  shopSixScreen: number;

  //巡店 二次申述
  secondClaim: number;

  //巡店 复检审批流程
  isReviewApprovalProcess: number;

  popupConfig: number;

  //门店预计巡检日期必填
  isStoreInspectionDate: number;

  //巡店记录失效提醒时间
  storeCheckRemindHour: number;

  //允许审批通过后编辑 默认1
  allowEditingApproval: number;

  //1：现场巡店签到同步到打卡
  signSynchronizationClock: number;

  // 2：门店自建签到同步到打卡
  storeSignSynchronizationClock: number;

  //“营销配置”-“信发素材权限管控”
  permissionControl: number;

  messageCallbackUrl: string;

  //奖惩金额允许任意输入，不受点检项配置限制
  enterAnyAmount: number;
  //默认打开视频巡店3.0
  videoStoreThree: number;
  //拍摄显示水印内容”，默认为“开
  captureWatermark: number;
  //徽章配置
  emblemConfiguration: number;

  //允许执行人门店转发
  isAllowStoreForwarded: number;
  //创建待办单快拍描述 快拍描述
  isSnapshotDes: number;
  //创建代办单描述  手动描述
  isManualDes: number;
  //自动审批 默认 1
  isAutoPass: number;
  //导出详情表为图片或链接
  isExportPicture: number;
  //巡检计划审批人配置 默认关闭 巡检计划 与 审批人 一致，打开 不一致。
  isPlanApproverConfiguration: number;

  //显示授权进入人员
  isDisplayAuthorizedEntryPersonnel: number;
  //批量下载的图片按门店生成文件夹 计划巡店 使用 默认 开

  isStorePlanImagesFoldersStore: number;

  //账号到期提醒 增加联系电话字段
  expirationReminderPhone: string;
  //默认 时区 UTC+08:00，可切换其它时区
  configureTimeZone: number;

  //.每周开始日：默认星期一，可切换为星期日  星期一 0 星期日 1
  startDayTheWeek: number;
  // 客流 特殊着装修正 （默认关闭）
  specialDressCorrection: number;
  //电视墙支持配置个性化底图 默认格式 {type:0,url:""}
  //电视墙支持配置个性化底图 0 设备离线前最后帧 1系统图片 2自定义图片
  TvConfigDraw: string;
  //{"homeTag": "首页","depName": "门店","manage":"管理","task":"待办","myTask":"我的"}
  appBottomTag: string;
  //用户无权限不显示模块
  isNotDisplayModule: number;
  // 现场整改 默认关闭
  isOnSiteRectification: number;
  // 巡店时允许点检项 无需整改 现场巡店
  isItemsNotRectified: number;
  // 巡店时允许点检项 无需整改 远程巡店
  isRemoteItemsNotRectified: number;
  // 巡店时允许自定义整改人 现场巡店
  isConfigureRectifier: number;
  // 巡店时允许自定义整改人 远程巡店
  isRemoteConfigureRectifier: number;
  // 巡店时允许自定义整改人 门店自检
  isStoreConfigureRectifier: number;
  //下载录像格式mp4
  isDownloadMp4: number;
  //待办单延期申请 默认 关
  isToDoDelay: number;
  //允许巡店人分享亮点/问题 默认 开
  isShareStoreInspectors: number;
  //  图片显示水印内容 日期和时间
  isOpenPicMarkDay: number;
  //  图片显示水印内容 门店名称
  isOpenPicMarkDepartment: number;

  //  图片显示水印内容 用户显示名称
  isOpenPicMarkShowName: number;

  //  图片显示水印内容 此照片仅供企业自查自纠使用，他用无效
  isOpenPicMarkInvalid: number;
  //开启现场巡店行程轨迹及时间、费用等统计
  isShopStatistics: number;

  isFixPosition: number; //现场巡店是否开启定位

  allowModifyEndTime: number; // 是否允许修改问题有效期

  useNewReview: number; // 是否使用新审核页面

  shopTourVideoTime: number; // 巡店视频拍摄最大时长10分钟 - 开关
}

export interface UserInfo {
  mapConfig: number;
  apnsProduction: boolean;
  isAdmin: boolean;
  isDelay: boolean;
  isStorer: boolean;
  isSuper: boolean;
  isdelay: boolean;
  needCrmRelation: boolean;
  validateMessage?: string;
  version: string;
  data: UserVo;
  enterprise: EnterpriseVo;
}

export interface UserVo {
  id?: number;

  userName?: string;
  /** 姓名 */
  showName?: string;

  pyName?: string;

  pyFirst?: string;

  shortName?: string;

  email?: string;

  mobilePhone?: string;

  address?: string;

  tel?: string;

  tokenExpiredDate?: string;

  result?: string;

  message?: string;

  hasThumb?: number;

  thumbUrl?: string;

  staffImageUrl?: string;

  userType?: number;

  isActivated?: number;

  isSetProfile?: number;

  description?: string;

  follows?: number;

  fans?: number;

  shares?: number;

  checkType?: number; //0为点检员  1门店经理

  shops?: number;

  favorShops?: number;

  favorDevices?: number;

  nationalCode?: string;

  groupId?: number; // 企业ID
  groupName?: string; //企业名称
  isPhoneActivate?: number;
  isMailActivate?: number;
  validateDate?: string;
  isAgency?: number;

  isFromRoot?: number; //1.来自根节点 0.非根节点的数据

  isSignPicture?: number;

  isSelfie?: number;
  /**
   * 密码强度
   */
  pwdPower?: number;
  /**
   * 密码强度
   */
  weakPasswd?: boolean;

  userId?: string;

  /**
   * 用户详细相关属性
   */

  /**
   * 店长所在门店经纬度
   */
  longitude?: number;
  latitude?: number;
  // 用户总积分
  score?: number;

  // 用户是否冻结
  isFrozen?: number;
  /**
   * 用户职级ID
   */
  gradeId?: number;

  tlsName?: string;

  employeeNumber?: string;

  /**
   * 组织架构名
   */
  organizeName?: string;

  // 门店权限是标签分配还是组织架构分配, 0:组织架构分配，1:标签分配
  isTagPrivilege?: number;

  //巡店排序（0 拼音 1 组织架构 2 时间）
  orderType?: number;

  //巡店门店列表是否是根据组织架构排序（0 否 1 是）
  isOrderOrganize?: number;

  token?: string;

  isEdit?: boolean;
}

export interface EnterpriseVo {
  platformIds?: string; //平台ids
  privilegeIds?: string; //权限ids

  lineNames?: string;
  linePhones?: string;

  industryName?: string; //所属二级行业名称

  industryPid?: number; //所属父行业id

  industryPname?: string; //所属父行业名称

  certificates?: Array<{
    id: number;
    picUrl: string;
  }>; //资格图片

  filePaths?: Array<string>; //资格图片
  serviceLines?: Array<any>;

  logoShowPath?: string; //前端展示logo的完整path

  uploadPic?: string;

  num?: number; //企业下拥有的门店数

  customerId?: number;
  /**
   * 企业设置的 首页跳转路径
   */
  loginUrl?: string;

  /**
   * 企业配置登录手机验证码验证（0未配置1以配置）
   */
  needSms?: number;
  validateDateStr?: string; //有效时间
  formalNames?: string; //CRM名称列表
  formalIds?: string; //CRMid列表

  syncShopValidateDate?: boolean;

  national?: any;

  maxchns?: number; //巡店最大通道并发量
  flow?: number; //巡店最大月流量

  tvFlow?: number; //电视墙最大通道并发量，电视墙最大月流量

  tvMaxchns?: number;
  wanjiEnable?: number;
  nationalCode?: number;
  isManager?: number;
  isForShow?: number;
  hasLogo?: number;
  departments?: Array<any>;
}

/**
 * 权限表
 */
export interface Privilege {
  /**
   * ID
   */
  id?: number;

  /**
   * 上级ID
   */
  parentId?: number;

  /**
   * 权限名
   */
  privilegeName?: string;

  /**
   * 权限描述
   */
  privilegeDesc?: string;

  /**
   * 是否只为app模块 1是
   */
  isApp?: number;

  /**
   * 是否只为web模块 1是
   */
  isWeb?: number;

  /**
   * 权限类型0子模块1页面权限2操作权限
   */
  type?: number;

  /**
   * 产品id
   */
  productId?: number;

  /**
   * 第三方应用名称
   */
  name?: string;

  /**
   * 应用地址
   */
  url?: string;

  /**
   * 图标
   */
  picUrl?: string;

  /**
   * 缩略图地址
   */
  thumbUrl?: string;

  /**
   * 是否是隐藏页面  1：是   0：不是
   */
  isHidden?: number;

  /**
   * 创建时间
   */
  createTime?: string;

  /**
   * 1模板0不是
   */
  isModule?: number;

  /**
   * 1广告0不是
   */
  isAdvertisement: number;

  /**
   * 子菜单
   */
  children: Array<Privilege>;

  /**
   * 是否是APP模块  1：是   0：不是
   */
  isAppModule?: number;
}

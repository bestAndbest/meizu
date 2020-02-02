/*
Navicat MySQL Data Transfer

Source Server         : 本地SQL
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : meizu

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-10-03 17:35:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `commentlist`
-- ----------------------------
DROP TABLE IF EXISTS `commentlist`;
CREATE TABLE `commentlist` (
  `id` int(60) NOT NULL AUTO_INCREMENT,
  `infopic` varchar(255) DEFAULT NULL,
  `tip` varchar(60) DEFAULT NULL,
  `tittle` varchar(255) DEFAULT NULL,
  `fangwenliang` varchar(60) DEFAULT NULL,
  `comment` varchar(60) DEFAULT NULL,
  `author` varchar(80) DEFAULT NULL,
  `fabutime` varchar(80) DEFAULT NULL,
  `tittleinfo` varchar(255) DEFAULT NULL,
  `shareurl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of commentlist
-- ----------------------------
INSERT INTO `commentlist` VALUES ('1', 'https://bbsimage.res.meizu.com/recommend/2019/09/12/235732b7u0jur0ae2j7a0j.jpg', '综合讨论', '中秋“拍月”赢好礼', '35346', '1924', 'MEIZU商城', '9月13日', '你看！这个月亮它又大又圆！  中秋赏月，别忘了拿起魅族手机拍下你的赏月照片哦~  活动期间，用魅族手', 'http://service.weibo.com/share/share.php?appkey=439445218&title=%E4%B8%AD%E7%A7%8B%E2%80%9C%E6%8B%8D%E6%9C%88%E2%80%9D%E8%B5%A2%E5%A5%BD%E7%A4%BC&url=https://bbs.meizu.cn/thread-11128854-1-1.html&pic=https://bbsimage.res.meizu.com/recommend/2019/09/12/235');
INSERT INTO `commentlist` VALUES ('2', 'https://bbsimage.res.meizu.com/recommend/2019/09/10/145759hlpqzb2pdbp2f121.jpg', '综合讨论', '魅族 16s Pro 热辣快闪活动回顾', '24764', '697', '魅族福利社', '9月10日', '定制热辣套餐  挑战疾速性能 后置全能三摄  怎么拍都好看 进入暮光森林  更多精彩体验 让热爱 更', 'http://service.weibo.com/share/share.php?appkey=439445218&title=%E9%AD%85%E6%97%8F%2016s%20Pro%20%E7%83%AD%E8%BE%A3%E5%BF%AB%E9%97%AA%E6%B4%BB%E5%8A%A8%E5%9B%9E%E9%A1%BE&url=https://bbs.meizu.cn/thread-11137229-1-1.html&pic=https://bbsimage.res.meizu.com/');
INSERT INTO `commentlist` VALUES ('3', 'https://bbsimage.res.meizu.com/recommend/2019/09/10/135007ffla7b41yfb8f0o0.jpg', '综合讨论', '「教师节」感恩各位老师教我做手机', '19285', '541', 'SJQ10', '9月10日', '教师节快乐', 'http://service.weibo.com/share/share.php?appkey=439445218&title=%E3%80%8C%E6%95%99%E5%B8%88%E8%8A%82%E3%80%8D%E6%84%9F%E6%81%A9%E5%90%84%E4%BD%8D%E8%80%81%E5%B8%88%E6%95%99%E6%88%91%E5%81%9A%E6%89%8B%E6%9C%BA&url=https://bbs.meizu.cn/thread-11137183-1-1.h');
INSERT INTO `commentlist` VALUES ('4', 'https://bbsimage.res.meizu.com/recommend/2019/09/09/142805zy1k5m4xizm5rn5r.jpg', '摄影天地', '「魅友评测」这是我中意的相机—魅族16s Pro', '23342', '487', '大猪头12345', '9月9日', '智能手机发展至今，单一的摄像头早已不能满足我们的需求，从单摄到双摄，再到三摄甚至四摄，看起来今后手机', 'http://service.weibo.com/share/share.php?appkey=439445218&title=%E3%80%8C%E9%AD%85%E5%8F%8B%E8%AF%84%E6%B5%8B%E3%80%8D%E8%BF%99%E6%98%AF%E6%88%91%E4%B8%AD%E6%84%8F%E7%9A%84%E7%9B%B8%E6%9C%BA%E2%80%94%E9%AD%85%E6%97%8F16s%20Pro&url=https://bbs.meizu.cn/thr');
INSERT INTO `commentlist` VALUES ('5', 'https://bbsimage.res.meizu.com/recommend/2019/09/09/100413n59eetxx6ee9trr9.jpg', '摄影天地', '「魅友评测」魅族16sPro 在N面阳朔里遇见诗和远方', '12810', '300', '我是魅之神', '9月9日', '文/我是魅之神拍摄器材：魅族16s Pro拍摄方式：手持或三脚架后期处理：部分图片进行过裁剪、滤镜、', 'http://service.weibo.com/share/share.php?appkey=439445218&title=%E3%80%8C%E9%AD%85%E5%8F%8B%E8%AF%84%E6%B5%8B%E3%80%8D%E9%AD%85%E6%97%8F16sPro%20%E5%9C%A8N%E9%9D%A2%E9%98%B3%E6%9C%94%E9%87%8C%E9%81%87%E8%A7%81%E8%AF%97%E5%92%8C%E8%BF%9C%E6%96%B9&url=https');
INSERT INTO `commentlist` VALUES ('6', 'https://bbsimage.res.meizu.com/recommend/2019/09/06/105602pkw5v5xvaee5e1em.jpg', '综合讨论', '「魅友神操作」4800W，轻松打造专属泡泡星球壁纸', '29367', '646', '深圳大表哥', '9月5日', '苹果的iPhone X发布时，自带了几张全新动态壁纸，看起来十分绚丽。 然而安卓的用户只有艳羡的份儿', 'http://service.weibo.com/share/share.php?appkey=439445218&title=%E3%80%8C%E9%AD%85%E5%8F%8B%E7%A5%9E%E6%93%8D%E4%BD%9C%E3%80%8D4800W%EF%BC%8C%E8%BD%BB%E6%9D%BE%E6%89%93%E9%80%A0%E4%B8%93%E5%B1%9E%E6%B3%A1%E6%B3%A1%E6%98%9F%E7%90%83%E5%A3%81%E7%BA%B8&url=h');
INSERT INTO `commentlist` VALUES ('7', 'https://bbsimage.res.meizu.com/recommend/2019/09/05/101152ddadwuwh55up6vz6.jpg', '综合讨论', '「魅友招募」魅族 16s Pro 热辣快闪活动[珠海]', '16492', '377', '魅族福利社', '9月5日', '让热爱，更澎湃。9 月 7 日，魅族邀你玩新机，吃火锅。魅族16s Pro 热辣火锅 Party，邀', 'http://service.weibo.com/share/share.php?appkey=439445218&title=%E3%80%8C%E9%AD%85%E5%8F%8B%E6%8B%9B%E5%8B%9F%E3%80%8D%E9%AD%85%E6%97%8F%2016s%20Pro%20%E7%83%AD%E8%BE%A3%E5%BF%AB%E9%97%AA%E6%B4%BB%E5%8A%A8[%E7%8F%A0%E6%B5%B7]&url=https://bbs.meizu.cn/thre');
INSERT INTO `commentlist` VALUES ('8', 'https://bbsimage.res.meizu.com/recommend/2019/09/05/100831xsk7ujixxi353fpk.jpg', '摄影天地', '「魅友评测」16S Pro的生活狂想曲', '15767', '217', 'grayfox77', '9月4日', '只有千篇一律的生活？ 不，我要有趣的灵魂~~', 'http://service.weibo.com/share/share.php?appkey=439445218&title=%E3%80%8C%E9%AD%85%E5%8F%8B%E8%AF%84%E6%B5%8B%E3%80%8D16S%20Pro%E7%9A%84%E7%94%9F%E6%B4%BB%E7%8B%82%E6%83%B3%E6%9B%B2&url=https://bbs.meizu.cn/thread-11124973-1-1.html&pic=https://bbsimage.re');
INSERT INTO `commentlist` VALUES ('9', 'https://bbsimage.res.meizu.com/recommend/2019/09/04/170007n3r6qjpipjpvp5qi.jpg', '综合讨论', '「魅友评测」带着16sPRO一起去记录生活·澳门行', '13819', '280', '九尾波斯猫v', '9月3日', '16sPRO已经发布有几天了，铺天盖地的参数、性能、颜值……算了，那些都是技术流和大神们的领域作为一', 'http://service.weibo.com/share/share.php?appkey=439445218&title=%E3%80%8C%E9%AD%85%E5%8F%8B%E8%AF%84%E6%B5%8B%E3%80%8D%E5%B8%A6%E7%9D%8016sPRO%E4%B8%80%E8%B5%B7%E5%8E%BB%E8%AE%B0%E5%BD%95%E7%94%9F%E6%B4%BB%C2%B7%E6%BE%B3%E9%97%A8%E8%A1%8C&url=https://bbs.');
INSERT INTO `commentlist` VALUES ('10', 'https://bbsimage.res.meizu.com/recommend/2019/09/03/170921yeozva4t47bdo43r.jpg', '综合讨论', '「活动」晒单赢好礼', '12297', '688', 'SJQ10', '9月3日', '魅族 16s Pro 震撼来袭，以其极高颜值与性价比，深得魅友欢迎，时值魅友节强势来临之际，魅族社区', 'http://service.weibo.com/share/share.php?appkey=439445218&title=%E3%80%8C%E6%B4%BB%E5%8A%A8%E3%80%8D%E6%99%92%E5%8D%95%E8%B5%A2%E5%A5%BD%E7%A4%BC&url=https://bbs.meizu.cn/thread-11120829-1-1.html&pic=https://bbsimage.res.meizu.com/recommend/2019/09/03/170');
INSERT INTO `commentlist` VALUES ('11', 'https://bbsimage.res.meizu.com/recommend/2019/09/02/104048ebdjovvm3v9mz0qv.jpg', '综合讨论', '「魅友评测」魅族16s Pro黑之谧镜图赏', '27647', '472', '醉刘的摄影狮', '8月29日', '魅族16s Pro黑之谧镜 不负众望，真香拍摄', 'http://service.weibo.com/share/share.php?appkey=439445218&title=%E3%80%8C%E9%AD%85%E5%8F%8B%E8%AF%84%E6%B5%8B%E3%80%8D%E9%AD%85%E6%97%8F16s%20Pro%E9%BB%91%E4%B9%8B%E8%B0%A7%E9%95%9C%E5%9B%BE%E8%B5%8F&url=https://bbs.meizu.cn/thread-11100368-1-1.html&pic=h');
INSERT INTO `commentlist` VALUES ('12', 'https://bbsimage.res.meizu.com/recommend/2019/09/02/110319i6s00hs072hhp31w.jpg', '综合讨论', '「魅友评测」让梦想照进现实', '22066', '398', '大大大大大森', '8月29日', '魅族16s Pro是魅友今年呼声最高的旗舰机型，也是魅友对于魅族今年最大的期盼。5G时代即将来临，魅', 'http://service.weibo.com/share/share.php?appkey=439445218&title=%E3%80%8C%E9%AD%85%E5%8F%8B%E8%AF%84%E6%B5%8B%E3%80%8D%E8%AE%A9%E6%A2%A6%E6%83%B3%E7%85%A7%E8%BF%9B%E7%8E%B0%E5%AE%9E&url=https://bbs.meizu.cn/thread-11099915-1-1.html&pic=https://bbsimage.re');
INSERT INTO `commentlist` VALUES ('13', 'https://bbsimage.res.meizu.com/recommend/2019/09/02/105557ve2ay6yn1173i57h.jpg', '综合讨论', '「魅友评测」不负颜值，不负期待', '15135', '164', '歩惊云', '8月29日', '旗舰手机3要素：配置、设计、系统如何更进一步今天，我们就先来看看3要素之一的“设计”。喜大普奔，魅族', 'http://service.weibo.com/share/share.php?appkey=439445218&title=%E3%80%8C%E9%AD%85%E5%8F%8B%E8%AF%84%E6%B5%8B%E3%80%8D%E4%B8%8D%E8%B4%9F%E9%A2%9C%E5%80%BC%EF%BC%8C%E4%B8%8D%E8%B4%9F%E6%9C%9F%E5%BE%85&url=https://bbs.meizu.cn/thread-11097781-1-1.html&pic=h');
INSERT INTO `commentlist` VALUES ('14', 'https://bbsimage.res.meizu.com/recommend/2019/09/02/145813o9qv0q8w2sh2yqbz.jpg', '综合讨论', '「魅友评测」拥有全焦段相机的魅族16s Pro，还藏着这些“彩蛋”', '17157', '259', '我是魅之神', '8月29日', '文/图  我是魅之神8 月 28 日，魅族科技正式发布了年度旗舰手机魅族 16s Pro，售价 26', 'http://service.weibo.com/share/share.php?appkey=439445218&title=%E3%80%8C%E9%AD%85%E5%8F%8B%E8%AF%84%E6%B5%8B%E3%80%8D%E6%8B%A5%E6%9C%89%E5%85%A8%E7%84%A6%E6%AE%B5%E7%9B%B8%E6%9C%BA%E7%9A%84%E9%AD%85%E6%97%8F16s%20Pro%EF%BC%8C%E8%BF%98%E8%97%8F%E7%9D%80%E');
INSERT INTO `commentlist` VALUES ('15', 'https://bbsimage.res.meizu.com/recommend/2019/09/02/103502e0wo0pw7nopre3ca.jpg', '综合讨论', '「魅友评测」魅族16s Pro深度评测', '17163', '254', '换了个机', '8月31日', '​​8月28日，魅族在珠海发布了2019下半年第一款产品魅族16s Pro，在正式介绍手机之前，魅族', 'http://service.weibo.com/share/share.php?appkey=439445218&title=%E3%80%8C%E9%AD%85%E5%8F%8B%E8%AF%84%E6%B5%8B%E3%80%8D%E9%AD%85%E6%97%8F16s%20Pro%E6%B7%B1%E5%BA%A6%E8%AF%84%E6%B5%8B&url=https://bbs.meizu.cn/thread-11110862-1-1.html&pic=https://bbsimage.re');

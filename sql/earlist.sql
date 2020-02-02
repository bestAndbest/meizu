/*
Navicat MySQL Data Transfer

Source Server         : 本地SQL
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : meizu

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-10-11 14:29:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `earlist`
-- ----------------------------
DROP TABLE IF EXISTS `earlist`;
CREATE TABLE `earlist` (
  `id` int(60) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `info` varchar(255) DEFAULT NULL,
  `price` varchar(60) DEFAULT NULL,
  `youhui` varchar(60) DEFAULT NULL,
  `url1` varchar(255) DEFAULT NULL,
  `url2` varchar(255) DEFAULT NULL,
  `url3` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of earlist
-- ----------------------------
INSERT INTO `earlist` VALUES ('1', 'MEIZU UR 高端定制耳机  预约', 'https://openfile.meizu.com/group1/M00/07/4D/Cgbj0F1l7zeAFyLsAAZJk_cF8Tk126.png@480x480.jpg', '【预约专用】私人定制，为你而声', '200', null, null, null, null);
INSERT INTO `earlist` VALUES ('2', 'MEIZU UR 高端定制耳机  预约', 'https://openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png@480x480.jpg', '【预约专用】私人定制，为你而声', '200', null, null, null, null);
INSERT INTO `earlist` VALUES ('3', '魅族 EP3C 耳机', 'https://openfile.meizu.com/group1/M00/07/4C/Cgbj0F1l4LyAR44oAAJKhE-uRA8619.png@480x480.jpg', 'Hi-Res 认证高解析音质 | 高保真生物纤维振膜', '129', null, null, null, null);
INSERT INTO `earlist` VALUES ('4', '魅族 HiFi 解码耳放 PRO', 'https://openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9Jq6AEzhMAApuih_4TPw329.png@480x480.jpg', '【9.30 上午10点 现货开售】性能DAC芯片 | 超强二级运放 | Hi-Res 认证高解析音质 | 高阻抗推力', '269', null, null, null, null);
INSERT INTO `earlist` VALUES ('5', '魅族 POP2 真无线蓝牙耳机', 'https://openfile.meizu.com/group1/M00/07/29/Cgbj0FzvN5eAOhF_AAG4VJC6XfM942.png@480x480.jpg', '【限时3期免息】蓝牙5.0 超长续航', '399', null, null, null, null);
INSERT INTO `earlist` VALUES ('6', '魅族 EP2C 耳机', 'https://openfile.meizu.com/group1/M00/07/2F/Cgbj0Vy_C3GAN_TKAAExaPfTwFc180.png@480x480.jpg', '钕铁硼单元 Type-C接口', '129', null, null, null, null);
INSERT INTO `earlist` VALUES ('7', '魅族 HIFI 解码耳放', 'https://openfile.meizu.com/group1/M00/07/10/Cgbj0Fy9JYOACw2DAAMWf3vEhbA886.png@480x480.jpg', '【9.30 上午10点 现货开售】高性能DAC芯片', '169', null, null, null, null);
INSERT INTO `earlist` VALUES ('19', 'MEIZU UR 高端定制耳机  预约￥200', 'https://openfile.meizu.com/group1/M00/07/10/Cgbj0Fy9JYOACw2DAAMWf3vEhbA886.png680x680.jpg', null, '200', null, null, null, null);
INSERT INTO `earlist` VALUES ('20', '魅族 EP3C 耳机', 'https://openfile.meizu.com/group1/M00/00/A2/Cix_s1gcTHCANftiAAErzSizI8c299.png680x680.jpg', null, '129', null, null, null, null);
INSERT INTO `earlist` VALUES ('8', '魅族 EP63NC 无线降噪耳机', 'https://openfile.meizu.com/group1/M00/00/A2/Cix_s1gcTHCANftiAAErzSizI8c299.png@480x480.jpg', '【限时3期免息】智能降噪 声临其境', '499', null, null, null, null);
INSERT INTO `earlist` VALUES ('9', '魅族 EP2X 耳机', 'https://openfile.meizu.com/group1/M00/06/97/Cgbj0Fui_-OAIlOuAAIlimOCLcA452.png@480x480.jpg', '【限时特惠】契合声音的流动之美', '69', '限时特惠', null, null, null);
INSERT INTO `earlist` VALUES ('10', '魅族 EP52 Lite 蓝牙耳机', 'https://openfile.meizu.com/group1/M00/06/97/Cgbj0Fui_-OAIlOuAAIlimOCLcA452.png@480x480.jpg', '超高性价比创造无线新声代', '129', null, null, null, null);
INSERT INTO `earlist` VALUES ('11', '魅族蓝牙音频接收器', 'https://openfile.meizu.com/group1/M00/01/D2/Cgbj0Fmb55mABV4HAAKspJD9ivQ842.png@480x480.jpg', '独立音频芯片音质媲美有线', '89', null, null, null, null);
INSERT INTO `earlist` VALUES ('12', '魅蓝 EP52 蓝牙耳机', 'https://openfile.meizu.com/group1/M00/06/70/Cgbj0FuZwuGADzVHAAG7wQGHkAM447.png@480x480.jpg', '【限时特惠】轻盈悦耳 动无拘束', '299', null, null, null, null);
INSERT INTO `earlist` VALUES ('13', '魅族 HALO 激光蓝牙耳机', 'https://openfile.meizu.com/group1/M00/04/17/Cgbj0VrcX6yABHxPAARZwWUAjc4748.png@480x480.jpg', '【限时特惠】夜跑神器 随性张扬', '499', '限时特惠', null, null, null);
INSERT INTO `earlist` VALUES ('14', '魅族 LIVE 四单元动铁耳机', 'https://storeimg.meizu.com/product/1449653793-78101.png@480x480.jpg', '【限时特惠】Knowles四动铁 双通道导音系统', '1099', '限时特惠', null, null, null);
INSERT INTO `earlist` VALUES ('15', '魅族 EP21-HD耳机', 'https://openfile.meizu.com/group1/M00/05/EA/Cgbj0FttMKWAPWDyAAFoG4YEzpI936.png@480x480.jpg', '小巧圆润 TPE线材', '99', null, null, null, null);
INSERT INTO `earlist` VALUES ('16', '魅族 Gravity 悬浮音响', 'https://openfile.meizu.com/group1/M00/01/AE/Cgbj0Fl22W2AJpEcAAG7IoqPYcI904.png@480x480.jpg', '魅族声学15年集大成之作', '1099', null, null, null, null);
INSERT INTO `earlist` VALUES ('17', '魅族 Flow 三单元耳机', 'https://storeimg.meizu.com/product/1449643421-24522.png@480x480.jpg', '【限时特惠】用得惬意 听得尽兴', '379', '限时特惠', null, null, null);
INSERT INTO `earlist` VALUES ('18', '魅族 EP21耳机', 'https://openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9Jq6AEzhMAApuih_4TPw329.png@480x480.jpg', '【限时特惠】悦耳 声形俱佳', '89', null, null, null, null);
INSERT INTO `earlist` VALUES ('21', '魅族 HiFi 解码耳放 PRO', 'https://openfile.meizu.com/group1/M00/07/4C/Cgbj0F1l4LyAR44oAAJKhE-uRA8619.png@240x240.jpg', null, '269', null, null, null, null);
INSERT INTO `earlist` VALUES ('22', '魅族 POP2 真无线蓝牙耳机', 'https://openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9Jq6AEzhMAApuih_4TPw329.png@240x240.jpg', null, '399', null, null, null, null);
INSERT INTO `earlist` VALUES ('23', '魅族 EP63NC 无线降噪耳机', 'https://openfile.meizu.com/group1/M00/07/10/Cgbj0Fy9JYOACw2DAAMWf3vEhbA886.png@240x240.jpg', null, '499', null, null, null, null);
INSERT INTO `earlist` VALUES ('24', '魅族 HIFI 解码耳放', 'https://openfile.meizu.com/group1/M00/07/2F/Cgbj0Vy_C3GAN_TKAAExaPfTwFc180.png@240x240.jpg', null, '169', null, null, null, null);
INSERT INTO `earlist` VALUES ('25', '魅族 EP2C 耳机', 'https://openfile.meizu.com/group1/M00/07/29/Cgbj0FzvN5eAOhF_AAG4VJC6XfM942.png@240x240.jpg', null, '129', null, null, null, null);
INSERT INTO `earlist` VALUES ('26', '魅族 HALO 激光蓝牙耳机', 'https://openfile.meizu.com/group1/M00/04/17/Cgbj0VrcX6yABHxPAARZwWUAjc4748.png@240x240.jpg', null, '499', null, null, null, null);

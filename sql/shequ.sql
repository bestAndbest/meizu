/*
Navicat MySQL Data Transfer

Source Server         : test1
Source Server Version : 50635
Source Host           : localhost:3306
Source Database       : museum

Target Server Type    : MYSQL
Target Server Version : 50635
File Encoding         : 65001

Date: 2019-10-09 10:12:29
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `shequ`
-- ----------------------------
DROP TABLE IF EXISTS `shequ`;
CREATE TABLE `shequ` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `bigimg` varchar(255) DEFAULT '',
  `minimg` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `info` varchar(255) DEFAULT NULL,
  `zhuxi` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shequ
-- ----------------------------
INSERT INTO `shequ` VALUES ('1', 'https://fms.res.meizu.com/dms/2019/02/28/dc6c4a26-479e-40ea-bde2-3c0ed2024d1c.jpg', 'https://img-res.mzres.com/img/download/uc/56/01/26/00/00/560126/w100h100?t=1570582714', 'hooyeah', '魅族 Note9 邀请函 JK 服妹子出镜，谁才是最美游戏姬？', '魅族 Note9');
INSERT INTO `shequ` VALUES ('2', 'https://fms.res.meizu.com/dms/2018/12/28/a6ced8bc-c933-43eb-b086-0dad644aa08f.jpg', 'https://img-res.mzres.com/img/download/uc/16/02/09/10/00/1602091/w100h100?t=1570582714', 'xrx3p', '摄影离不开适当的后期，好在如今你可以在魅族手机上轻松完成操作。', '摄影技巧');
INSERT INTO `shequ` VALUES ('3', 'https://fms.res.meizu.com/dms/2018/12/28/1bac33ce-9307-4e7a-85d2-3d38beff2fd5.jpg', 'https://img-res.mzres.com/img/download/uc/13/22/58/03/00/13225803/w100h100?t=1570582714', '小墨灰', '工作和学习中的沟通总离不开邮件，而 Flyme 邮箱的出色体验为我们带来的不只是生产力。', '功能解析');
INSERT INTO `shequ` VALUES ('4', 'https://fms.res.meizu.com/dms/2018/12/21/11ff6461-0bf0-4718-ac8c-b513d44e55b2.jpg', 'https://img-res.mzres.com/img/download/uc/28/10/87/10/00/2810871/w100h100?t=1570582714', 'Keicy520', '妙用 Flyme 分身，做生活和工作的「两面派」。', '功能解析');
INSERT INTO `shequ` VALUES ('5', 'https://fms.res.meizu.com/dms/2018/11/30/103175b7-33ea-4974-abd4-dabe7c15fa6f.jpg', 'https://img-res.mzres.com/img/download/uc/10/76/82/10/00/10768210/w100h100?t=1570582714', '歩惊云', '这款匠心精神打造的十五周年旗舰机，再不下手就要后悔啦~', '魅族 15');
INSERT INTO `shequ` VALUES ('6', 'https://fms.res.meizu.com/dms/2018/12/06/7d4f1678-b9a2-4ebf-99b2-bac0a333b288.jpg', 'https://img-res.mzres.com/img/download/uc/59/75/42/80/00/5975428/w100h100?t=1570582714', '郑金龙', '千元最强性能手机登场，高通骁龙 710 次旗舰级处理器加持，玩王者荣耀 Vulkan 模式请认准魅族 X8。', '魅族 X8');
INSERT INTO `shequ` VALUES ('7', 'https://fms.res.meizu.com/dms/2019/01/18/1c303ede-134e-4e4c-ba54-0cf4adf05dc6.jpg', 'https://img-res.mzres.com/img/download/uc/49/87/80/40/00/4987804/w100h100?t=1570582714', '屌丝扮海绵', '“窗含西岭千秋雪” 魅族 16th 用旗舰双摄带你领略诗句中的美景。', '魅族 16th');
INSERT INTO `shequ` VALUES ('8', 'https://fms.res.meizu.com/dms/2018/11/21/5574c92b-cdfd-440e-b964-615acde85648.jpg', 'https://img-res.mzres.com/img/download/uc/11/01/20/15/10/110120151/w100h100?t=1570582714', '醉刘的摄影狮', '准旗舰游戏拍照手机魅族 X8，不止有实力，还有最美刘海屏！\r\n魅族 X8', 'Flyme');
